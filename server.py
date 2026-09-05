import http.server
import socketserver
import json
import urllib.parse
import os
from datetime import datetime

PORT = 8080
DATA_FILE = "server_progress.json"

def get_progress_filepath(email=""):
    if not email or "@" not in email:
        return DATA_FILE
    safe_name = email.strip().lower().replace("@", "_").replace(".", "_")
    return f"user_progress_{safe_name}.json"

class SyncHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        parsed_url = urllib.parse.urlparse(self.path)
        if parsed_url.path == "/api/sync":
            query_params = urllib.parse.parse_qs(parsed_url.query)
            email = query_params.get("email", [""])[0]
            target_file = get_progress_filepath(email)

            if not os.path.exists(target_file) and target_file != DATA_FILE and os.path.exists(DATA_FILE):
                try:
                    with open(DATA_FILE, 'r', encoding='utf-8') as sf, open(target_file, 'w', encoding='utf-8') as tf:
                        tf.write(sf.read())
                except Exception:
                    pass

            if os.path.exists(target_file):
                try:
                    with open(target_file, 'r', encoding='utf-8') as f:
                        data = json.load(f)
                    self.send_response(200)
                    self.send_header('Content-type', 'application/json')
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.end_headers()
                    self.wfile.write(json.dumps(data).encode('utf-8'))
                    return
                except Exception as e:
                    self.send_response(500)
                    self.end_headers()
                    self.wfile.write(str(e).encode('utf-8'))
                    return
            else:
                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({}).encode('utf-8'))
                return

        elif parsed_url.path == "/api/articles":
            results_dir = os.path.abspath(os.path.join(os.getcwd(), "..", "Results"))
            if not os.path.exists(results_dir):
                results_dir = "d:/Tuan - Second - Brain/Read Article/Results"

            articles = []
            if os.path.exists(results_dir):
                for fname in os.listdir(results_dir):
                    if fname.lower().endswith(".md"):
                        fpath = os.path.join(results_dir, fname)
                        st = os.stat(fpath)
                        size_kb = f"{round(st.st_size / 1024, 1)} KB"
                        mtime_str = datetime.fromtimestamp(st.st_mtime).strftime("%Y-%m-%d %H:%M")
                        
                        title = fname.replace(".md", "").replace("_", " ")
                        try:
                            with open(fpath, 'r', encoding='utf-8') as mf:
                                for line in mf:
                                    line_s = line.strip()
                                    if line_s.startswith("#"):
                                        title = line_s.lstrip("#").strip()
                                        break
                        except Exception:
                            pass

                        articles.append({
                            "filename": fname,
                            "title": title,
                            "size": size_kb,
                            "mtime": mtime_str,
                            "dir": "Read Article/Results/"
                        })

            articles.sort(key=lambda x: x.get("mtime", ""), reverse=True)

            self.send_response(200)
            self.send_header('Content-type', 'application/json; charset=utf-8')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(articles, ensure_ascii=False).encode('utf-8'))
            return

        elif parsed_url.path in ["/api/file", "/api/article-content"] or "/Results/" in parsed_url.path or "Results/" in parsed_url.path:
            query_params = urllib.parse.parse_qs(parsed_url.query)
            fname = query_params.get("name", [""])[0] or query_params.get("file", [""])[0]
            if not fname:
                fname = os.path.basename(parsed_url.path)
            
            if fname:
                possible_dirs = [
                    os.path.abspath(os.path.join(os.getcwd(), "..", "Results")),
                    os.path.abspath(os.path.join(os.getcwd(), "Results")),
                    "d:/Tuan - Second - Brain/Read Article/Results"
                ]
                for rdir in possible_dirs:
                    fpath = os.path.join(rdir, fname)
                    if os.path.exists(fpath) and os.path.isfile(fpath):
                        with open(fpath, 'r', encoding='utf-8') as mf:
                            content = mf.read()
                        self.send_response(200)
                        self.send_header('Content-type', 'text/markdown; charset=utf-8')
                        self.send_header('Access-Control-Allow-Origin', '*')
                        self.end_headers()
                        self.wfile.write(content.encode('utf-8'))
                        return

            self.send_response(404)
            self.end_headers()
            return

        return super().do_GET()

    def do_POST(self):
        parsed_url = urllib.parse.urlparse(self.path)
        if parsed_url.path == "/api/sync":
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            try:
                incoming_data = json.loads(post_data.decode('utf-8'))
                email = incoming_data.get("email", "")
                target_file = get_progress_filepath(email)

                existing_data = {}
                if os.path.exists(target_file):
                    try:
                        with open(target_file, 'r', encoding='utf-8') as f:
                            existing_data = json.load(f)
                    except Exception:
                        existing_data = {}
                elif os.path.exists(DATA_FILE):
                    try:
                        with open(DATA_FILE, 'r', encoding='utf-8') as f:
                            existing_data = json.load(f)
                    except Exception:
                        existing_data = {}

                curr_today_str = incoming_data.get("todayDate", existing_data.get("todayDate", ""))
                inc_today_score = int(incoming_data.get("todayScore", 0))
                ex_today_score = int(existing_data.get("todayScore", 0)) if existing_data.get("todayDate") == curr_today_str else 0

                # Protect against stale device overwrites (> 3 pts drop) while keeping -1/-2 wrong answer deductions
                if ex_today_score > 0 and (ex_today_score - inc_today_score > 3):
                    final_today = ex_today_score
                else:
                    final_today = inc_today_score

                inc_total = int(incoming_data.get("totalScore", 0))
                ex_total = int(existing_data.get("totalScore", 0))
                if ex_total > 0 and (ex_total - inc_total > 3):
                    final_total = ex_total
                else:
                    final_total = inc_total if "totalScore" in incoming_data else ex_total

                merged_data = {
                    "totalScore": final_total,
                    "studyStreak": max(existing_data.get("studyStreak", 0), incoming_data.get("studyStreak", 0)),
                    "totalActiveDays": max(existing_data.get("totalActiveDays", 0), incoming_data.get("totalActiveDays", 0)),
                    "todayScore": final_today,
                    "wrongCount": incoming_data.get("wrongCount", existing_data.get("wrongCount", 0)),
                    "todayDate": curr_today_str,
                    "lastStreakCompletedDate": incoming_data.get("lastStreakCompletedDate", existing_data.get("lastStreakCompletedDate", "")),
                    "lastSelectedArticle": incoming_data.get("lastSelectedArticle", existing_data.get("lastSelectedArticle", "")),
                    "updatedAt": incoming_data.get("updatedAt", existing_data.get("updatedAt", ""))
                }

                # Merge Mastered Word Sets
                existing_mastered = set(existing_data.get("masteredSet", []))
                incoming_mastered = set(incoming_data.get("masteredSet", []))
                merged_data["masteredSet"] = list(existing_mastered | incoming_mastered)

                # Merge Daily Activity Scores
                existing_daily = existing_data.get("dailyActivityScores", {})
                incoming_daily = incoming_data.get("dailyActivityScores", {})
                merged_daily = dict(existing_daily)
                for day_key, val in incoming_daily.items():
                    if day_key == curr_today_str:
                        merged_daily[day_key] = final_today
                    else:
                        merged_daily[day_key] = int(val or 0)

                merged_daily[curr_today_str] = final_today
                merged_data["dailyActivityScores"] = merged_daily

                with open(target_file, 'w', encoding='utf-8') as f:
                    json.dump(merged_data, f, ensure_ascii=False, indent=2)

                if target_file != DATA_FILE:
                    try:
                        with open(DATA_FILE, 'w', encoding='utf-8') as f:
                            json.dump(merged_data, f, ensure_ascii=False, indent=2)
                    except Exception:
                        pass

                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps(merged_data).encode('utf-8'))
                return
            except Exception as e:
                self.send_response(500)
                self.end_headers()
                self.wfile.write(str(e).encode('utf-8'))
                return

        return super().do_POST()

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    with socketserver.TCPServer(("", PORT), SyncHandler) as httpd:
        print(f"Serving at port {PORT}")
        httpd.serve_forever()
