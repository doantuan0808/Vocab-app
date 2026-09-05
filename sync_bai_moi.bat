@echo off
chcp 65001 > nul
title Dong Bo Bai Doc Moi Len Dien Thoai
echo ===================================================
echo 🚀 ĐANG TỰ ĐỘNG ĐỒNG BỘ BÀI ĐỌC MỚI LÊN ĐIỆN THOẠI...
echo ===================================================
cd /d "%~dp0"
git add .
git commit -m "Auto sync new article: %date% %time%"
git push origin main
echo.
echo 🎉 ĐÃ ĐỒNG BỘ THÀNH CÔNG LÊN VERCEL!
echo Bạn có thể mở điện thoại ra học bài mới ngay lập tức!
echo ===================================================
pause
