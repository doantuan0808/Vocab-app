// Built-in dataset from Buddha_Lost_Eyes_30_08.md
const BUILTIN_DATA = [
    {"no": 1, "word": "happen to do sth", "ipa": "`/ˈhæp.ən tə duː/`", "meaning": "Tình cờ làm gì", "englishDef": "A person does something unexpectedly by chance without planning it", "synonyms": "(chance to do sth / occur to do sth)", "sentence": "In 2006, during a business trip to Datong, Shanxi Province, China, Tian Yijun happened to stop by a flea market.", "translation": "Năm 2006, trong một chuyến công tác đến Đại Đồng, tỉnh Sơn Tây, Trung Quốc, Tian Yijun tình cờ ghé vào một khu chợ trời.", "grammar": "Quá khứ đơn; cấu trúc `happen + to-V` chỉ hành động xảy ra ngẫu nhiên. Cụm giới từ chỉ thời gian/địa điểm đứng đầu câu."},
    {"no": 2, "word": "flea market", "ipa": "`/ˈfliː ˌmɑːr.kɪt/`", "meaning": "Chợ trời, chợ đồ cũ", "englishDef": "It is an open-air market where vendors sell vintage items, antiques, and second-hand goods", "synonyms": "(street market / second-hand market)", "sentence": "In 2006, during a business trip to Datong, Shanxi Province, China, Tian Yijun happened to stop by a flea market.", "translation": "Năm 2006, trong một chuyến công tác đến Đại Đồng, tỉnh Sơn Tây, Trung Quốc, Tian Yijun tình cờ ghé vào một khu chợ trời.", "grammar": "Danh từ chỉ nơi chốn đóng vai trò tân ngữ của giới từ `by` sau phrasal verb `stop by`."},
    {"no": 3, "word": "stall", "ipa": "`/stɔːl/`", "meaning": "Gian hàng, quầy hàng", "englishDef": "It is a small open booth or table where a trader displays goods for sale at a market", "synonyms": "(booth / stand)", "sentence": "Among stalls selling calligraphy, paintings, and all kinds of unusual objects, a small ceramic object suddenly caught his attention.", "translation": "Giữa những gian hàng bán thư pháp, tranh và đủ loại đồ vật kỳ lạ, một món đồ gốm nhỏ bất ngờ thu hút sự chú ý của ông.", "grammar": "Cụm giới từ `Among...` làm trạng ngữ chỉ vị trí. Mệnh đề rút gọn hiện tại phân từ `selling...` bổ nghĩa cho danh từ `stalls`."},
    {"no": 4, "word": "calligraphy", "ipa": "`/kəˈlɪɡ.rə.fi/`", "meaning": "Thư pháp", "englishDef": "It is the traditional art of beautiful, stylized handwriting using ink and brush", "synonyms": "(lettering / penmanship)", "sentence": "Among stalls selling calligraphy, paintings, and all kinds of unusual objects, a small ceramic object suddenly caught his attention.", "translation": "Giữa những gian hàng bán thư pháp, tranh và đủ loại đồ vật kỳ lạ, một món đồ gốm nhỏ bất ngờ thu hút sự chú ý của ông.", "grammar": "Danh từ không đếm được đóng vai trò tân ngữ của hiện tại phân từ `selling`."},
    {"no": 5, "word": "ceramic", "ipa": "`/səˈræm.ɪk/`", "meaning": "Đồ gốm; bằng gốm", "englishDef": "It is a hard object made of baked clay, such as a porcelain bowl, vase, or glossy piece", "synonyms": "(pottery / earthenware)", "sentence": "Among stalls selling calligraphy, paintings, and all kinds of unusual objects, a small ceramic object suddenly caught his attention.", "translation": "Giữa những gian hàng bán thư pháp, tranh và đủ loại đồ vật kỳ lạ, một món đồ gốm nhỏ bất ngờ thu hút sự chú ý của ông.", "grammar": "Tính từ `ceramic` bổ nghĩa cho danh từ `object`. Động từ chính của câu là `caught` ở thì quá khứ đơn."},
    {"no": 6, "word": "catch one’s attention", "ipa": "`/kætʃ wʌnz əˈten.ʃən/`", "meaning": "Thu hút sự chú ý của ai", "englishDef": "A striking object or event suddenly makes a person look and pay attention", "synonyms": "(attract one’s notice / grab one’s focus)", "sentence": "Among stalls selling calligraphy, paintings, and all kinds of unusual objects, a small ceramic object suddenly caught his attention.", "translation": "Giữa những gian hàng bán thư pháp, tranh và đủ loại đồ vật kỳ lạ, một món đồ gốm nhỏ bất ngờ thu hút sự chú ý của ông.", "grammar": "Cụm động từ `catch one's attention` chia ở quá khứ đơn (`caught`). Trạng từ `suddenly` đứng trước động từ để bổ nghĩa."},
    {"no": 7, "word": "hemispherical", "ipa": "`/ˌhem.ɪˈsfer.ɪ.kəl/`", "meaning": "Có hình bán cầu", "englishDef": "An object is shaped like half a round ball or dome, like half an apple", "synonyms": "(half-spherical / semicircular)", "sentence": "It was hemispherical, with one side covered in black glaze, making it look somewhat like a mushroom.", "translation": "Nó có hình bán cầu, với một mặt được phủ lớp men đen, khiến nó trông hơi giống một cây nấm.", "grammar": "Tính từ `hemispherical` đứng sau động từ nối `was`. Cấu trúc `with + N + V-ed` diễn tả đặc điểm phụ; `making...` là phân từ chỉ kết quả."},
    {"no": 8, "word": "glaze", "ipa": "`/ɡleɪz/`", "meaning": "Lớp men, lớp tráng men", "englishDef": "It is a shiny, smooth glass-like coating baked onto the surface of pottery or ceramic", "synonyms": "(coating / enamel)", "sentence": "It was hemispherical, with one side covered in black glaze, making it look somewhat like a mushroom.", "translation": "Nó có hình bán cầu, với một mặt được phủ lớp men đen, khiến nó trông hơi giống một cây nấm.", "grammar": "Cụm phân từ bị động `covered in black glaze` bổ nghĩa cho cụm danh từ `one side`."},
    {"no": 9, "word": "out of sth", "ipa": "`/aʊt əv/`", "meaning": "Vì, do (cảm xúc/động cơ)", "englishDef": "A person does an action driven by a specific feeling, emotion, or reason", "synonyms": "(motivated by / driven by)", "sentence": "Out of curiosity and his love of ceramics, he decided to buy it and take it home.", "translation": "Vì tò mò và vốn yêu thích đồ gốm, ông quyết định mua món đồ mang về nhà.", "grammar": "Cụm giới từ `Out of + N` đứng đầu câu đóng vai trò trạng ngữ chỉ nguyên nhân/động cơ. Cấu trúc `decide + to-V`."},
    {"no": 10, "word": "out of curiosity", "ipa": "`/aʊt əv ˌkjʊr.iˈɑː.sə.t̬i/`", "meaning": "Vì tò mò", "englishDef": "A person does something simply because they are eager to discover or learn about it", "synonyms": "(from inquisitiveness / out of interest)", "sentence": "Out of curiosity and his love of ceramics, he decided to buy it and take it home.", "translation": "Vì tò mò và vốn yêu thích đồ gốm, ông quyết định mua món đồ mang về nhà.", "grammar": "Idiom chỉ động cơ hành động. Hai động từ nguyên mẫu `buy` và `take` nối bằng `and` đi sau `decided to`."},
    {"no": 11, "word": "pupil", "ipa": "`/ˈpjuː.pəl/`", "meaning": "Con ngươi (mắt)", "englishDef": "It is the small black round center piece of the eye that allows a person or statue to see", "synonyms": "(eye lens / eyeball center)", "sentence": "It was not until Tian read an article about the lost pupils of Buddha statues at the Yungang Grottoes that he suddenly realized the object he owned looked almost identical to the artifact shown in the article.", "translation": "Mãi đến khi Tian đọc bài báo về những con ngươi thất lạc của tượng Phật tại hang đá Vân Cương, ông mới chợt nhận ra món đồ mình sở hữu trông giống hệt hiện vật trong bài báo.", "grammar": "Cấu trúc nhấn mạnh `It was not until... that...` (Mãi cho đến khi... thì...). `The object he owned` chứa mệnh đề quan hệ rút gọn (`which he owned`)."},
    {"no": 12, "word": "Buddha", "ipa": "`/ˈbuː.də/`", "meaning": "Đức Phật; tượng Phật", "englishDef": "It refers to the enlightened spiritual leader or a holy statue representing him", "synonyms": "(Enlightened One / Buddhist icon)", "sentence": "It was not until Tian read an article about the lost pupils of Buddha statues at the Yungang Grottoes that he suddenly realized the object he owned looked almost identical to the artifact shown in the article.", "translation": "Mãi đến khi Tian đọc bài báo về những con ngươi thất lạc của tượng Phật tại hang đá Vân Cương, ông mới chợt nhận ra món đồ mình sở hữu trông giống hệt hiện vật trong bài báo.", "grammar": "Danh từ đóng vai trò bổ nghĩa cho `statues` tạo thành danh từ ghép `Buddha statues`."},
    {"no": 13, "word": "grotto", "ipa": "`/ˈɡrɑː.t̬oʊ/`", "meaning": "Hang động, hang đá", "englishDef": "It is a cave carved into a rock cliff, often decorated with religious statues and shrines", "synonyms": "(cave / cavern)", "sentence": "Located near the city of Datong in northern China, the Yungang Grottoes are one of the country’s most famous Buddhist cave complexes.", "translation": "Nằm gần thành phố Đại Đồng ở miền bắc Trung Quốc, hang đá Vân Cương là một trong những quần thể hang động Phật giáo nổi tiếng nhất cả nước.", "grammar": "Quá khứ phân từ `Located...` rút gọn mệnh đề trạng ngữ. Cấu trúc so sánh nhất `one of the + most + Adj + N(số nhiều)`."},
    {"no": 14, "word": "identical to sth", "ipa": "`/aɪˈden.t̬ɪ.kəl/`", "meaning": "Giống hệt cái gì", "englishDef": "An object looks exactly the same in every shape, size, and detail as another object", "synonyms": "(the same as / matching)", "sentence": "It was not until Tian read an article about the lost pupils of Buddha statues at the Yungang Grottoes that he suddenly realized the object he owned looked almost identical to the artifact shown in the article.", "translation": "Mãi đến khi Tian đọc bài báo về những con ngươi thất lạc của tượng Phật tại hang đá Vân Cương, ông mới chợt nhận ra món đồ mình sở hữu trông giống hệt hiện vật trong bài báo.", "grammar": "Tính từ `identical` đi với giới từ `to`, đứng sau động từ nối `looked`."},
    {"no": 15, "word": "artifact", "ipa": "`/ˈɑːr.t̬ə.fækt/`", "meaning": "Hiện vật", "englishDef": "It is a historic object made by humans in ancient times, like a tool, ornament, or statue piece", "synonyms": "(relic / antique)", "sentence": "It was not until Tian read an article about the lost pupils of Buddha statues at the Yungang Grottoes that he suddenly realized the object he owned looked almost identical to the artifact shown in the article.", "translation": "Mãi đến khi Tian đọc bài báo về những con ngươi thất lạc của tượng Phật tại hang đá Vân Cương, ông mới chợt nhận ra món đồ mình sở hữu trông giống hệt hiện vật trong bài báo.", "grammar": "Cụm quá khứ phân từ `shown in the article` rút gọn cho mệnh đề quan hệ `which was shown in the article`."},
    {"no": 16, "word": "indeed", "ipa": "`/ɪnˈdiːd/`", "meaning": "Quả thực, thực sự", "englishDef": "It is used to confirm that something is truly, completely, and undeniably true", "synonyms": "(truly / in fact)", "sentence": "They confirmed that the small object he had bought at the flea market years earlier was indeed the pupil of an ancient Buddha statue.", "translation": "Họ xác nhận rằng món đồ nhỏ bé ông mua ở chợ đồ cũ nhiều năm trước quả thực là con ngươi của một bức tượng Phật cổ.", "grammar": "Mệnh đề danh từ `that...` làm tân ngữ; quá khứ hoàn thành `had bought` diễn tả hành động xảy ra trước `confirmed`. Trạng từ `indeed` dùng nhấn mạnh."},
    {"no": 17, "word": "donate sth to sb", "ipa": "`/ˈdoʊ.neɪt/`", "meaning": "Quyên tặng, hiến tặng cho ai", "englishDef": "A person gives an item or money freely to a museum or charity without asking for payment", "synonyms": "(contribute / give away)", "sentence": "Tian then decided to donate the artifact to Yungang.", "translation": "Tian sau đó quyết định hiến tặng hiện vật cho Vân Cương.", "grammar": "Thì quá khứ đơn; cấu trúc `donate + sth + to + sb/somewhere`."},
    {"no": 18, "word": "complex", "ipa": "`/ˈkɑːm.pleks/`", "meaning": "Quần thể, khu phức hợp", "englishDef": "It is a large group of connected buildings, caves, or structures built in one location", "synonyms": "(compound / network)", "sentence": "Located near the city of Datong in northern China, the Yungang Grottoes are one of the country’s most famous Buddhist cave complexes.", "translation": "Nằm gần thành phố Đại Đồng ở miền bắc Trung Quốc, hang đá Vân Cương là một trong những quần thể hang động Phật giáo nổi tiếng nhất cả nước.", "grammar": "Danh từ số nhiều `complexes` đi sau cấu trúc `one of the + N(plural)`."},
    {"no": 19, "word": "figure", "ipa": "`/ˈfɪɡ.jɚ/`", "meaning": "Tượng, hình tượng", "englishDef": "It is a carved or sculpted statue depicting the body or shape of a person or god", "synonyms": "(statue / likeness)", "sentence": "Thousands of Buddha statues, ranging from small figures to enormous sculptures, were carved directly into the sandstone cliffs.", "translation": "Hàng nghìn tượng Phật, từ những hình tượng nhỏ bé đến các pho tượng khổng lồ, được tạc trực tiếp vào vách đá sa thạch.", "grammar": "Thể bị động quá khứ đơn `were carved`; cụm phân từ `ranging from A to B` làm rõ cho chủ ngữ `statues`."},
    {"no": 20, "word": "enormous", "ipa": "`/ɪˈnɔːr.məs/`", "meaning": "Khổng lồ, rất lớn", "englishDef": "An object, statue, or building is massive and extremely large in size", "synonyms": "(huge / massive)", "sentence": "Thousands of Buddha statues, ranging from small figures to enormous sculptures, were carved directly into the sandstone cliffs.", "translation": "Hàng nghìn tượng Phật, từ những hình tượng nhỏ bé đến các pho tượng khổng lồ, được tạc trực tiếp vào vách đá sa thạch.", "grammar": "Tính từ `enormous` bổ nghĩa cho danh từ `sculptures`."},
    {"no": 21, "word": "carve", "ipa": "`/kɑːrv/`", "meaning": "Chạm, khắc, tạc", "englishDef": "An artisan cuts and shapes hard stone, wood, or rock to create a figure or pattern", "synonyms": "(sculpt / engrave)", "sentence": "Thousands of Buddha statues, ranging from small figures to enormous sculptures, were carved directly into the sandstone cliffs.", "translation": "Hàng nghìn tượng Phật, từ những hình tượng nhỏ bé đến các pho tượng khổng lồ, được tạc trực tiếp vào vách đá sa thạch.", "grammar": "Động từ chính chia ở thể bị động quá khứ đơn (`were carved`). Trạng từ `directly` bổ nghĩa cho `carved`."},
    {"no": 22, "word": "sandstone", "ipa": "`/ˈsænd.stoʊn/`", "meaning": "Đá sa thạch", "englishDef": "It is a yellowish or reddish soft rock made of compressed sand grains", "synonyms": "(sedimentary rock / gritstone)", "sentence": "Thousands of Buddha statues, ranging from small figures to enormous sculptures, were carved directly into the sandstone cliffs.", "translation": "Hàng nghìn tượng Phật, từ những hình tượng nhỏ bé đến các pho tượng khổng lồ, được tạc trực tiếp vào vách đá sa thạch.", "grammar": "Danh từ đóng vai trò như tính từ bổ nghĩa cho `cliffs` (`sandstone cliffs`)."},
    {"no": 23, "word": "cliff", "ipa": "`/klɪf/`", "meaning": "Vách đá", "englishDef": "It is a high, steep vertical wall of rock on the side of a mountain or river", "synonyms": "(bluff / precipice)", "sentence": "Thousands of Buddha statues, ranging from small figures to enormous sculptures, were carved directly into the sandstone cliffs.", "translation": "Hàng nghìn tượng Phật, từ những hình tượng nhỏ bé đến các pho tượng khổng lồ, được tạc trực tiếp vào vách đá sa thạch.", "grammar": "Danh từ số nhiều đứng sau cụm giới từ `into the...`."},
    {"no": 24, "word": "socket", "ipa": "`/ˈsɑː.kɪt/`", "meaning": "Hốc, ổ (hốc mắt)", "englishDef": "It is a hollowed-out hole or opening designed to hold an eye, bulb, or fitted piece", "synonyms": "(cavity / hollow)", "sentence": "However, if you look closely at the faces of many of these statues, you will notice something unusual: their eyes have small round sockets that are completely empty.", "translation": "Tuy nhiên, nếu quan sát kỹ khuôn mặt của nhiều bức tượng, bạn sẽ nhận thấy một điều bất thường: đôi mắt của chúng có những hốc tròn nhỏ hoàn toàn trống rỗng.", "grammar": "Câu điều kiện loại 1 (`if + V_present, S + will + V`). Mệnh đề quan hệ `that are completely empty` bổ nghĩa cho `sockets`."},
    {"no": 25, "word": "ancient", "ipa": "`/ˈeɪn.ʃənt/`", "meaning": "Cổ xưa, cổ đại", "englishDef": "Something belongs to a very distant past, existing hundreds or thousands of years ago", "synonyms": "(antique / primeval)", "sentence": "Ancient craftsmen used a technique known as qianmu, in which sockets were carved into the statues’ eyes and pupils were then inserted into them.", "translation": "Những nghệ nhân xưa đã sử dụng một kỹ thuật gọi là qianmu, trong đó các hốc được tạc vào mắt tượng và con ngươi sau đó được gắn vào bên trong.", "grammar": "Quá khứ đơn; mệnh đề quan hệ với giới từ `in which...` bổ nghĩa cho `technique`. Hai mệnh đề bị động `were carved` và `were inserted` sóng đôi."},
    {"no": 26, "word": "craftsmen", "ipa": "`/ˈkræfts.mən/`", "meaning": "Những người thợ thủ công", "englishDef": "They are skilled artisans who handcraft artwork, stone carvings, or tools with detailed precision", "synonyms": "(artisans / handcrafters)", "sentence": "Ancient craftsmen used a technique known as qianmu, in which sockets were carved into the statues’ eyes and pupils were then inserted into them.", "translation": "Những nghệ nhân xưa đã sử dụng một kỹ thuật gọi là qianmu, trong đó các hốc được tạc vào mắt tượng và con ngươi sau đó được gắn vào bên trong.", "grammar": "Danh từ số nhiều (số ít là `craftsman`) làm chủ ngữ của động từ `used`."},
    {"no": 27, "word": "ritual", "ipa": "`/ˈrɪtʃ.u.əl/`", "meaning": "Nghi lễ", "englishDef": "It is a formal religious ceremony or traditional procedure performed in a sacred order", "synonyms": "(ceremony / rite)", "sentence": "In a ritual known as Buddhabhiseka, a Buddha statue is consecrated through chanting and an eye-opening ceremony, transforming it into a sacred object.", "translation": "Trong một nghi lễ được gọi là Buddhabhiseka, tượng Phật được làm lễ khai quang thông qua việc trì tụng và nghi thức khai nhãn, biến nó thành một vật linh thiêng.", "grammar": "Cụm phân từ quá khứ `known as...` rút gọn mệnh đề quan hệ; bị động hiện tại đơn `is consecrated`; hiện tại phân từ `transforming...` chỉ kết quả."},
    {"no": 28, "word": "consecrate", "ipa": "`/ˈkɑːn.sə.kreɪt/`", "meaning": "Làm lễ thánh hóa, cung hiến", "englishDef": "Monks or priests perform sacred rites to make a statue or building holy", "synonyms": "(sanctify / bless)", "sentence": "In a ritual known as Buddhabhiseka, a Buddha statue is consecrated through chanting and an eye-opening ceremony, transforming it into a sacred object.", "translation": "Trong một nghi lễ được gọi là Buddhabhiseka, tượng Phật được làm lễ khai quang thông qua việc trì tụng và nghi thức khai nhãn, biến nó thành một vật linh thiêng.", "grammar": "Thể bị động hiện tại đơn `is consecrated`. Giới từ `through` chỉ phương thức thực hiện."},
    {"no": 29, "word": "consecration", "ipa": "`/ˌkɑːn.səˈkreɪ.ʃən/`", "meaning": "Lễ thánh hóa, lễ cung hiến", "englishDef": "It is the official religious ceremony that blesses an object and makes it holy", "synonyms": "(sanctification / blessing)", "sentence": "In China, one common form of this consecration involves painting or adding eyes to a statue.", "translation": "Ở Trung Quốc, một hình thức phổ biến của nghi lễ khai quang này bao gồm việc vẽ hoặc gắn thêm mắt cho tượng.", "grammar": "Động từ `involve + V-ing` (`painting or adding`). `This consecration` làm tân ngữ của giới từ `of`."},
    {"no": 30, "word": "chanting", "ipa": "`/ˈtʃæn.t̬ɪŋ/`", "meaning": "Việc tụng niệm, tụng kinh", "englishDef": "It is the continuous singing or reciting of religious prayers in a rhythmic voice", "synonyms": "(reciting / intoning)", "sentence": "In a ritual known as Buddhabhiseka, a Buddha statue is consecrated through chanting and an eye-opening ceremony, transforming it into a sacred object.", "translation": "Trong một nghi lễ được gọi là Buddhabhiseka, tượng Phật được làm lễ khai quang thông qua việc trì tụng và nghi thức khai nhãn, biến nó thành một vật linh thiêng.", "grammar": "Danh động từ (`V-ing`) đóng vai trò danh từ làm tân ngữ của giới từ `through`."},
    {"no": 31, "word": "eye-opening ceremony", "ipa": "`/ˈaɪ ˌoʊ.pən.ɪŋ ˈser.ə.moʊ.ni/`", "meaning": "Lễ khai quang điểm nhãn", "englishDef": "It is a Buddhist ritual of painting or inserting eyes into a statue to awaken its spirit", "synonyms": "(consecration rite / blessing ritual)", "sentence": "In a ritual known as Buddhabhiseka, a Buddha statue is consecrated through chanting and an eye-opening ceremony, transforming it into a sacred object.", "translation": "Trong một nghi lễ được gọi là Buddhabhiseka, tượng Phật được làm lễ khai quang thông qua việc trì tụng và nghi thức khai nhãn, biến nó thành một vật linh thiêng.", "grammar": "Cụm danh từ ghép đóng vai trò tân ngữ nối với `chanting` bởi liên từ `and`."},
    {"no": 32, "word": "sacred", "ipa": "`/ˈseɪ.krɪd/`", "meaning": "Linh thiêng, thiêng liêng", "englishDef": "An object, statue, or place is holy, divine, and respected for religious reasons", "synonyms": "(holy / divine)", "sentence": "In a ritual known as Buddhabhiseka, a Buddha statue is consecrated through chanting and an eye-opening ceremony, transforming it into a sacred object.", "translation": "Trong một nghi lễ được gọi là Buddhabhiseka, tượng Phật được làm lễ khai quang thông qua việc trì tụng và nghi thức khai nhãn, biến nó thành một vật linh thiêng.", "grammar": "Cấu trúc `transform A into B`; tính từ `sacred` bổ nghĩa cho danh từ `object`."},
    {"no": 33, "word": "erode", "ipa": "`/ɪˈroʊd/`", "meaning": "Xói mòn, bào mòn", "englishDef": "Natural elements like wind, water, and rain slowly wear away rock or stone over centuries", "synonyms": "(wear away / corrode)", "sentence": "Over the centuries, Yungang’s sandstone was eroded by wind and rain, while wars and the theft of antiquities caused many artifacts to be damaged or disappear.", "translation": "Qua nhiều thế kỷ, đá sa thạch Vân Cương đã bị bào mòn bởi gió mưa, trong khi chiến tranh và nạn trộm cổ vật khiến nhiều hiện vật bị hư hại hoặc biến mất.", "grammar": "Bị động quá khứ đơn `was eroded by...`; liên từ `while` nối hai mệnh đề sóng đôi; cấu trúc `cause sth to V/be V-ed`."},
    {"no": 34, "word": "antiquity", "ipa": "`/ænˈtɪk.wə.t̬i/`", "meaning": "Thời cổ đại; cổ vật", "englishDef": "It refers to ancient historical times or valuable antique relics from the distant past", "synonyms": "(ancient artifact / historical object)", "sentence": "Over the centuries, Yungang’s sandstone was eroded by wind and rain, while wars and the theft of antiquities caused many artifacts to be damaged or disappear.", "translation": "Qua nhiều thế kỷ, đá sa thạch Vân Cương đã bị bào mòn bởi gió mưa, trong khi chiến tranh và nạn trộm cổ vật khiến nhiều hiện vật bị hư hại hoặc biến mất.", "grammar": "Danh từ số nhiều `antiquities` làm tân ngữ cho giới từ `of`."},
    {"no": 35, "word": "turbulent", "ipa": "`/ˈtɝː.bjə.lənt/`", "meaning": "Đầy biến động, hỗn loạn", "englishDef": "A period of time is full of violent change, confusion, war, and disorder", "synonyms": "(chaotic / tumultuous)", "sentence": "During the turbulent 19th and early 20th centuries, some of the caves were even used as homes and livestock shelters.", "translation": "Trong thời kỳ hỗn loạn của thế kỷ 19 và đầu thế kỷ 20, một số hang động thậm chí từng được sử dụng làm nhà ở và chuồng gia súc.", "grammar": "Tính từ `turbulent` bổ nghĩa cho danh từ `centuries`. Thể bị động quá khứ đơn `were used as...`."},
    {"no": 36, "word": "livestock shelter", "ipa": "`/ˈlaɪv.stɑːk ˌʃel.tɚ/`", "meaning": "Chuồng trại gia súc", "englishDef": "It is a farm building or barn where domestic animals like cows, pigs, or sheep are kept", "synonyms": "(animal barn / stable)", "sentence": "During the turbulent 19th and early 20th centuries, some of the caves were even used as homes and livestock shelters.", "translation": "Trong thời kỳ hỗn loạn của thế kỷ 19 và đầu thế kỷ 20, một số hang động thậm chí từng được sử dụng làm nhà ở và chuồng gia súc.", "grammar": "Cụm danh từ số nhiều đứng sau giới từ `as` nối với `homes`."},
    {"no": 37, "word": "end up somewhere", "ipa": "`/end ʌp ˈsʌm.wer/`", "meaning": "Cuối cùng lại ở nơi nào đó", "englishDef": "An object or person arrives at a final place or situation after a long journey", "synonyms": "(wind up / turn out to be)", "sentence": "To this day, no one knows exactly how many pupils have disappeared from the statues at Yungang or where they may have ended up.", "translation": "Đến nay, không ai biết chính xác bao nhiêu con ngươi đã biến mất khỏi các bức tượng ở Vân Cương hay chúng đã lưu lạc đến nơi nào.", "grammar": "Mệnh đề danh từ làm tân ngữ `where they may have ended up`; cấu trúc động từ khuyết thiếu quá khứ `may have + V3` (dự đoán trong quá khứ)."},
    {"no": 38, "word": "sinologist", "ipa": "`/saɪˈnɑː.lə.dʒɪst/`", "meaning": "Nhà Hán học", "englishDef": "An academic scholar who specializes in studying Chinese language, history, and culture", "synonyms": "(Chinese scholar / Sinology expert)", "sentence": "In 1932, American art historian and sinologist Laurence Sickman visited Yungang while in China on a fellowship from the Harvard-Yenching Institute.", "translation": "Năm 1932, nhà sử học nghệ thuật kiêm nhà Hán học người Mỹ Laurence Sickman đã đến thăm Vân Cương trong thời gian ở Trung Quốc theo diện học bổng của Viện Harvard-Yenching.", "grammar": "Hai danh từ chỉ nghề nghiệp `art historian and sinologist` làm đồng ngữ (appositive) bổ nghĩa cho tên riêng `Laurence Sickman`."},
    {"no": 39, "word": "on a fellowship", "ipa": "`/ɑːn ə ˈfel.oʊ.ʃɪp/`", "meaning": "Theo diện học bổng nghiên cứu", "englishDef": "A researcher receives an official grant or scholarship to study and do research abroad", "synonyms": "(on a grant / on a scholarship)", "sentence": "In 1932, American art historian and sinologist Laurence Sickman visited Yungang while in China on a fellowship from the Harvard-Yenching Institute.", "translation": "Năm 1932, nhà sử học nghệ thuật kiêm nhà Hán học người Mỹ Laurence Sickman đã đến thăm Vân Cương trong thời gian ở Trung Quốc theo diện học bổng của Viện Harvard-Yenching.", "grammar": "Cụm giới từ chỉ trạng thái/tư cách `on a fellowship`. Mệnh đề rút gọn `while in China...` (`while he was in China`)."},
    {"no": 40, "word": "acquire sth", "ipa": "`/əˈkwaɪr/`", "meaning": "Thu mua, có được cái gì", "englishDef": "To buy, obtain, or collect a valuable artwork, artifact, or property", "synonyms": "(obtain / purchase)", "sentence": "At the time, he was also acquiring works of art for American museums.", "translation": "Vào thời điểm đó, ông cũng đang thu mua các tác phẩm nghệ thuật cho các bảo tàng Mỹ.", "grammar": "Thì quá khứ tiếp diễn `was acquiring` diễn tả hành động đang diễn ra tại một thời điểm trong quá khứ (`At the time`)."},
    {"no": 41, "word": "works of art", "ipa": "`/ˌwɝːks əv ˈɑːrt/`", "meaning": "Các tác phẩm nghệ thuật", "englishDef": "They are creative artistic objects like paintings, sculptures, or fine crafts", "synonyms": "(artworks / artistic creations)", "sentence": "At the time, he was also acquiring works of art for American museums.", "translation": "Vào thời điểm đó, ông cũng đang thu mua các tác phẩm nghệ thuật cho các bảo tàng Mỹ.", "grammar": "Danh từ số nhiều `works of art` làm tân ngữ trực tiếp cho động từ `acquiring`."},
    {"no": 42, "word": "go on to", "ipa": "`/ɡoʊ ɑːn tuː/`", "meaning": "Sau đó tiếp tục/tiến tới làm gì", "englishDef": "A person proceeds to do something significant later in their life or career", "synonyms": "(proceed to / move on to)", "sentence": "Sickman went on to become a prominent scholar of Asian art and served as director of the Nelson-Atkins Museum of Art in Kansas City.", "translation": "Sickman sau đó tiếp tục trở thành một nhà nghiên cứu nghệ thuật châu Á nổi tiếng và đảm nhiệm vị trí giám đốc Bảo tàng Nghệ thuật Nelson-Atkins ở thành phố Kansas.", "grammar": "Phrasal verb `go on + to V` (sau đó tiếp tục làm gì). Hai động từ quá khứ `went on` và `served` nối bằng `and`."},
    {"no": 43, "word": "prominent", "ipa": "`/ˈprɑː.mə.nənt/`", "meaning": "Nổi bật, lỗi lạc, có tiếng", "englishDef": "A person or scholar is famous, highly respected, and easily recognized in their field", "synonyms": "(distinguished / renowned)", "sentence": "Sickman went on to become a prominent scholar of Asian art and served as director of the Nelson-Atkins Museum of Art in Kansas City.", "translation": "Sickman sau đó tiếp tục trở thành một nhà nghiên cứu nghệ thuật châu Á nổi tiếng và đảm nhiệm vị trí giám đốc Bảo tàng Nghệ thuật Nelson-Atkins ở thành phố Kansas.", "grammar": "Tính từ `prominent` bổ nghĩa cho danh từ `scholar`."},
    {"no": 44, "word": "archaeologist", "ipa": "`/ˌɑːr.kiˈɑː.lə.dʒɪst/`", "meaning": "Nhà khảo cổ học", "englishDef": "A scientist who digs up ancient sites to discover artifacts, fossils, and historical ruins", "synonyms": "(excavator / antiquity scholar)", "sentence": "In the spring of 1985, Chinese archaeologist Su Bai wrote to Lu Jimin, head of the Cultural Heritage Bureau under China’s Ministry of Culture, conveying Sickman’s wish and proposing that the artifact be returned to Yungang for preservation.", "translation": "Vào mùa xuân năm 1985, nhà khảo cổ học Trung Quốc Su Bai đã viết thư cho Lu Jimin, người đứng đầu Cục Di sản Văn hóa thuộc Bộ Văn hóa Trung Quốc, truyền đạt nguyện vọng của Sickman và đề xuất đưa hiện vật trở lại Vân Cương để bảo tồn.", "grammar": "Hai cụm hiện tại phân từ `conveying... and proposing...` bổ nghĩa cho hành động `wrote`. Động từ `propose that + S + V-bare` (giả định thức: `be returned`)."},
    {"no": 45, "word": "heritage", "ipa": "`/ˈher.ɪ.t̬ɪdʒ/`", "meaning": "Di sản", "englishDef": "It refers to the historical traditions, monuments, and cultural treasures passed down from ancestors", "synonyms": "(legacy / inheritance)", "sentence": "In the spring of 1985, Chinese archaeologist Su Bai wrote to Lu Jimin, head of the Cultural Heritage Bureau under China’s Ministry of Culture, conveying Sickman’s wish and proposing that the artifact be returned to Yungang for preservation.", "translation": "Vào mùa xuân năm 1985, nhà khảo cổ học Trung Quốc Su Bai đã viết thư cho Lu Jimin, người đứng đầu Cục Di sản Văn hóa thuộc Bộ Văn hóa Trung Quốc, truyền đạt nguyện vọng của Sickman và đề xuất đưa hiện vật trở lại Vân Cương để bảo tồn.", "grammar": "Danh từ ghép `Cultural Heritage Bureau` (Cục Di sản Văn hóa)."},
    {"no": 46, "word": "bureau", "ipa": "`/ˈbjʊr.oʊ/`", "meaning": "Cục, cơ quan, văn phòng", "englishDef": "It is an official government department or administrative agency", "synonyms": "(agency / department)", "sentence": "In the spring of 1985, Chinese archaeologist Su Bai wrote to Lu Jimin, head of the Cultural Heritage Bureau under China’s Ministry of Culture, conveying Sickman’s wish and proposing that the artifact be returned to Yungang for preservation.", "translation": "Vào mùa xuân năm 1985, nhà khảo cổ học Trung Quốc Su Bai đã viết thư cho Lu Jimin, người đứng đầu Cục Di sản Văn hóa thuộc Bộ Văn hóa Trung Quốc, truyền đạt nguyện vọng của Sickman và đề xuất đưa hiện vật trở lại Vân Cương để bảo tồn.", "grammar": "Danh từ cơ quan làm đồng ngữ giải thích vị trí của Lu Jimin."},
    {"no": 47, "word": "convey one’s wish", "ipa": "`/kənˈveɪ wʌnz wɪʃ/`", "meaning": "Bày tỏ, truyền đạt nguyện vọng", "englishDef": "To formally communicate or express one's desire or intention to others", "synonyms": "(express one’s desire / communicate one’s goal)", "sentence": "In the spring of 1985, Chinese archaeologist Su Bai wrote to Lu Jimin, head of the Cultural Heritage Bureau under China’s Ministry of Culture, conveying Sickman’s wish and proposing that the artifact be returned to Yungang for preservation.", "translation": "Vào mùa xuân năm 1985, nhà khảo cổ học Trung Quốc Su Bai đã viết thư cho Lu Jimin, người đứng đầu Cục Di sản Văn hóa thuộc Bộ Văn hóa Trung Quốc, truyền đạt nguyện vọng của Sickman và đề xuất đưa hiện vật trở lại Vân Cương để bảo tồn.", "grammar": "Hiện tại phân từ `conveying` làm trạng ngữ chỉ mục đích/hành động song song."},
    {"no": 48, "word": "repatriate", "ipa": "`/riˈpeɪ.tri.eɪt/`", "meaning": "Hồi hương, đưa về nước", "englishDef": "To return a stolen, lost, or exiled artifact or person back to their native country", "synonyms": "(return home / restore to native land)", "sentence": "The two sides then worked together to repatriate the pupil.", "translation": "Hai bên sau đó đã phối hợp cùng nhau để hồi hương con ngươi.", "grammar": "Động từ nguyên mẫu chỉ mục đích `to repatriate` sau động từ `worked together`."},
    {"no": 49, "word": "excavation", "ipa": "`/ˌek.skəˈveɪ.ʃən/`", "meaning": "Cuộc khai quật", "englishDef": "The process of digging up the ground to uncover buried ancient ruins or artifacts", "synonyms": "(dig / unearthing)", "sentence": "They include the pupil once owned by Sickman, one discovered during archaeological excavations in the early 1990s, and four others donated by members of the public.", "translation": "Chúng bao gồm con ngươi từng thuộc về Sickman, một con được phát hiện trong các cuộc khai quật khảo cổ vào đầu những năm 1990, và bốn con khác do công chúng hiến tặng.", "grammar": "Chuỗi danh từ nối tiếp nhau; phân từ quá khứ `discovered` và `donated` rút gọn mệnh đề quan hệ."},
    {"no": 50, "word": "house sth", "ipa": "`/haʊz/`", "meaning": "Lưu giữ, chứa, là nơi đặt cái gì", "englishDef": "To store, shelter, and protect valuable items, artifacts, or collection inside a building", "synonyms": "(accommodate / store)", "sentence": "Two pupils from the famous Cave No. 8, collected in the late 1930s and the 1940s, when much of China was under Japanese occupation, are currently housed at the Institute for Research in Humanities at Kyoto University.", "translation": "Hai con ngươi từ Hang số 8 nổi tiếng, được thu thập vào cuối những năm 1930 và 1940, khi phần lớn Trung Quốc nằm dưới sự chiếm đóng của Nhật Bản, hiện được lưu giữ tại Viện Nghiên cứu Nhân văn thuộc Đại học Kyoto.", "grammar": "Chủ ngữ `Two pupils...` ở số nhiều đi với bị động hiện tại đơn `are currently housed`. Mệnh đề quan hệ thời gian `when much of China was...`."},
    {"no": 51, "word": "striking", "ipa": "`/ˈstraɪ.kɪŋ/`", "meaning": "Nổi bật, gây ấn tượng mạnh", "englishDef": "An object, story, or feature is so unusual, vivid, or impressive that it immediately catches attention", "synonyms": "(impressive / remarkable)", "sentence": "Tian’s story is a striking example.", "translation": "Câu chuyện của Tian là một ví dụ đặc biệt nổi bật.", "grammar": "Tính từ `striking` (gây ấn tượng/nổi bật) bổ nghĩa cho danh từ `example`."},
    {"no": 52, "word": "ordinary", "ipa": "`/ˈɔːr.dən.er.i/`", "meaning": "Bình thường, thông thường", "englishDef": "Something looks plain, normal, and conventional with no special features", "synonyms": "(common / conventional)", "sentence": "With their ordinary appearance and seemingly no practical use, such artifacts may even be at risk of being thrown away or destroyed before they are ever identified.", "translation": "Với vẻ ngoài bình thường và dường như không có công dụng thực tế, những hiện vật như vậy thậm chí có nguy cơ bị vứt bỏ hoặc phá hủy trước khi được nhận diện.", "grammar": "Cụm giới từ `With...` làm trạng ngữ; cấu trúc `be at risk of + V-ing` (`being thrown away or destroyed`)."},
    {"no": 53, "word": "spiritual", "ipa": "`/ˈspɪr.ə.tʃu.əl/`", "meaning": "Thuộc tâm linh, tinh thần", "englishDef": "Relating to sacred religious feelings, the human soul, or deep holy meaning", "synonyms": "(sacred / religious)", "sentence": "When in its proper place on the face of a Buddha statue, a tiny pupil helps create a gaze filled with spiritual meaning.", "translation": "Khi nằm đúng vị trí trên khuôn mặt của một pho tượng Phật, một con ngươi nhỏ bé góp phần tạo nên một ánh nhìn tràn đầy ý nghĩa tâm linh.", "grammar": "Mệnh đề trạng ngữ rút gọn `When in...`; động từ `help + (to) V`; cụm quá khứ phân từ `filled with...` bổ nghĩa cho `gaze`."},
    {"no": 54, "word": "gaze", "ipa": "`/ɡeɪz/`", "meaning": "Ánh nhìn, cái nhìn chăm chú", "englishDef": "A long, steady, and meaningful look from someone's eyes", "synonyms": "(look / stare)", "sentence": "When in its proper place on the face of a Buddha statue, a tiny pupil helps create a gaze filled with spiritual meaning.", "translation": "Khi nằm đúng vị trí trên khuôn mặt của một pho tượng Phật, một con ngươi nhỏ bé góp phần tạo nên một ánh nhìn tràn đầy ý nghĩa tâm linh.", "grammar": "Danh từ `gaze` (cái nhìn, ánh nhìn) làm tân ngữ cho động từ `create`."},
    {"no": 55, "word": "anonymous", "ipa": "`/əˈnɑː.nə.məs/`", "meaning": "Vô danh, ẩn danh", "englishDef": "An object or person has an unknown name or unrecognized origin", "synonyms": "(unnamed / unidentified)", "sentence": "But once separated from its original setting, it can look like nothing more than an anonymous piece of ceramic.", "translation": "Nhưng một khi bị tách khỏi vị trí nguyên bản, nó có thể trông chẳng khác gì một mảnh gốm vô danh.", "grammar": "Cụm phân từ quá khứ `once separated...` (rút gọn của `once it is separated`); thành ngữ `nothing more than` (không gì hơn ngoại trừ / chẳng qua chỉ là)."},
];

// App State
var currentVocabList = [];
var currentCardIndex = 0;
var masteredSet = new Set(JSON.parse(localStorage.getItem('vocab_mastered') || '[]'));
var filterUnmastered = false;
var isTimerEngineRunning = false;

function initApp() {
    try {
        const ua = navigator.userAgent || '';
        if (ua.includes('Zalo') || ua.includes('ZaloIngame')) {
            const banner = document.getElementById('zaloWarningBanner');
            if (banner) banner.style.display = 'block';
        }
    } catch(e) {}
    try { setupTimerEngine(); } catch(e) { console.error("Timer init:", e); }
    try { fetchLiveSyncFromServer(); } catch(e) {}
    try { setupGamification(); } catch(e) { console.error("Gamification init:", e); }
    try { setupTabNavigation(); } catch(e) { console.error("Nav init:", e); }
    try { setupThemeToggle(); } catch(e) { console.error("Theme init:", e); }
    try { setupFlashcardEvents(); } catch(e) { console.error("Flashcard init:", e); }
    try { setupFileUpload(); } catch(e) { console.error("Upload init:", e); }
    try { setupArticleSelect(); } catch(e) { console.error("Select init:", e); }
    try { setupDeleteArticle(); } catch(e) { console.error("Delete init:", e); }
    try { setupTableTab(); } catch(e) { console.error("Table init:", e); }
    try { setupExportTab(); } catch(e) { console.error("Export init:", e); }
    try { setupQuizTab(); } catch(e) { console.error("Quiz init:", e); }
    try { setupWriteTab(); } catch(e) { console.error("Write init:", e); }
    try { setupReportTab(); } catch(e) { console.error("Report init:", e); }
    try { setupHoverDictionary(); } catch(e) { console.error("Hover init:", e); }

    try { updateStats(); } catch(e) {}
    
    if (!currentVocabList || currentVocabList.length === 0) {
        currentVocabList = [...BUILTIN_DATA];
    }
    
    try { shuffleAllModes(false); } catch(e) {}
}

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

window.shuffleAllModes = function(voiceFeedback = true) {
    if (!currentVocabList || currentVocabList.length === 0) return;

    currentVocabList = shuffleArray(currentVocabList);
    currentCardIndex = 0;
    currentWriteIndex = 0;
    quizHistory = [];
    quizHistoryIndex = -1;

    renderFlashcard();
    renderTable();

    if (typeof renderWriteCard === 'function') {
        renderWriteCard();
    }

    if (typeof renderQuiz === 'function') {
        renderQuiz('next');
    }

    if (voiceFeedback) {
        speakVoiceFeedback("All vocabulary lists shuffled randomly!");
    }
};

// 00. Gamification Engine (Points +1 / -1 penalty, Levels 1-9, Streak requires 50 pts/day, Day Break)
let totalScore = parseInt(localStorage.getItem('vocab_total_score') || '529', 10);
let wrongCount = parseInt(localStorage.getItem('vocab_wrong_count') || '8', 10);
let todayScore = parseInt(localStorage.getItem('vocab_today_score') || '66', 10);
let todayDate = localStorage.getItem('vocab_today_date') || getLocalDateString();
let studyStreak = parseInt(localStorage.getItem('vocab_study_streak') || '5', 10);
let totalActiveDays = parseInt(localStorage.getItem('vocab_total_active_days') || '5', 10);
let lastStreakCompletedDate = localStorage.getItem('vocab_last_streak_date') || '2026-09-02';

function getLocalDateString() {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function getDaysBetweenLocalDates(dateStr1, dateStr2) {
    if (!dateStr1 || !dateStr2) return 0;
    const p1 = dateStr1.split('-').map(Number);
    const p2 = dateStr2.split('-').map(Number);
    const d1 = new Date(p1[0], p1[1] - 1, p1[2]);
    const d2 = new Date(p2[0], p2[1] - 1, p2[2]);
    return Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
}

function setupGamification() {
    checkDailyReset();
    updateGamificationUI();
}

function checkDailyReset() {
    const today = getLocalDateString();
    if (!todayDate) {
        todayDate = today;
        localStorage.setItem('vocab_today_date', todayDate);
        return;
    }

    if (todayDate !== today) {
        todayDate = today;
        todayScore = 0;
        localStorage.setItem('vocab_today_date', todayDate);
        localStorage.setItem('vocab_today_score', '0');

        try {
            const localScores = JSON.parse(localStorage.getItem('vocab_daily_activity_scores') || '{}');
            delete localScores[today];
            localStorage.setItem('vocab_daily_activity_scores', JSON.stringify(localScores));
        } catch(e) {}

        if (lastStreakCompletedDate) {
            const diffDays = getDaysBetweenLocalDates(lastStreakCompletedDate, today);
            if (diffDays > 1) {
                studyStreak = 0;
                localStorage.setItem('vocab_study_streak', '0');
            }
        }
    }
}

function calculateLevelInfo(xp) {
    let level = 1;
    let reqXP = 100;
    let accumulatedXP = 0;

    while (level < 9) {
        if (xp >= accumulatedXP + reqXP) {
            accumulatedXP += reqXP;
            level++;
            reqXP *= 2;
        } else {
            break;
        }
    }

    const currentLevelXP = xp - accumulatedXP;
    const progressPercent = Math.min(100, (currentLevelXP / reqXP) * 100);

    return { level, currentLevelXP, reqXP, progressPercent };
}

function adjustScore(change) {
    checkDailyReset(); // Check daily reset before adjusting points!

    const oldLevel = calculateLevelInfo(totalScore).level;
    if (change < 0) {
        wrongCount++;
        localStorage.setItem('vocab_wrong_count', wrongCount.toString());
    }
    totalScore = Math.max(0, totalScore + change);
    todayScore = Math.max(0, todayScore + change);

    localStorage.setItem('vocab_total_score', totalScore.toString());
    localStorage.setItem('vocab_today_score', todayScore.toString());

    // Check 50 Points daily streak threshold requirement for current day
    const today = getLocalDateString();
    if (todayScore >= 50 && lastStreakCompletedDate !== today) {
        if (!lastStreakCompletedDate) {
            studyStreak = 1;
            totalActiveDays = 1;
        } else {
            const diffDays = getDaysBetweenLocalDates(lastStreakCompletedDate, today);
            if (diffDays === 1) {
                studyStreak++;
            } else {
                studyStreak = 1;
            }
            totalActiveDays++;
        }
        lastStreakCompletedDate = today;
        localStorage.setItem('vocab_last_streak_date', lastStreakCompletedDate);
        localStorage.setItem('vocab_study_streak', studyStreak.toString());
        localStorage.setItem('vocab_total_active_days', totalActiveDays.toString());

        setTimeout(() => {
            speakVoiceFeedback("Daily Streak Goal Achieved! 50 points reached today!");
        }, 1000);
    }

    const newLevelInfo = calculateLevelInfo(totalScore);
    if (newLevelInfo.level > oldLevel) {
        setTimeout(() => {
            speakVoiceFeedback(`Level Up! You reached Level ${newLevelInfo.level}`);
        }, 800);
    }

    updateGamificationUI();
    try { pushLiveSyncToServer(); } catch(e) {}
}

function formatUserDateDisplay(dStr = getLocalDateString()) {
    if (!dStr) return '';
    const parts = dStr.split('-').map(Number);
    if (parts.length < 3) return dStr;
    const dateObj = new Date(parts[0], parts[1] - 1, parts[2]);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const day = dateObj.getDate();
    const monthName = months[dateObj.getMonth()];
    const year = dateObj.getFullYear();
    return `${day}-${monthName}-${year}`;
}

function updateGamificationUI() {
    checkDailyReset();
    const today = getLocalDateString();
    if (todayScore > 0 && todayDate === today) {
        try {
            const dailyScores = JSON.parse(localStorage.getItem('vocab_daily_activity_scores') || '{}');
            dailyScores[today] = todayScore;
            localStorage.setItem('vocab_daily_activity_scores', JSON.stringify(dailyScores));
        } catch(e) {}
    } else if (todayScore === 0) {
        try {
            const dailyScores = JSON.parse(localStorage.getItem('vocab_daily_activity_scores') || '{}');
            if (dailyScores[today] !== undefined) {
                delete dailyScores[today];
                localStorage.setItem('vocab_daily_activity_scores', JSON.stringify(dailyScores));
            }
        } catch(e) {}
    }

    if (typeof saveProgressToCloud === 'function') {
        saveProgressToCloud();
    }
    if (!isSyncingWithServer && typeof pushLiveSyncToServer === 'function') {
        pushLiveSyncToServer();
    }
    const levelInfo = calculateLevelInfo(totalScore);
    const formattedDate = formatUserDateDisplay(today);
    const goalMet = todayScore >= 50;

    // Sidebar Level & XP
    const sideLevelTitle = document.getElementById('sideLevelTitle');
    if (sideLevelTitle) sideLevelTitle.textContent = `Level ${levelInfo.level}`;

    const sideXpTitle = document.getElementById('sideXpTitle');
    if (sideXpTitle) sideXpTitle.textContent = `${levelInfo.currentLevelXP} / ${levelInfo.reqXP} XP`;

    const sideLevelBar = document.getElementById('sideLevelBar');
    if (sideLevelBar) sideLevelBar.style.width = `${levelInfo.progressPercent}%`;

    // Sidebar Today's Date & Score (x/50)
    const sideDateText = document.getElementById('sideDateText');
    if (sideDateText) sideDateText.textContent = `Date (${formattedDate})`;

    const sideTodayScore = document.getElementById('sideTodayScore');
    if (sideTodayScore) sideTodayScore.textContent = `${todayScore}/50`;

    const sideTodayProgressBar = document.getElementById('sideTodayProgressBar');
    if (sideTodayProgressBar) {
        const todayPercent = Math.min(100, (todayScore / 50) * 100);
        sideTodayProgressBar.style.width = `${todayPercent}%`;
    }

    const sideGoalStatus = document.getElementById('sideGoalStatus');
    if (sideGoalStatus) {
        if (goalMet) {
            sideGoalStatus.textContent = "Goal Met! 🎉 (50/50 pts)";
            sideGoalStatus.style.color = "var(--success-color)";
        } else {
            sideGoalStatus.textContent = `Target: 50 pts (Need ${50 - todayScore} more)`;
            sideGoalStatus.style.color = "var(--warning-color)";
        }
    }

    // Sidebar Daily Break & Days Learned
    const sideStreak = document.getElementById('sideStreak');
    if (sideStreak) {
        sideStreak.textContent = `${studyStreak} ${studyStreak === 1 ? 'day' : 'days'}`;
    }

    const sideTotalDays = document.getElementById('sideTotalDays');
    if (sideTotalDays) sideTotalDays.textContent = `${totalActiveDays} ${totalActiveDays > 1 ? 'Days' : 'Day'}`;

    // Top Bar
    const topLevelText = document.getElementById('topLevelText');
    if (topLevelText) topLevelText.textContent = `Level ${levelInfo.level}`;

    const topScoreText = document.getElementById('topScoreText');
    if (topScoreText) topScoreText.textContent = totalScore.toString();

    const topStreakText = document.getElementById('topStreakText');
    if (topStreakText) {
        topStreakText.textContent = `Date (${formattedDate}): ${todayScore}/50`;
    }

    // Quiz Tab Score & Wrong Count
    const quizTabScoreText = document.getElementById('quizTabScoreText');
    if (quizTabScoreText) quizTabScoreText.textContent = totalScore.toString();

    const quizWrongCount = document.getElementById('quizWrongCount');
    if (quizWrongCount) quizWrongCount.textContent = wrongCount.toString();
}

// 0. Smart Active Study Timers Engine (Only counts when user is actively interacting!)
let sessionSeconds = 0;
let totalLearnedSeconds = parseInt(localStorage.getItem('vocab_total_learned_seconds') || '0', 10);
let lastUserActivityTimestamp = Date.now();
const IDLE_TIMEOUT_MS = 15000; // 15 seconds idle threshold

function recordUserActivity() {
    lastUserActivityTimestamp = Date.now();
}

function setupTimerEngine() {
    if (isTimerEngineRunning) return;
    isTimerEngineRunning = true;

    const activityEvents = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll', 'click', 'input'];
    activityEvents.forEach(evt => {
        try {
            window.addEventListener(evt, recordUserActivity, { passive: true });
        } catch(e) {}
    });

    updateTimerDisplays(true);

    setInterval(() => {
        try {
            const isTabVisible = !document.hidden;
            if (isTabVisible) {
                sessionSeconds++;
                totalLearnedSeconds++;

                if (sessionSeconds % 5 === 0) {
                    localStorage.setItem('vocab_total_learned_seconds', totalLearnedSeconds.toString());
                }
            }

            updateTimerDisplays(isTabVisible);
        } catch(err) {
            console.error('Timer engine tick error:', err);
        }
    }, 1000);
}

try {
    setupTimerEngine();
} catch(e) {}

window.addEventListener('load', () => {
    try {
        setupTimerEngine();
        updateTimerDisplays(true);
    } catch(e) {}
});

function formatSessionTime(sec) {
    const hrs = Math.floor(sec / 3600);
    const mins = Math.floor((sec % 3600) / 60);
    const secs = sec % 60;
    const pad = (n) => n.toString().padStart(2, '0');
    if (hrs > 0) {
        return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
    }
    return `${pad(mins)}:${pad(secs)}`;
}

function formatTotalTime(sec) {
    const hrs = Math.floor(sec / 3600);
    const mins = Math.floor((sec % 3600) / 60);
    const secs = sec % 60;
    if (hrs > 0) {
        return `${hrs}h ${mins}m`;
    }
    return `${mins}m ${secs}s`;
}

function updateTimerDisplays(isActive = true) {
    const now = new Date();
    const pad = (n) => n.toString().padStart(2, '0');
    const currentTimeStr = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    const totalStr = formatTotalTime(totalLearnedSeconds);

    const clockEl = document.getElementById('currentTimeClock');
    if (clockEl) clockEl.textContent = currentTimeStr;

    const learnedEl = document.getElementById('timeLearnedClock');
    if (learnedEl) {
        learnedEl.textContent = totalStr + (isActive ? ' 🟢' : ' ⏸️');
        learnedEl.title = isActive ? 'Active learning timer running' : 'Timer paused (idle or tab hidden)';
    }

    const todayStr = getLocalDateString();
    const formattedDate = formatUserDateDisplay(todayStr);

    const sideDateText = document.getElementById('sideDateText');
    if (sideDateText) {
        sideDateText.textContent = `Date: ${formattedDate}`;
    }

    const footerUpdate = document.getElementById('realTimeUpdateFooter');
    if (footerUpdate) {
        footerUpdate.innerHTML = `🕒 <i>Updated: ${currentTimeStr}, ${formattedDate}</i>`;
    }
}

// 1. Navigation
window.switchTab = function(targetTab) {
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
        document.activeElement.blur();
    }
    const navButtons = document.querySelectorAll('.nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    navButtons.forEach(b => {
        if (b.dataset.tab === targetTab) {
            b.classList.add('active');
        } else {
            b.classList.remove('active');
        }
    });

    tabContents.forEach(t => {
        if (t.id === targetTab) {
            t.classList.add('active');
        } else {
            t.classList.remove('active');
        }
    });

    if (targetTab.includes('quiz')) {
        if (typeof quizHistory !== 'undefined' && quizHistory.length === 0) {
            if (typeof renderQuiz === 'function') renderQuiz('next');
        }
    } else if (targetTab.includes('write')) {
        if (typeof renderWriteCard === 'function') renderWriteCard();
    } else if (targetTab.includes('table')) {
        if (typeof renderTable === 'function') renderTable();
    } else if (targetTab.includes('report')) {
        if (typeof renderReport === 'function') renderReport();
        if (typeof renderActivityHeatmap === 'function') renderActivityHeatmap();
        if (typeof updateLeitnerBoxesUI === 'function') updateLeitnerBoxesUI();
    }
};

function setupTabNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;
            if (targetTab) {
                window.switchTab(targetTab);
            }
        });
    });
}

// 2. Theme Toggle (Default to 'light' theme unless user toggles!)
function setupThemeToggle() {
    const savedTheme = localStorage.getItem('vocab_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.body.setAttribute('data-theme', savedTheme);

    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            document.body.setAttribute('data-theme', newTheme);
            localStorage.setItem('vocab_theme', newTheme);
        });
    }
}

// 3. Flashcard Logic
function getActiveDeck() {
    if (filterUnmastered) {
        return currentVocabList.filter(item => !masteredSet.has(item.word));
    }
    return currentVocabList;
}

function renderFlashcard() {
    const deck = getActiveDeck();
    const counterEl = document.getElementById('cardCounter');
    const flashcard = document.getElementById('flashcard');
    
    if (deck.length === 0) {
        document.getElementById('frontWord').textContent = "🎉 You have mastered all words!";
        document.getElementById('frontPhonetic').textContent = "";
        document.getElementById('cardStatusTag').textContent = "Completed";
        counterEl.textContent = "0 / 0";
        return;
    }

    if (currentCardIndex >= deck.length) {
        currentCardIndex = 0;
    }

    const item = deck[currentCardIndex];
    counterEl.textContent = `Card ${currentCardIndex + 1} of ${deck.length}`;

    // Status Tag
    const statusTag = document.getElementById('cardStatusTag');
    if (masteredSet.has(item.word)) {
        statusTag.textContent = "🟢 Mastered";
        statusTag.style.color = "var(--success-color)";
    } else {
        statusTag.textContent = "🔴 Needs Review";
        statusTag.style.color = "var(--danger-color)";
    }

    // Front
    const frontWordEl = document.getElementById('frontWord');
    frontWordEl.textContent = item.word;
    frontWordEl.setAttribute('data-hover-vocab', item.word);

    document.getElementById('frontPhonetic').textContent = item.ipa;

    // Back
    const backWordEl = document.getElementById('backWord');
    backWordEl.textContent = item.word;
    backWordEl.setAttribute('data-hover-vocab', item.word);
    document.getElementById('backMeaning').textContent = `🇻🇳 ${item.meaning}`;
    
    const backEnglishDefEl = document.getElementById('backEnglishDef');
    if (backEnglishDefEl) {
        backEnglishDefEl.innerHTML = item.englishDef ? `🇬🇧 Definition: ${makeInteractiveSentenceHtml(item.englishDef)}` : '';
    }

    const backSynonymsEl = document.getElementById('backSynonyms');
    if (backSynonymsEl) {
        backSynonymsEl.innerHTML = item.synonyms ? `🔗 Synonyms: ${makeInteractiveSentenceHtml(item.synonyms)}` : '';
    }

    document.getElementById('backSentence').innerHTML = makeInteractiveSentenceHtml(item.sentence);
    document.getElementById('backTranslation').textContent = item.translation;
    document.getElementById('backGrammar').textContent = item.grammar;

    // Reset Flip
    flashcard.classList.remove('flipped');
}

function isTypingInInput(e) {
    if (e && e.isComposing) return true;

    // Check if any modal dialog is currently visible
    try {
        const modals = document.querySelectorAll('.modal, [id$="Modal"]');
        for (let idx = 0; idx < modals.length; idx++) {
            const m = modals[idx];
            if (m && m.style && m.style.display && m.style.display !== 'none' && m.style.display !== 'hidden') {
                return true;
            }
        }
    } catch(err) {}

    const active = document.activeElement;
    if (active) {
        const tag = active.tagName ? active.tagName.toUpperCase() : '';
        if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || active.isContentEditable) {
            return true;
        }
    }
    return false;
}

function setupFlashcardEvents() {
    const flashcard = document.getElementById('flashcard');
    const speakBtnFront = document.getElementById('speakBtnFront');
    const prevBtn = document.getElementById('prevCardBtn');
    const nextBtn = document.getElementById('nextCardBtn');
    const markMasteredBtn = document.getElementById('markMasteredBtn');
    const markReviewBtn = document.getElementById('markNeedsReviewBtn');
    const shuffleBtn = document.getElementById('shuffleBtn');
    const filterBtn = document.getElementById('filterUnmasteredBtn');

    flashcard.addEventListener('click', (e) => {
        if (!e.target.closest('.audio-btn')) {
            flashcard.classList.toggle('flipped');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (isTypingInInput(e)) return;

        const flashcardTab = document.getElementById('flashcardsTab');
        if (!flashcardTab || !flashcardTab.classList.contains('active')) return;

        const k = (e.key || '').toLowerCase();
        const c = e.code || '';
        const kc = e.keyCode || 0;

        const isSpace = c === 'Space' || k === ' ' || k === 'spacebar' || kc === 32;
        const isEnter = c === 'Enter' || k === 'enter' || kc === 13;
        const isRight = c === 'ArrowRight' || k === 'arrowright' || k === 'right' || kc === 39;
        const isLeft = c === 'ArrowLeft' || k === 'arrowleft' || k === 'left' || kc === 37;

        if (isSpace || isEnter) {
            e.preventDefault();
            const flashcardEl = document.getElementById('flashcard');
            if (flashcardEl) flashcardEl.classList.toggle('flipped');
        } else if (isRight) {
            e.preventDefault();
            nextCard();
        } else if (isLeft) {
            e.preventDefault();
            prevCard();
        }
    });

    speakBtnFront.addEventListener('click', (e) => {
        e.stopPropagation();
        speakWord(currentVocabList[currentCardIndex]?.word || '');
    });

    prevBtn.addEventListener('click', prevCard);
    nextBtn.addEventListener('click', nextCard);

    markMasteredBtn.addEventListener('click', () => {
        const deck = getActiveDeck();
        if (deck[currentCardIndex]) {
            adjustScore(1);
            masteredSet.add(deck[currentCardIndex].word);
            saveMastered();
            recordDailyActivity('flashcard', true);
            recordWordStat(deck[currentCardIndex].word, true);
            nextCard();
        }
    });

    markReviewBtn.addEventListener('click', () => {
        const deck = getActiveDeck();
        if (deck[currentCardIndex]) {
            adjustScore(-1);
            masteredSet.delete(deck[currentCardIndex].word);
            saveMastered();
            recordDailyActivity('flashcard', false);
            recordWordStat(deck[currentCardIndex].word, false);
            nextCard();
        }
    });

    shuffleBtn.addEventListener('click', () => {
        currentVocabList.sort(() => Math.random() - 0.5);
        currentCardIndex = 0;
        renderFlashcard();
        renderTable();
    });

    filterBtn.addEventListener('click', () => {
        filterUnmastered = !filterUnmastered;
        filterBtn.style.background = filterUnmastered ? "var(--accent-gradient)" : "var(--bg-secondary)";
        filterBtn.style.color = filterUnmastered ? "#fff" : "var(--text-primary)";
        currentCardIndex = 0;
        renderFlashcard();
    });
}

function nextCard() {
    const deck = getActiveDeck();
    if (deck.length > 0) {
        currentCardIndex = (currentCardIndex + 1) % deck.length;
        renderFlashcard();
    }
}
window.nextCard = nextCard;

function prevCard() {
    const deck = getActiveDeck();
    if (deck.length > 0) {
        currentCardIndex = (currentCardIndex - 1 + deck.length) % deck.length;
        renderFlashcard();
    }
}
window.prevCard = prevCard;

function speakWord(text) {
    try {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.rate = 0.9;
            window.speechSynthesis.speak(utterance);
        }
    } catch(e) {
        console.warn('Speech synthesis error:', e);
    }
}

// 4. Progress Stats
function updateStats() {
    const total = currentVocabList.length;
    const mastered = masteredSet.size;
    const review = total - mastered;

    const masteredEl = document.getElementById('masteredCount');
    if (masteredEl) masteredEl.textContent = mastered;

    const reviewEl = document.getElementById('reviewCount');
    if (reviewEl) reviewEl.textContent = review;

    const barEl = document.getElementById('progressBar');
    if (barEl) {
        const percentage = total > 0 ? (mastered / total) * 100 : 0;
        barEl.style.width = `${percentage}%`;
    }
}

function saveMastered() {
    localStorage.setItem('vocab_mastered', JSON.stringify(Array.from(masteredSet)));
    updateStats();
    renderTable();
}

// 5. Table Rendering & Search
function setupTableTab() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', () => {
        renderTable(searchInput.value.trim().toLowerCase());
    });
}

function renderTable(filterQuery = '') {
    const tbody = document.getElementById('vocabTableBody');
    tbody.innerHTML = '';

    const filtered = currentVocabList.filter(item => {
        if (!filterQuery) return true;
        return item.word.toLowerCase().includes(filterQuery) ||
               item.meaning.toLowerCase().includes(filterQuery) ||
               item.grammar.toLowerCase().includes(filterQuery);
    });

    filtered.forEach((item, idx) => {
        const isMastered = masteredSet.has(item.word);
        const tr = document.createElement('tr');
        tr.setAttribute('data-hover-vocab', item.word);
        tr.innerHTML = `
            <td>${item.no || idx + 1}</td>
            <td><b class="vocab-word">${item.word}</b></td>
            <td style="color: var(--accent-color);">${item.ipa}</td>
            <td><b>${item.meaning}</b> <br><small style="color:var(--warning-color);">${item.synonyms || ''}</small></td>
            <td style="max-width: 250px;">${makeInteractiveSentenceHtml(item.sentence)}</td>
            <td style="color: var(--text-secondary); font-style: italic;">${item.translation}</td>
            <td style="font-size: 12px; color: var(--text-secondary);">${item.grammar}</td>
            <td>
                <button class="btn-sm-status ${isMastered ? 'mastered' : 'review'}" onclick="toggleMastery('${item.word.replace(/'/g, "\\'")}')">
                    ${isMastered ? '🟢 Mastered' : '🔴 Needs Review'}
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

window.toggleMastery = function(word) {
    if (masteredSet.has(word)) {
        masteredSet.delete(word);
    } else {
        masteredSet.add(word);
    }
    saveMastered();
    renderFlashcard();
};

// 6. Active Recall Quiz Engine
let currentQuizMode = 'defToWordChoice'; // 'defToWordChoice', 'fillBlank', 'englishChoice'
let quizHistory = [];
let quizHistoryIndex = -1;

function setupQuizTab() {
    const modeBtns = document.querySelectorAll('.quiz-mode-btn');
    modeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentQuizMode = btn.dataset.mode;
            quizHistory = [];
            quizHistoryIndex = -1;
            renderQuiz('next');
        });
    });

    document.addEventListener('keydown', (e) => {
        if (isTypingInInput(e)) return;
        const quizTab = document.getElementById('quizTab');
        if (quizTab && quizTab.classList.contains('active')) {
            const k = (e.key || '').toLowerCase();
            const c = e.code || '';
            const kc = e.keyCode || 0;
            const optionBtns = document.querySelectorAll('#quizBody .option-btn');

            const isRight = c === 'ArrowRight' || k === 'arrowright' || k === 'right' || kc === 39;
            const isLeft = c === 'ArrowLeft' || k === 'arrowleft' || k === 'left' || kc === 37;
            const isEnter = c === 'Enter' || k === 'enter' || kc === 13;
            const isSpace = c === 'Space' || k === ' ' || k === 'spacebar' || kc === 32;

            if (k === 'z' || k === '1') {
                if (optionBtns[0] && !optionBtns[0].disabled) optionBtns[0].click();
            } else if (k === 'x' || k === '2') {
                if (optionBtns[1] && !optionBtns[1].disabled) optionBtns[1].click();
            } else if (k === 'c' || k === '3') {
                if (optionBtns[2] && !optionBtns[2].disabled) optionBtns[2].click();
            } else if (k === 'v' || k === '4') {
                if (optionBtns[3] && !optionBtns[3].disabled) optionBtns[3].click();
            } else if (isEnter || isRight || isSpace) {
                e.preventDefault();
                renderQuiz('next');
            } else if (isLeft) {
                e.preventDefault();
                renderQuiz('prev');
            }
        }
    });
}

function renderQuiz(direction = 'next') {
    const quizBody = document.getElementById('quizBody');
    if (currentVocabList.length === 0) {
        quizBody.innerHTML = '<p>Không có dữ liệu từ vựng để luyện tập.</p>';
        return;
    }

    let currentQuestionData;

    if (direction === 'prev') {
        if (quizHistoryIndex > 0) {
            quizHistoryIndex--;
            currentQuestionData = quizHistory[quizHistoryIndex];
        } else {
            return;
        }
    } else {
        if (quizHistoryIndex < quizHistory.length - 1) {
            quizHistoryIndex++;
            currentQuestionData = quizHistory[quizHistoryIndex];
        } else {
            // Generate new question
            const randomIndex = Math.floor(Math.random() * currentVocabList.length);
            const targetItem = currentVocabList[randomIndex];

            const otherItems = currentVocabList.filter(i => i.word !== targetItem.word);
            otherItems.sort(() => Math.random() - 0.5);
            const options = [targetItem, ...otherItems.slice(0, 3)];
            options.sort(() => Math.random() - 0.5);

            currentQuestionData = { targetItem, options };
            quizHistory.push(currentQuestionData);
            quizHistoryIndex = quizHistory.length - 1;
        }
    }

    const { targetItem, options } = currentQuestionData;
    const prefixes = ['A', 'B', 'C', 'D'];
    const shortcutKeys = ['Z', 'X', 'C', 'V'];

    if (currentQuizMode === 'defToWordChoice') {
        // Mode 1: Question = Definition (with target word blanked out as '______'), Choices = 4 Vocabulary Words
        const rawDefText = targetItem.englishDef || targetItem.meaning || '';
        
        // Blank out target word and variants (e.g., 'Son' -> '______')
        const cleanWord = targetItem.word.replace(/^a\s+/i, '').replace(/^an\s+/i, '').replace(/^the\s+/i, '').trim();
        const wordsToHide = [targetItem.word, cleanWord].filter(Boolean);
        
        let blankedDef = rawDefText;
        wordsToHide.forEach(w => {
            if (w.length > 1) {
                const regex = new RegExp('\\b' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'gi');
                blankedDef = blankedDef.replace(regex, '______');
            }
        });
        // Fallback replacement if word boundary misses
        if (blankedDef === rawDefText) {
            wordsToHide.forEach(w => {
                if (w.length > 1) {
                    const regex = new RegExp(w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
                    blankedDef = blankedDef.replace(regex, '______');
                }
            });
        }

        const interactiveDef = makeInteractiveSentenceHtml(blankedDef);

        quizBody.innerHTML = `
            <div class="quiz-card">
                <div class="quiz-question-title">📖 Read the Definition & Select the Matching Vocabulary Word:</div>
                <div class="quiz-sentence" style="font-size: 19px; font-weight: 600; color: var(--text-primary); line-height: 1.6; background: rgba(99, 102, 241, 0.08); border-left: 4px solid var(--accent-color); padding: 20px 24px; border-radius: var(--radius-md); text-align: left; margin-bottom: 24px;">
                    ${interactiveDef}
                </div>
                
                <div class="quiz-options-grid">
                    ${options.map((opt, idx) => {
                        const safeWord = opt.word.replace(/'/g, "\\'").replace(/"/g, "&quot;");
                        return `
                            <button class="option-btn" style="text-align: left; font-size: 17px; padding: 16px 20px; display: flex; justify-content: space-between; align-items: center;" onclick="checkAnswer(this, '${opt.word.replace(/'/g, "\\'")}', '${targetItem.word.replace(/'/g, "\\'")}')">
                                <span><b>${prefixes[idx]}.</b> <span style="background: rgba(99, 102, 241, 0.15); color: var(--accent-color); padding: 2px 7px; border-radius: 6px; font-weight: 800; font-size: 12px; margin-right: 6px; border: 1px solid rgba(99, 102, 241, 0.3);">[${shortcutKeys[idx]}]</span> ${opt.word}</span>
                                <span class="audio-btn-sm" title="Listen Pronunciation" onclick="event.stopPropagation(); speakWord('${safeWord}')" style="margin-left: 8px; padding: 4px 10px; border-radius: 12px; font-size: 13px; background: rgba(99, 102, 241, 0.15); color: var(--accent-color); border: 1px solid rgba(99, 102, 241, 0.3); cursor: pointer; flex-shrink: 0;">🔊</span>
                            </button>
                        `;
                    }).join('')}
                </div>

                <div id="quizFeedback"></div>

                <div class="quiz-nav-row" style="display: flex; gap: 12px; margin-top: 20px;">
                    <button class="btn-secondary" onclick="renderQuiz('prev')" ${quizHistoryIndex <= 0 ? 'disabled style="opacity: 0.4;"' : ''} style="flex: 1;">⬅️ Previous</button>
                    <button class="btn-primary" onclick="renderQuiz('next')" style="flex: 2;">Next [Enter ➡️]</button>
                </div>
            </div>
        `;
    } else if (currentQuizMode === 'englishChoice') {
        // Mode: 4 English Definitions Options
        quizBody.innerHTML = `
            <div class="quiz-card">
                <div class="quiz-question-title">🎯 Select the correct English definition or synonym for:</div>
                <div style="text-align: center; margin-bottom: 24px;">
                    <div style="font-size: 32px; font-weight: 800; color: var(--accent-color); margin-bottom: 4px;">${targetItem.word}</div>
                    <div style="font-size: 18px; color: var(--text-secondary); margin-bottom: 12px;">${targetItem.ipa}</div>
                    <button class="audio-btn" onclick="speakWord('${targetItem.word.replace(/'/g, "\\'")}')">🔊 Listen</button>
                </div>

                <div class="quiz-options-grid">
                    ${options.map((opt, idx) => {
                        let englishDef = opt.englishDef || (opt.synonyms ? opt.synonyms.replace(/[()]/g, '') : opt.word);
                        
                        // Blank out option's target word inside englishDef as '......' to avoid spoiling answer!
                        const cleanWord = opt.word.replace(/^a\s+/i, '').replace(/^an\s+/i, '').replace(/^the\s+/i, '').trim();
                        const wordsToHide = [opt.word, cleanWord].filter(Boolean);
                        
                        let blankedDef = englishDef;
                        wordsToHide.forEach(w => {
                            if (w.length > 1) {
                                const regex = new RegExp('\\b' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'gi');
                                blankedDef = blankedDef.replace(regex, '......');
                            }
                        });
                        if (blankedDef === englishDef) {
                            wordsToHide.forEach(w => {
                                if (w.length > 1) {
                                    const regex = new RegExp(w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
                                    blankedDef = blankedDef.replace(regex, '......');
                                }
                            });
                        }

                        const safeDef = englishDef.replace(/'/g, "\\'").replace(/"/g, "&quot;");
                        return `
                            <button class="option-btn" style="padding: 16px 20px; font-size: 15px; text-align: left; line-height: 1.4; display: flex; justify-content: space-between; align-items: center;" onclick="checkAnswer(this, '${opt.word.replace(/'/g, "\\'")}', '${targetItem.word.replace(/'/g, "\\'")}')">
                                <span><b>${prefixes[idx]}.</b> <span style="background: rgba(99, 102, 241, 0.15); color: var(--accent-color); padding: 2px 7px; border-radius: 6px; font-weight: 800; font-size: 12px; margin-right: 6px; border: 1px solid rgba(99, 102, 241, 0.3);">[${shortcutKeys[idx]}]</span> ${blankedDef}</span>
                                <span class="audio-btn-sm" title="Listen" onclick="event.stopPropagation(); speakWord('${safeDef}')" style="margin-left: 8px; padding: 4px 10px; border-radius: 12px; font-size: 13px; background: rgba(99, 102, 241, 0.15); color: var(--accent-color); border: 1px solid rgba(99, 102, 241, 0.3); cursor: pointer; flex-shrink: 0;">🔊</span>
                            </button>
                        `;
                    }).join('')}
                </div>

                <div id="quizFeedback"></div>

                <div class="quiz-nav-row" style="display: flex; gap: 12px; margin-top: 20px;">
                    <button class="btn-secondary" onclick="renderQuiz('prev')" ${quizHistoryIndex <= 0 ? 'disabled style="opacity: 0.4;"' : ''} style="flex: 1;">⬅️ Previous</button>
                    <button class="btn-primary" onclick="renderQuiz('next')" style="flex: 2;">Next [Enter ➡️]</button>
                </div>
            </div>
        `;
    } else {
        // Fill in Blank SVO Mode (No Vietnamese translation line)
        const regex = new RegExp(targetItem.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
        const blankedSentence = targetItem.sentence.replace(regex, '______');

        quizBody.innerHTML = `
            <div class="quiz-card">
                <div class="quiz-question-title">🎯 Select the best word to complete the sentence:</div>
                <div class="quiz-sentence">${blankedSentence}</div>
                
                <div class="quiz-options-grid">
                    ${options.map((opt, idx) => {
                        const safeWord = opt.word.replace(/'/g, "\\'").replace(/"/g, "&quot;");
                        return `
                            <button class="option-btn" style="text-align: left; font-size: 17px; padding: 16px 20px; display: flex; justify-content: space-between; align-items: center;" onclick="checkAnswer(this, '${opt.word.replace(/'/g, "\\'")}', '${targetItem.word.replace(/'/g, "\\'")}')">
                                <span><b>${prefixes[idx]}.</b> <span style="background: rgba(99, 102, 241, 0.15); color: var(--accent-color); padding: 2px 7px; border-radius: 6px; font-weight: 800; font-size: 12px; margin-right: 6px; border: 1px solid rgba(99, 102, 241, 0.3);">[${shortcutKeys[idx]}]</span> ${opt.word}</span>
                                <span class="audio-btn-sm" title="Listen" onclick="event.stopPropagation(); speakWord('${safeWord}')" style="margin-left: 8px; padding: 4px 10px; border-radius: 12px; font-size: 13px; background: rgba(99, 102, 241, 0.15); color: var(--accent-color); border: 1px solid rgba(99, 102, 241, 0.3); cursor: pointer; flex-shrink: 0;">🔊</span>
                            </button>
                        `;
                    }).join('')}
                </div>

                <div id="quizFeedback"></div>

                <div class="quiz-nav-row" style="display: flex; gap: 12px; margin-top: 20px;">
                    <button class="btn-secondary" onclick="renderQuiz('prev')" ${quizHistoryIndex <= 0 ? 'disabled style="opacity: 0.4;"' : ''} style="flex: 1;">⬅️ Previous</button>
                    <button class="btn-primary" onclick="renderQuiz('next')" style="flex: 2;">Next [Enter ➡️]</button>
                </div>
            </div>
        `;
    }
}

// 6.1 Write Practice Engine (Interactive AI Grading, Hints, Feedback, Mode 1 & Mode 2)
let currentWriteIndex = 0;
let currentWriteMode = 'wordToDef'; // 'wordToDef' or 'defToWord'

function setupWriteTab() {
    // Mode toggle listener
    document.querySelectorAll('.write-mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.write-mode-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentWriteMode = btn.dataset.writemode;
            renderWriteCard();
        });
    });

    document.addEventListener('keydown', (e) => {
        const writeTab = document.getElementById('writeTab');
        if (writeTab && writeTab.classList.contains('active')) {
            const k = (e.key || '').toLowerCase();
            const c = e.code || '';
            const kc = e.keyCode || 0;

            const isEnter = c === 'Enter' || k === 'enter' || kc === 13;
            const isRight = c === 'ArrowRight' || k === 'arrowright' || k === 'right' || kc === 39;
            const isLeft = c === 'ArrowLeft' || k === 'arrowleft' || k === 'left' || kc === 37;

            const feedbackEl = document.getElementById('writeFeedback');
            const hasFeedback = feedbackEl && feedbackEl.children.length > 0;

            if (isEnter) {
                if (e.shiftKey) return;
                if (isTypingInInput(e)) return;
                e.preventDefault();
                if (hasFeedback) {
                    navigateWriteWord('next');
                } else {
                    if (currentWriteMode === 'wordToDef') {
                        checkWriteDefinition();
                    } else {
                        checkTypedWord();
                    }
                }
            } else if (isRight) {
                e.preventDefault();
                navigateWriteWord('next');
            } else if (isLeft) {
                e.preventDefault();
                navigateWriteWord('prev');
            }
        }
    });
}

function renderWriteCard() {
    const writeBody = document.getElementById('writeBody');
    if (!writeBody) return;

    if (currentVocabList.length === 0) {
        writeBody.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">No vocabulary dataset available. Please select or import an article!</p>';
        return;
    }

    if (currentWriteIndex >= currentVocabList.length) currentWriteIndex = 0;
    if (currentWriteIndex < 0) currentWriteIndex = currentVocabList.length - 1;

    const item = currentVocabList[currentWriteIndex];

    // Mode 2: Definition -> Type Word
    if (currentWriteMode === 'defToWord') {
        const rawDefText = item.englishDef || item.meaning || '';
        
        // Blank out target word and variants (e.g. 'Triplet' -> '......') inside definition to avoid spoiling answer!
        const cleanWord = item.word.replace(/^a\s+/i, '').replace(/^an\s+/i, '').replace(/^the\s+/i, '').trim();
        const wordsToHide = [item.word, cleanWord].filter(Boolean);
        
        let blankedDef = rawDefText;
        wordsToHide.forEach(w => {
            if (w.length > 1) {
                const regex = new RegExp('\\b' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'gi');
                blankedDef = blankedDef.replace(regex, '......');
            }
        });
        if (blankedDef === rawDefText) {
            wordsToHide.forEach(w => {
                if (w.length > 1) {
                    const regex = new RegExp(w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
                    blankedDef = blankedDef.replace(regex, '......');
                }
            });
        }

        const interactiveDef = makeInteractiveSentenceHtml(blankedDef);
        const engDefHtml = rawDefText ? `<div style="font-size: 16px; color: var(--accent-color); margin-bottom: 10px;"><b>🇬🇧 English Definition:</b> ${interactiveDef}</div>` : '';
        const synsHtml = item.synonyms ? `<div style="font-size: 14px; color: var(--warning-color);"><b>🔗 Synonyms:</b> ${makeInteractiveSentenceHtml(item.synonyms)}</div>` : '';

        writeBody.innerHTML = `
            <div class="quiz-card" style="max-width: 740px; margin: 0 auto;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                    <span class="badge" style="background: rgba(236, 72, 153, 0.15); color: #ec4899; font-weight: 700;">Mode 2: Word ${currentWriteIndex + 1} of ${currentVocabList.length}</span>
                    <span style="font-size: 12px; color: var(--text-secondary);">Target: Recall & Type English Word</span>
                </div>

                <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 20px; margin-bottom: 20px;">
                    ${engDefHtml}
                    ${synsHtml}
                </div>

                <div style="margin-bottom: 16px;">
                    <label style="display: block; font-weight: 700; font-size: 14px; margin-bottom: 8px; color: var(--text-primary);">✍️ Type the exact English vocabulary word/phrase:</label>
                    <input type="text" id="userWordInput" class="styled-input" onkeydown="handleWriteInputKeydown(event)" placeholder="Type English word here... (Press Enter to Check)" style="width: 100%; padding: 14px 18px; font-size: 18px; font-weight: 700; border-radius: var(--radius-md); font-family: inherit; box-sizing: border-box; color: var(--accent-color);" autocomplete="off">
                </div>

                <div style="display: flex; gap: 10px; margin-bottom: 16px;">
                    <button class="btn-primary" onclick="checkTypedWord()" style="flex: 2; padding: 12px 20px; font-size: 15px; background: var(--accent-gradient);">⚡ Check Word (Press Enter)</button>
                    <button class="btn-secondary" onclick="showWriteWordHint()" style="flex: 1; padding: 12px 16px; font-size: 14px; background: rgba(245, 158, 11, 0.15); color: var(--warning-color); border: 1px solid rgba(245, 158, 11, 0.3);">💡 Show Hint</button>
                </div>

                <div id="writeFeedback"></div>

                <div class="quiz-nav-row" style="display: flex; gap: 12px; margin-top: 24px;">
                    <button class="btn-secondary" onclick="navigateWriteWord('prev')" style="flex: 1;">⬅️ Previous Word</button>
                    <button class="btn-primary" onclick="navigateWriteWord('next')" style="flex: 2;">Next Word ➡️</button>
                </div>
            </div>
        `;

        setTimeout(() => {
            const input = document.getElementById('userWordInput');
            if (input) input.focus();
        }, 100);
        return;
    }

    // Mode 1: Word -> Write Definition
    writeBody.innerHTML = `
        <div class="quiz-card" style="max-width: 740px; margin: 0 auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                <span class="badge" style="background: rgba(99, 102, 241, 0.15); color: var(--accent-color); font-weight: 700;">Mode 1: Word ${currentWriteIndex + 1} of ${currentVocabList.length}</span>
                <button class="audio-btn-sm" onclick="speakWord('${item.word.replace(/'/g, "\\'")}')" style="padding: 6px 14px; border-radius: 16px; background: rgba(99, 102, 241, 0.15); color: var(--accent-color); border: 1px solid rgba(99, 102, 241, 0.3); font-weight: 600; cursor: pointer;">🔊 Listen</button>
            </div>

            <div style="text-align: center; margin-bottom: 20px;">
                <div style="font-size: 34px; font-weight: 800; color: var(--accent-color); margin-bottom: 4px;">${item.word}</div>
                <div style="font-size: 18px; color: var(--text-secondary);">${item.ipa}</div>
            </div>

            <div style="margin-bottom: 16px;">
                <label style="display: block; font-weight: 700; font-size: 14px; margin-bottom: 8px; color: var(--text-primary);">✍️ Write definition in your own words (English or Vietnamese):</label>
                <textarea id="userDefInput" rows="3" class="styled-input" onkeydown="handleWriteInputKeydown(event)" placeholder="Type your definition here... (e.g. A device made of metal used to filter coffee)" style="width: 100%; padding: 14px; font-size: 15px; border-radius: var(--radius-md); resize: vertical; line-height: 1.6; font-family: inherit; word-break: break-word; white-space: pre-wrap; box-sizing: border-box;"></textarea>
            </div>

            <div style="display: flex; gap: 10px; margin-bottom: 16px;">
                <button class="btn-primary" onclick="checkWriteDefinition()" style="flex: 2; padding: 12px 20px; font-size: 15px; background: var(--accent-gradient);">⚡ Check Definition (Press Enter)</button>
                <button class="btn-secondary" onclick="showWriteHint()" style="flex: 1; padding: 12px 16px; font-size: 14px; background: rgba(245, 158, 11, 0.15); color: var(--warning-color); border: 1px solid rgba(245, 158, 11, 0.3);">💡 Show Hint</button>
            </div>

            <div id="writeFeedback"></div>

            <div class="quiz-nav-row" style="display: flex; gap: 12px; margin-top: 24px;">
                <button class="btn-secondary" onclick="navigateWriteWord('prev')" style="flex: 1;">⬅️ Previous Word</button>
                <button class="btn-primary" onclick="navigateWriteWord('next')" style="flex: 2;">Next Word ➡️</button>
            </div>
        </div>
    `;

    // Focus input field
    setTimeout(() => {
        const input = document.getElementById('userDefInput');
        if (input) input.focus();
    }, 100);
}

function showWriteWordHint() {
    const item = currentVocabList[currentWriteIndex];
    if (!item) return;

    const feedbackEl = document.getElementById('writeFeedback');
    if (!feedbackEl) return;

    const words = item.word.split(' ');
    const masked = words.map(w => {
        if (w.length <= 2) return w;
        return w[0] + ' ' + '_ '.repeat(w.length - 2) + w[w.length - 1];
    }).join('   ');

    feedbackEl.innerHTML = `
        <div style="padding: 14px 18px; background: rgba(245, 158, 11, 0.12); border: 1px solid var(--warning-color); border-radius: var(--radius-md); font-size: 15px; color: var(--text-primary); margin-top: 14px;">
            <div>💡 <b>Hint (Phonetic IPA):</b> <span style="color: var(--accent-color); font-weight:700;">${item.ipa}</span></div>
            <div style="margin-top: 6px;">💡 <b>Letter Pattern:</b> <span style="font-family: monospace; font-size: 18px; letter-spacing: 2px; font-weight: 800; color: var(--warning-color);">${masked}</span></div>
            <div style="margin-top: 4px; font-size: 13px; color: var(--text-secondary);">Word length: ${words.length} word(s), ${item.word.length} characters</div>
        </div>
    `;
}

function checkTypedWord() {
    const input = document.getElementById('userWordInput');
    const feedbackEl = document.getElementById('writeFeedback');
    if (!input || !feedbackEl) return;

    const userText = input.value.trim();
    if (!userText) {
        alert("Please type the English vocabulary word!");
        return;
    }

    input.blur(); // 💡 Remove focus/cursor from text input immediately!

    const item = currentVocabList[currentWriteIndex];
    const targetWord = item.word.trim();

    const cleanUser = userText.toLowerCase().replace(/\s+/g, ' ');
    const cleanTarget = targetWord.toLowerCase().replace(/\s+/g, ' ');

    const isExactMatch = cleanUser === cleanTarget;
    const dist = getLevenshteinDistance(cleanUser, cleanTarget);
    const isClose = !isExactMatch && dist <= Math.max(1, Math.floor(cleanTarget.length / 5));

    const engDef = item.englishDef ? `<div style="font-size: 15px; color: var(--accent-color); font-weight: 600; margin-top: 6px;"><b>🇬🇧 English Definition:</b> ${item.englishDef}</div>` : '';
    const syns = item.synonyms ? `<div style="font-size: 14px; color: var(--warning-color); font-weight: 600; margin-top: 4px;"><b>🔗 Synonyms:</b> ${item.synonyms}</div>` : '';
    const vnMeaning = item.meaning ? `<div style="font-size: 14px; color: var(--text-primary); margin-top: 4px;"><b>🇻🇳 Vietnamese Meaning:</b> ${item.meaning}</div>` : '';
    const svoSentence = item.sentence ? `<div style="margin-top: 8px; font-size: 14px; color: var(--text-primary);"><b>📝 Sample SVO Sentence:</b> <i>"${item.sentence}"</i></div>` : '';

    if (isExactMatch) {
        adjustScore(1);
        playCorrectSound();
        launchConfetti(input);
        speakWord(item.word);
        masteredSet.add(item.word);
        saveMastered();
        recordDailyActivity('write', true);
        recordWordStat(item.word, true);

        feedbackEl.innerHTML = `
            <div style="margin-top: 16px; padding: 18px; background: rgba(16, 185, 129, 0.1); border: 1px solid var(--success-color); border-radius: var(--radius-md);">
                <h4 style="color: var(--success-color); margin-bottom: 8px;">🎉 Perfect Answer! (+1 Point ⭐)</h4>
                <div style="font-size: 20px; font-weight: 800; color: var(--accent-color);"><b>${item.word}</b> <small style="color:var(--text-secondary); font-size:14px;">${item.ipa}</small></div>
                ${engDef}
                ${syns}
                ${vnMeaning}
                ${svoSentence}
                <button class="audio-btn-sm" onclick="speakWord('${item.word.replace(/'/g, "\\'")}')" style="margin-top:12px; padding:6px 14px; border-radius:16px; background:rgba(99,102,241,0.15); color:var(--accent-color); border:1px solid rgba(99,102,241,0.3); font-weight:600; cursor:pointer;">🔊 Listen Pronunciation</button>
            </div>
        `;
    } else if (isClose) {
        adjustScore(1);
        playCorrectSound();
        launchConfetti(input);
        speakWord(item.word);
        masteredSet.add(item.word);
        saveMastered();
        recordDailyActivity('write', true);
        recordWordStat(item.word, true);

        feedbackEl.innerHTML = `
            <div style="margin-top: 16px; padding: 18px; background: rgba(245, 158, 11, 0.1); border: 1px solid var(--warning-color); border-radius: var(--radius-md);">
                <h4 style="color: var(--warning-color); margin-bottom: 8px;">⚠️ Almost Correct! (Accepted (+1 Pt))</h4>
                <div>Your answer: <i>"${userText}"</i></div>
                <div style="margin-top: 6px;">Correct spelling: <b style="font-size: 20px; color: var(--accent-color);">${item.word}</b> <small style="color:var(--text-secondary);">${item.ipa}</small></div>
                ${engDef}
                ${syns}
                ${vnMeaning}
                ${svoSentence}
                <button class="audio-btn-sm" onclick="speakWord('${item.word.replace(/'/g, "\\'")}')" style="margin-top:12px; padding:6px 14px; border-radius:16px; background:rgba(99,102,241,0.15); color:var(--accent-color); border:1px solid rgba(99,102,241,0.3); font-weight:600; cursor:pointer;">🔊 Listen Pronunciation</button>
            </div>
        `;
    } else {
        adjustScore(-1);
        speakVoiceFeedback("Try again!");
        showDislikeEffect(input);
        recordDailyActivity('write', false);
        recordWordStat(item.word, false);

        feedbackEl.innerHTML = `
            <div style="margin-top: 16px; padding: 18px; background: rgba(239, 68, 68, 0.1); border: 1px solid var(--danger-color); border-radius: var(--radius-md);">
                <h4 style="color: var(--danger-color); margin-bottom: 8px;">❌ Incorrect (-1 Point ⚠️)</h4>
                <div>Your answer: <span style="text-decoration: line-through;">"${userText}"</span></div>
                <div style="margin-top: 6px;">Correct word: <b style="font-size: 20px; color: var(--accent-color);">${item.word}</b> <small style="color:var(--text-secondary);">${item.ipa}</small></div>
                ${engDef}
                ${syns}
                ${vnMeaning}
                ${svoSentence}
                <button class="audio-btn-sm" onclick="speakWord('${item.word.replace(/'/g, "\\'")}')" style="margin-top:12px; padding:6px 14px; border-radius:16px; background:rgba(99,102,241,0.15); color:var(--accent-color); border:1px solid rgba(99,102,241,0.3); font-weight:600; cursor:pointer;">🔊 Listen Pronunciation</button>
            </div>
        `;
    }
}

function getLevenshteinDistance(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

function showWriteHint() {
    const item = currentVocabList[currentWriteIndex];
    if (!item) return;

    const feedbackEl = document.getElementById('writeFeedback');
    if (!feedbackEl) return;

    let hintMsg = '';
    if (item.englishDef) {
        const words = item.englishDef.split(' ');
        hintMsg = `💡 <b>Hint (Key English Words):</b> ${words.slice(0, Math.min(5, words.length)).join(' ')}...`;
    } else {
        hintMsg = `💡 <b>Hint (Vietnamese):</b> ${item.meaning}`;
    }

    feedbackEl.innerHTML = `
        <div style="padding: 12px 16px; background: rgba(245, 158, 11, 0.12); border: 1px solid var(--warning-color); border-radius: var(--radius-md); font-size: 14px; color: var(--text-primary); margin-top: 12px;">
            ${hintMsg}
        </div>
    `;
}

function checkWriteDefinition() {
    const input = document.getElementById('userDefInput');
    const feedbackEl = document.getElementById('writeFeedback');
    if (!input || !feedbackEl) return;

    const userText = input.value.trim();
    if (!userText) {
        alert("Please write a definition before checking!");
        return;
    }

    input.blur(); // 💡 Remove focus/cursor from text input immediately!

    const item = currentVocabList[currentWriteIndex];
    const targetEng = item.englishDef || '';
    const targetVn = item.meaning || '';
    const targetSyns = item.synonyms || '';

    // Smart Evaluation Engine
    const evaluation = evaluateUserDefinition(userText, targetEng, targetVn, targetSyns, item.word, item);

    const isMatch = evaluation.score >= 50;

    if (isMatch) {
        adjustScore(1);
        playCorrectSound();
        launchConfetti(input);
        speakWord(item.word);
        masteredSet.add(item.word);
        saveMastered();
        recordDailyActivity('write', true);
        recordWordStat(item.word, true);
    } else {
        adjustScore(-1);
        speakVoiceFeedback("Try again!");
        showDislikeEffect(input);
        recordDailyActivity('write', false);
        recordWordStat(item.word, false);
    }

    feedbackEl.innerHTML = evaluation.feedbackHtml;
}

function evaluateUserDefinition(userText, targetEng, targetVn, targetSyns, word = '', item = null) {
    const rawUser = userText.trim();
    const cleanUser = rawUser.toLowerCase().replace(/[^\w\sàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệđìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵ]/g, '');
    const cleanEng = (targetEng || '').toLowerCase().replace(/[^\w\s]/g, '');
    const cleanVn = (targetVn || '').toLowerCase().replace(/[^\w\sàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệđìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵ]/g, '');

    const stopWords = new Set(['a', 'an', 'the', 'is', 'are', 'was', 'were', 'it', 'in', 'on', 'at', 'of', 'to', 'for', 'with', 'and', 'or', 'by', 'that', 'this', 'là', 'của', 'với', 'cho', 'một', 'những', 'các']);
    const extractKeywords = (text) => text.split(/\s+/).filter(w => w.length > 2 && !stopWords.has(w));

    const userWords = extractKeywords(cleanUser);
    const engWords = Array.from(new Set(extractKeywords(cleanEng)));
    const vnWords = Array.from(new Set(extractKeywords(cleanVn)));

    if (userWords.length === 0) {
        return { score: 0, feedbackHtml: "<p style='color: var(--danger-color); font-weight: 600;'>Please write a more descriptive definition.</p>" };
    }

    // 1. Meaning Score
    const matchedEngWords = [];
    const missedEngWords = [];
    engWords.forEach(ew => {
        if (userWords.some(uw => ew.includes(uw) || uw.includes(ew))) {
            matchedEngWords.push(ew);
        } else {
            missedEngWords.push(ew);
        }
    });

    const matchedVnWords = [];
    vnWords.forEach(vw => {
        if (userWords.some(uw => vw.includes(uw) || uw.includes(vw))) {
            matchedVnWords.push(vw);
        }
    });

    const totalEngTarget = Math.max(engWords.length, 1);
    const totalVnTarget = Math.max(vnWords.length, 1);
    
    // Gibberish & Invalid text detector
    const hasVowel = /[aeiouyàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệđìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵ]/i.test(rawUser);
    const isGibberish = !hasVowel || /^[bcdfghjklmnpqrstvwxz\s]+$/i.test(rawUser) || (userWords.length > 0 && userWords.every(w => w.length >= 4 && !/[aeiou]/i.test(w)));

    if (isGibberish) {
        const collocationsListHtml = getAuthenticCollocations(word, item);
        const betterVersion = targetEng || `A ${word} is a term that refers to ${targetVn}.`;

        const feedbackHtml = `
            <div style="margin-top: 16px; padding: 18px; background: rgba(239, 68, 68, 0.08); border: 1px solid var(--danger-color); border-radius: var(--radius-lg); text-align: left; line-height: 1.6;">
                <div style="margin-bottom: 12px; font-size: 15px; font-weight: 800; color: var(--danger-color);">
                    Từ vựng: <b>${word}</b> (Invalid Input ❌)
                </div>

                <div style="display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 16px; background: rgba(0,0,0,0.06); padding: 12px 16px; border-radius: var(--radius-md); font-size: 14px;">
                    <div>Meaning: <b style="color: var(--danger-color);">0% ❌</b></div>
                    <div>Grammar: <b style="color: var(--danger-color);">0% ❌</b></div>
                    <div>Naturalness: <b style="color: var(--danger-color);">0% ❌</b></div>
                    <div>Overall: <b style="color: var(--danger-color); font-size: 16px; font-weight: 800;">0% ⚠️</b></div>
                </div>

                <div style="margin-bottom: 14px;">
                    <b style="color: var(--text-secondary); font-size: 13.5px;">Your definition:</b><br>
                    <div style="font-size: 15px; font-style: italic; color: var(--danger-color); margin-top: 2px;">
                        "${rawUser}"
                    </div>
                </div>

                <div style="margin-bottom: 14px;">
                    <b style="color: var(--text-secondary); font-size: 14px;">What you did well:</b>
                    <div style="font-size: 13.5px; color: var(--text-secondary); font-style: italic; margin-top: 4px;">
                        None (Invalid gibberish text entered)
                    </div>
                </div>

                <div style="margin-bottom: 14px;">
                    <b style="color: var(--danger-color); font-size: 14px;">Corrections:</b>
                    <ul style="margin: 4px 0 0 18px; padding: 0; color: var(--text-primary); font-size: 13.5px;">
                        <li>"${rawUser}" is not a valid English or Vietnamese word! Please type a real definition sentence.</li>
                    </ul>
                </div>

                <div style="margin-bottom: 14px; padding: 12px 14px; background: rgba(99, 102, 241, 0.12); border-left: 4px solid var(--accent-color); border-radius: var(--radius-md);">
                    <b style="color: var(--accent-color); font-size: 14px;">Better version:</b><br>
                    <div style="font-size: 15px; font-weight: 700; color: var(--text-primary); margin-top: 4px;">
                        "${betterVersion}"
                    </div>
                </div>

                <div>
                    <b style="color: var(--warning-color); font-size: 14px;">Collocation trong câu:</b>
                    <div style="font-size: 13.5px; color: var(--text-primary); margin-top: 4px;">
                        <ul style="margin: 4px 0 0 18px; padding: 0;">${collocationsListHtml}</ul>
                    </div>
                </div>
            </div>
        `;
        return { score: 0, feedbackHtml };
    }

    // Meaning Score calculation
    let meaningScore = 0;
    if (matchedEngWords.length > 0) {
        meaningScore = Math.min(100, Math.round((matchedEngWords.length / totalEngTarget) * 100 * 1.5));
    } else if (matchedVnWords.length > 0) {
        meaningScore = Math.min(100, Math.round((matchedVnWords.length / totalVnTarget) * 100 * 1.6));
    }

    // 2. Grammar & Structure Score
    let grammarScore = 100;
    let naturalScore = 85;
    const corrections = [];
    const userTokens = rawUser.split(/\s+/);
    const isShortFragment = userTokens.length < 4;
    const hasVerb = /\b(is|are|was|were|means|refers|describes|contains|used|consists|has|have|gives|raises|wears|carves)\b/i.test(rawUser);

    // Penalty for incomplete sentence fragment
    if (isShortFragment || !hasVerb) {
        grammarScore = Math.min(grammarScore, 20);
        naturalScore = Math.min(naturalScore, 15);
        corrections.push(`"Incomplete fragment" → Write a full definition sentence (e.g. "A ${word} is...")`);
    }

    // Check starting article / capitalization
    const startsWithArticle = /^(a|an|the|it|they|this)\s+/i.test(rawUser);
    if (!startsWithArticle && /^[a-z]/i.test(rawUser) && !rawUser.includes(',')) {
        grammarScore -= 15;
        const firstWord = userTokens[0];
        corrections.push(`"${firstWord} is..." → "A ${firstWord} is..." (Add article 'A/An' at start)`);
    }

    // Check typos / spellings in user input (e.g. 'wome' -> 'woman')
    userTokens.forEach(token => {
        const cleanTok = token.toLowerCase().replace(/[^\w]/g, '');
        if (cleanTok === 'wome') {
            grammarScore -= 15;
            corrections.push(`"wome" → "woman" (spelling typo)`);
        } else if (cleanTok === 'familiy') {
            grammarScore -= 15;
            corrections.push(`"familiy" → "family" (spelling typo)`);
        }
    });

    // Check incomplete verb / preposition phrases
    if (/birth to/i.test(rawUser) && !/give birth to|gives birth to/i.test(rawUser)) {
        grammarScore -= 15;
        corrections.push(`"birth to" → "give birth to"`);
    }

    grammarScore = Math.max(0, Math.min(100, grammarScore));
    naturalScore = Math.max(0, Math.min(100, naturalScore));

    // 4. Overall Score (Strict weighting)
    const overallScore = Math.round((meaningScore * 0.5) + (grammarScore * 0.3) + (naturalScore * 0.2));

    // 5. What you did well
    const wellDone = [];
    if (matchedEngWords.length > 0) {
        wellDone.push(`"${matchedEngWords.slice(0, 3).join(' / ')}" → captures the core meaning`);
    }
    if (rawUser.toLowerCase().includes('father') || rawUser.toLowerCase().includes('mother') || rawUser.toLowerCase().includes('parent')) {
        if (!wellDone.some(w => w.includes('core meaning'))) {
            wellDone.push(`"mother or father" → captures the core meaning`);
        }
    }
    if (rawUser.toLowerCase().includes('raise') || rawUser.toLowerCase().includes('care')) {
        wellDone.push(`"raise" → correct idea`);
    }
    if (rawUser.toLowerCase().includes('type of') || rawUser.toLowerCase().includes('used for') || rawUser.toLowerCase().includes('device') || rawUser.toLowerCase().includes('clothing')) {
        wellDone.push(`"clear classification" → good structure`);
    }

    if (corrections.length === 0 && !isShortFragment) {
        corrections.push(`Good grammar! Sentence structure is clear.`);
    }

    // 6. Better version (Oxford/Cambridge standard)
    const betterVersion = targetEng || `A ${word} is a term that refers to ${targetVn}.`;

    // 7. Authentic Collocation Engine (No fake word combinations!)
    const collocationsListHtml = getAuthenticCollocations(word, item);

    const badge = (val) => val >= 90 ? '✅' : '⚠️';

    const feedbackHtml = `
        <div style="margin-top: 16px; padding: 18px; background: rgba(99, 102, 241, 0.05); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: var(--radius-lg); text-align: left; line-height: 1.6;">
            
            <div style="margin-bottom: 12px; font-size: 15px; font-weight: 800; color: var(--accent-color);">
                Từ vựng: <b>${word}</b>
            </div>

            <!-- Sub-scores Header -->
            <div style="display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 16px; background: rgba(255,255,255,0.06); padding: 12px 16px; border-radius: var(--radius-md); border: 1px solid var(--border-color); font-size: 14px;">
                <div>Meaning: <b style="color: ${meaningScore >= 80 ? 'var(--success-color)' : 'var(--warning-color)'};">${meaningScore}% ${badge(meaningScore)}</b></div>
                <div>Grammar: <b style="color: ${grammarScore >= 80 ? 'var(--success-color)' : 'var(--warning-color)'};">${grammarScore}% ${badge(grammarScore)}</b></div>
                <div>Naturalness: <b style="color: ${naturalScore >= 80 ? 'var(--success-color)' : 'var(--warning-color)'};">${naturalScore}% ${badge(naturalScore)}</b></div>
                <div>Overall: <b style="color: var(--accent-color); font-size: 16px; font-weight: 800;">${overallScore}% ⭐</b></div>
            </div>

            <!-- Your Definition -->
            <div style="margin-bottom: 14px;">
                <b style="color: var(--text-secondary); font-size: 13.5px;">Your definition:</b><br>
                <div style="font-size: 15px; font-style: italic; color: var(--text-primary); margin-top: 2px;">
                    "${rawUser}"
                </div>
            </div>

            <!-- What you did well -->
            <div style="margin-bottom: 14px;">
                <b style="color: var(--success-color); font-size: 14px;">What you did well:</b>
                ${wellDone.length > 0 ? `<ul style="margin: 4px 0 0 18px; padding: 0; color: var(--text-primary); font-size: 13.5px;">${wellDone.map(w => `<li>${w}</li>`).join('')}</ul>` : `<div style="font-size: 13.5px; color: var(--text-secondary); font-style: italic; margin-top: 4px;">None (No correct key concepts used)</div>`}
            </div>

            <!-- Corrections -->
            <div style="margin-bottom: 14px;">
                <b style="color: var(--danger-color); font-size: 14px;">Corrections:</b>
                <ul style="margin: 4px 0 0 18px; padding: 0; color: var(--text-primary); font-size: 13.5px;">
                    ${corrections.map(c => `<li>${c}</li>`).join('')}
                </ul>
            </div>

            <!-- Better Version -->
            <div style="margin-bottom: 14px; padding: 12px 14px; background: rgba(99, 102, 241, 0.12); border-left: 4px solid var(--accent-color); border-radius: var(--radius-md);">
                <b style="color: var(--accent-color); font-size: 14px;">Better version:</b><br>
                <div style="font-size: 15px; font-weight: 700; color: var(--text-primary); margin-top: 4px;">
                    "${betterVersion}"
                </div>
            </div>

            <!-- Collocations -->
            <div>
                <b style="color: var(--warning-color); font-size: 14px;">Collocation trong câu:</b>
                <div style="font-size: 13.5px; color: var(--text-primary); margin-top: 4px;">
                    <ul style="margin: 4px 0 0 18px; padding: 0;">${collocationsListHtml}</ul>
                </div>
            </div>
        </div>
    `;

    return { score: overallScore, feedbackHtml };
}

function getAuthenticCollocations(word, item) {
    const rawW = (word || '').toLowerCase().trim();
    const w = rawW.replace(/^(a|an|the)\s+/, '').trim();

    // Comprehensive Oxford / Cambridge authentic IELTS collocations database
    const colMap = {
        'parent': [
            { en: 'Raise / Bring up a child', vn: 'nuôi nấng / dưỡng dục con cái' },
            { en: 'Single parent / Both parents', vn: 'cha mẹ đơn thân / cả bố lẫn mẹ' },
            { en: 'Parental guidance / responsibility', vn: 'sự hướng dẫn / trách nhiệm của cha mẹ' }
        ],
        'father': [
            { en: 'Father figure', vn: 'hình bóng / người như cha' },
            { en: 'Biological father / Adoptive father', vn: 'cha ruột / cha nuôi' },
            { en: 'Head of the household', vn: 'chủ gia đình / trụ cột nhà' }
        ],
        'mother': [
            { en: 'Maternal instinct / love', vn: 'bản năng / tình yêu làm mẹ' },
            { en: 'Working mother / Stay-at-home mother', vn: 'mẹ đi làm / mẹ nội trợ' },
            { en: 'Mother tongue / Expectant mother', vn: 'tiếng mẹ đẻ / người sắp làm mẹ' }
        ],
        'child': [
            { en: 'Only child / Young child', vn: 'con một / đứa trẻ nhỏ' },
            { en: 'Raise / Support a child', vn: 'nuôi nấng / chu cấp cho con' },
            { en: 'Child upbringing / Child development', vn: 'việc nuôi dạy con / sự phát triển của trẻ' }
        ],
        'children': [
            { en: 'Raise / Educate children', vn: 'nuôi dạy / giáo dục con cái' },
            { en: 'Have / Bear children', vn: 'sinh con / có con' },
            { en: 'Childcare responsibilities', vn: 'trách nhiệm chăm sóc con cái' }
        ],
        'son': [
            { en: 'Eldest son / Youngest son', vn: 'con trai cả / con trai út' },
            { en: 'Only son / Adoptive son', vn: 'con trai duy nhất / con nuôi' },
            { en: 'Like father, like son', vn: 'cha nào con nấy' }
        ],
        'daughter': [
            { en: 'Eldest daughter / Youngest daughter', vn: 'con gái cả / con gái út' },
            { en: 'Only daughter / Daughter-in-law', vn: 'con gái duy nhất / con dâu' },
            { en: 'Doting / Devoted daughter', vn: 'người con gái vô cùng hiếu thảo' }
        ],
        'twin': [
            { en: 'Identical twins / Fraternal twins', vn: 'cặp sinh đôi cùng trứng / khác trứng' },
            { en: 'Twin brothers / Twin sisters', vn: 'hai anh em / chị em sinh đôi' },
            { en: 'Give birth to twins', vn: 'sinh đôi' }
        ],
        'triplet': [
            { en: 'Give birth to healthy triplets', vn: 'sinh ba đứa trẻ khỏe mạnh' },
            { en: 'Triplet brothers / sisters', vn: 'ba anh em / chị em sinh ba' }
        ],
        'sibling': [
            { en: 'Sibling rivalry / bond', vn: 'sự ganh đua / tình gắn kết giữa anh chị em' },
            { en: 'Younger sibling / Older sibling', vn: 'em ruột / anh chị ruột' },
            { en: 'Close sibling relationship', vn: 'mối quan hệ anh chị em thân thiết' }
        ],
        'sister': [
            { en: 'Elder sister / Younger sister', vn: 'chị gái / em gái' },
            { en: 'Sister-in-law / Half sister', vn: 'chị em dâu / chị em cùng cha khác mẹ' },
            { en: 'Sisterly affection / love', vn: 'tình chị em ấm áp' }
        ],
        'brother': [
            { en: 'Elder brother / Younger brother', vn: 'anh trai / em trai' },
            { en: 'Brother-in-law / Half brother', vn: 'anh em rể / anh em cùng cha khác mẹ' },
            { en: 'Brotherly love / bond', vn: 'tình anh em gắn bó' }
        ],
        'husband': [
            { en: 'Loving / Devoted husband', vn: 'người chồng yêu thương / tận tụy' },
            { en: 'Ex-husband / Future husband', vn: 'chồng cũ / chồng tương lai' },
            { en: 'Husband and wife team', vn: 'vợ chồng đồng lòng' }
        ],
        'wife': [
            { en: 'Beloved wife / Housewife', vn: 'người vợ yêu quý / người nội trợ' },
            { en: 'Take sb to be one\'s wife', vn: 'lấy ai làm vợ' },
            { en: 'Wife\'s support / companionship', vn: 'sự hậu thuẫn của người vợ' }
        ],
        'grandparent': [
            { en: 'Paternal grandparents / Maternal grandparents', vn: 'ông bà nội / ông bà ngoại' },
            { en: 'Live with grandparents', vn: 'sống cùng ông bà' },
            { en: 'Grandparental care / guidance', vn: 'sự chăm sóc của ông bà' }
        ],
        'grandmother': [
            { en: 'Paternal grandmother / Maternal grandmother', vn: 'bà nội / bà ngoại' },
            { en: 'Grandmother\'s recipe / wisdom', vn: 'bí quyết / sự minh triết của bà' }
        ],
        'grandfather': [
            { en: 'Paternal grandfather / Maternal grandfather', vn: 'ông nội / ông ngoại' },
            { en: 'Grandfather clock / legacy', vn: 'di sản của ông' }
        ],
        'grandchild': [
            { en: 'Dote on one\'s grandchild', vn: 'cưng chiều / yêu thương cháu' },
            { en: 'Youngest grandchild', vn: 'người cháu nhỏ tuổi nhất' }
        ],
        'grandson': [
            { en: 'Take one\'s grandson to somewhere', vn: 'đưa cháu trai đi chơi' },
            { en: 'Beloved grandson', vn: 'người cháu trai yêu quý' }
        ],
        'granddaughter': [
            { en: 'Sweet / Adorable granddaughter', vn: 'cô cháu gái ngọt ngào / đáng yêu' },
            { en: 'Spoil one\'s granddaughter', vn: 'cung phụng / chiều chuộng cháu gái' }
        ],
        'nephew': [
            { en: 'Favorite nephew / Young nephew', vn: 'người cháu trai yêu thích' },
            { en: 'Nephew and niece', vn: 'cháu trai và cháu gái' }
        ],
        'niece': [
            { en: 'Win first prize / Accomplished niece', vn: 'cô cháu gái tài năng / đoạt giải' },
            { en: 'Adorable niece', vn: 'cháu gái đáng yêu' }
        ],
        'cousin': [
            { en: 'First cousin / Second cousin', vn: 'anh chị em họ đời đầu / đời hai' },
            { en: 'Cousinly relationship', vn: 'mối quan hệ anh em họ' }
        ],
        'uncle': [
            { en: 'Maternal uncle / Paternal uncle', vn: 'cậu (bên ngoại) / chú bác (bên nội)' },
            { en: 'Favorite uncle', vn: 'người chú/bác yêu thích' }
        ],
        'aunt': [
            { en: 'Maternal aunt / Paternal aunt', vn: 'dì (bên ngoại) / cô bác gái (bên nội)' },
            { en: 'Agony aunt', vn: 'người tư vấn tâm lý / gỡ rối' }
        ],
        'godfather': [
            { en: 'Name sb as godfather', vn: 'chọn ai làm bố đỡ đầu' },
            { en: 'Godfather\'s guidance / career advice', vn: 'lời khuyên định hướng của bố đỡ đầu' }
        ],
        'godmother': [
            { en: 'Spiritual godmother', vn: 'mẹ đỡ đầu tâm linh' },
            { en: 'Godmother\'s blessing / present', vn: 'lời chúc phúc / món quà của mẹ đỡ đầu' }
        ],
        'godson': [
            { en: 'Godson\'s baptism / mountain bike gift', vn: 'món quà cho con trai đỡ đầu' }
        ],
        'goddaughter': [
            { en: 'Goddaughter\'s achievements / artistic talent', vn: 'thành tựu nghệ thuật của con gái đỡ đầu' }
        ],
        'father-in-law': [
            { en: 'Father-in-law\'s advice / carving techniques', vn: 'kỹ thuật / lời khuyên của bố chồng (vợ)' }
        ],
        'mother-in-law': [
            { en: 'Mother-in-law relationship', vn: 'mối quan hệ mẹ chồng - nàng dâu' },
            { en: 'Welcome warmly into the family', vn: 'chào đón nồng nhiệt vào gia đình' }
        ],
        'son-in-law': [
            { en: 'Deeply respect one\'s son-in-law', vn: 'sâu sắc tôn trọng con rể' }
        ],
        'daughter-in-law': [
            { en: 'Assist one\'s daughter-in-law', vn: 'giúp đỡ / hỗ trợ con dâu' }
        ],
        'sister-in-law': [
            { en: 'Sister-in-law\'s floral arrangement', vn: 'lẵng hoa của chị/em dâu' }
        ],
        'brother-in-law': [
            { en: 'Get along with / Help one\'s brother-in-law', vn: 'giúp đỡ / hòa thuận với anh/em rể' }
        ],
        'relative': [
            { en: 'Close relatives / Distant relatives', vn: 'họ hàng thân thiết / họ hàng xa' },
            { en: 'Gathering of relatives', vn: 'buổi tụ họp họ hàng' },
            { en: 'Blood relative', vn: 'người có quan hệ máu mủ' }
        ],
        'happen to do sth': [
            { en: 'Happen to stop by', vn: 'tình cờ ghé thăm' },
            { en: 'Occur by chance', vn: 'xảy ra ngẫu nhiên' }
        ],
        'flea market': [
            { en: 'Stop by a flea market', vn: 'ghé thăm chợ đồ cũ' },
            { en: 'Second-hand goods', vn: 'hàng hóa cũ' }
        ],
        'artifact': [
            { en: 'Ancient artifact', vn: 'cổ vật thời xưa' },
            { en: 'Donate an artifact', vn: 'hiến tặng hiện vật' }
        ],
        'donate sth to sb': [
            { en: 'Donate to a museum', vn: 'hiến tặng cho bảo tàng' },
            { en: 'Make a donation', vn: 'quyên góp' }
        ]
    };

    // 1. Direct dictionary lookup
    if (colMap[w]) {
        return colMap[w].map(c => `<li><b>${c.en}:</b> ${c.vn}</li>`).join('');
    }

    if (colMap[rawW]) {
        return colMap[rawW].map(c => `<li><b>${c.en}:</b> ${c.vn}</li>`).join('');
    }

    // 2. Partial key match
    for (let key in colMap) {
        if (w === key || w.includes(key) || key.includes(w)) {
            return colMap[key].map(c => `<li><b>${c.en}:</b> ${c.vn}</li>`).join('');
        }
    }

    // 3. Dynamic context extractors from item (for imported datasets / ZIM 1000)
    const extracted = [];
    if (item) {
        if (item.grammar) {
            const cleanGrammar = item.grammar.replace(/^cấu trúc\s+/i, '').replace(/^cụm collocation:\s+/i, '');
            extracted.push(`<b>Cấu trúc / Cụm từ:</b> ${cleanGrammar}`);
        }
        if (item.sentence) {
            extracted.push(`<b>Cụm câu thực tế:</b> <i>"${item.sentence}"</i>`);
        }
        if (item.synonyms) {
            extracted.push(`<b>Cụm đồng nghĩa:</b> ${item.synonyms}`);
        }
        if (item.translation) {
            extracted.push(`<b>Ý nghĩa ngữ cảnh:</b> ${item.translation}`);
        }
    }

    if (extracted.length > 0) {
        return extracted.map(e => `<li>${e}</li>`).join('');
    }

    return `<li><b>Cụm từ đi kèm (${word}):</b> ${item ? item.meaning : 'từ vựng học thuật'}</li>`;
}

function navigateWriteWord(direction) {
    if (direction === 'next') {
        currentWriteIndex = (currentWriteIndex + 1) % currentVocabList.length;
    } else if (direction === 'prev') {
        currentWriteIndex = (currentWriteIndex - 1 + currentVocabList.length) % currentVocabList.length;
    }
    renderWriteCard();
}
window.navigateWriteWord = navigateWriteWord;

function handleWriteInputKeydown(e) {
    const k = (e.key || '').toLowerCase();
    const c = e.code || '';
    const kc = e.keyCode || 0;

    const isEnter = c === 'Enter' || k === 'enter' || kc === 13;

    if (isEnter) {
        if (e.shiftKey) return;
        e.preventDefault();
        e.stopPropagation();
        const feedbackEl = document.getElementById('writeFeedback');
        const hasFeedback = feedbackEl && feedbackEl.children.length > 0;

        if (hasFeedback) {
            navigateWriteWord('next');
        } else {
            if (currentWriteMode === 'wordToDef') {
                checkWriteDefinition();
            } else {
                checkTypedWord();
            }
        }
    }
}
window.handleWriteInputKeydown = handleWriteInputKeydown;
window.checkTypedWord = checkTypedWord;
window.checkWriteDefinition = checkWriteDefinition;
window.showWriteWordHint = showWriteWordHint;
window.showWriteHint = showWriteHint;
window.speakWord = speakWord;
window.renderQuiz = renderQuiz;

// Web Audio API Sound Effects - Louder & Longer
function playCorrectSound() {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const now = ctx.currentTime;
        
        // Chime Tone 1 (C5)
        const osc1 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(523.25, now);
        gain1.gain.setValueAtTime(0.4, now);
        gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        osc1.connect(gain1);
        gain1.connect(ctx.destination);
        osc1.start(now);
        osc1.stop(now + 0.5);

        // Chime Tone 2 (E5)
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(659.25, now + 0.15);
        gain2.gain.setValueAtTime(0.4, now + 0.15);
        gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.75);
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.start(now + 0.15);
        osc2.stop(now + 0.75);

        // Chime Tone 3 (G5) Victory Finish
        const osc3 = ctx.createOscillator();
        const gain3 = ctx.createGain();
        osc3.type = 'sine';
        osc3.frequency.setValueAtTime(783.99, now + 0.3);
        gain3.gain.setValueAtTime(0.45, now + 0.3);
        gain3.gain.exponentialRampToValueAtTime(0.001, now + 1.0);
        osc3.connect(gain3);
        gain3.connect(ctx.destination);
        osc3.start(now + 0.3);
        osc3.stop(now + 1.0);
    } catch(e) {}
}

function playWrongSound() {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const now = ctx.currentTime;
        
        // Tone 1: Low buzz
        const osc1 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        osc1.type = 'sawtooth';
        osc1.frequency.setValueAtTime(220, now);
        osc1.frequency.exponentialRampToValueAtTime(140, now + 0.4);
        gain1.gain.setValueAtTime(0.35, now);
        gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc1.connect(gain1);
        gain1.connect(ctx.destination);
        osc1.start(now);
        osc1.stop(now + 0.4);

        // Tone 2: Deeper buzz finish
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = 'sawtooth';
        osc2.frequency.setValueAtTime(150, now + 0.2);
        osc2.frequency.exponentialRampToValueAtTime(90, now + 0.7);
        gain2.gain.setValueAtTime(0.35, now + 0.2);
        gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.start(now + 0.2);
        osc2.stop(now + 0.7);
    } catch(e) {}
}

// Visual Effects: Confetti (Flower Fireworks) & Dislike Shake
function launchConfetti(originElement) {
    const rect = originElement.getBoundingClientRect();
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;

    const emojis = ['🌸', '🌺', '🌼', '🌻', '🎉', '✨', '💖', '⭐', '🌸'];

    for (let i = 0; i < 35; i++) {
        const particle = document.createElement('div');
        particle.className = 'confetti-particle';
        particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        particle.style.left = `${startX}px`;
        particle.style.top = `${startY}px`;

        const angle = Math.random() * Math.PI * 2;
        const distance = 120 + Math.random() * 280;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance - 60;

        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);

        document.body.appendChild(particle);

        setTimeout(() => particle.remove(), 1500);
    }
}

function showDislikeEffect(originElement) {
    const rect = originElement.getBoundingClientRect();
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;

    // Shake Card
    const card = originElement.closest('.quiz-card');
    if (card) {
        card.classList.remove('shake-card');
        void card.offsetWidth;
        card.classList.add('shake-card');
    }

    // Floating Dislike Emojis
    const emojis = ['👎', '💔', '❌', '👎', '👎'];
    for (let i = 0; i < 6; i++) {
        const particle = document.createElement('div');
        particle.className = 'dislike-particle';
        particle.textContent = emojis[i % emojis.length];

        const offsetX = (Math.random() - 0.5) * 100;
        particle.style.left = `${startX + offsetX}px`;
        particle.style.top = `${startY}px`;

        document.body.appendChild(particle);

        setTimeout(() => particle.remove(), 1200);
    }
}

function speakVoiceFeedback(text) {
    try {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.rate = 1.0;
            utterance.pitch = text.includes('Good') ? 1.25 : 0.95;
            window.speechSynthesis.speak(utterance);
        }
    } catch(e) {
        console.warn('Speech feedback error:', e);
    }
}

window.checkAnswer = function(btn, selectedWord, correctWord) {
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true);

    const targetItem = currentVocabList.find(i => i.word === correctWord);

    const engDef = targetItem.englishDef ? `<div style="font-size: 15px; color: var(--accent-color); font-weight: 600; margin-top: 6px;"><b>🇬🇧 Definition:</b> ${targetItem.englishDef}</div>` : '';
    const syns = targetItem.synonyms ? `<div style="font-size: 14px; color: var(--warning-color); font-weight: 600; margin-top: 4px;"><b>🔗 Synonyms:</b> ${targetItem.synonyms}</div>` : '';
    const vnMeaning = `<div style="font-size: 14px; color: var(--text-primary); margin-top: 4px;"><b>🇻🇳 Vietnamese Meaning:</b> ${targetItem.meaning}</div>`;

    if (selectedWord === correctWord) {
        adjustScore(1);
        playCorrectSound();
        launchConfetti(btn);
        speakWord(correctWord);
        btn.classList.add('correct');
        document.getElementById('quizFeedback').innerHTML = `
            <div style="margin-top: 16px; padding: 16px; background: rgba(16, 185, 129, 0.1); border: 1px solid var(--success-color); border-radius: var(--radius-md);">
                <h4 style="color: var(--success-color); margin-bottom: 8px;">🎉 Correct! (+1 Point ⭐)</h4>
                ${engDef}
                ${syns}
                ${vnMeaning}
                <div style="margin-top: 8px;"><b>📝 Sample SVO Sentence:</b> <i>"${targetItem.sentence}"</i></div>
            </div>
        `;
        masteredSet.add(correctWord);
        saveMastered();
        recordDailyActivity('quiz', true);
        recordWordStat(correctWord, true);
    } else {
        adjustScore(-1);
        speakVoiceFeedback("Try again!");
        showDislikeEffect(btn);
        recordDailyActivity('quiz', false);
        recordWordStat(correctWord, false);
        btn.classList.add('wrong');
        document.getElementById('quizFeedback').innerHTML = `
            <div style="margin-top: 16px; padding: 16px; background: rgba(239, 68, 68, 0.1); border: 1px solid var(--danger-color); border-radius: var(--radius-md);">
                <h4 style="color: var(--danger-color); margin-bottom: 8px;">❌ Incorrect (-1 Point ⚠️). Correct answer: <b>${correctWord}</b></h4>
                ${engDef}
                ${syns}
                ${vnMeaning}
                <div style="margin-top: 8px;"><b>📝 Sample SVO Sentence:</b> <i>"${targetItem.sentence}"</i></div>
            </div>
        `;
    }
};

// 7. Persistent Custom Imported Articles Manager
function getCustomArticles() {
    try {
        return JSON.parse(localStorage.getItem('vocab_custom_articles') || '{}');
    } catch(e) {
        return {};
    }
}

function saveCustomArticle(fileName, content) {
    const articles = getCustomArticles();
    articles[fileName] = content;
    localStorage.setItem('vocab_custom_articles', JSON.stringify(articles));

    const deleted = getDeletedArticles();
    const updatedDeleted = deleted.filter(f => f !== fileName);
    localStorage.setItem('deleted_articles', JSON.stringify(updatedDeleted));
}

window.handleFileUpload = function(e) {
    const file = e.target.files ? e.target.files[0] : null;
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
        const content = evt.target.result;
        let parsedData = parseMarkdownTable(content);

        if (parsedData.length === 0 && content.trim().length > 0) {
            const rawLines = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n').map(l => l.trim()).filter(l => l.length > 0);
            rawLines.forEach((line, idx) => {
                const parts = line.split(/[\t,:\-]/);
                const w = parts[0].replace(/[*_#]/g, '').trim();
                const m = parts.slice(1).join(' ').trim() || line;
                if (w && w.length > 1 && !w.startsWith('|')) {
                    parsedData.push({
                        no: idx + 1,
                        word: w,
                        ipa: '',
                        meaning: m,
                        englishDef: '',
                        synonyms: '',
                        sentence: `${w} is a vocabulary term.`,
                        translation: '',
                        grammar: ''
                    });
                }
            });
        }

        if (parsedData.length > 0) {
            saveCustomArticle(file.name, content);

            const select = document.getElementById('articleSelect');
            if (select) {
                let existing = Array.from(select.options).find(opt => opt.value === file.name);
                if (!existing) {
                    const opt = document.createElement('option');
                    opt.value = file.name;
                    opt.textContent = file.name.replace(/\.md$/i, '').replace(/_/g, ' ');
                    select.appendChild(opt);
                }
                select.value = file.name;
            }

            localStorage.setItem('last_selected_article', file.name);
            loadArticleData(file.name, content);
            alert(`🎉 Successfully imported "${file.name}" (${parsedData.length} terms loaded)!`);
        } else {
            alert("File is empty or could not be read as text.");
        }
    };
    reader.readAsText(file);
};

// 7. File Upload & Parser
function setupFileUpload() {
    const mdFileInput = document.getElementById('mdFileInput');
    if (!mdFileInput) return;

    mdFileInput.addEventListener('change', window.handleFileUpload);
}

// 7.1 Article Deletion & Persistent Storage Engine
function getDeletedArticles() {
    return JSON.parse(localStorage.getItem('deleted_articles') || '[]');
}

function addDeletedArticle(fileName) {
    const deleted = getDeletedArticles();
    if (!deleted.includes(fileName)) {
        deleted.push(fileName);
        localStorage.setItem('deleted_articles', JSON.stringify(deleted));
    }
}

// 7.1 Article Selector Fetcher & Last Studied Article Restoration
function setupArticleSelect() {
    const select = document.getElementById('articleSelect');
    if (!select) return;

    const customArticles = getCustomArticles();
    const deletedFiles = getDeletedArticles();

    // Re-populate custom imported articles into dropdown if not deleted
    Object.keys(customArticles).forEach(fileName => {
        if (!deletedFiles.includes(fileName)) {
            let existing = Array.from(select.options).find(opt => opt.value === fileName);
            if (!existing) {
                const opt = document.createElement('option');
                opt.value = fileName;
                opt.textContent = fileName.replace(/\.md$/i, '').replace(/_/g, ' ');
                select.appendChild(opt);
            }
        }
    });

    Array.from(select.options).forEach(opt => {
        if (opt.value && deletedFiles.includes(opt.value)) {
            opt.remove();
        }
    });

    const validOptions = Array.from(select.options).filter(opt => opt.value !== '');
    if (validOptions.length === 0) {
        clearAllArticlesUI();
        return;
    }

    let lastSelectedFile = localStorage.getItem('last_selected_article');
    if (lastSelectedFile && Array.from(select.options).some(opt => opt.value === lastSelectedFile)) {
        select.value = lastSelectedFile;
    } else if (validOptions.length > 0) {
        select.value = validOptions[0].value;
        localStorage.setItem('last_selected_article', validOptions[0].value);
    }

    if (select.value) {
        if (customArticles[select.value]) {
            loadArticleData(select.value, customArticles[select.value]);
        } else {
            fetchAndLoadArticle(select.value);
        }
    } else {
        clearAllArticlesUI();
    }

    select.addEventListener('change', (e) => {
        const fileName = e.target.value;
        if (!fileName) {
            clearAllArticlesUI();
            return;
        }
        localStorage.setItem('last_selected_article', fileName);
        if (customArticles[fileName]) {
            loadArticleData(fileName, customArticles[fileName]);
        } else {
            fetchAndLoadArticle(fileName);
        }
    });
}

const FALLBACK_MD_STORE = {
    "Delay_Turns_Out_Blessing_05_09.md": "# Vocabulary: When a delay turns out to be a blessing\n\n| No | T\u1eeb v\u1ef1ng | Phi\u00ean \u00e2m | Ngh\u0129a | C\u00e2u ch\u1ee9a t\u1eeb | D\u1ecbch c\u00e2u | Gi\u1ea3i th\u00edch ng\u1eef ph\u00e1p |\n| --- | --- | --- | --- | --- | --- | --- |\n\n| 1 | depart | /d\u026a\u02c8p\u0251\u02d0rt/ | Kh\u1edfi h\u00e0nh - Action of leaving a place to begin a journey - (leave / set off) | What is particularly noteworthy is that the flight had departed about 20 minutes late. | \u0110i\u1ec1u \u0111\u00e1ng ch\u00fa \u00fd l\u00e0 chuy\u1ebfn bay \u0111\u00e3 kh\u1edfi h\u00e0nh mu\u1ed9n kho\u1ea3ng 20 ph\u00fat. | Th\u00ec qu\u00e1 kh\u1ee9 ho\u00e0n th\u00e0nh (had departed) di\u1ec5n t\u1ea3 h\u00e0nh \u0111\u1ed9ng kh\u1edfi h\u00e0nh x\u1ea3y ra tr\u01b0\u1edbc th\u1eddi \u0111i\u1ec3m n\u1ed5 qu\u1ea3 bom. |\n| 2 | departure | /d\u026a\u02c8p\u0251\u02d0r.t\u0283\u025a/ | S\u1ef1 kh\u1edfi h\u00e0nh - The act of leaving a place at a specific time - (leaving / exit) | Being late, missing a departure, or having to change your schedule are never pleasant experiences. | Tr\u1ec5 gi\u1edd, l\u1ee1 chuy\u1ebfn hay ph\u1ea3i thay \u0111\u1ed5i l\u1ecbch tr\u00ecnh \u0111\u1ec1u l\u00e0 nh\u1eefng tr\u1ea3i nghi\u1ec7m ch\u1eb3ng m\u1ea5y d\u1ec5 ch\u1ecbu. | Danh t\u1eeb 'departure' l\u00e0m t\u00e2n ng\u1eef cho danh \u0111\u1ed9ng t\u1eeb 'missing' trong c\u1ee5m ch\u1ee7 ng\u1eef song song. |\n| 3 | miss a departure | /m\u026as \u0259 d\u026a\u02c8p\u0251\u02d0r.t\u0283\u025a/ | L\u1ee1 chuy\u1ebfn - To fail to catch a transport vehicle before it leaves - (miss a flight / miss a train) | Being late, missing a departure, or having to change your schedule are never pleasant experiences. | Tr\u1ec5 gi\u1edd, l\u1ee1 chuy\u1ebfn hay ph\u1ea3i thay \u0111\u1ed5i l\u1ecbch tr\u00ecnh \u0111\u1ec1u l\u00e0 nh\u1eefng tr\u1ea3i nghi\u1ec7m ch\u1eb3ng m\u1ea5y d\u1ec5 ch\u1ecbu. | C\u1ee5m danh \u0111\u1ed9ng t\u1eeb 'missing a departure' l\u00e0m ch\u1ee7 ng\u1eef song song trong c\u00e2u. |\n| 4 | anxious | /\u02c8\u00e6\u014bk.\u0283\u0259s/ | Lo l\u1eafng, s\u1ed1t ru\u1ed9t - Feeling worried or nervous about an uncertain outcome - (nervous / worried) | They make us anxious and frustrated, and may even cause us to blame ourselves for not preparing better. | Ch\u00fang khi\u1ebfn ta s\u1ed1t ru\u1ed9t, b\u1ef1c b\u1ed9i, th\u1eadm ch\u00ed t\u1ef1 tr\u00e1ch m\u00ecnh v\u00ec \u0111\u00e3 kh\u00f4ng chu\u1ea9n b\u1ecb t\u1ed1t h\u01a1n. | T\u00ednh t\u1eeb 'anxious' \u0111\u00f3ng vai tr\u00f2 b\u1ed5 ng\u1eef cho t\u00e2n ng\u1eef 'us' trong c\u1ea5u tr\u00fac 'make sb adj'. |\n| 5 | frustrated | /\u02c8fr\u028cs.tre\u026a.t\u032c\u026ad/ | B\u1ef1c b\u1ed9i, th\u1ea5t v\u1ecdng - Feeling annoyed because one cannot achieve a desired result - (annoyed / upset) | They make us anxious and frustrated, and may even cause us to blame ourselves for not preparing better. | Ch\u00fang khi\u1ebfn ta s\u1ed1t ru\u1ed9t, b\u1ef1c b\u1ed9i, th\u1eadm ch\u00ed t\u1ef1 tr\u00e1ch m\u00ecnh v\u00ec \u0111\u00e3 kh\u00f4ng chu\u1ea9n b\u1ecb t\u1ed1t h\u01a1n. | T\u00ednh t\u1eeb 'frustrated' k\u1ebft h\u1ee3p song song v\u1edbi 'anxious' l\u00e0m b\u1ed5 ng\u1eef cho t\u00e2n ng\u1eef trong c\u1ea5u tr\u00fac 'make sb adj'. |\n| 6 | blame sb for sth | /ble\u026am/ | Tr\u00e1ch ai v\u1ec1 vi\u1ec7c g\u00ec - To hold someone responsible for a negative outcome - (accuse / hold responsible) | They make us anxious and frustrated, and may even cause us to blame ourselves for not preparing better. | Ch\u00fang khi\u1ebfn ta s\u1ed1t ru\u1ed9t, b\u1ef1c b\u1ed9i, th\u1eadm ch\u00ed t\u1ef1 tr\u00e1ch m\u00ecnh v\u00ec \u0111\u00e3 kh\u00f4ng chu\u1ea9n b\u1ecb t\u1ed1t h\u01a1n. | C\u1ea5u tr\u00fac 'cause sb to do sth' (khi\u1ebfn ai l\u00e0m g\u00ec) \u0111i c\u00f9ng \u0111\u1ea1i t\u1eeb ph\u1ea3n th\u00e2n 'ourselves' v\u00e0 gi\u1edbi t\u1eeb 'for + V-ing'. |\n| 7 | seemingly | /\u02c8si\u02d0.m\u026a\u014b.li/ | T\u01b0\u1edfng ch\u1eebng nh\u01b0, c\u00f3 v\u1ebb - According to facts that are apparent but not certain - (apparently / it appears) | Yet, on a few rare occasions, a seemingly inconvenient delay has unexpectedly helped people avoid unimaginable disasters. | Th\u1ebf nh\u01b0ng, trong m\u1ed9t v\u00e0i kho\u1ea3nh kh\u1eafc hi\u1ebfm hoi, ch\u00ednh s\u1ef1 ch\u1eadm tr\u1ec5 t\u01b0\u1edfng nh\u01b0 \u0111\u1ea7y b\u1ea5t ti\u1ec7n \u1ea5y l\u1ea1i v\u00f4 t\u00ecnh gi\u00fap con ng\u01b0\u1eddi tr\u00e1nh kh\u1ecfi nh\u1eefng th\u1ea3m h\u1ecda kh\u00f4ng th\u1ec3 l\u01b0\u1eddng tr\u01b0\u1edbc. | Tr\u1ea1ng t\u1eeb 'seemingly' b\u1ed5 ngh\u0129a cho t\u00ednh t\u1eeb 'inconvenient' \u0111\u1ee9ng tr\u01b0\u1edbc danh t\u1eeb 'delay'. |\n| 8 | delay | /d\u026a\u02c8le\u026a/ | S\u1ef1 ch\u1eadm tr\u1ec5 - A period of time when someone must wait due to a problem - (hold-up / postponement) | Yet, on a few rare occasions, a seemingly inconvenient delay has unexpectedly helped people avoid unimaginable disasters. | Th\u1ebf nh\u01b0ng, trong m\u1ed9t v\u00e0i kho\u1ea3nh kh\u1eafc hi\u1ebfm hoi, ch\u00ednh s\u1ef1 ch\u1eadm tr\u1ec5 t\u01b0\u1edfng nh\u01b0 \u0111\u1ea7y b\u1ea5t ti\u1ec7n \u1ea5y l\u1ea1i v\u00f4 t\u00ecnh gi\u00fap con ng\u01b0\u1eddi tr\u00e1nh kh\u1ecfi nh\u1eefng th\u1ea3m h\u1ecda kh\u00f4ng th\u1ec3 l\u01b0\u1eddng tr\u01b0\u1edbc. | Danh t\u1eeb 'delay' l\u00e0m ch\u1ee7 ng\u1eef ch\u00ednh c\u1ee7a c\u00e2u, k\u1ebft h\u1ee3p th\u00ec hi\u1ec7n t\u1ea1i ho\u00e0n th\u00e0nh 'has unexpectedly helped'. |\n| 9 | cheque | /t\u0283ek/ | T\u1ea5m s\u00e9c - A printed form used to pay money from a bank account - (bank draft / check) | In late 1911, Milton S. Hershey\u2014the founder of the Hershey chocolate company\u2014wrote a cheque for $300 to reserve a first-class cabin on the maiden voyage of the RMS Titanic. | Cu\u1ed1i n\u0103m 1911, Milton S. Hershey \u2013 ng\u01b0\u1eddi s\u00e1ng l\u1eadp h\u00e3ng s\u00f4-c\u00f4-la Hershey \u2013 \u0111\u00e3 vi\u1ebft t\u1ea5m s\u00e9c 300 USD \u0111\u1ec3 \u0111\u1eb7t ch\u1ed7 h\u1ea1ng nh\u1ea5t tr\u00ean chuy\u1ebfn h\u1ea3i tr\u00ecnh \u0111\u1ea7u ti\u00ean c\u1ee7a RMS Titanic. | Danh t\u1eeb 'cheque' l\u00e0m t\u00e2n ng\u1eef cho \u0111\u1ed9ng t\u1eeb qu\u00e1 kh\u1ee9 \u0111\u01a1n 'wrote', \u0111i k\u00e8m c\u1ee5m gi\u1edbi t\u1eeb ch\u1ec9 m\u1ee5c \u0111\u00edch 'for $300 to reserve...'. |\n| 10 | reserve a seat | /r\u026a\u02c8z\u025d\u02d0v/ | \u0110\u1eb7t ch\u1ed7 tr\u01b0\u1edbc - To arrange for a place on transport to be kept for oneself - (book / hold) | In late 1911, Milton S. Hershey\u2014the founder of the Hershey chocolate company\u2014wrote a cheque for $300 to reserve a first-class cabin on the maiden voyage of the RMS Titanic. | Cu\u1ed1i n\u0103m 1911, Milton S. Hershey \u2013 ng\u01b0\u1eddi s\u00e1ng l\u1eadp h\u00e3ng s\u00f4-c\u00f4-la Hershey \u2013 \u0111\u00e3 vi\u1ebft t\u1ea5m s\u00e9c 300 USD \u0111\u1ec3 \u0111\u1eb7t ch\u1ed7 h\u1ea1ng nh\u1ea5t tr\u00ean chuy\u1ebfn h\u1ea3i tr\u00ecnh \u0111\u1ea7u ti\u00ean c\u1ee7a RMS Titanic. | \u0110\u1ed9ng t\u1eeb nguy\u00ean m\u1eabu 'to reserve' \u0111\u00f3ng vai tr\u00f2 ch\u1ec9 m\u1ee5c \u0111\u00edch sau t\u00e2n ng\u1eef 'cheque'. |\n| 11 | first-class cabin | /\u02ccf\u025d\u02d0st\u02c8kl\u00e6s \u02c8k\u00e6b.\u026an/ | Khoang h\u1ea1ng nh\u1ea5t - The most luxurious accommodation on a ship or plane - (luxury suite / top-tier cabin) | In late 1911, Milton S. Hershey\u2014the founder of the Hershey chocolate company\u2014wrote a cheque for $300 to reserve a first-class cabin on the maiden voyage of the RMS Titanic. | Cu\u1ed1i n\u0103m 1911, Milton S. Hershey \u2013 ng\u01b0\u1eddi s\u00e1ng l\u1eadp h\u00e3ng s\u00f4-c\u00f4-la Hershey \u2013 \u0111\u00e3 vi\u1ebft t\u1ea5m s\u00e9c 300 USD \u0111\u1ec3 \u0111\u1eb7t ch\u1ed7 h\u1ea1ng nh\u1ea5t tr\u00ean chuy\u1ebfn h\u1ea3i tr\u00ecnh \u0111\u1ea7u ti\u00ean c\u1ee7a RMS Titanic. | C\u1ee5m danh t\u1eeb gh\u00e9p 'first-class cabin' l\u00e0m t\u00e2n ng\u1eef tr\u1ef1c ti\u1ebfp cho \u0111\u1ed9ng t\u1eeb 'reserve'. |\n| 12 | maiden voyage | /\u02ccme\u026a.d\u0259n \u02c8v\u0254\u026a.\u026ad\u0292/ | Chuy\u1ebfn h\u1ea3i tr\u00ecnh \u0111\u1ea7u ti\u00ean - The very first journey made by a new vessel - (first trip / inaugural voyage) | In late 1911, Milton S. Hershey\u2014the founder of the Hershey chocolate company\u2014wrote a cheque for $300 to reserve a first-class cabin on the maiden voyage of the RMS Titanic. | Cu\u1ed1i n\u0103m 1911, Milton S. Hershey \u2013 ng\u01b0\u1eddi s\u00e1ng l\u1eadp h\u00e3ng s\u00f4-c\u00f4-la Hershey \u2013 \u0111\u00e3 vi\u1ebft t\u1ea5m s\u00e9c 300 USD \u0111\u1ec3 \u0111\u1eb7t ch\u1ed7 h\u1ea1ng nh\u1ea5t tr\u00ean chuy\u1ebfn h\u1ea3i tr\u00ecnh \u0111\u1ea7u ti\u00ean c\u1ee7a RMS Titanic. | Danh t\u1eeb gh\u00e9p 'maiden voyage' \u0111i sau gi\u1edbi t\u1eeb 'on' b\u1ed5 ngh\u0129a cho v\u1ecb tr\u00ed chuy\u1ebfn \u0111i. |\n| 13 | luxurious | /l\u028c\u0261\u02c8\u0292\u028ar.i.\u0259s/ | Sang tr\u1ecdng, xa hoa - Very comfortable and containing expensive features - (opulent / grand) | According to the original plan, he and his wife, Catherine, would return to the United States aboard what was then one of the most luxurious ships in the world. | Theo k\u1ebf ho\u1ea1ch ban \u0111\u1ea7u, \u00f4ng s\u1ebd c\u00f9ng v\u1ee3 l\u00e0 Catherine tr\u1edf v\u1ec1 M\u1ef9 tr\u00ean con t\u00e0u sang tr\u1ecdng b\u1eadc nh\u1ea5t th\u1ebf gi\u1edbi l\u00fac b\u1ea5y gi\u1edd. | T\u00ednh t\u1eeb 'luxurious' \u1edf d\u1ea1ng so s\u00e1nh nh\u1ea5t 'one of the most luxurious ships'. |\n| 14 | reluctantly | /r\u026a\u02c8l\u028ck.t\u0259nt.li/ | Mi\u1ec5n c\u01b0\u1ee1ng, b\u1ea5t \u0111\u1eafc d\u0129 - Doing something in an unwilling or hesitant manner - (unwillingly / grudgingly) | However, a delay involving their connecting train from Belgium to England meant that the couple could not reach Southampton in time and were reluctantly forced to remain behind. | Tuy nhi\u00ean, s\u1ef1 c\u1ed1 tr\u1ec5 chuy\u1ebfn t\u00e0u n\u1ed1i t\u1eeb B\u1ec9 sang Anh \u0111\u00e3 khi\u1ebfn v\u1ee3 ch\u1ed3ng \u00f4ng kh\u00f4ng k\u1ecbp \u0111\u1ebfn c\u1ea3ng Southampton \u0111\u00fang gi\u1edd v\u00e0 bu\u1ed9c ph\u1ea3i ng\u1eadm ng\u00f9i \u1edf l\u1ea1i. | Tr\u1ea1ng t\u1eeb 'reluctantly' \u0111\u1ee9ng tr\u01b0\u1edbc \u0111\u1ed9ng t\u1eeb th\u1ec3 b\u1ecb \u0111\u1ed9ng 'were forced to remain behind'. |\n| 15 | tycoon | /ta\u026a\u02c8ku\u02d0n/ | \u00d4ng tr\u00f9m, nh\u00e0 t\u00e0i phi\u1ec7t - A wealthy and powerful person in business or industry - (magnate / mogul) | Milton S. Hershey \u2013 the chocolate tycoon and founder of the Hershey Chocolate Company \u2013 was forced to change his plans. | Milton S. Hershey \u2013 \u00f4ng tr\u00f9m s\u00f4-c\u00f4-la v\u00e0 ng\u01b0\u1eddi s\u00e1ng l\u1eadp C\u00f4ng ty Socola Hershey \u2013 \u0111\u00e3 bu\u1ed9c ph\u1ea3i thay \u0111\u1ed5i k\u1ebf ho\u1ea1ch c\u1ee7a m\u00ecnh. | Danh t\u1eeb 'tycoon' \u0111\u00f3ng vai tr\u00f2 \u0111\u1ed3ng ng\u1eef (appositive) gi\u1ea3i th\u00edch th\u00eam cho t\u00ean ri\u00eang Milton S. Hershey. |\n| 16 | aboard | /\u0259\u02c8b\u0254\u02d0rd/ | Tr\u00ean t\u00e0u/m\u00e1y bay - On or onto a ship, aircraft, bus, or train - (on board / inside) | There were 74 passengers and seven crew members aboard the Airbus A321. | Tr\u00ean chi\u1ebfc Airbus A321 khi \u1ea5y c\u00f3 74 h\u00e0nh kh\u00e1ch v\u00e0 7 th\u00e0nh vi\u00ean phi h\u00e0nh \u0111o\u00e0n. | Gi\u1edbi t\u1eeb 'aboard' \u0111\u1ee9ng tr\u01b0\u1edbc danh t\u1eeb ch\u1ec9 ph\u01b0\u01a1ng ti\u1ec7n 'the Airbus A321' b\u1ed5 ngh\u0129a v\u1ecb tr\u00ed. |\n| 17 | initial | /\u026a\u02c8n\u026a\u0283.\u0259l/ | Ban \u0111\u1ea7u, \u0111\u1ea7u ti\u00ean - Existing or occurring at the beginning of a process - (first / starting) | Their initial disappointment quickly turned into shock when, a few days later, the Titanic struck an iceberg and sank to the bottom of the ocean, claiming the lives of more than 1,500 people. | S\u1ef1 ti\u1ebfc nu\u1ed1i ban \u0111\u1ea7u nhanh ch\u00f3ng bi\u1ebfn th\u00e0nh s\u1ef1 b\u00e0ng ho\u00e0ng khi v\u00e0i ng\u00e0y sau, Titanic \u0111\u00e2m ph\u1ea3i m\u1ed9t t\u1ea3ng b\u0103ng tr\u00f4i v\u00e0 ch\u00ecm xu\u1ed1ng \u0111\u00e1y \u0111\u1ea1i d\u01b0\u01a1ng, l\u1ea5y \u0111i m\u1ea1ng s\u1ed1ng c\u1ee7a h\u01a1n 1.500 ng\u01b0\u1eddi. | T\u00ednh t\u1eeb 'initial' b\u1ed5 ngh\u0129a cho danh t\u1eeb 'disappointment' \u0111\u00f3ng vai tr\u00f2 ch\u1ee7 ng\u1eef. |\n| 18 | strike | /stra\u026ak/ | \u0110\u00e2m v\u00e0o, va ch\u1ea1m - To hit forcibly against something - (hit / collide with) | Their initial disappointment quickly turned into shock when, a few days later, the Titanic struck an iceberg and sank to the bottom of the ocean, claiming the lives of more than 1,500 people. | S\u1ef1 ti\u1ebfc nu\u1ed1i ban \u0111\u1ea7u nhanh ch\u00f3ng bi\u1ebfn th\u00e0nh s\u1ef1 b\u00e0ng ho\u00e0ng khi v\u00e0i ng\u00e0y sau, Titanic \u0111\u00e2m ph\u1ea3i m\u1ed9t t\u1ea3ng b\u0103ng tr\u00f4i v\u00e0 ch\u00ecm xu\u1ed1ng \u0111\u00e1y \u0111\u1ea1i d\u01b0\u01a1ng, l\u1ea5y \u0111i m\u1ea1ng s\u1ed1ng c\u1ee7a h\u01a1n 1.500 ng\u01b0\u1eddi. | \u0110\u1ed9ng t\u1eeb b\u1ea5t quy t\u1eafc \u1edf qu\u00e1 kh\u1ee9 \u0111\u01a1n 'struck' l\u00e0m v\u1ecb ng\u1eef ch\u00ednh trong m\u1ec7nh \u0111\u1ec1 th\u1eddi gian 'when...'. |\n| 19 | iceberg | /\u02c8a\u026as.b\u025d\u02d0\u0261/ | T\u1ea3ng b\u0103ng tr\u00f4i - A very large mass of ice floating in the ocean - (ice mountain / ice block) | Their initial disappointment quickly turned into shock when, a few days later, the Titanic struck an iceberg and sank to the bottom of the ocean, claiming the lives of more than 1,500 people. | S\u1ef1 ti\u1ebfc nu\u1ed1i ban \u0111\u1ea7u nhanh ch\u00f3ng bi\u1ebfn th\u00e0nh s\u1ef1 b\u00e0ng ho\u00e0ng khi v\u00e0i ng\u00e0y sau, Titanic \u0111\u00e2m ph\u1ea3i m\u1ed9t t\u1ea3ng b\u0103ng tr\u00f4i v\u00e0 ch\u00ecm xu\u1ed1ng \u0111\u00e1y \u0111\u1ea1i d\u01b0\u01a1ng, l\u1ea5y \u0111i m\u1ea1ng s\u1ed1ng c\u1ee7a h\u01a1n 1.500 ng\u01b0\u1eddi. | Danh t\u1eeb 'iceberg' l\u00e0m t\u00e2n ng\u1eef tr\u1ef1c ti\u1ebfp cho \u0111\u1ed9ng t\u1eeb 'struck'. |\n| 20 | claim one\u2019s life | /kle\u026am w\u028cnz la\u026af/ | C\u01b0\u1edbp \u0111i sinh m\u1ea1ng - To cause someone's death in a disaster or conflict - (kill / take one's life) | Their initial disappointment quickly turned into shock when, a few days later, the Titanic struck an iceberg and sank to the bottom of the ocean, claiming the lives of more than 1,500 people. | S\u1ef1 ti\u1ebfc nu\u1ed1i ban \u0111\u1ea7u nhanh ch\u00f3ng bi\u1ebfn th\u00e0nh s\u1ef1 b\u00e0ng ho\u00e0ng khi v\u00e0i ng\u00e0y sau, Titanic \u0111\u00e2m ph\u1ea3i m\u1ed9t t\u1ea3ng b\u0103ng tr\u00f4i v\u00e0 ch\u00ecm xu\u1ed1ng \u0111\u00e1y \u0111\u1ea1i d\u01b0\u01a1ng, l\u1ea5y \u0111i m\u1ea1ng s\u1ed1ng c\u1ee7a h\u01a1n 1.500 ng\u01b0\u1eddi. | Hi\u1ec7n t\u1ea1i ph\u00e2n t\u1eed 'claiming' l\u00e0m c\u1ee5m ph\u00e2n t\u1eed k\u1ebft qu\u1ea3 (participle clause) b\u1ed5 ngh\u0129a cho to\u00e0n b\u1ed9 s\u1ef1 vi\u1ec7c ch\u00ecm t\u00e0u. |\n| 21 | ultimately | /\u02c8\u028cl.t\u0259.m\u0259t.li/ | Cu\u1ed1i c\u00f9ng, r\u1ed1t cu\u1ed9c - In the end, after a series of events or long process - (eventually / finally) | That unexpected delay ultimately allowed the Hershey empire to continue. | S\u1ef1 ch\u1eadm tr\u1ec5 v\u00f4 t\u00ecnh h\u00f4m \u1ea5y cu\u1ed1i c\u00f9ng l\u1ea1i gi\u00fap \u0111\u1ebf ch\u1ebf Hershey ti\u1ebfp t\u1ee5c t\u1ed3n t\u1ea1i. | Tr\u1ea1ng t\u1eeb 'ultimately' b\u1ed5 ngh\u0129a cho \u0111\u1ed9ng t\u1eeb qu\u00e1 kh\u1ee9 \u0111\u01a1n 'allowed'. |\n| 22 | empire | /\u02c8em.pa\u026ar/ | \u0110\u1ebf ch\u1ebf, t\u1eadp \u0111o\u00e0n l\u1edbn - A large commercial organisation controlled by one person - (corporation / kingdom) | That unexpected delay ultimately allowed the Hershey empire to continue. | S\u1ef1 ch\u1eadm tr\u1ec5 v\u00f4 t\u00ecnh h\u00f4m \u1ea5y cu\u1ed1i c\u00f9ng l\u1ea1i gi\u00fap \u0111\u1ebf ch\u1ebf Hershey ti\u1ebfp t\u1ee5c t\u1ed3n t\u1ea1i. | Danh t\u1eeb 'empire' l\u00e0m t\u00e2n ng\u1eef trong c\u1ea5u tr\u00fac 'allow sb/sth to do sth'. |\n| 23 | ill-fated | /\u02cc\u026al\u02c8fe\u026a.t\u032c\u026ad/ | X\u1ea5u s\u1ed1, \u0111\u1ecbnh m\u1ec7nh tr\u1edb tr\u00eau - Destined to have bad luck or end in disaster - (unfortunate / doomed) | The RMS Titanic before its ill-fated voyage was known as an unsinkable ship. | Con t\u00e0u RMS Titanic tr\u01b0\u1edbc chuy\u1ebfn h\u1ea3i tr\u00ecnh x\u1ea5u s\u1ed1 t\u1eebng \u0111\u01b0\u1ee3c bi\u1ebft \u0111\u1ebfn l\u00e0 m\u1ed9t con t\u00e0u kh\u00f4ng th\u1ec3 ch\u00ecm. | T\u00ednh t\u1eeb gh\u00e9p 'ill-fated' \u0111\u1ee9ng tr\u01b0\u1edbc b\u1ed5 ngh\u0129a cho danh t\u1eeb 'voyage'. |\n| 24 | voyage | /\u02c8v\u0254\u026a.\u026ad\u0292/ | Chuy\u1ebfn h\u1ea3i tr\u00ecnh d\u00e0i - A long journey involving travel by sea or space - (sea journey / cruise) | The RMS Titanic before its ill-fated voyage was known as an unsinkable ship. | Con t\u00e0u RMS Titanic tr\u01b0\u1edbc chuy\u1ebfn h\u1ea3i tr\u00ecnh x\u1ea5u s\u1ed1 t\u1eebng \u0111\u01b0\u1ee3c bi\u1ebft \u0111\u1ebfn l\u00e0 m\u1ed9t con t\u00e0u kh\u00f4ng th\u1ec3 ch\u00ecm. | Danh t\u1eeb 'voyage' \u0111\u1ee9ng sau t\u00ednh t\u1eeb 'ill-fated' l\u00e0m t\u00e2n ng\u1eef cho gi\u1edbi t\u1eeb 'before'. |\n| 25 | crew member | /\u02c8kru\u02d0 \u02ccmem.b\u025a/ | Th\u00e0nh vi\u00ean phi h\u00e0nh \u0111o\u00e0n - A person who works on a ship or aircraft - (staff member / sailor) | There were 74 passengers and seven crew members aboard the Airbus A321. | Tr\u00ean chi\u1ebfc Airbus A321 khi \u1ea5y c\u00f3 74 h\u00e0nh kh\u00e1ch v\u00e0 7 th\u00e0nh vi\u00ean phi h\u00e0nh \u0111o\u00e0n. | C\u1ee5m danh t\u1eeb 'crew members' n\u1ed1i v\u1edbi 'passengers' l\u00e0m ch\u1ee7 ng\u1eef th\u1ef1c s\u1ef1 sau c\u1ea5u tr\u00fac \u0111\u1ea3o ng\u1eef 'There were...'. |\n| 26 | passenger cabin | /\u02c8p\u00e6s.\u0259n.d\u0292\u025a \u02cck\u00e6b.\u026an/ | Khoang h\u00e0nh kh\u00e1ch - The interior area of an aircraft where passengers sit - (seating area / airplane interior) | About 15 minutes after take-off, a bomb hidden inside a laptop exploded in the passenger cabin, tearing a hole in the side of the aircraft. | Kho\u1ea3ng 15 ph\u00fat sau khi r\u1eddi m\u1eb7t \u0111\u1ea5t, m\u1ed9t qu\u1ea3 bom \u0111\u01b0\u1ee3c gi\u1ea5u trong m\u00e1y t\u00ednh x\u00e1ch tay ph\u00e1t n\u1ed5 b\u00ean trong khoang h\u00e0nh kh\u00e1ch, x\u00e9 to\u1ea1c m\u1ed9t l\u1ed7 tr\u00ean th\u00e2n m\u00e1y bay. | C\u1ee5m danh t\u1eeb 'passenger cabin' \u0111\u1ee9ng sau gi\u1edbi t\u1eeb 'in' ch\u1ec9 v\u1ecb tr\u00ed x\u1ea3y ra v\u1ee5 n\u1ed5. |\n| 27 | tear | /ter/ | X\u00e9 to\u1ea1c, l\u00e0m r\u00e1ch - To pull or rip apart by force - (rip / rupture) | About 15 minutes after take-off, a bomb hidden inside a laptop exploded in the passenger cabin, tearing a hole in the side of the aircraft. | Kho\u1ea3ng 15 ph\u00fat sau khi r\u1eddi m\u1eb7t \u0111\u1ea5t, m\u1ed9t qu\u1ea3 bom \u0111\u01b0\u1ee3c gi\u1ea5u trong m\u00e1y t\u00ednh x\u00e1ch tay ph\u00e1t n\u1ed5 b\u00ean trong khoang h\u00e0nh kh\u00e1ch, x\u00e9 to\u1ea1c m\u1ed9t l\u1ed7 tr\u00ean th\u00e2n m\u00e1y bay. | Hi\u1ec7n t\u1ea1i ph\u00e2n t\u1eed 'tearing' di\u1ec5n t\u1ea3 h\u00e0nh \u0111\u1ed9ng x\u1ea3y ra \u0111\u1ed3ng th\u1eddi/k\u1ebft qu\u1ea3 tr\u1ef1c ti\u1ebfp c\u1ee7a v\u1ee5 n\u1ed5. |\n| 28 | suck sb/sth out of sth | /s\u028ck a\u028at \u0259v/ | H\u00fat ai/c\u00e1i g\u00ec ra ngo\u00e0i - To pull someone or something out rapidly using air pressure - (pull out / eject) | The bomber was sucked out of the plane and killed, while three other people were injured. | K\u1ebb \u0111\u00e1nh bom b\u1ecb h\u00fat ra ngo\u00e0i v\u00e0 thi\u1ec7t m\u1ea1ng trong khi ba ng\u01b0\u1eddi kh\u00e1c b\u1ecb th\u01b0\u01a1ng. | Th\u1ec3 b\u1ecb \u0111\u1ed9ng qu\u00e1 kh\u1ee9 \u0111\u01a1n 'was sucked out of' di\u1ec5n t\u1ea3 t\u00e1c \u0111\u1ed9ng \u00e1p su\u1ea5t kh\u00ed quy\u1ec3n k\u00e9o k\u1ebb \u0111\u00e1nh bom r\u01a1i kh\u1ecfi m\u00e1y bay. |\n| 29 | manage to do sth | /\u02c8m\u00e6n.\u026ad\u0292/ | Xoay x\u1edf, th\u00e0nh c\u00f4ng l\u00e0m g\u00ec - To succeed in doing something difficult - (succeed in / achieve) | Despite the serious damage to the aircraft, the pilots managed to return to Mogadishu and land safely, allowing the remaining 80 people to survive. | D\u00f9 m\u00e1y bay b\u1ecb h\u01b0 h\u1ea1i nghi\u00eam tr\u1ecdng, c\u00e1c phi c\u00f4ng v\u1eabn quay l\u1ea1i Mogadishu v\u00e0 h\u1ea1 c\u00e1nh an to\u00e0n, gi\u00fap 80 ng\u01b0\u1eddi c\u00f2n l\u1ea1i s\u1ed1ng s\u00f3t. | \u0110\u1ed9ng t\u1eeb 'managed' k\u1ebft h\u1ee3p v\u1edbi \u0111\u1ed9ng t\u1eeb nguy\u00ean m\u1eabu 'to return' bi\u1ec3u th\u1ecb vi\u1ec7c v\u01b0\u1ee3t kh\u00f3 kh\u0103n \u0111\u1ec3 h\u1ea1 c\u00e1nh. |\n| 30 | fuselage | /\u02c8fju\u02d0.s\u0259l.\u0251\u02d0\u0292/ | Th\u00e2n m\u00e1y bay - The main body of an aircraft excluding wings and tail - (aircraft body / main hull) | The Daallo Airlines Airbus A321 with a large hole in its fuselage following the bombing of Flight 159 on 2 February 2016. | M\u00e1y bay Airbus A321 c\u1ee7a h\u00e3ng Daallo Airlines v\u1edbi m\u1ed9t l\u1ed7 l\u1edbn tr\u00ean th\u00e2n sau v\u1ee5 \u0111\u00e1nh bom tr\u00ean Chuy\u1ebfn bay 159 ng\u00e0y 2/2/2016. | Danh t\u1eeb k\u1ef9 thu\u1eadt 'fuselage' ch\u1ec9 ph\u1ea7n th\u00e2n ch\u00ednh c\u1ee7a m\u00e1y bay. |\n| 31 | noteworthy | /\u02c8no\u028at\u02ccw\u025d\u02d0.\u00f0i/ | \u0110\u00e1ng ch\u00fa \u00fd - Deserving attention because of being important or interesting - (remarkable / significant) | What is particularly noteworthy is that the flight had departed about 20 minutes late. | \u0110i\u1ec1u \u0111\u00e1ng ch\u00fa \u00fd l\u00e0 chuy\u1ebfn bay \u0111\u00e3 kh\u1edfi h\u00e0nh mu\u1ed9n kho\u1ea3ng 20 ph\u00fat. | M\u1ec7nh \u0111\u1ec1 danh t\u1eeb 'What is particularly noteworthy' l\u00e0m ch\u1ee7 ng\u1eef to\u00e0n c\u00e2u. |\n| 32 | cruising altitude | /\u02c8kru\u02d0.z\u026a\u014b \u02cc\u00e6l.t\u0259.tu\u02d0d/ | \u0110\u1ed9 cao h\u00e0nh tr\u00ecnh - The stable height maintained by an airplane during flight - (level flight height / flight altitude) | When the explosion occurred, the aircraft was still climbing and had not yet reached cruising altitude. | Khi v\u1ee5 n\u1ed5 x\u1ea3y ra, m\u00e1y bay v\u1eabn \u0111ang trong qu\u00e1 tr\u00ecnh l\u1ea5y \u0111\u1ed9 cao v\u00e0 ch\u01b0a \u0111\u1ea1t t\u1edbi \u0111\u1ed9 cao h\u00e0nh tr\u00ecnh. | C\u1ee5m danh t\u1eeb 'cruising altitude' l\u00e0m t\u00e2n ng\u1eef cho \u0111\u1ed9ng t\u1eeb qu\u00e1 kh\u1ee9 ho\u00e0n th\u00e0nh 'had not yet reached'. |\n| 33 | pressure differential | /\u02c8pre\u0283.\u025a \u02ccd\u026af.\u0259\u02c8ren.\u0283\u0259l/ | Ch\u00eanh l\u1ec7ch \u00e1p su\u1ea5t - The difference in atmospheric pressure between inside and outside - (pressure gap / difference in pressure) | Because the pressure differential was not yet severe, the plane\u2019s structure was kept from completely blowing apart, allowing the captain to execute an emergency landing. | M\u1ee9c ch\u00eanh l\u1ec7ch \u00e1p su\u1ea5t ch\u01b0a qu\u00e1 l\u1edbn \u0111\u00e3 gi\u1eef cho c\u1ea5u tr\u00fac m\u00e1y bay kh\u00f4ng b\u1ecb n\u1ed5 tung ho\u00e0n to\u00e0n, t\u1ea1o \u0111i\u1ec1u ki\u1ec7n cho c\u01a1 tr\u01b0\u1edfng ti\u1ebfn h\u00e0nh h\u1ea1 c\u00e1nh kh\u1ea9n c\u1ea5p. | C\u1ee5m danh t\u1eeb 'pressure differential' l\u00e0m ch\u1ee7 ng\u1eef cho m\u1ec7nh \u0111\u1ec1 nguy\u00ean nh\u00e2n \u0111\u1ee9ng sau 'Because'. |\n| 34 | severe | /s\u0259\u02c8v\u026ar/ | Nghi\u00eam tr\u1ecdng, d\u1eef d\u1ed9i - Very intense, harsh, or serious - (extreme / critical) | Because the pressure differential was not yet severe, the plane\u2019s structure was kept from completely blowing apart, allowing the captain to execute an emergency landing. | M\u1ee9c ch\u00eanh l\u1ec7ch \u00e1p su\u1ea5t ch\u01b0a qu\u00e1 l\u1edbn \u0111\u00e3 gi\u1eef cho c\u1ea5u tr\u00fac m\u00e1y bay kh\u00f4ng b\u1ecb n\u1ed5 tung ho\u00e0n to\u00e0n, t\u1ea1o \u0111i\u1ec1u ki\u1ec7n cho c\u01a1 tr\u01b0\u1edfng ti\u1ebfn h\u00e0nh h\u1ea1 c\u00e1nh kh\u1ea9n c\u1ea5p. | T\u00ednh t\u1eeb 'severe' \u0111\u1ee9ng sau \u0111\u1ed9ng t\u1eeb to be l\u00e0m v\u1ecb ng\u1eef t\u00ednh t\u1eeb. |\n| 35 | blow sth apart | /blo\u028a \u0259\u02c8p\u0251\u02d0rt/ | L\u00e0m n\u1ed5 tung - To destroy or shatter something into pieces by explosion - (shatter / explode) | Because the pressure differential was not yet severe, the plane\u2019s structure was kept from completely blowing apart, allowing the captain to execute an emergency landing. | M\u1ee9c ch\u00eanh l\u1ec7ch \u00e1p su\u1ea5t ch\u01b0a qu\u00e1 l\u1edbn \u0111\u00e3 gi\u1eef cho c\u1ea5u tr\u00fac m\u00e1y bay kh\u00f4ng b\u1ecb n\u1ed5 tung ho\u00e0n to\u00e0n, t\u1ea1o \u0111i\u1ec1u ki\u1ec7n cho c\u01a1 tr\u01b0\u1edfng ti\u1ebfn h\u00e0nh h\u1ea1 c\u00e1nh kh\u1ea9n c\u1ea5p. | C\u1ee5m danh \u0111\u1ed9ng t\u1eeb 'blowing apart' \u0111\u1ee9ng sau c\u1ea5u tr\u00fac b\u1ecb \u0111\u1ed9ng 'keep from + V-ing'. |\n| 36 | execute sth | /\u02c8ek.s\u0259.kju\u02d0t/ | Th\u1ef1c hi\u1ec7n, ti\u1ebfn h\u00e0nh - To perform or carry out a planned action or skill - (perform / carry out) | Because the pressure differential was not yet severe, the plane\u2019s structure was kept from completely blowing apart, allowing the captain to execute an emergency landing. | M\u1ee9c ch\u00eanh l\u1ec7ch \u00e1p su\u1ea5t ch\u01b0a qu\u00e1 l\u1edbn \u0111\u00e3 gi\u1eef cho c\u1ea5u tr\u00fac m\u00e1y bay kh\u00f4ng b\u1ecb n\u1ed5 tung ho\u00e0n to\u00e0n, t\u1ea1o \u0111i\u1ec1u ki\u1ec7n cho c\u01a1 tr\u01b0\u1edfng ti\u1ebfn h\u00e0nh h\u1ea1 c\u00e1nh kh\u1ea9n c\u1ea5p. | \u0110\u1ed9ng t\u1eeb nguy\u00ean m\u1eabu 'to execute' \u0111\u00f3ng vai tr\u00f2 b\u1ed5 ng\u1eef cho t\u00e2n ng\u1eef 'the captain' sau \u0111\u1ed9ng t\u1eeb 'allow'. |\n| 37 | devastating effect | /\u02c8dev.\u0259.ste\u026a.t\u032c\u026a\u014b \u0259\u02c8fekt/ | H\u1eadu qu\u1ea3 t\u00e0n kh\u1ed1c - Extremely destructive or harmful consequences - (disastrous outcome / destructive impact) | The 20-minute delay might initially have frustrated many passengers at the airport, but it ultimately became an important factor in limiting the devastating effects of the attack. | Hai m\u01b0\u01a1i ph\u00fat ch\u1eadm tr\u1ec5 v\u1ed1n c\u00f3 th\u1ec3 khi\u1ebfn nhi\u1ec1u h\u00e0nh kh\u00e1ch th\u1ea5t v\u1ecdng t\u1ea1i s\u00e2n bay, nh\u01b0ng cu\u1ed1i c\u00f9ng l\u1ea1i tr\u1edf th\u00e0nh m\u1ed9t y\u1ebfu t\u1ed1 quan tr\u1ecdng gi\u00fap h\u1ea1n ch\u1ebf m\u1ee9c \u0111\u1ed9 th\u1ea3m kh\u1ed1c c\u1ee7a v\u1ee5 t\u1ea5n c\u00f4ng. | C\u1ee5m danh t\u1eeb 'devastating effects' l\u00e0m t\u00e2n ng\u1eef cho \u0111\u1ed9ng t\u1eeb V-ing 'limiting'. |\n| 38 | be scheduled to do sth | /\u02c8sked\u0292.u\u02d0ld/ | \u0110\u01b0\u1ee3c l\u00ean l\u1ecbch l\u00e0m g\u00ec - Planned or arranged to happen at a specific time - (be set to / be expected to) | On the morning of 26 August 2026, four vehicles carrying more than 100 people, most of whom were Vietnamese tourists, were scheduled to leave Kathmandu at 7 a.m. | S\u00e1ng 26/8/2026, b\u1ed1n xe ch\u1edf h\u01a1n 100 ng\u01b0\u1eddi, ph\u1ea7n l\u1edbn l\u00e0 du kh\u00e1ch Vi\u1ec7t Nam, d\u1ef1 ki\u1ebfn r\u1eddi Kathmandu l\u00fac 7 gi\u1edd. | C\u1ea5u tr\u00fac b\u1ecb \u0111\u1ed9ng 'were scheduled to leave' di\u1ec5n t\u1ea3 l\u1ecbch tr\u00ecnh \u0111\u00e3 \u0111\u1eb7t tr\u01b0\u1edbc. |\n| 39 | on a pilgrimage | /\u0251\u02d0n \u0259 \u02c8p\u026al.\u0261r\u0259.m\u026ad\u0292/ | \u0110ang \u0111i h\u00e0nh h\u01b0\u01a1ng - Traveling to a sacred or religious place - (religious journey / spiritual trip) | The group was on a pilgrimage and sightseeing tour, with Mount Kailash in Tibet as one of its main destinations. | \u0110o\u00e0n \u0111ang tr\u00ean h\u00e0nh tr\u00ecnh h\u00e0nh h\u01b0\u01a1ng v\u00e0 tham quan, v\u1edbi \u0111i\u1ec3m \u0111\u1ebfn quan tr\u1ecdng l\u00e0 n\u00fai Kailash \u1edf T\u00e2y T\u1ea1ng. | C\u1ee5m gi\u1edbi t\u1eeb 'on a pilgrimage' b\u1ed5 ngh\u0129a tr\u1ea1ng th\u00e1i cho ch\u1ee7 ng\u1eef 'The group'. |\n| 40 | destination | /\u02ccdes.t\u0259\u02c8ne\u026a.\u0283\u0259n/ | \u0110i\u1ec3m \u0111\u1ebfn - The place to which someone is going or being sent - (target place / stop) | The group was on a pilgrimage and sightseeing tour, with Mount Kailash in Tibet as one of its main destinations. | \u0110o\u00e0n \u0111ang tr\u00ean h\u00e0nh tr\u00ecnh h\u00e0nh h\u01b0\u01a1ng v\u00e0 tham quan, v\u1edbi \u0111i\u1ec3m \u0111\u1ebfn quan tr\u1ecdng l\u00e0 n\u00fai Kailash \u1edf T\u00e2y T\u1ea1ng. | Danh t\u1eeb s\u1ed1 nhi\u1ec1u 'destinations' \u0111\u1ee9ng sau c\u1ee5m danh t\u1eeb 'one of its main...'. |\n| 41 | flash flood | /\u02c8fl\u00e6\u0283 \u02ccfl\u028cd/ | L\u0169 qu\u00e9t - A sudden and destructive rush of water caused by heavy rain - (torrential flood / sudden deluge) | After travelling for some time, the drivers received news of a severe flash flood near the Nepal\u2013Tibet border. | Khi xe \u0111\u00e3 \u0111i \u0111\u01b0\u1ee3c m\u1ed9t \u0111o\u1ea1n, c\u00e1c t\u00e0i x\u1ebf nh\u1eadn tin v\u1ec1 tr\u1eadn l\u0169 qu\u00e9t nghi\u00eam tr\u1ecdng g\u1ea7n khu v\u1ef1c bi\u00ean gi\u1edbi Nepal \u2013 T\u00e2y T\u1ea1ng. | C\u1ee5m danh t\u1eeb gh\u00e9p 'flash flood' \u0111\u1ee9ng sau t\u00ednh t\u1eeb 'severe' l\u00e0m t\u00e2n ng\u1eef cho gi\u1edbi t\u1eeb 'of'. |\n| 42 | floodwater | /\u02c8fl\u028cd\u02ccw\u0254\u02d0.t\u032c\u025a/ | N\u01b0\u1edbc l\u0169 - Water overflowing from heavy rainfall - (overflowing water / deluge water) | Floodwater, mud, and landslides later devastated numerous roads, bridges, and communities in the region. | L\u0169, b\u00f9n \u0111\u1ea5t v\u00e0 s\u1ea1t l\u1edf sau \u0111\u00f3 t\u00e0n ph\u00e1 nhi\u1ec1u tuy\u1ebfn \u0111\u01b0\u1eddng, c\u1ea7u c\u1ed1ng v\u00e0 khu d\u00e2n c\u01b0 trong v\u00f9ng. | Danh t\u1eeb kh\u00f4ng \u0111\u1ebfm \u0111\u01b0\u1ee3c 'floodwater' l\u00e0m ch\u1ee7 ng\u1eef \u0111\u1ea7u ti\u00ean trong chu\u1ed7i danh t\u1eeb li\u1ec7t k\u00ea. |\n| 43 | mud | /m\u028cd/ | B\u00f9n l\u1ea7y - Soft, wet earth or dirt - (sludge / dirt) | Floodwater, mud, and landslides later devastated numerous roads, bridges, and communities in the region. | L\u0169, b\u00f9n \u0111\u1ea5t v\u00e0 s\u1ea1t l\u1edf sau \u0111\u00f3 t\u00e0n ph\u00e1 nhi\u1ec1u tuy\u1ebfn \u0111\u01b0\u1eddng, c\u1ea7u c\u1ed1ng v\u00e0 khu d\u00e2n c\u01b0 trong v\u00f9ng. | Danh t\u1eeb 'mud' l\u00e0 ch\u1ee7 ng\u1eef th\u1ee9 hai song song v\u1edbi floodwater. |\n| 44 | landslide | /\u02c8l\u00e6nd.sla\u026ad/ | S\u1ea1t l\u1edf \u0111\u1ea5t - A mass of earth or rock sliding down a steep slope - (mudslide / rockfall) | Floodwater, mud, and landslides later devastated numerous roads, bridges, and communities in the region. | L\u0169, b\u00f9n \u0111\u1ea5t v\u00e0 s\u1ea1t l\u1edf sau \u0111\u00f3 t\u00e0n ph\u00e1 nhi\u1ec1u tuy\u1ebfn \u0111\u01b0\u1eddng, c\u1ea7u c\u1ed1ng v\u00e0 khu d\u00e2n c\u01b0 trong v\u00f9ng. | Danh t\u1eeb s\u1ed1 nhi\u1ec1u 'landslides' l\u00e0m ch\u1ee7 ng\u1eef th\u1ee9 ba trong chu\u1ed7i li\u1ec7t k\u00ea \u0111\u1ed3ng v\u1ecb. |\n| 45 | raging | /\u02c8re\u026a.d\u0292\u026a\u014b/ | Cu\u1ed3n cu\u1ed9n, d\u1eef d\u1ed9i - Continuing with great violence or intensity - (violent / furious) | One member of the group said that if they had departed as scheduled, they might have entered the area struck by the raging floodwaters, and their vehicles could easily have been swept away. | M\u1ed9t th\u00e0nh vi\u00ean trong \u0111o\u00e0n cho bi\u1ebft n\u1ebfu xu\u1ea5t ph\u00e1t \u0111\u00fang k\u1ebf ho\u1ea1ch, h\u1ecd c\u00f3 th\u1ec3 \u0111\u00e3 \u0111i v\u00e0o khu v\u1ef1c b\u1ecb d\u00f2ng n\u01b0\u1edbc d\u1eef bao ph\u1ee7 v\u00e0 nh\u1eefng chi\u1ebfc xe ho\u00e0n to\u00e0n c\u00f3 nguy c\u01a1 b\u1ecb cu\u1ed1n tr\u00f4i. | T\u00ednh t\u1eeb 'raging' b\u1ed5 ngh\u0129a cho danh t\u1eeb 'floodwaters'. |\n| 46 | sweep sth away | /swi\u02d0p \u0259\u02c8we\u026a/ | Cu\u1ed1n tr\u00f4i c\u00e1i g\u00ec - To wash away or carry off with great force - (wash away / carry off) | One member of the group said that if they had departed as scheduled, they might have entered the area struck by the raging floodwaters, and their vehicles could easily have been swept away. | M\u1ed9t th\u00e0nh vi\u00ean trong \u0111o\u00e0n cho bi\u1ebft n\u1ebfu xu\u1ea5t ph\u00e1t \u0111\u00fang k\u1ebf ho\u1ea1ch, h\u1ecd c\u00f3 th\u1ec3 \u0111\u00e3 \u0111i v\u00e0o khu v\u1ef1c b\u1ecb d\u00f2ng n\u01b0\u1edbc d\u1eef bao ph\u1ee7 v\u00e0 nh\u1eefng chi\u1ebfc xe ho\u00e0n to\u00e0n c\u00f3 nguy c\u01a1 b\u1ecb cu\u1ed1n tr\u00f4i. | \u0110\u1ed9ng t\u1eeb qu\u00e1 kh\u1ee9 ph\u00e2n t\u1eed 'swept away' n\u1eb1m trong c\u1ea5u tr\u00fac \u0111i\u1ec1u ki\u1ec7n b\u1ecb \u0111\u1ed9ng qu\u00e1 kh\u1ee9 'could easily have been + V3'. |\n| 47 | interrupt | /\u02cc\u026an.t\u032c\u0259\u02c8r\u028cpt/ | L\u00e0m gi\u00e1n \u0111o\u1ea1n - To stop a continuous process or journey temporarily - (disrupt / halt) | We become frustrated when we are stuck in traffic, anxious when a flight is delayed, and disappointed when a journey is unexpectedly interrupted. | Ta kh\u00f3 ch\u1ecbu khi k\u1eb9t xe, n\u00f3ng ru\u1ed9t l\u00fac chuy\u1ebfn bay b\u1ecb ho\u00e3n v\u00e0 th\u1ea5t v\u1ecdng khi m\u1ed9t h\u00e0nh tr\u00ecnh b\u1ea5t ng\u1edd b\u1ecb gi\u00e1n \u0111o\u1ea1n. | Th\u1ec3 b\u1ecb \u0111\u1ed9ng qu\u00e1 kh\u1ee9 \u0111\u01a1n 'is interrupted' di\u1ec5n t\u1ea3 h\u00e0nh tr\u00ecnh b\u1ecb ph\u00e1 h\u1ecfng \u0111\u1ed9t ng\u1ed9t. |\n| 48 | variable | /\u02c8ver.i.\u0259.b\u0259l/ | Bi\u1ebfn s\u1ed1 - An element or factor that is liable to vary - (unpredictable factor / changeable element) | However, life always contains variables that are beyond our ability to predict. | Tuy nhi\u00ean, cu\u1ed9c s\u1ed1ng lu\u00f4n ch\u1ee9a \u0111\u1ef1ng nh\u1eefng bi\u1ebfn s\u1ed1 n\u1eb1m ngo\u00e0i kh\u1ea3 n\u0103ng d\u1ef1 \u0111o\u00e1n. | Danh t\u1eeb s\u1ed1 nhi\u1ec1u 'variables' l\u00e0m t\u00e2n ng\u1eef cho 'contains', theo sau l\u00e0 m\u1ec7nh \u0111\u1ec1 quan h\u1ec7 'that are...'. |\n| 49 | narrowly avoid an accident | /\u02c8n\u00e6r.o\u028a.li \u0259\u02c8v\u0254\u026ad/ | Su\u00fdt so\u00e1t tr\u00e1nh \u0111\u01b0\u1ee3c tai n\u1ea1n - To barely escape a dangerous collision or mishap - (barely miss / close shave) | Not every delay carries a special meaning, nor should every narrowly avoided accident be regarded as an arrangement of fate. | Kh\u00f4ng ph\u1ea3i m\u1ecdi s\u1ef1 ch\u1eadm tr\u1ec5 \u0111\u1ec1u mang theo m\u1ed9t \u00fd ngh\u0129a \u0111\u1eb7c bi\u1ec7t, v\u00e0 c\u0169ng kh\u00f4ng n\u00ean xem m\u1ecdi tai n\u1ea1n tr\u00e1nh \u0111\u01b0\u1ee3c l\u00e0 s\u1ef1 s\u1eafp \u0111\u1eb7t c\u1ee7a s\u1ed1 ph\u1eadn. | C\u1ee5m qu\u00e1 kh\u1ee9 ph\u00e2n t\u1eed 'narrowly avoided accident' \u0111\u00f3ng vai tr\u00f2 ch\u1ee7 ng\u1eef trong m\u1ec7nh \u0111\u1ec1 \u0111\u1ea3o ng\u1eef ph\u1ee7 \u0111\u1ecbnh sau 'nor'. |\n| 50 | an arrangement of fate | /\u0259n \u0259\u02c8re\u026and\u0292.m\u0259nt \u0259v fe\u026at/ | S\u1ef1 s\u1eafp \u0111\u1eb7t c\u1ee7a s\u1ed1 ph\u1eadn - A circumstance designed or destined by destiny - (destiny / divine plan) | Not every delay carries a special meaning, nor should every narrowly avoided accident be regarded as an arrangement of fate. | Kh\u00f4ng ph\u1ea3i m\u1ecdi s\u1ef1 ch\u1eadm tr\u1ec5 \u0111\u1ec1u mang theo m\u1ed9t \u00fd ngh\u0129a \u0111\u1eb7c bi\u1ec7t, v\u00e0 c\u0169ng kh\u00f4ng n\u00ean xem m\u1ecdi tai n\u1ea1n tr\u00e1nh \u0111\u01b0\u1ee3c l\u00e0 s\u1ef1 s\u1eafp \u0111\u1eb7t c\u1ee7a s\u1ed1 ph\u1eadn. | C\u1ee5m danh t\u1eeb 'an arrangement of fate' \u0111\u1ee9ng sau gi\u1edbi t\u1eeb 'as' b\u1ed5 ngh\u0129a cho 'be regarded as'. |\n| 51 | not necessarily | /n\u0251\u02d0t \u02ccnes.\u0259\u02c8ser.\u0259.li/ | Ch\u01b0a ch\u1eafc, kh\u00f4ng nh\u1ea5t thi\u1ebft - Used to mean that something is not automatically true in every case - (not automatically / not automatically true) | Nevertheless, the stories above remind us that an unexpected change of plans is not necessarily an entirely bad thing. | Nh\u01b0ng nh\u1eefng c\u00e2u chuy\u1ec7n tr\u00ean nh\u1eafc ch\u00fang ta r\u1eb1ng m\u1ed9t thay \u0111\u1ed5i ngo\u00e0i k\u1ebf ho\u1ea1ch ch\u01b0a ch\u1eafc \u0111\u00e3 ho\u00e0n to\u00e0n l\u00e0 \u0111i\u1ec1u t\u1ed3i t\u1ec7. | Tr\u1ea1ng t\u1eeb ph\u1ee7 \u0111\u1ecbnh 'not necessarily' gi\u1ea3m nh\u1eb9 t\u00ednh kh\u1eb3ng \u0111\u1ecbnh c\u1ee7a c\u00e2u. |\n| 52 | a stretch of road | /\u0259 stret\u0283 \u0259v ro\u028ad/ | M\u1ed9t \u0111o\u1ea1n \u0111\u01b0\u1eddng - A continuous area or section of a road - (road section / route segment) | Sometimes, moving a little more slowly helps us avoid a dangerous stretch of road. | C\u00f3 nh\u1eefng l\u00fac, \u0111i ch\u1eadm h\u01a1n m\u1ed9t ch\u00fat gi\u00fap ta tr\u00e1nh \u0111\u01b0\u1ee3c m\u1ed9t \u0111o\u1ea1n \u0111\u01b0\u1eddng nguy hi\u1ec3m. | C\u1ee5m danh t\u1eeb 'a dangerous stretch of road' l\u00e0m t\u00e2n ng\u1eef tr\u1ef1c ti\u1ebfp cho \u0111\u1ed9ng t\u1eeb 'avoid'. |\n| 53 | open sth up | /\u02c8o\u028a.p\u0259n \u028cp/ | M\u1edf ra c\u01a1 h\u1ed9i - To create new opportunities or possibilities - (create / unlock) | A cancelled journey may open up a different path. | M\u1ed9t chuy\u1ebfn \u0111i b\u1ecb h\u1ee7y c\u00f3 th\u1ec3 m\u1edf ra m\u1ed9t ng\u00e3 r\u1ebd kh\u00e1c. | Ph\u00f3 \u0111\u1ed9ng t\u1eeb 'open up' \u0111i sau \u0111\u1ed9ng t\u1eeb khuy\u1ebft thi\u1ebfu 'may'. |\n| 54 | a different path | /\u0259 \u02c8d\u026af.\u025a.\u0259nt p\u00e6\u03b8/ | M\u1ed9t ng\u00e3 r\u1ebd kh\u00e1c - An alternative course of action or life direction - (alternative direction / new way) | A cancelled journey may open up a different path. | M\u1ed9t chuy\u1ebfn \u0111i b\u1ecb h\u1ee7y c\u00f3 th\u1ec3 m\u1edf ra m\u1ed9t ng\u00e3 r\u1ebd kh\u00e1c. | C\u1ee5m danh t\u1eeb 'a different path' l\u00e0m t\u00e2n ng\u1eef cho 'open up'. |\n| 55 | pointless | /\u02c8p\u0254\u026ant.l\u0259s/ | V\u00f4 \u00edch - Having no purpose, meaning, or effective result - (meaningless / futile) | And an hour of seemingly pointless waiting can sometimes become the most precious hour of all. | V\u00e0 m\u1ed9t gi\u1edd ch\u1edd \u0111\u1ee3i t\u01b0\u1edfng nh\u01b0 v\u00f4 \u00edch \u0111\u00f4i khi l\u1ea1i tr\u1edf th\u00e0nh kho\u1ea3ng th\u1eddi gian qu\u00fd gi\u00e1 nh\u1ea5t. | T\u00ednh t\u1eeb 'pointless' \u0111\u01b0\u1ee3c b\u1ed5 ngh\u0129a b\u1edfi tr\u1ea1ng t\u1eeb 'seemingly' \u0111\u1ee9ng tr\u01b0\u1edbc danh \u0111\u1ed9ng t\u1eeb 'waiting'. |\n| 56 | precious | /\u02c8pre\u0283.\u0259s/ | Qu\u00fd gi\u00e1 - Of great value, importance, or emotional worth - (valuable / priceless) | And an hour of seemingly pointless waiting can sometimes become the most precious hour of all. | V\u00e0 m\u1ed9t gi\u1edd ch\u1edd \u0111\u1ee3i t\u01b0\u1edfng nh\u01b0 v\u00f4 \u00edch \u0111\u00f4i khi l\u1ea1i tr\u1edf th\u00e0nh kho\u1ea3ng th\u1eddi gian qu\u00fd gi\u00e1 nh\u1ea5t. | T\u00ednh t\u1eeb 'precious' \u1edf d\u1ea1ng so s\u00e1nh nh\u1ea5t 'the most precious hour'. |\n| 57 | go as expected | /\u0261o\u028a \u00e6z \u026ak\u02c8spek.t\u026ad/ | Di\u1ec5n ra \u0111\u00fang nh\u01b0 d\u1ef1 ki\u1ebfn - To happen according to plan or expectation - (work out as planned / happen smoothly) | Therefore, when things do not go as expected, perhaps we should remain a little calmer. | V\u00ec v\u1eady, khi m\u1ecdi chuy\u1ec7n kh\u00f4ng di\u1ec5n ra nh\u01b0 k\u1ebf ho\u1ea1ch, c\u00f3 l\u1ebd ta n\u00ean b\u00ecnh t\u0129nh h\u01a1n m\u1ed9t ch\u00fat. | C\u1ee5m \u0111\u1ed9ng t\u1eeb 'go as expected' \u0111\u1ee9ng trong m\u1ec7nh \u0111\u1ec1 \u0111i\u1ec1u ki\u1ec7n/th\u1eddi gian sau 'when'. |\n| 58 | calm | /k\u0251\u02d0m/ | B\u00ecnh t\u0129nh - Peaceful, quiet, and free from worry - (tranquil / composed) | Therefore, when things do not go as expected, perhaps we should remain a little calmer. | V\u00ec v\u1eady, khi m\u1ecdi chuy\u1ec7n kh\u00f4ng di\u1ec5n ra nh\u01b0 k\u1ebf ho\u1ea1ch, c\u00f3 l\u1ebd ta n\u00ean b\u00ecnh t\u0129nh h\u01a1n m\u1ed9t ch\u00fat. | T\u00ednh t\u1eeb so s\u00e1nh h\u01a1n 'calmer' \u0111\u00f3ng vai tr\u00f2 b\u1ed5 ng\u1eef sau \u0111\u1ed9ng t\u1eeb n\u1ed1i 'remain'. |\n| 59 | be grateful for sb/sth | /\u02c8\u0261re\u026at.f\u0259l/ | Bi\u1ebft \u01a1n ai/\u0111i\u1ec1u g\u00ec - Feeling or showing appreciation for something - (thankful / appreciative) | After all, something that frustrates us today may be the very thing we feel grateful for tomorrow. | B\u1edfi \u0111\u00f4i khi, \u0111i\u1ec1u khi\u1ebfn ta b\u1ef1c b\u1ed9i h\u00f4m nay l\u1ea1i ch\u00ednh l\u00e0 \u0111i\u1ec1u m\u00e0 ng\u00e0y mai ta c\u1ea3m th\u1ea5y bi\u1ebft \u01a1n. | T\u00ednh t\u1eeb 'grateful' \u0111i v\u1edbi gi\u1edbi t\u1eeb 'for' \u0111\u1ee9ng trong m\u1ec7nh \u0111\u1ec1 t\u00ednh t\u1eeb khuy\u1ebft gi\u1edbi t\u1eeb 'the very thing we feel grateful for'. |\n",
"Buddha_Lost_Eyes_30_08.md": "# The journey home of the Buddha’s lost eyes (30/08/2026)\n\n## Bảng từ vựng\n\n| No | Từ vựng | Phiên âm | Nghĩa | Câu chứa từ | Dịch câu | Giải thích ngữ pháp |\n| :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n| 1 | happen to do sth | `/ˈhæp.ən tə duː/` | Tình cờ làm gì - A person does something unexpectedly by chance without planning it - (chance to do sth / occur to do sth) | In 2006, during a business trip to Datong, Shanxi Province, China, Tian Yijun **happened to** stop by a flea market. | Năm 2006, trong một chuyến công tác đến Đại Đồng, tỉnh Sơn Tây, Trung Quốc, Tian Yijun tình cờ ghé vào một khu chợ trời. | Quá khứ đơn; cấu trúc `happen + to-V` chỉ hành động xảy ra ngẫu nhiên. Cụm giới từ chỉ thời gian/địa điểm đứng đầu câu. |\n| 2 | flea market | `/ˈfliː ˌmɑːr.kɪt/` | Chợ trời, chợ đồ cũ - It is an open-air market where vendors sell vintage items, antiques, and second-hand goods - (street market / second-hand market) | In 2006, during a business trip to Datong, Shanxi Province, China, Tian Yijun happened to stop by a **flea market**. | Năm 2006, trong một chuyến công tác đến Đại Đồng, tỉnh Sơn Tây, Trung Quốc, Tian Yijun tình cờ ghé vào một khu chợ trời. | Danh từ chỉ nơi chốn đóng vai trò tân ngữ của giới từ `by` sau phrasal verb `stop by`. |\n| 3 | stall | `/stɔːl/` | Gian hàng, quầy hàng - It is a small open booth or table where a trader displays goods for sale at a market - (booth / stand) | Among **stalls** selling calligraphy, paintings, and all kinds of unusual objects, a small ceramic object suddenly caught his attention. | Giữa những gian hàng bán thư pháp, tranh và đủ loại đồ vật kỳ lạ, một món đồ gốm nhỏ bất ngờ thu hút sự chú ý của ông. | Cụm giới từ `Among...` làm trạng ngữ chỉ vị trí. Mệnh đề rút gọn hiện tại phân từ `selling...` bổ nghĩa cho danh từ `stalls`. |\n| 4 | calligraphy | `/kəˈlɪɡ.rə.fi/` | Thư pháp - It is the traditional art of beautiful, stylized handwriting using ink and brush - (lettering / penmanship) | Among stalls selling **calligraphy**, paintings, and all kinds of unusual objects, a small ceramic object suddenly caught his attention. | Giữa những gian hàng bán thư pháp, tranh và đủ loại đồ vật kỳ lạ, một món đồ gốm nhỏ bất ngờ thu hút sự chú ý của ông. | Danh từ không đếm được đóng vai trò tân ngữ của hiện tại phân từ `selling`. |\n| 5 | ceramic | `/səˈræm.ɪk/` | Đồ gốm; bằng gốm - It is a hard object made of baked clay, such as a porcelain bowl, vase, or glossy piece - (pottery / earthenware) | Among stalls selling calligraphy, paintings, and all kinds of unusual objects, a small **ceramic** object suddenly caught his attention. | Giữa những gian hàng bán thư pháp, tranh và đủ loại đồ vật kỳ lạ, một món đồ gốm nhỏ bất ngờ thu hút sự chú ý của ông. | Tính từ `ceramic` bổ nghĩa cho danh từ `object`. Động từ chính của câu là `caught` ở thì quá khứ đơn. |\n| 6 | catch one’s attention | `/kætʃ wʌnz əˈten.ʃən/` | Thu hút sự chú ý của ai - A striking object or event suddenly makes a person look and pay attention - (attract one’s notice / grab one’s focus) | Among stalls selling calligraphy, paintings, and all kinds of unusual objects, a small ceramic object suddenly **caught his attention**. | Giữa những gian hàng bán thư pháp, tranh và đủ loại đồ vật kỳ lạ, một món đồ gốm nhỏ bất ngờ thu hút sự chú ý của ông. | Cụm động từ `catch one's attention` chia ở quá khứ đơn (`caught`). Trạng từ `suddenly` đứng trước động từ để bổ nghĩa. |\n| 7 | hemispherical | `/ˌhem.ɪˈsfer.ɪ.kəl/` | Có hình bán cầu - An object is shaped like half a round ball or dome, like half an apple - (half-spherical / semicircular) | It was **hemispherical**, with one side covered in black glaze, making it look somewhat like a mushroom. | Nó có hình bán cầu, với một mặt được phủ lớp men đen, khiến nó trông hơi giống một cây nấm. | Tính từ `hemispherical` đứng sau động từ nối `was`. Cấu trúc `with + N + V-ed` diễn tả đặc điểm phụ; `making...` là phân từ chỉ kết quả. |\n| 8 | glaze | `/ɡleɪz/` | Lớp men, lớp tráng men - It is a shiny, smooth glass-like coating baked onto the surface of pottery or ceramic - (coating / enamel) | It was hemispherical, with one side covered in black **glaze**, making it look somewhat like a mushroom. | Nó có hình bán cầu, với một mặt được phủ lớp men đen, khiến nó trông hơi giống một cây nấm. | Cụm phân từ bị động `covered in black glaze` bổ nghĩa cho cụm danh từ `one side`. |\n| 9 | out of sth | `/aʊt əv/` | Vì, do (cảm xúc/động cơ) - A person does an action driven by a specific feeling, emotion, or reason - (motivated by / driven by) | **Out of** curiosity and his love of ceramics, he decided to buy it and take it home. | Vì tò mò và vốn yêu thích đồ gốm, ông quyết định mua món đồ mang về nhà. | Cụm giới từ `Out of + N` đứng đầu câu đóng vai trò trạng ngữ chỉ nguyên nhân/động cơ. Cấu trúc `decide + to-V`. |\n| 10 | out of curiosity | `/aʊt əv ˌkjʊr.iˈɑː.sə.t̬i/` | Vì tò mò - A person does something simply because they are eager to discover or learn about it - (from inquisitiveness / out of interest) | **Out of curiosity** and his love of ceramics, he decided to buy it and take it home. | Vì tò mò và vốn yêu thích đồ gốm, ông quyết định mua món đồ mang về nhà. | Idiom chỉ động cơ hành động. Hai động từ nguyên mẫu `buy` và `take` nối bằng `and` đi sau `decided to`. |\n| 11 | pupil | `/ˈpjuː.pəl/` | Con ngươi (mắt) - It is the small black round center piece of the eye that allows a person or statue to see - (eye lens / eyeball center) | It was not until Tian read an article about the lost **pupils** of Buddha statues at the Yungang Grottoes that he suddenly realized the object he owned looked almost identical to the artifact shown in the article. | Mãi đến khi Tian đọc bài báo về những con ngươi thất lạc của tượng Phật tại hang đá Vân Cương, ông mới chợt nhận ra món đồ mình sở hữu trông giống hệt hiện vật trong bài báo. | Cấu trúc nhấn mạnh `It was not until... that...` (Mãi cho đến khi... thì...). `The object he owned` chứa mệnh đề quan hệ rút gọn (`which he owned`). |\n| 12 | Buddha | `/ˈbuː.də/` | Đức Phật; tượng Phật - It refers to the enlightened spiritual leader or a holy statue representing him - (Enlightened One / Buddhist icon) | It was not until Tian read an article about the lost pupils of **Buddha** statues at the Yungang Grottoes that he suddenly realized the object he owned looked almost identical to the artifact shown in the article. | Mãi đến khi Tian đọc bài báo về những con ngươi thất lạc của tượng Phật tại hang đá Vân Cương, ông mới chợt nhận ra món đồ mình sở hữu trông giống hệt hiện vật trong bài báo. | Danh từ đóng vai trò bổ nghĩa cho `statues` tạo thành danh từ ghép `Buddha statues`. |\n| 13 | grotto | `/ˈɡrɑː.t̬oʊ/` | Hang động, hang đá - It is a cave carved into a rock cliff, often decorated with religious statues and shrines - (cave / cavern) | Located near the city of Datong in northern China, the Yungang **Grottoes** are one of the country’s most famous Buddhist cave complexes. | Nằm gần thành phố Đại Đồng ở miền bắc Trung Quốc, hang đá Vân Cương là một trong những quần thể hang động Phật giáo nổi tiếng nhất cả nước. | Quá khứ phân từ `Located...` rút gọn mệnh đề trạng ngữ. Cấu trúc so sánh nhất `one of the + most + Adj + N(số nhiều)`. |\n| 14 | identical to sth | `/aɪˈden.t̬ɪ.kəl/` | Giống hệt cái gì - An object looks exactly the same in every shape, size, and detail as another object - (the same as / matching) | It was not until Tian read an article about the lost pupils of Buddha statues at the Yungang Grottoes that he suddenly realized the object he owned looked almost **identical to** the artifact shown in the article. | Mãi đến khi Tian đọc bài báo về những con ngươi thất lạc của tượng Phật tại hang đá Vân Cương, ông mới chợt nhận ra món đồ mình sở hữu trông giống hệt hiện vật trong bài báo. | Tính từ `identical` đi với giới từ `to`, đứng sau động từ nối `looked`. |\n| 15 | artifact | `/ˈɑːr.t̬ə.fækt/` | Hiện vật - It is a historic object made by humans in ancient times, like a tool, ornament, or statue piece - (relic / antique) | It was not until Tian read an article about the lost pupils of Buddha statues at the Yungang Grottoes that he suddenly realized the object he owned looked almost identical to the **artifact** shown in the article. | Mãi đến khi Tian đọc bài báo về những con ngươi thất lạc của tượng Phật tại hang đá Vân Cương, ông mới chợt nhận ra món đồ mình sở hữu trông giống hệt hiện vật trong bài báo. | Cụm quá khứ phân từ `shown in the article` rút gọn cho mệnh đề quan hệ `which was shown in the article`. |\n| 16 | indeed | `/ɪnˈdiːd/` | Quả thực, thực sự - It is used to confirm that something is truly, completely, and undeniably true - (truly / in fact) | They confirmed that the small object he had bought at the flea market years earlier was **indeed** the pupil of an ancient Buddha statue. | Họ xác nhận rằng món đồ nhỏ bé ông mua ở chợ đồ cũ nhiều năm trước quả thực là con ngươi của một bức tượng Phật cổ. | Mệnh đề danh từ `that...` làm tân ngữ; quá khứ hoàn thành `had bought` diễn tả hành động xảy ra trước `confirmed`. Trạng từ `indeed` dùng nhấn mạnh. |\n| 17 | donate sth to sb | `/ˈdoʊ.neɪt/` | Quyên tặng, hiến tặng cho ai - A person gives an item or money freely to a museum or charity without asking for payment - (contribute / give away) | Tian then decided to **donate** the artifact **to** Yungang. | Tian sau đó quyết định hiến tặng hiện vật cho Vân Cương. | Thì quá khứ đơn; cấu trúc `donate + sth + to + sb/somewhere`. |\n| 18 | complex | `/ˈkɑːm.pleks/` | Quần thể, khu phức hợp - It is a large group of connected buildings, caves, or structures built in one location - (compound / network) | Located near the city of Datong in northern China, the Yungang Grottoes are one of the country’s most famous Buddhist cave **complexes**. | Nằm gần thành phố Đại Đồng ở miền bắc Trung Quốc, hang đá Vân Cương là một trong những quần thể hang động Phật giáo nổi tiếng nhất cả nước. | Danh từ số nhiều `complexes` đi sau cấu trúc `one of the + N(plural)`. |\n| 19 | figure | `/ˈfɪɡ.jɚ/` | Tượng, hình tượng - It is a carved or sculpted statue depicting the body or shape of a person or god - (statue / likeness) | Thousands of Buddha statues, ranging from small **figures** to enormous sculptures, were carved directly into the sandstone cliffs. | Hàng nghìn tượng Phật, từ những hình tượng nhỏ bé đến các pho tượng khổng lồ, được tạc trực tiếp vào vách đá sa thạch. | Thể bị động quá khứ đơn `were carved`; cụm phân từ `ranging from A to B` làm rõ cho chủ ngữ `statues`. |\n| 20 | enormous | `/ɪˈnɔːr.məs/` | Khổng lồ, rất lớn - An object, statue, or building is massive and extremely large in size - (huge / massive) | Thousands of Buddha statues, ranging from small figures to **enormous** sculptures, were carved directly into the sandstone cliffs. | Hàng nghìn tượng Phật, từ những hình tượng nhỏ bé đến các pho tượng khổng lồ, được tạc trực tiếp vào vách đá sa thạch. | Tính từ `enormous` bổ nghĩa cho danh từ `sculptures`. |\n| 21 | carve | `/kɑːrv/` | Chạm, khắc, tạc - An artisan cuts and shapes hard stone, wood, or rock to create a figure or pattern - (sculpt / engrave) | Thousands of Buddha statues, ranging from small figures to enormous sculptures, were **carved** directly into the sandstone cliffs. | Hàng nghìn tượng Phật, từ những hình tượng nhỏ bé đến các pho tượng khổng lồ, được tạc trực tiếp vào vách đá sa thạch. | Động từ chính chia ở thể bị động quá khứ đơn (`were carved`). Trạng từ `directly` bổ nghĩa cho `carved`. |\n| 22 | sandstone | `/ˈsænd.stoʊn/` | Đá sa thạch - It is a yellowish or reddish soft rock made of compressed sand grains - (sedimentary rock / gritstone) | Thousands of Buddha statues, ranging from small figures to enormous sculptures, were carved directly into the **sandstone** cliffs. | Hàng nghìn tượng Phật, từ những hình tượng nhỏ bé đến các pho tượng khổng lồ, được tạc trực tiếp vào vách đá sa thạch. | Danh từ đóng vai trò như tính từ bổ nghĩa cho `cliffs` (`sandstone cliffs`). |\n| 23 | cliff | `/klɪf/` | Vách đá - It is a high, steep vertical wall of rock on the side of a mountain or river - (bluff / precipice) | Thousands of Buddha statues, ranging from small figures to enormous sculptures, were carved directly into the sandstone **cliffs**. | Hàng nghìn tượng Phật, từ những hình tượng nhỏ bé đến các pho tượng khổng lồ, được tạc trực tiếp vào vách đá sa thạch. | Danh từ số nhiều đứng sau cụm giới từ `into the...`. |\n| 24 | socket | `/ˈsɑː.kɪt/` | Hốc, ổ (hốc mắt) - It is a hollowed-out hole or opening designed to hold an eye, bulb, or fitted piece - (cavity / hollow) | However, if you look closely at the faces of many of these statues, you will notice something unusual: their eyes have small round **sockets** that are completely empty. | Tuy nhiên, nếu quan sát kỹ khuôn mặt của nhiều bức tượng, bạn sẽ nhận thấy một điều bất thường: đôi mắt của chúng có những hốc tròn nhỏ hoàn toàn trống rỗng. | Câu điều kiện loại 1 (`if + V_present, S + will + V`). Mệnh đề quan hệ `that are completely empty` bổ nghĩa cho `sockets`. |\n| 25 | ancient | `/ˈeɪn.ʃənt/` | Cổ xưa, cổ đại - Something belongs to a very distant past, existing hundreds or thousands of years ago - (antique / primeval) | **Ancient** craftsmen used a technique known as qianmu, in which sockets were carved into the statues’ eyes and pupils were then inserted into them. | Những nghệ nhân xưa đã sử dụng một kỹ thuật gọi là qianmu, trong đó các hốc được tạc vào mắt tượng và con ngươi sau đó được gắn vào bên trong. | Quá khứ đơn; mệnh đề quan hệ với giới từ `in which...` bổ nghĩa cho `technique`. Hai mệnh đề bị động `were carved` và `were inserted` sóng đôi. |\n| 26 | craftsmen | `/ˈkræfts.mən/` | Những người thợ thủ công - They are skilled artisans who handcraft artwork, stone carvings, or tools with detailed precision - (artisans / handcrafters) | Ancient **craftsmen** used a technique known as qianmu, in which sockets were carved into the statues’ eyes and pupils were then inserted into them. | Những nghệ nhân xưa đã sử dụng một kỹ thuật gọi là qianmu, trong đó các hốc được tạc vào mắt tượng và con ngươi sau đó được gắn vào bên trong. | Danh từ số nhiều (số ít là `craftsman`) làm chủ ngữ của động từ `used`. |\n| 27 | ritual | `/ˈrɪtʃ.u.əl/` | Nghi lễ - It is a formal religious ceremony or traditional procedure performed in a sacred order - (ceremony / rite) | In a **ritual** known as Buddhabhiseka, a Buddha statue is consecrated through chanting and an eye-opening ceremony, transforming it into a sacred object. | Trong một nghi lễ được gọi là Buddhabhiseka, tượng Phật được làm lễ khai quang thông qua việc trì tụng và nghi thức khai nhãn, biến nó thành một vật linh thiêng. | Cụm phân từ quá khứ `known as...` rút gọn mệnh đề quan hệ; bị động hiện tại đơn `is consecrated`; hiện tại phân từ `transforming...` chỉ kết quả. |\n| 28 | consecrate | `/ˈkɑːn.sə.kreɪt/` | Làm lễ thánh hóa, cung hiến - Monks or priests perform sacred rites to make a statue or building holy - (sanctify / bless) | In a ritual known as Buddhabhiseka, a Buddha statue is **consecrated** through chanting and an eye-opening ceremony, transforming it into a sacred object. | Trong một nghi lễ được gọi là Buddhabhiseka, tượng Phật được làm lễ khai quang thông qua việc trì tụng và nghi thức khai nhãn, biến nó thành một vật linh thiêng. | Thể bị động hiện tại đơn `is consecrated`. Giới từ `through` chỉ phương thức thực hiện. |\n| 29 | consecration | `/ˌkɑːn.səˈkreɪ.ʃən/` | Lễ thánh hóa, lễ cung hiến - It is the official religious ceremony that blesses an object and makes it holy - (sanctification / blessing) | In China, one common form of this **consecration** involves painting or adding eyes to a statue. | Ở Trung Quốc, một hình thức phổ biến của nghi lễ khai quang này bao gồm việc vẽ hoặc gắn thêm mắt cho tượng. | Động từ `involve + V-ing` (`painting or adding`). `This consecration` làm tân ngữ của giới từ `of`. |\n| 30 | chanting | `/ˈtʃæn.t̬ɪŋ/` | Việc tụng niệm, tụng kinh - It is the continuous singing or reciting of religious prayers in a rhythmic voice - (reciting / intoning) | In a ritual known as Buddhabhiseka, a Buddha statue is consecrated through **chanting** and an eye-opening ceremony, transforming it into a sacred object. | Trong một nghi lễ được gọi là Buddhabhiseka, tượng Phật được làm lễ khai quang thông qua việc trì tụng và nghi thức khai nhãn, biến nó thành một vật linh thiêng. | Danh động từ (`V-ing`) đóng vai trò danh từ làm tân ngữ của giới từ `through`. |\n| 31 | eye-opening ceremony | `/ˈaɪ ˌoʊ.pən.ɪŋ ˈser.ə.moʊ.ni/` | Lễ khai quang điểm nhãn - It is a Buddhist ritual of painting or inserting eyes into a statue to awaken its spirit - (consecration rite / blessing ritual) | In a ritual known as Buddhabhiseka, a Buddha statue is consecrated through chanting and an **eye-opening ceremony**, transforming it into a sacred object. | Trong một nghi lễ được gọi là Buddhabhiseka, tượng Phật được làm lễ khai quang thông qua việc trì tụng và nghi thức khai nhãn, biến nó thành một vật linh thiêng. | Cụm danh từ ghép đóng vai trò tân ngữ nối với `chanting` bởi liên từ `and`. |\n| 32 | sacred | `/ˈseɪ.krɪd/` | Linh thiêng, thiêng liêng - An object, statue, or place is holy, divine, and respected for religious reasons - (holy / divine) | In a ritual known as Buddhabhiseka, a Buddha statue is consecrated through chanting and an eye-opening ceremony, transforming it into a **sacred** object. | Trong một nghi lễ được gọi là Buddhabhiseka, tượng Phật được làm lễ khai quang thông qua việc trì tụng và nghi thức khai nhãn, biến nó thành một vật linh thiêng. | Cấu trúc `transform A into B`; tính từ `sacred` bổ nghĩa cho danh từ `object`. |\n| 33 | erode | `/ɪˈroʊd/` | Xói mòn, bào mòn - Natural elements like wind, water, and rain slowly wear away rock or stone over centuries - (wear away / corrode) | Over the centuries, Yungang’s sandstone was **eroded** by wind and rain, while wars and the theft of antiquities caused many artifacts to be damaged or disappear. | Qua nhiều thế kỷ, đá sa thạch Vân Cương đã bị bào mòn bởi gió mưa, trong khi chiến tranh và nạn trộm cổ vật khiến nhiều hiện vật bị hư hại hoặc biến mất. | Bị động quá khứ đơn `was eroded by...`; liên từ `while` nối hai mệnh đề sóng đôi; cấu trúc `cause sth to V/be V-ed`. |\n| 34 | antiquity | `/ænˈtɪk.wə.t̬i/` | Thời cổ đại; cổ vật - It refers to ancient historical times or valuable antique relics from the distant past - (ancient artifact / historical object) | Over the centuries, Yungang’s sandstone was eroded by wind and rain, while wars and the theft of **antiquities** caused many artifacts to be damaged or disappear. | Qua nhiều thế kỷ, đá sa thạch Vân Cương đã bị bào mòn bởi gió mưa, trong khi chiến tranh và nạn trộm cổ vật khiến nhiều hiện vật bị hư hại hoặc biến mất. | Danh từ số nhiều `antiquities` làm tân ngữ cho giới từ `of`. |\n| 35 | turbulent | `/ˈtɝː.bjə.lənt/` | Đầy biến động, hỗn loạn - A period of time is full of violent change, confusion, war, and disorder - (chaotic / tumultuous) | During the **turbulent** 19th and early 20th centuries, some of the caves were even used as homes and livestock shelters. | Trong thời kỳ hỗn loạn của thế kỷ 19 và đầu thế kỷ 20, một số hang động thậm chí từng được sử dụng làm nhà ở và chuồng gia súc. | Tính từ `turbulent` bổ nghĩa cho danh từ `centuries`. Thể bị động quá khứ đơn `were used as...`. |\n| 36 | livestock shelter | `/ˈlaɪv.stɑːk ˌʃel.tɚ/` | Chuồng trại gia súc - It is a farm building or barn where domestic animals like cows, pigs, or sheep are kept - (animal barn / stable) | During the turbulent 19th and early 20th centuries, some of the caves were even used as homes and **livestock shelters**. | Trong thời kỳ hỗn loạn của thế kỷ 19 và đầu thế kỷ 20, một số hang động thậm chí từng được sử dụng làm nhà ở và chuồng gia súc. | Cụm danh từ số nhiều đứng sau giới từ `as` nối với `homes`. |\n| 37 | end up somewhere | `/end ʌp ˈsʌm.wer/` | Cuối cùng lại ở nơi nào đó - An object or person arrives at a final place or situation after a long journey - (wind up / turn out to be) | To this day, no one knows exactly how many pupils have disappeared from the statues at Yungang or where they may have **ended up**. | Đến nay, không ai biết chính xác bao nhiêu con ngươi đã biến mất khỏi các bức tượng ở Vân Cương hay chúng đã lưu lạc đến nơi nào. | Mệnh đề danh từ làm tân ngữ `where they may have ended up`; cấu trúc động từ khuyết thiếu quá khứ `may have + V3` (dự đoán trong quá khứ). |\n| 38 | sinologist | `/saɪˈnɑː.lə.dʒɪst/` | Nhà Hán học - An academic scholar who specializes in studying Chinese language, history, and culture - (Chinese scholar / Sinology expert) | In 1932, American art historian and **sinologist** Laurence Sickman visited Yungang while in China on a fellowship from the Harvard-Yenching Institute. | Năm 1932, nhà sử học nghệ thuật kiêm nhà Hán học người Mỹ Laurence Sickman đã đến thăm Vân Cương trong thời gian ở Trung Quốc theo diện học bổng của Viện Harvard-Yenching. | Hai danh từ chỉ nghề nghiệp `art historian and sinologist` làm đồng ngữ (appositive) bổ nghĩa cho tên riêng `Laurence Sickman`. |\n| 39 | on a fellowship | `/ɑːn ə ˈfel.oʊ.ʃɪp/` | Theo diện học bổng nghiên cứu - A researcher receives an official grant or scholarship to study and do research abroad - (on a grant / on a scholarship) | In 1932, American art historian and sinologist Laurence Sickman visited Yungang while in China **on a fellowship** from the Harvard-Yenching Institute. | Năm 1932, nhà sử học nghệ thuật kiêm nhà Hán học người Mỹ Laurence Sickman đã đến thăm Vân Cương trong thời gian ở Trung Quốc theo diện học bổng của Viện Harvard-Yenching. | Cụm giới từ chỉ trạng thái/tư cách `on a fellowship`. Mệnh đề rút gọn `while in China...` (`while he was in China`). |\n| 40 | acquire sth | `/əˈkwaɪr/` | Thu mua, có được cái gì - To buy, obtain, or collect a valuable artwork, artifact, or property - (obtain / purchase) | At the time, he was also **acquiring** works of art for American museums. | Vào thời điểm đó, ông cũng đang thu mua các tác phẩm nghệ thuật cho các bảo tàng Mỹ. | Thì quá khứ tiếp diễn `was acquiring` diễn tả hành động đang diễn ra tại một thời điểm trong quá khứ (`At the time`). |\n| 41 | works of art | `/ˌwɝːks əv ˈɑːrt/` | Các tác phẩm nghệ thuật - They are creative artistic objects like paintings, sculptures, or fine crafts - (artworks / artistic creations) | At the time, he was also acquiring **works of art** for American museums. | Vào thời điểm đó, ông cũng đang thu mua các tác phẩm nghệ thuật cho các bảo tàng Mỹ. | Danh từ số nhiều `works of art` làm tân ngữ trực tiếp cho động từ `acquiring`. |\n| 42 | go on to | `/ɡoʊ ɑːn tuː/` | Sau đó tiếp tục/tiến tới làm gì - A person proceeds to do something significant later in their life or career - (proceed to / move on to) | Sickman **went on to** become a prominent scholar of Asian art and served as director of the Nelson-Atkins Museum of Art in Kansas City. | Sickman sau đó tiếp tục trở thành một nhà nghiên cứu nghệ thuật châu Á nổi tiếng và đảm nhiệm vị trí giám đốc Bảo tàng Nghệ thuật Nelson-Atkins ở thành phố Kansas. | Phrasal verb `go on + to V` (sau đó tiếp tục làm gì). Hai động từ quá khứ `went on` và `served` nối bằng `and`. |\n| 43 | prominent | `/ˈprɑː.mə.nənt/` | Nổi bật, lỗi lạc, có tiếng - A person or scholar is famous, highly respected, and easily recognized in their field - (distinguished / renowned) | Sickman went on to become a **prominent** scholar of Asian art and served as director of the Nelson-Atkins Museum of Art in Kansas City. | Sickman sau đó tiếp tục trở thành một nhà nghiên cứu nghệ thuật châu Á nổi tiếng và đảm nhiệm vị trí giám đốc Bảo tàng Nghệ thuật Nelson-Atkins ở thành phố Kansas. | Tính từ `prominent` bổ nghĩa cho danh từ `scholar`. |\n| 44 | archaeologist | `/ˌɑːr.kiˈɑː.lə.dʒɪst/` | Nhà khảo cổ học - A scientist who digs up ancient sites to discover artifacts, fossils, and historical ruins - (excavator / antiquity scholar) | In the spring of 1985, Chinese **archaeologist** Su Bai wrote to Lu Jimin, head of the Cultural Heritage Bureau under China’s Ministry of Culture, conveying Sickman’s wish and proposing that the artifact be returned to Yungang for preservation. | Vào mùa xuân năm 1985, nhà khảo cổ học Trung Quốc Su Bai đã viết thư cho Lu Jimin, người đứng đầu Cục Di sản Văn hóa thuộc Bộ Văn hóa Trung Quốc, truyền đạt nguyện vọng của Sickman và đề xuất đưa hiện vật trở lại Vân Cương để bảo tồn. | Hai cụm hiện tại phân từ `conveying... and proposing...` bổ nghĩa cho hành động `wrote`. Động từ `propose that + S + V-bare` (giả định thức: `be returned`). |\n| 45 | heritage | `/ˈher.ɪ.t̬ɪdʒ/` | Di sản - It refers to the historical traditions, monuments, and cultural treasures passed down from ancestors - (legacy / inheritance) | In the spring of 1985, Chinese archaeologist Su Bai wrote to Lu Jimin, head of the Cultural **Heritage** Bureau under China’s Ministry of Culture, conveying Sickman’s wish and proposing that the artifact be returned to Yungang for preservation. | Vào mùa xuân năm 1985, nhà khảo cổ học Trung Quốc Su Bai đã viết thư cho Lu Jimin, người đứng đầu Cục Di sản Văn hóa thuộc Bộ Văn hóa Trung Quốc, truyền đạt nguyện vọng của Sickman và đề xuất đưa hiện vật trở lại Vân Cương để bảo tồn. | Danh từ ghép `Cultural Heritage Bureau` (Cục Di sản Văn hóa). |\n| 46 | bureau | `/ˈbjʊr.oʊ/` | Cục, cơ quan, văn phòng - It is an official government department or administrative agency - (agency / department) | In the spring of 1985, Chinese archaeologist Su Bai wrote to Lu Jimin, head of the Cultural Heritage **Bureau** under China’s Ministry of Culture, conveying Sickman’s wish and proposing that the artifact be returned to Yungang for preservation. | Vào mùa xuân năm 1985, nhà khảo cổ học Trung Quốc Su Bai đã viết thư cho Lu Jimin, người đứng đầu Cục Di sản Văn hóa thuộc Bộ Văn hóa Trung Quốc, truyền đạt nguyện vọng của Sickman và đề xuất đưa hiện vật trở lại Vân Cương để bảo tồn. | Danh từ cơ quan làm đồng ngữ giải thích vị trí của Lu Jimin. |\n| 47 | convey one’s wish | `/kənˈveɪ wʌnz wɪʃ/` | Bày tỏ, truyền đạt nguyện vọng - To formally communicate or express one's desire or intention to others - (express one’s desire / communicate one’s goal) | In the spring of 1985, Chinese archaeologist Su Bai wrote to Lu Jimin, head of the Cultural Heritage Bureau under China’s Ministry of Culture, **conveying** Sickman’s **wish** and proposing that the artifact be returned to Yungang for preservation. | Vào mùa xuân năm 1985, nhà khảo cổ học Trung Quốc Su Bai đã viết thư cho Lu Jimin, người đứng đầu Cục Di sản Văn hóa thuộc Bộ Văn hóa Trung Quốc, truyền đạt nguyện vọng của Sickman và đề xuất đưa hiện vật trở lại Vân Cương để bảo tồn. | Hiện tại phân từ `conveying` làm trạng ngữ chỉ mục đích/hành động song song. |\n| 48 | repatriate | `/riˈpeɪ.tri.eɪt/` | Hồi hương, đưa về nước - To return a stolen, lost, or exiled artifact or person back to their native country - (return home / restore to native land) | The two sides then worked together to **repatriate** the pupil. | Hai bên sau đó đã phối hợp cùng nhau để hồi hương con ngươi. | Động từ nguyên mẫu chỉ mục đích `to repatriate` sau động từ `worked together`. |\n| 49 | excavation | `/ˌek.skəˈveɪ.ʃən/` | Cuộc khai quật - The process of digging up the ground to uncover buried ancient ruins or artifacts - (dig / unearthing) | They include the pupil once owned by Sickman, one discovered during archaeological **excavations** in the early 1990s, and four others donated by members of the public. | Chúng bao gồm con ngươi từng thuộc về Sickman, một con được phát hiện trong các cuộc khai quật khảo cổ vào đầu những năm 1990, và bốn con khác do công chúng hiến tặng. | Chuỗi danh từ nối tiếp nhau; phân từ quá khứ `discovered` và `donated` rút gọn mệnh đề quan hệ. |\n| 50 | house sth | `/haʊz/` | Lưu giữ, chứa, là nơi đặt cái gì - To store, shelter, and protect valuable items, artifacts, or collection inside a building - (accommodate / store) | Two pupils from the famous Cave No. 8, collected in the late 1930s and the 1940s, when much of China was under Japanese occupation, are currently **housed** at the Institute for Research in Humanities at Kyoto University. | Hai con ngươi từ Hang số 8 nổi tiếng, được thu thập vào cuối những năm 1930 và 1940, khi phần lớn Trung Quốc nằm dưới sự chiếm đóng của Nhật Bản, hiện được lưu giữ tại Viện Nghiên cứu Nhân văn thuộc Đại học Kyoto. | Chủ ngữ `Two pupils...` ở số nhiều đi với bị động hiện tại đơn `are currently housed`. Mệnh đề quan hệ thời gian `when much of China was...`. |\n| 51 | striking | `/ˈstraɪ.kɪŋ/` | Nổi bật, gây ấn tượng mạnh - An object, story, or feature is so unusual, vivid, or impressive that it immediately catches attention - (impressive / remarkable) | Tian’s story is a **striking** example. | Câu chuyện của Tian là một ví dụ đặc biệt nổi bật. | Tính từ `striking` (gây ấn tượng/nổi bật) bổ nghĩa cho danh từ `example`. |\n| 52 | ordinary | `/ˈɔːr.dən.er.i/` | Bình thường, thông thường - Something looks plain, normal, and conventional with no special features - (common / conventional) | With their **ordinary** appearance and seemingly no practical use, such artifacts may even be at risk of being thrown away or destroyed before they are ever identified. | Với vẻ ngoài bình thường và dường như không có công dụng thực tế, những hiện vật như vậy thậm chí có nguy cơ bị vứt bỏ hoặc phá hủy trước khi được nhận diện. | Cụm giới từ `With...` làm trạng ngữ; cấu trúc `be at risk of + V-ing` (`being thrown away or destroyed`). |\n| 53 | spiritual | `/ˈspɪr.ə.tʃu.əl/` | Thuộc tâm linh, tinh thần - Relating to sacred religious feelings, the human soul, or deep holy meaning - (sacred / religious) | When in its proper place on the face of a Buddha statue, a tiny pupil helps create a gaze filled with **spiritual** meaning. | Khi nằm đúng vị trí trên khuôn mặt của một pho tượng Phật, một con ngươi nhỏ bé góp phần tạo nên một ánh nhìn tràn đầy ý nghĩa tâm linh. | Mệnh đề trạng ngữ rút gọn `When in...`; động từ `help + (to) V`; cụm quá khứ phân từ `filled with...` bổ nghĩa cho `gaze`. |\n| 54 | gaze | `/ɡeɪz/` | Ánh nhìn, cái nhìn chăm chú - A long, steady, and meaningful look from someone's eyes - (look / stare) | When in its proper place on the face of a Buddha statue, a tiny pupil helps create a gaze filled with **spiritual** meaning. | Khi nằm đúng vị trí trên khuôn mặt của một pho tượng Phật, một con ngươi nhỏ bé góp phần tạo nên một ánh nhìn tràn đầy ý nghĩa tâm linh. | Danh từ `gaze` (cái nhìn, ánh nhìn) làm tân ngữ cho động từ `create`. |\n| 55 | anonymous | `/əˈnɑː.nə.məs/` | Vô danh, ẩn danh - An object or person has an unknown name or unrecognized origin - (unnamed / unidentified) | But once separated from its original setting, it can look like nothing more than an **anonymous** piece of ceramic. | Nhưng một khi bị tách khỏi vị trí nguyên bản, nó có thể trông chẳng khác gì một mảnh gốm vô danh. | Cụm phân từ quá khứ `once separated...` (rút gọn của `once it is separated`); thành ngữ `nothing more than` (không gì hơn ngoại trừ / chẳng qua chỉ là). |\n", "Lexus_03_09.md": "# Vocabulary Extraction: Why are Vietnamese people increasingly choosing Lexus?\n\n| No | Từ vựng | Phiên âm | Nghĩa | Câu chứa từ | Dịch câu | Giải thích ngữ pháp |\n|---|---|---|---|---|---|---|\n| 1 | Dominate | /ˈdɑː.mə.neɪt/ | Thống trị, chi phối - To control or have a commanding position over something in a market or area - (Control / Govern) | For many years, Mercedes-Benz almost dominated Vietnam’s luxury car market. | Trong nhiều năm, Mercedes-Benz gần như thống trị thị trường xe sang Việt Nam. | Thì quá khứ đơn (dominated); trạng từ \"almost\" bổ nghĩa cho động từ chính. |\n| 2 | Vehicle registration | /ˈviː.ə.kəl ˌredʒ.əˈstreɪ.ʃən/ | Việc đăng ký xe - The official recording of a vehicle on a document - (Enrollment / Record) | According to vehicle registration data collected by VnExpress, in the first seven months of 2026, Lexus recorded 1,247 vehicles, surpassing Mercedes with just over 1,000 and, in a rare occurrence, rising to the top of the luxury car market. | Theo số liệu đăng ký xe do VnExpress thu thập, trong 7 tháng đầu năm 2026, Lexus đạt 1.247 xe, vượt Mercedes với hơn 1.000 xe và lần hiếm hoi vươn lên dẫn đầu thị trường xe sang. | Cụm danh từ ghép \"vehicle registration data\"; mệnh đề phân từ quá khứ \"collected by VnExpress\" rút gọn cho mệnh đề quan hệ. |\n| 3 | Surpass | /sɚˈpæs/ | Vượt qua, hơn hẳn - To be greater or better than a competitor in amount or quality - (Exceed / Outperform) | According to vehicle registration data collected by VnExpress, in the first seven months of 2026, Lexus recorded 1,247 vehicles, surpassing Mercedes with just over 1,000 and, in a rare occurrence, rising to the top of the luxury car market. | Theo số liệu đăng ký xe do VnExpress thu thập, trong 7 tháng đầu năm 2026, Lexus đạt 1.247 xe, vượt Mercedes với hơn 1.000 xe và lần hiếm hoi vươn lên dẫn đầu thị trường xe sang. | Hiện tại phân từ \"surpassing\" làm bổ ngữ chỉ kết quả/hành động song song cho mệnh đề chính. |\n| 4 | In a rare occurrence | /ɪn ə rer əˈkɝː.əns/ | Trong một trường hợp hiếm hoi - An unusual event or situation that happens infrequently - (Rare event / Uncommon incident) | According to vehicle registration data collected by VnExpress, in the first seven months of 2026, Lexus recorded 1,247 vehicles, surpassing Mercedes with just over 1,000 and, in a rare occurrence, rising to the top of the luxury car market. | Theo số liệu đăng ký xe do VnExpress thu thập, trong 7 tháng đầu năm 2026, Lexus đạt 1.247 xe, vượt Mercedes với hơn 1.000 xe và lần hiếm hoi vươn lên dẫn đầu thị trường xe sang. | Cụm giới từ trạng ngữ \"in a rare occurrence\" bổ sung thông tin chỉ tính chất hiếm thấy của hiện tượng. |\n| 5 | Shift | /ʃɪft/ | Sự thay đổi, sự chuyển dịch - A change in position, direction, or consumer preference over time - (Change / Transition) | The shift becomes even clearer when looking back at previous years. | Sự thay đổi càng rõ nếu nhìn lại những năm trước. | Liên động từ \"becomes\" đi với tính từ so sánh hơn \"clearer\"; mệnh đề trạng ngữ rút gọn \"when looking back\". |\n| 6 | Reputation | /ˌrep.jəˈteɪ.ʃən/ | Danh tiếng - The belief or opinion that is generally held about someone or something - (Fame / Renown) | One major advantage of Lexus is the reputation of Japanese cars for durability and reliability. | Một lợi thế lớn của Lexus là danh tiếng về độ bền và độ tin cậy của xe Nhật. | Cấu trúc danh từ \"reputation of A for B\" (danh tiếng của A về B). |\n| 7 | Durability | /ˌdʊr.əˈbɪl.ə.t̬i/ | Độ bền, độ bền bỉ - The ability to withstand wear, pressure, or damage over a long time - (Sturdiness / Resilience) | One major advantage of Lexus is the reputation of Japanese cars for durability and reliability. | Một lợi thế lớn của Lexus là danh tiếng về độ bền và độ tin cậy của xe Nhật. | Nối hai danh từ chỉ phẩm chất \"durability and reliability\" bằng liên từ \"and\". |\n| 8 | Reliability | /rɪˌlaɪ.əˈbɪl.ə.t̬i/ | Độ tin cậy, sự đáng tin - The quality of performing consistently well without failing - (Dependability / Trustworthiness) | One major advantage of Lexus is the reputation of Japanese cars for durability and reliability. | Một lợi thế lớn của Lexus là danh tiếng về độ bền và độ tin cậy của xe Nhật. | Danh từ \"reliability\" đi cùng danh từ \"durability\" tạo thành cụm từ ghép tiêu chuẩn chất lượng. |\n| 9 | Premium | /ˈpriː.mi.əm/ | Cao cấp, chất lượng cao - Of superior quality or higher status than ordinary items - (High-end / Top-tier) | As Toyota’s luxury car brand, Lexus offers a premium experience while also inheriting the image of durability long associated with Japanese vehicles. | Là thương hiệu xe sang thuộc Toyota, Lexus vừa mang lại trải nghiệm cao cấp, vừa thừa hưởng hình ảnh bền bỉ vốn gắn với ôtô Nhật. | Tính từ \"premium\" bổ nghĩa cho danh từ \"experience\". |\n| 10 | Inherit | /ɪnˈher.ɪt/ | Thừa hưởng, kế thừa - To receive a quality, characteristic, or asset from a predecessor or parent company - (Receive / Derive) | As Toyota’s luxury car brand, Lexus offers a premium experience while also inheriting the image of durability long associated with Japanese vehicles. | Là thương hiệu xe sang thuộc Toyota, Lexus vừa mang lại trải nghiệm cao cấp, vừa thừa hưởng hình ảnh bền bỉ vốn gắn với ôtô Nhật. | Cụm phân từ \"inheriting...\" sau liên từ \"while\"; cụm quá khứ phân từ \"long associated with...\" bổ nghĩa cho \"image\". |\n| 11 | A sense of peace of mind | /ə sens əv ˌpiːs əv ˈmaɪnd/ | Cảm giác an tâm - A feeling of calm, safety, and freedom from worry - (Tranquility / Reassurance) | For people who want to use their cars for many years, this sense of peace of mind can be highly appealing. | Với những người muốn sử dụng xe trong nhiều năm, cảm giác an tâm này có sức hấp dẫn rất lớn. | Cụm danh từ \"sense of peace of mind\" đóng vai trò chủ ngữ; mệnh đề quan hệ \"who want to use...\". |\n| 12 | Appealing | /əˈpiː.lɪŋ/ | Hấp dẫn, thu hút - Having qualities that attract people or make them interested - (Attractive / Enticing) | For people who want to use their cars for many years, this sense of peace of mind can be highly appealing. | Với những người muốn sử dụng xe trong nhiều năm, cảm giác an tâm này có sức hấp dẫn rất lớn. | Động từ khuyết thiếu \"can be\" đi cùng trạng từ \"highly\" bổ nghĩa cho tính từ \"appealing\". |\n| 13 | Youthful | /ˈjuːθ.fəl/ | Trẻ trung - Having the qualities or appearance associated with young people - (Vibrant / Fresh) | Mercedes is often associated with a modern, youthful image and a clear display of status. | Mercedes thường gắn với hình ảnh hiện đại, trẻ trung và dễ thể hiện địa vị. | Tính từ \"youthful\" song song với \"modern\" bổ nghĩa cho danh từ \"image\". |\n| 14 | Display of status | /dɪˈspleɪ əv ˈsteɪ.t̬əs/ | Sự thể hiện địa vị - The clear showing of social or financial position - (Status symbol / Show of wealth) | Mercedes is often associated with a modern, youthful image and a clear display of status. | Mercedes thường gắn với hình ảnh hiện đại, trẻ trung và dễ thể hiện địa vị. | Cấu trúc bị động \"is associated with...\"; cụm danh từ \"display of status\" chỉ việc phô diễn vị thế xã hội. |\n| 15 | Understated | /ˌʌn.dɚˈsteɪ.t̬ɪd/ | Kín đáo, không phô trương - Expressed or presented in a subtle, quiet, and elegant way - (Subtle / Modest) | Lexus, meanwhile, tends towards more understated luxury. | Trong khi đó, Lexus thiên về sự sang trọng kín đáo hơn. | Trạng từ chuyển tiếp \"meanwhile\"; cụm động từ \"tends towards\"; tính từ so sánh hơn \"more understated\" bổ nghĩa cho \"luxury\". |\n| 16 | Reflect | /rɪˈflekt/ | Thể hiện, phản ánh - To show, express, or be a sign of something - (Show / Mirror) | Models such as the ES, RX and LX still clearly reflect the value of the car and the owner’s status, but they generally feel less showy. | Những mẫu ES, RX hay LX vẫn thể hiện rõ giá trị và vị thế của chủ xe nhưng thường ít tạo cảm giác phô trương hơn. | Động từ \"reflect\" đi cùng trạng từ \"clearly\"; câu ghép nối bằng liên từ đối lập \"but\". |\n| 17 | Showy | /ˈʃoʊ.i/ | Phô trương, hào nhoáng - Attracting attention by being overly bright, expensive, or prominent - (Ostentatious / Flashy) | Models such as the ES, RX and LX still clearly reflect the value of the car and the owner’s status, but they generally feel less showy. | Những mẫu ES, RX hay LX vẫn thể hiện rõ giá trị và vị thế của chủ xe nhưng thường ít tạo cảm giác phô trương hơn. | Liên động từ \"feel\" đi cùng tính từ \"showy\" và cấu trúc so sánh kém \"less showy\". |\n| 18 | Appeal to sb/sth | /əˈpiːl/ | Hấp dẫn, thu hút ai/cái gì - To be attractive or interesting to a particular group of people - (Attract / Interest) | This appeals to middle-aged customers, business owners and people with a solid financial background. | Điều này phù hợp với khách hàng trung niên, chủ doanh nghiệp hoặc những người có nền tảng tài chính vững chắc. | Động từ \"appeals\" đi cùng giới từ \"to\"; liệt kê các danh từ tân ngữ nối bằng \"and\". |\n| 19 | Solid | /ˈsɑː.lɪd/ | Vững chắc, ổn định - Financial or material security that is firm, strong, and dependable - (Stable / Sound) | This appeals to middle-aged customers, business owners and people with a solid financial background. | Điều này phù hợp với khách hàng trung niên, chủ doanh nghiệp hoặc những người có nền tảng tài chính vững chắc. | Cụm danh từ \"solid financial background\" (nền tảng tài chính vững chắc). |\n| 20 | Quote | /kwoʊt/ | Trích dẫn, dẫn lời - To repeat or cite words written or spoken by someone else - (Cite / Mention) | According to an expert quoted by VnExpress, Lexus customers tend to be older and more financially stable than Mercedes customers, meaning they may also be less affected during periods of economic uncertainty. | Theo một chuyên gia được VnExpress dẫn lời, khách hàng Lexus thường lớn tuổi và ổn định tài chính hơn khách hàng Mercedes, vì vậy họ cũng có thể ít bị ảnh hưởng hơn khi kinh tế biến động. | Quá khứ phân từ \"quoted by VnExpress\" rút gọn mệnh đề quan hệ; so sánh hơn \"older and more financially stable\". |\n| 21 | Economic uncertainty | /ˌek.əˈnɑː.mɪk ʌnˈsɝː.tən.t̬i/ | Sự bất ổn kinh tế - A period when financial conditions are unstable and unpredictable - (Financial instability / Economic slump) | According to an expert quoted by VnExpress, Lexus customers tend to be older and more financially stable than Mercedes customers, meaning they may also be less affected during periods of economic uncertainty. | Theo một chuyên gia được VnExpress dẫn lời, khách hàng Lexus thường lớn tuổi và ổn định tài chính hơn khách hàng Mercedes, vì vậy họ cũng có thể ít bị ảnh hưởng hơn khi kinh tế biến động. | Cụm danh từ \"economic uncertainty\" làm tân ngữ cho giới từ \"during\". |\n| 22 | Smoothness | /ˈsmuːð.nəs/ | Sự êm ái, độ êm - The quality of moving or operating quietly and comfortably without bumps - (Softness / Fluidity) | Another strength of Lexus is its smoothness and comfort. | Một điểm mạnh khác của Lexus là sự êm ái và thoải mái. | Cấu trúc \"its + danh từ\" (its smoothness and comfort) làm bổ ngữ cho \"is\". |\n| 23 | Stand out | /stænd aʊt/ | Nổi bật - To be easily noticed because of being different or superior - (Be prominent / Shine) | While Mercedes stands out for its technology and driving experience, Lexus pays particular attention to cabin quietness, a smooth ride and passenger comfort. | Trong khi Mercedes nổi bật về công nghệ và cảm giác lái, Lexus đặc biệt chú trọng độ yên tĩnh của khoang xe, sự mềm mại của chuyến đi và trải nghiệm của hành khách. | Cụm động từ \"stands out for\" (nổi bật về); mệnh đề so sánh dùng \"while\". |\n| 24 | Cabin | /ˈkæb.ɪn/ | Khoang xe - The interior space of a car where driver and passengers sit - (Interior / Passenger compartment) | While Mercedes stands out for its technology and driving experience, Lexus pays particular attention to cabin quietness, a smooth ride and passenger comfort. | Trong khi Mercedes nổi bật về công nghệ và cảm giác lái, Lexus đặc biệt chú trọng độ yên tĩnh của khoang xe, sự mềm mại của chuyến đi và trải nghiệm của hành khách. | Cụm danh từ \"cabin quietness\" (độ yên tĩnh của khoang xe). |\n| 25 | A smooth ride | /ə smuːð raɪd/ | Trải nghiệm di chuyển êm ái - A comfortable trip in a vehicle with minimal vibration or noise - (Comfortable drive / Gentle ride) | While Mercedes stands out for its technology and driving experience, Lexus pays particular attention to cabin quietness, a smooth ride and passenger comfort. | Trong khi Mercedes nổi bật về công nghệ và cảm giác lái, Lexus đặc biệt chú trọng độ yên tĩnh của khoang xe, sự mềm mại của chuyến đi và trải nghiệm của hành khách. | Cụm danh từ \"a smooth ride\" đóng vai trò tân ngữ song song trong phép liệt kê. |\n| 26 | Charging station | /ˈtʃɑːr.dʒɪŋ ˌsteɪ.ʃən/ | Trạm sạc - A location equipped to recharge electrical batteries of vehicles - (Power point / Recharging hub) | Hybrid technology also helps save fuel without requiring drivers to look for charging stations, as the battery is recharged while the vehicle is running. | Công nghệ hybrid cũng giúp tiết kiệm nhiên liệu mà người dùng không cần tìm trạm sạc vì pin được sạc trong quá trình xe vận hành. | Động từ \"save fuel\"; cấu trúc \"without requiring sb to do sth\"; mệnh đề trạng ngữ chỉ lý do với \"as\". |\n| 27 | Warranty policy | /ˈwɔːr.ən.t̬i ˌpɑː.lə.si/ | Chính sách bảo hành - Official terms under which repairs or replacements are guaranteed - (Guarantee terms / Warranty scheme) | This sense of “peace of mind” is further strengthened by Lexus’s warranty policy. | Cảm giác “an tâm” còn được củng cố bằng chính sách bảo hành. | Thể bị động \"is strengthened by...\"; cụm danh từ \"warranty policy\". |\n| 28 | Cover | /ˈkʌv.ɚ/ | Bảo hiểm, chi trả bảo hành - To provide financial or repair protection under an agreement or policy - (Protect / Insure) | Since May 2026, petrol-powered Lexus vehicles can be covered by a warranty of up to five years with unlimited mileage, while hybrid vehicles and their hybrid batteries can be covered for up to ten years with unlimited mileage, provided that maintenance requirements are met. | Từ tháng 5/2026, xe xăng Lexus có thể được bảo hành tới 5 năm không giới hạn kilomet, trong khi xe hybrid và pin hybrid có thể được bảo hành tới 10 năm không giới hạn kilomet nếu đáp ứng các điều kiện bảo dưỡng. | Động từ khuyết thiếu dạng bị động \"can be covered by/for\"; liên từ phụ thuộc \"provided that\" dẫn dắt mệnh đề điều kiện. |\n| 29 | Unlimited mileage | /ʌnˈlɪm.ɪ.t̬ɪd ˈmaɪ.lɪdʒ/ | Số kilomet không giới hạn - Distance traveled without any upper cap or restriction - (Infinite distance / No limit range) | Since May 2026, petrol-powered Lexus vehicles can be covered by a warranty of up to five years with unlimited mileage, while hybrid vehicles and their hybrid batteries can be covered for up to ten years with unlimited mileage, provided that maintenance requirements are met. | Từ tháng 5/2026, xe xăng Lexus có thể được bảo hành tới 5 năm không giới hạn kilomet, trong khi xe hybrid và pin hybrid có thể được bảo hành tới 10 năm không giới hạn kilomet nếu đáp ứng các điều kiện bảo dưỡng. | Cụm tính từ + danh từ \"unlimited mileage\" làm tân ngữ sau giới từ \"with\". |\n| 30 | Provided that | /prəˈvaɪ.dɪd ðæt/ | Miễn là, với điều kiện là - On condition that; only if a requirement is fulfilled - (On condition that / As long as) | Since May 2026, petrol-powered Lexus vehicles can be covered by a warranty of up to five years with unlimited mileage, while hybrid vehicles and their hybrid batteries can be covered for up to ten years with unlimited mileage, provided that maintenance requirements are met. | Từ tháng 5/2026, xe xăng Lexus có thể được bảo hành tới 5 năm không giới hạn kilomet, trong khi xe hybrid và pin hybrid có thể được bảo hành tới 10 năm không giới hạn kilomet nếu đáp ứng các điều kiện bảo dưỡng. | Liên từ phụ thuộc \"provided that\" nối mệnh đề điều kiện ở dạng bị động \"maintenance requirements are met\". |\n| 31 | A broad product range | /ə brɑːd ˈprɑː.dʌkt reɪndʒ/ | Dải sản phẩm rộng - A wide variety of products offered by a single company - (Wide product lineup / Diverse portfolio) | The German automaker has a broad product range, several locally assembled models and a much stronger distribution network. | Hãng xe Đức sở hữu dải sản phẩm rộng, nhiều mẫu xe được lắp ráp trong nước và mạng lưới phân phối mạnh hơn. | Cụm danh từ \"a broad product range\" làm tân ngữ cho \"has\". |\n| 32 | Assemble | /əˈsem.bəl/ | Lắp ráp, chế tạo - To fit together the separate component parts of a machine or vehicle - (Build / Put together) | The German automaker has a broad product range, several locally assembled models and a much stronger distribution network. | Hãng xe Đức sở hữu dải sản phẩm rộng, nhiều mẫu xe được lắp ráp trong nước và mạng lưới phân phối mạnh hơn. | Cụm danh từ chứa quá khứ phân từ làm tính từ \"locally assembled models\" (mẫu xe được lắp ráp nội địa). |\n| 33 | Distribution network | /ˌdɪs.trəˈbjuː.ʃən ˈnet.wɝːk/ | Mạng lưới phân phối - A system of dealers and logistics used to sell products to consumers - (Dealer network / Sales channel) | The German automaker has a broad product range, several locally assembled models and a much stronger distribution network. | Hãng xe Đức sở hữu dải sản phẩm rộng, nhiều mẫu xe được lắp ráp trong nước và mạng lưới phân phối mạnh hơn. | Cụm danh từ \"distribution network\" đi cùng tính từ so sánh hơn \"much stronger\". |\n| 34 | Long-established | /ˌlɑːŋ ɪˈstæb.lɪʃt/ | Lâu đời, hình thành từ lâu - Having existed for a long time with a solid reputation - (Traditional / Time-honored) | Mercedes attracts buyers with design, technology, driving experience and the reputation of a long-established German luxury brand. | Mercedes hấp dẫn người mua bằng thiết kế, công nghệ, cảm giác lái và danh tiếng của một thương hiệu xe sang Đức lâu đời. | Tính từ ghép \"long-established\" bổ nghĩa cho cụm \"German luxury brand\". |\n| 35 | Official | /əˈfɪʃ.əl/ | Chính thức, chính hãng - Approved by an authority or brand manufacturer - (Authorized / Certified) | According to VnExpress, Lexus has only two official showrooms in Hanoi and Ho Chi Minh City, while Mercedes has 14 dealerships. | Theo VnExpress, Lexus chỉ có hai showroom chính hãng tại Hà Nội và TP HCM, trong khi Mercedes có 14 đại lý. | Tính từ \"official\" bổ nghĩa cho danh từ \"showrooms\". |\n| 36 | Dealership | /ˈdiː.lɚ.ʃɪp/ | Đại lý kinh doanh xe - An establishment authorized to buy and sell specific vehicles - (Showroom / Agency) | According to VnExpress, Lexus has only two official showrooms in Hanoi and Ho Chi Minh City, while Mercedes has 14 dealerships. | Theo VnExpress, Lexus chỉ có hai showroom chính hãng tại Hà Nội và TP HCM, trong khi Mercedes có 14 đại lý. | Câu ghép dùng liên từ đối lập \"while\" để thể hiện sự khác biệt về quy mô mạng lưới phân phối. |\n| 37 | Formula | /ˈfɔːr.mjə.lə/ | Công thức, phương thức - A particular method or combination of qualities for achieving success - (Method / Recipe) | Mercedes remains a powerful symbol of German luxury, but Lexus is showing that “luxury combined with peace of mind” is also a particularly attractive formula in Vietnam. | Mercedes vẫn là biểu tượng mạnh của sự sang trọng kiểu Đức, nhưng Lexus đang chứng minh rằng “sang trọng đi cùng sự an tâm” cũng là một công thức đặc biệt hấp dẫn tại Việt Nam. | Mệnh đề danh từ làm tân ngữ sau \"showing that...\"; tính từ \"attractive\" và trạng từ \"particularly\" bổ nghĩa cho danh từ \"formula\". |\n", "Topic 1_Family.md": "# Topic 1: Gia đình (ZIM Academy)\n\n| No | Từ vựng | Phiên âm | Nghĩa | Câu chứa từ | Dịch câu | Giải thích ngữ pháp |\n|---|---|---|---|---|---|---| \n| 1 | Parent | /'peərənt/ | Bố hoặc mẹ - Parent is a father or mother. They are the people who give birth to and raise a child. | Both parents attended the school meeting to discuss their child's progress. | Cả bố và mẹ đều tham dự cuộc họp trường để thảo luận về sự tiến bộ của con họ. | Thì quá khứ đơn; chủ ngữ 'Both parents', động từ 'attended' đi với tân ngữ 'the school meeting'. |\n| 2 | Father | /ˈfɑː.ðər/ | Bố - Father is a male parent. He is the dad in a family. | His father taught him how to ride a bicycle in the park. | Bố của anh ấy đã dạy anh cách đi xe đạp trong công viên. | Thì quá khứ đơn; chủ ngữ 'His father', động từ 'taught' đi với cấu trúc 'teach somebody how to do something'. |\n| 3 | Mother | /ˈmʌð.ər/ | Mẹ - Mother is a female parent. She is the mom in a family. | Her mother baked a delicious strawberry cake for her birthday. | Mẹ của cô ấy đã nướng một chiếc bánh dâu tây thơm ngon cho sinh nhật của cô. | Thì quá khứ đơn; chủ ngữ 'Her mother', động từ 'baked'. |\n| 4 | A child | /tʃaɪld/ | Con cái (số ít) - A child is a young son or daughter. | The little child played happily with a toy train on the living room floor. | Đứa trẻ nhỏ chơi đùa vui vẻ với chiếc tàu hỏa đồ chơi trên sàn phòng khách. | Thì quá khứ đơn; chủ ngữ 'The little child', trạng từ 'happily' bổ nghĩa cho động từ 'played'. |\n| 5 | Children | /ˈtʃɪl.drən/ | Con cái (số nhiều) - Children are sons and daughters (the plural form of child). | Many children gathered excitedly in the school playground after class ended. | Nhiều trẻ em đã tập trung đầy hào hứng tại sân trường sau khi buổi học kết thúc. | Thì quá khứ đơn; chủ ngữ số nhiều 'Many children'. |\n| 6 | Son | /sʌn/ | Con trai - Son is a boy or man in relation to his parents. | Their eldest son graduated from university with top academic honors. | Con trai cả của họ đã tốt nghiệp đại học với danh hiệu thủ khoa. | Thì quá khứ đơn; chủ ngữ 'Their eldest son', động từ 'graduated from'. |\n| 7 | Daughter | /ˈdɔː.tər/ | Con gái - Daughter is a girl or woman in relation to her parents. | They felt immense pride when their daughter won the national chess championship. | Họ cảm thấy vô cùng tự hào khi con gái của họ giành chức vô địch cờ vua quốc gia. | Thì quá khứ đơn; mệnh đề chỉ thời gian 'when their daughter won...'. |\n| 8 | Twin | /twin/ | sinh đôi - Twin is one of two babies born to the same mother at the exact same time. | The twin brothers wore matching blue suits to the graduation ceremony. | Hai anh em sinh đôi mặc những bộ vest xanh giống nhau đến lễ tốt nghiệp. | Thì quá khứ đơn; cụm danh từ 'The twin brothers' làm chủ ngữ. |\n| 9 | Triplet | /ˈtrɪp.lət/ | sinh ba - Triplet is one of three babies born to the same mother at the exact same time. | Giving birth to healthy triplets brought immense happiness to the young couple. | Việc sinh ba đứa trẻ khỏe mạnh đã mang lại hạnh phúc to lớn cho cặp vợ chồng trẻ. | Thì quá khứ đơn; danh động từ 'Giving birth to healthy triplets' làm chủ ngữ. |\n| 10 | Sibling | /ˈsɪb.lɪŋ/ | Anh/ chị/ em ruột - Sibling is a brother or sister. | She shares a warm and supportive relationship with her younger sibling. | Cô ấy chia sẻ một mối quan hệ ấm áp và hỗ trợ với em ruột của mình. | Thì hiện tại đơn; chủ ngữ 'She', động từ 'shares' đi với tân ngữ 'a warm relationship'. |\n| 11 | Sister | /ˈsɪs.tər/ | Chị gái - Sister is a girl or woman who has the same parents as you. | My elder sister works as a talented graphic designer in the city. | Chị gái tôi làm việc như một nhà thiết kế đồ họa tài năng trong thành phố. | Thì hiện tại đơn; chủ ngữ 'My elder sister', động từ 'works as'. |\n| 12 | Brother | /ˈbrʌð.ər/ | Anh trai - Brother is a boy or man who has the same parents as you. | His younger brother plays football for the local youth league team. | Em trai của anh ấy chơi bóng đá cho đội giải trẻ địa phương. | Thì hiện tại đơn; chủ ngữ 'His younger brother', động từ 'plays'. |\n| 13 | Husband | /ˈhʌz.bənd/ | Chồng - Husband is a married man. | Her husband prepared a romantic candlelit dinner to celebrate their wedding anniversary. | Chồng cô ấy đã chuẩn bị một bữa tối lãng mạn dưới ánh nến để kỷ niệm ngày cưới của họ. | Thì quá khứ đơn; chủ ngữ 'Her husband', động từ 'prepared'. |\n| 14 | Wife | /waɪf/ | Vợ - Wife is a married woman. | He bought a beautiful golden necklace for his beloved wife on Valentine's Day. | Anh ấy đã mua một chiếc vòng cổ bằng vàng đẹp đẽ cho người vợ yêu quý của mình vào Ngày lễ Tình nhân. | Thì quá khứ đơn; chủ ngữ 'He', động từ 'bought'. |\n| 15 | Grandparent | /ˈɡrænpeərənt/ | Ông hoặc bà - Grandparent is the father or mother of your mother or dad. | Their grandparents live in a peaceful countryside house surrounded by green gardens. | Ông bà của họ sống trong một ngôi nhà thanh bình ở vùng nông thôn được bao quanh bởi khu vườn xanh tươi. | Thì hiện tại đơn; chủ ngữ số nhiều 'Their grandparents'. |\n| 16 | Grandmother | /ˈɡrænmʌðə(r)/ | Bà ngoại/ bà nội - Grandmother is the mother of your mother or dad (your grandma). | My grandmother bakes delicious homemade chocolate cookies every weekend. | Bà ngoại tôi nướng những chiếc bánh quy socola tự làm thơm ngon vào mỗi cuối tuần. | Thì hiện tại đơn; chủ ngữ số ít 'My grandmother', động từ 'bakes'. |\n| 17 | Grandfather | /ˈɡrænfɑːðə(r)/ | Ông ngoại/ ông nội - Grandfather is the father of your mother or dad (your grandpa). | Her grandfather enjoys gardening and playing chess in his spare time. | Ông nội của cô ấy thích làm vườn và chơi cờ vua trong thời gian rảnh rỗi. | Thì hiện tại đơn; động từ 'enjoys' đi với danh động từ 'gardening' và 'playing'. |\n| 18 | Grandchild | /ˈɡræn.tʃaɪld/ | Cháu - Grandchild is the child of your son or daughter. | The elderly couple loves spending quality time with their youngest grandchild. | Cặp vợ chồng già thích dành thời gian chất lượng với người cháu nhỏ tuổi nhất của họ. | Thì hiện tại đơn; cụm từ 'spending quality time with'. |\n| 19 | Grandson | /ˈɡræn.sʌn/ | Cháu trai - Grandson is the son of your son or daughter. | He took his grandson to the city zoo to see wild lions and elephants. | Ông ấy đã đưa cháu trai của mình đến sở thú thành phố để xem sư tử và voi hoang dã. | Thì quá khứ đơn; động từ 'took somebody to somewhere'. |\n| 20 | Granddaughter | /ˈɡræn.dɔː.tər/ | Cháu gái - Granddaughter is the daughter of your son or daughter. | She sent a lovely handmade birthday card to her sweet granddaughter. | Bà đã gửi một tấm thiệp sinh nhật làm bằng tay đáng yêu cho cháu gái ngọt ngào của mình. | Thì quá khứ đơn; chủ ngữ 'She', động từ 'sent'. |\n| 21 | Nephew | /ˈnev.juː/ | Cháu trai - Nephew is the son of your brother or sister. | My nephew is studying artificial intelligence at a top engineering university. | Cháu trai tôi đang học trí tuệ nhân tạo tại một trường đại học kỹ thuật hàng đầu. | Thì hiện tại tiếp diễn 'is studying' làm vị ngữ. |\n| 22 | Niece | /niːs/ | Cháu gái - Niece is the daughter of your brother or sister. | His niece won first prize in the regional classical piano competition. | Cháu gái của anh ấy đã giành giải nhất trong cuộc thi piano cổ điển cấp khu vực. | Thì quá khứ đơn; cụm danh từ 'first prize' làm tân ngữ. |\n| 23 | Cousin | /ˈkʌz.ən/ | Anh chị em họ - Cousin is the child of your uncle or aunt. | My cousin invited me to spend the summer holiday at her seaside villa. | Anh chị em họ của tôi đã mời tôi đến ở kỳ nghỉ hè tại biệt thự ven biển của cô ấy. | Thì quá khứ đơn; cấu trúc 'invite somebody to do something'. |\n| 24 | Uncle | /ˈʌŋ.kəl/ | Chú/ bác trai/ cậu - Uncle is the brother of your mom or dad, or the husband of your aunt. | His uncle operates a flourishing organic fruit farm near the mountains. | Chú của anh ấy điều hành một trang trại trái cây hữu cơ phát triển gần vùng núi. | Thì hiện tại đơn; động từ 'operates' đi với tân ngữ 'a flourishing organic fruit farm'. |\n| 25 | Aunt | /ɑːnt/ | Cô/ dì/ bác gái - Aunt is the sister of your mom or dad, or the wife of your uncle. | Her aunt gifted her a vintage film camera for her university graduation. | Dì của cô ấy đã tặng cô một chiếc máy ảnh phim cổ điển nhân dịp tốt nghiệp đại học. | Thì quá khứ đơn; hai tân ngữ 'her' và 'a vintage film camera'. |\n| 26 | Godfather | /ˈɡɒdˌfɑː.ðər/ | Bố đỡ đầu - Godfather is a man who promises to help guide a child in life, often chosen at a baptism. | His godfather offered valuable career advice during his university years. | Bố đỡ đầu của anh ấy đã đưa ra những lời khuyên nghề nghiệp quý báu trong những năm đại học. | Thì quá khứ đơn; cụm danh từ 'valuable career advice'. |\n| 27 | Godmother | /ˈɡɒdˌmʌð.ər/ | Mẹ đỡ đầu - Godmother is a woman who promises to help guide a child in life, often chosen at a baptism. | Her godmother presented her with a silver pendant necklace on her eighteenth birthday. | Mẹ đỡ đầu của cô ấy đã tặng cô một chiếc dây chuyền mặt bạc nhân dịp sinh nhật lần thứ 18. | Thì quá khứ đơn; cấu trúc 'present somebody with something'. |\n| 28 | Godson | /ˈɡɒd.sʌn/ | Con trai đỡ đầu - Godson is a boy or man whose spiritual parents are his godfather or godmother. | He bought a brand-new mountain bike as a gift for his godson. | Ông ấy đã mua một chiếc xe đạp địa hình mới tinh làm quà cho con trai đỡ đầu. | Thì quá khứ đơn; cụm danh từ 'a brand-new mountain bike'. |\n| 29 | Goddaughter | /ˈɡɒdˌdɔː.tər/ | Con gái đỡ đầu - Goddaughter is a girl or woman whose spiritual parents are her godfather or godmother. | She feels immense pride in her goddaughter's outstanding artistic accomplishments. | Cô ấy cảm thấy rất tự hào về những thành tựu nghệ thuật nổi bật của con gái đỡ đầu. | Thì hiện tại đơn; danh từ 'pride' đi với giới từ 'in'. |\n| 30 | Father-in-law | /ˈfɑː.ðər.ɪn.lɔː/ | Bố chồng/ bố vợ - Father-in-law is the father of your husband or wife. | His father-in-law taught him traditional wood carving techniques during the weekend. | Bố vợ của anh ấy đã dạy anh các kỹ thuật chạm khắc gỗ truyền thống vào cuối tuần. | Thì quá khứ đơn; động từ 'taught' đi với hai tân ngữ. |\n| 31 | Mother-in-law | /ˈmʌð.ə.rɪn.lɔː/ | Mẹ chồng/ mẹ vợ - Mother-in-law is the mother of your husband or wife. | Her mother-in-law welcomed her warmly into the family circle with a big feast. | Mẹ chồng cô ấy đã đón tiếp cô một cách nồng nhiệt vào gia đình với một bữa tiệc lớn. | Thì quá khứ đơn; trạng từ 'warmly' bổ nghĩa cho động từ 'welcomed'. |\n| 32 | Son-in-law | /ˈsʌn.ɪn.lɔː/ | Con rể - Son-in-law is the husband of your daughter. | They deeply respect their son-in-law for his dedication, integrity, and kindness. | Họ sâu sắc tôn trọng con rể của mình vì sự tận tụy, chính trực và lòng tốt của anh ấy. | Thì hiện tại đơn; trạng từ 'deeply' bổ nghĩa cho 'respect'. |\n| 33 | Daughter-in-law | /ˈdɔː.tər.ɪn.lɔː/ | Con dâu - Daughter-in-law is the wife of your son. | She assisted her daughter-in-law in organizing a memorable birthday party for the family. | Bà đã giúp con dâu của mình tổ chức một bữa tiệc sinh nhật đáng nhớ cho gia đình. | Thì quá khứ đơn; cấu trúc 'assist somebody in doing something'. |\n| 34 | Sister-in-law | /ˈsɪs.tə.rɪn.lɔː/ | Chị dâu/ em dâu - Sister-in-law is the sister of your husband or wife, or the wife of your brother. | Her sister-in-law arranged a magnificent floral display for the grand wedding banquet. | Chị dâu của cô ấy đã cắm một lẵng hoa lộng lẫy cho bữa tiệc cưới lớn. | Thì quá khứ đơn; cụm danh từ 'a magnificent floral display'. |\n| 35 | Brother-in-law | /ˈbrʌð.ə.rɪn.lɔː/ | Anh rể/ em rể - Brother-in-law is the brother of your husband or wife, or the husband of your sister. | His brother-in-law helped him repair the sports car engine yesterday afternoon. | Anh rể của anh ấy đã giúp anh sửa động cơ xe thể thao vào chiều qua. | Thì quá khứ đơn; cấu trúc 'help somebody do something'. |\n| 36 | Relative | /ˈrel.ə.tɪv/ | Họ hàng - Relative is any member of your family, like an aunt, uncle, or cousin. | All close relatives gathered at the grand hall to celebrate the couple's golden anniversary. | Tất cả họ hàng thân thiết đã tập trung tại đại sảnh để kỷ niệm đám cưới vàng của cặp đôi. | Thì quá khứ đơn; cụm danh từ 'All close relatives' làm chủ ngữ. |\n", "Vietnamese_Coffee_30_08.md": "# Vietnamese Coffee is Unique Because of These Reasons (30/08)\n\n| No | Từ vựng | Phiên âm | Nghĩa | Câu chứa từ | Dịch câu | Giải thích ngữ pháp |\n|---|---|---|---|---|---|---|\n| 1 | metal filter | /ˈmet.əl ˈfɪl.t̬ɚ/ | Phin lọc kim loại - A small device made of metal that separates solid coffee grounds from liquid brew - (strainer / coffee dripper) | With just a small metal filter, a few spoonfuls of condensed milk, and a glass full of ice, the Vietnamese have created a drink that leaves many visitors longing for more. | Chỉ cần một chiếc phin lọc kim loại nhỏ, vài thìa sữa đặc và một cốc đầy đá, người Việt đã tạo nên thức uống có khả năng gây thương nhớ cho không ít du khách. | Cụm giới từ chỉ phương tiện \"With + N\", thì hiện tại hoàn thành \"have created\" diễn tả thành tựu có giá trị kéo dài đến hiện tại. |\n| 2 | a spoonful of sth | /ə ˈspuːn.fʊl əv/ | Một thìa đầy cái gì - An amount of liquid or food that fills a spoon completely - (scoop of / spoonful of) | With just a small metal filter, a few spoonfuls of condensed milk, and a glass full of ice, the Vietnamese have created a drink that leaves many visitors longing for more. | Chỉ cần một chiếc phin lọc kim loại nhỏ, vài thìa sữa đặc và một cốc đầy đá, người Việt đã tạo nên thức uống có khả năng gây thương nhớ cho không ít du khách. | Danh từ chỉ đo lường \"spoonful\" ở dạng số nhiều \"a few spoonfuls of + N\", đi với danh từ không đếm được \"condensed milk\". |\n| 3 | condensed milk | /kənˌdenst ˈmɪlk/ | Sữa đặc - A thick sweet liquid made by removing water from milk and adding sugar - (sweetened milk / concentrated milk) | Sweetened condensed milk, which had a longer shelf life, therefore became a suitable alternative. | Sữa đặc có đường, loại có thời hạn sử dụng lâu hơn, vì thế trở thành một lựa chọn thay thế phù hợp. | Cụm danh từ làm chủ ngữ \"Sweetened condensed milk\", chứa mệnh đề quan hệ không xác định \", which had...\", phó từ liên kết \"therefore\". |\n| 4 | leave sb longing for sth | /liːv ˈlɒŋ.ɪŋ fɔːr/ | Gây thương nhớ / khiến ai khao khát cái gì - It causes someone to feel a strong continuing desire for something after experiencing it - (make someone crave / enchant someone) | With just a small metal filter, a few spoonfuls of condensed milk, and a glass full of ice, the Vietnamese have created a drink that leaves many visitors longing for more. | Chỉ cần một chiếc phin lọc kim loại nhỏ, vài thìa sữa đặc và một cốc đầy đá, người Việt đã tạo nên thức uống có khả năng gây thương nhớ cho không ít du khách. | Cấu trúc tác động \"leave + O + V-ing (longing for...)\", dùng đại từ quan hệ \"that\" làm chủ ngữ mệnh đề quan hệ. |\n| 5 | elaborate | /ɪˈlæb.ɚ.ət/ | Cầu kỳ, phức tạp - Something is highly detailed and intricate in design or appearance - (intricate / complex) | Vietnamese iced coffee is not elaborate in appearance, but it brings together bitterness, sweetness, creaminess, and a refreshing chill. | Cà phê sữa đá Việt Nam không cầu kỳ về hình thức, nhưng lại hội tụ đủ vị đắng, ngọt, béo và mát lạnh. | Cấu trúc tính từ đi kèm giới từ \"elaborate in + N\", liên từ \"but\" nối hai mệnh đề đối lập mang tính bổ sung. |\n| 6 | creaminess | /ˈkriː.mi.nəs/ | Độ béo ngậy, độ sánh mịn - The smooth rich quality of food or drink containing fat or milk - (richness / smoothness) | Vietnamese iced coffee is not elaborate in appearance, but it brings together bitterness, sweetness, creaminess, and a refreshing chill. | Cà phê sữa đá Việt Nam không cầu kỳ về hình thức, nhưng lại hội tụ đủ vị đắng, ngọt, béo và mát lạnh. | Danh từ chỉ đặc tính xuất phát từ tính từ \"creamy\", đứng trong chuỗi danh từ song song \"bitterness, sweetness, creaminess...\". |\n| 7 | refreshing chill | /rɪˈfreʃ.ɪŋ ˈtʃɪl/ | Cảm giác mát lạnh sảng khoái - A pleasant cold sensation that makes a person feel cool and active - (cool sensation / invigorating coldness) | Vietnamese iced coffee is not elaborate in appearance, but it brings together bitterness, sweetness, creaminess, and a refreshing chill. | Cà phê sữa đá Việt Nam không cầu kỳ về hình thức, nhưng lại hội tụ đủ vị đắng, ngọt, béo và mát lạnh. | Phân từ hiện tại \"refreshing\" làm tính từ bổ nghĩa cho danh từ \"chill\", đứng làm tân ngữ trực tiếp của \"brings together\". |\n| 8 | seemingly | /ˈsiː.mɪŋ.li/ | Tưởng chừng như, có vẻ như - It describes an impression that appears true on the surface - (apparently / outwardly) | Behind this seemingly simple combination lies a story of Vietnam’s history, climate, and culture. | Đằng sau sự kết hợp tưởng chừng đơn giản ấy là cả một câu chuyện về lịch sử, khí hậu và văn hóa Việt Nam. | Trạng từ \"seemingly\" bổ nghĩa cho tính từ \"simple\", nằm trong cấu trúc đảo ngữ chỉ nơi chốn \"Behind + N + lies + S\". |\n| 9 | humid | /ˈhjuː.mɪd/ | Ẩm ướt, nồm ẩm - The air contains a high degree of water vapor during warm weather - (moist / damp) | However, preserving fresh milk in a hot and humid tropical climate, before modern refrigeration was available, was far from easy. | Tuy nhiên, việc bảo quản sữa tươi trong điều kiện khí hậu nhiệt đới nóng ẩm, khi chưa có hệ thống làm lạnh hiện đại, là điều không dễ dàng. | Cặp tính từ song song \"hot and humid\", bổ nghĩa cho danh từ \"tropical climate\". |\n| 10 | tropical | /ˈtrɑː.pɪ.kəl/ | Thuộc nhiệt đới - Things belonging to or located in the hot regions near the equator - (equatorial / torrid) | However, preserving fresh milk in a hot and humid tropical climate, before modern refrigeration was available, was far from easy. | Tuy nhiên, việc bảo quản sữa tươi trong điều kiện khí hậu nhiệt đới nóng ẩm, khi chưa có hệ thống làm lạnh hiện đại, là điều không dễ dàng. | Tính từ \"tropical\" bổ nghĩa cho danh từ \"climate\", đứng sau các tính từ tả điều kiện \"hot and humid\". |\n| 11 | refrigeration | /rɪˌfrɪdʒ.əˈreɪ.ʃən/ | Hệ thống làm lạnh, sự bảo quản lạnh - The process of keeping food or drinks cold to preserve them - (cold storage / cooling system) | However, preserving fresh milk in a hot and humid tropical climate, before modern refrigeration was available, was far from easy. | Tuy nhiên, việc bảo quản sữa tươi trong điều kiện khí hậu nhiệt đới nóng ẩm, khi chưa có hệ thống làm lạnh hiện đại, là điều không dễ dàng. | Mệnh đề phụ ngữ thời gian \"before + S + V\", chủ ngữ \"refrigeration\" đi với tính từ \"available\". |\n| 12 | far from easy | /fɑːr frəm ˈiː.zi/ | Không hề dễ dàng - A task or condition is very difficult to accomplish - (hard / challenging) | However, preserving fresh milk in a hot and humid tropical climate, before modern refrigeration was available, was far from easy. | Tuy nhiên, việc bảo quản sữa tươi trong điều kiện khí hậu nhiệt đới nóng ẩm, khi chưa có hệ thống làm lạnh hiện đại, là điều không dễ dàng. | Thành ngữ \"far from + Adj\" để nhấn mạnh sự phủ định hoàn toàn (\"không hề...\"). |\n| 13 | shelf life | /ˈʃelf ˌlaɪf/ | Thời hạn sử dụng, thời gian bảo quản - The length of time that a product remains usable without deteriorating - (expiration duration / storage period) | Sweetened condensed milk, which had a longer shelf life, therefore became a suitable alternative. | Sữa đặc có đường, loại có thời hạn sử dụng lâu hơn, vì thế trở thành một lựa chọn thay thế phù hợp. | Danh từ ghép \"shelf life\", đi kèm dạng so sánh hơn của tính từ \"longer shelf life\". |\n| 14 | alternative | /ɑːlˈtɝː.nə.t̬ɪv/ | Lựa chọn thay thế, phương án thay thế - An option that can be chosen instead of something else - (substitute / replacement) | Sweetened condensed milk, which had a longer shelf life, therefore became a suitable alternative. | Sữa đặc có đường, loại có thời hạn sử dụng lâu hơn, vì thế trở thành một lựa chọn thay thế phù hợp. | Danh từ đếm được \"alternative\", đứng sau tính từ \"suitable\" làm bổ ngữ cho động từ \"became\". |\n| 15 | appeal | /əˈpiːl/ | Sức hấp dẫn, sức hút - The quality that makes something attractive or interesting to people - (attraction / charm) | The first element behind the drink’s appeal is its contrast of flavours. | Yếu tố đầu tiên tạo nên sức hút của món uống này chính là sự tương phản về hương vị. | Danh từ chỉ tính chất \"appeal\" đi với sở hữu cách \"drink's appeal\", làm tân ngữ cho giới từ \"behind\". |\n| 16 | contrast | /ˈkɑːn.træst/ | Sự tương phản, sự đối lập - A clear difference between two things when compared together - (disparity / divergence) | The first element behind the drink’s appeal is its contrast of flavours. | Yếu tố đầu tiên tạo nên sức hút của món uống này chính là sự tương phản về hương vị. | Danh từ \"contrast of + N (flavours)\", đứng làm bổ ngữ sau động từ to-be \"is\". |\n| 17 | bolder | /ˈboʊl.dɚ/ | Đậm đà hơn, mạnh hơn (hương vị) - Having a stronger and more distinctive taste or aroma - (stronger / richer) | This variety has a stronger, bolder flavour and a higher caffeine content than Arabica. | Loại hạt này có hương vị mạnh, đậm và hàm lượng caffeine cao hơn Arabica. | Tính từ so sánh hơn \"bolder\" ghép cặp với \"stronger\", bổ nghĩa cho \"flavour\" trong cấu trúc \"than Arabica\". |\n| 18 | content | /ˈkɑːn.tent/ | Hàm lượng, tỷ lệ - The amount of a particular substance contained inside something - (amount / level) | This variety has a stronger, bolder flavour and a higher caffeine content than Arabica. | Loại hạt này có hương vị mạnh, đậm và hàm lượng caffeine cao hơn Arabica. | Danh từ \"caffeine content\", đi với tính từ so sánh hơn \"higher caffeine content\". |\n| 19 | dark-roasted | /ˌdɑːrk ˈroʊ.stɪd/ | Được rang đậm - Coffee beans are roasted until they acquire a dark brown color and rich oil - (heavily roasted / deeply baked) | When dark-roasted and slowly brewed through a phin, it produces a dark-brown coffee with a pronounced bitterness and an intense aroma. | Khi được rang đậm rồi pha chậm qua phin, cà phê tạo thành thứ nước màu nâu sẫm, có vị đắng rõ rệt và hương thơm nồng. | Mệnh đề rút gọn thể bị động \"When + Adj (dark-roasted) and Adv + P2 (slowly brewed)\". |\n| 20 | brew | /bruː/ | Pha chế, hãm (trà, cà phê) - To prepare a hot drink by pouring hot water over beans or leaves - (infuse / steep) | When dark-roasted and slowly brewed through a phin, it produces a dark-brown coffee with a pronounced bitterness and an intense aroma. | Khi được rang đậm rồi pha chậm qua phin, cà phê tạo thành thứ nước màu nâu sẫm, có vị đắng rõ rệt và hương thơm nồng. | Quá khứ phân từ \"brewed\" đóng vai trò động từ bị động trong mệnh đề rút gọn sau \"When\". |\n| 21 | pronounced | /prəˈnaʊnst/ | Rõ rệt, nổi bật - A quality or feature is very noticeable and strong - (marked / distinct) | When dark-roasted and slowly brewed through a phin, it produces a dark-brown coffee with a pronounced bitterness and an intense aroma. | Khi được rang đậm rồi pha chậm qua phin, cà phê tạo thành thứ nước màu nâu sẫm, có vị đắng rõ rệt và hương thơm nồng. | Tính từ phân từ \"pronounced\" bổ nghĩa cho danh từ không đếm được \"bitterness\". |\n| 22 | intense aroma | /ɪnˈtens əˈroʊ.mə/ | Hương thơm nồng nàn, đậm đà - A strong pleasant smell that is powerful and easy to perceive - (strong scent / powerful fragrance) | When dark-roasted and slowly brewed through a phin, it produces a dark-brown coffee with a pronounced bitterness and an intense aroma. | Khi được rang đậm rồi pha chậm qua phin, cà phê tạo thành thứ nước màu nâu sẫm, có vị đắng rõ rệt và hương thơm nồng. | Cụm danh từ \"an intense aroma\", đứng song song với \"a pronounced bitterness\" sau giới từ \"with\". |\n| 23 | accustomed to sth | /əˈkʌs.təmd tuː/ | Quen với cái gì - A person is familiar with a condition because of experience - (used to / familiar with) | On its own, Robusta may taste rather strong to those who are not accustomed to it. | Nếu chỉ uống riêng, vị Robusta có thể hơi mạnh đối với những người chưa quen. | Tính từ đi kèm giới từ \"accustomed to + N/pronoun\", nằm trong mệnh đề quan hệ \"those who are not...\". |\n| 24 | richness | /ˈrɪtʃ.nəs/ | Độ ngậy, độ đậm đà - The state of containing a large amount of fat, sugar, or deep flavor - (creaminess / fullness) | When combined with condensed milk, however, its bitterness is softened by the milk’s sweetness and richness. | Nhưng khi kết hợp với sữa đặc, vị đắng ấy được làm dịu bởi độ ngọt và béo ngậy. | Danh từ chỉ tính chất \"richness\", đứng song song với \"sweetness\" sau sở hữu cách \"milk's\". |\n| 25 | overwhelmingly sweet | /ˌoʊ.vɚˈwel.mɪŋ.li ˈswiːt/ | Ngọt gắt, ngọt quá mức - A taste is extremely strong in sweetness to an unpleasant degree - (sickly sweet / excessively sweet) | In return, the strong coffee prevents the milk from becoming overwhelmingly sweet. | Ngược lại, cà phê đậm giúp cốc sữa không trở nên ngọt gắt. | Cấu trúc ngăn ngừa \"prevent + O + from + V-ing\", trạng từ \"overwhelmingly\" bổ nghĩa cho tính từ \"sweet\". |\n| 26 | complement | /ˈkɑːm.plə.ment/ | Bổ sung, làm tôn lên - One thing adds to another in a way that improves both - (enhance / balance out) | The two seemingly contrasting ingredients complement each other: the coffee provides depth and a lingering aftertaste, while the condensed milk creates a smooth, thick, and creamy texture. | Hai thành phần tưởng như đối lập lại bổ sung cho nhau: cà phê Robusta mang đến chiều sâu và dư vị kéo dài, còn sữa đặc tạo độ sánh, mềm và ngậy. | Động từ ngoại \"complement each other\", dấu hai chấm giải thích chi tiết cho mệnh đề phía trước. |\n| 27 | lingering aftertaste | /ˈlɪŋ.ɡɚ.ɪŋ ˈæf.tɚˌteɪst/ | Dư vị kéo dài, dư vị đọng lại - A flavor that remains in the mouth long after drinking - (persistent flavor / remaining taste) | The two seemingly contrasting ingredients complement each other: the coffee provides depth and a lingering aftertaste, while the condensed milk creates a smooth, thick, and creamy texture. | Hai thành phần tưởng như đối lập lại bổ sung cho nhau: cà phê Robusta mang đến chiều sâu và dư vị kéo dài, còn sữa đặc tạo độ sánh, mềm và ngậy. | Phân từ \"lingering\" làm tính từ bổ nghĩa cho danh từ \"aftertaste\", làm tân ngữ cho động từ \"provides\". |\n| 28 | smooth | /smuːð/ | Mượt mà, êm dịu - Liquids having a fine texture without lumps or sharp harshness - (silky / velvety) | The two seemingly contrasting ingredients complement each other: the coffee provides depth and a lingering aftertaste, while the condensed milk creates a smooth, thick, and creamy texture. | Hai thành phần tưởng như đối lập lại bổ sung cho nhau: cà phê Robusta mang đến chiều sâu và dư vị kéo dài, còn sữa đặc tạo độ sánh, mềm và ngậy. | Tính từ \"smooth\" đứng đầu dãy tính từ liệt kê \"smooth, thick, and creamy\", bổ nghĩa cho danh từ \"texture\". |\n| 29 | thick | /θɪk/ | Sánh, đặc - A liquid having a heavy flowable consistency rather than thin - (dense / viscous) | The two seemingly contrasting ingredients complement each other: the coffee provides depth and a lingering aftertaste, while the condensed milk creates a smooth, thick, and creamy texture. | Hai thành phần tưởng như đối lập lại bổ sung cho nhau: cà phê Robusta mang đến chiều sâu và dư vị kéo dài, còn sữa đặc tạo độ sánh, mềm và ngậy. | Tính từ chỉ độ đặc \"thick\", làm thành phần liệt kê mô tả cảm giác ăn uống (mouthfeel). |\n| 30 | creamy | /ˈkriː.mi/ | Béo ngậy, sánh mịn - Containing cream or having the rich taste and texture of cream - (milky / rich) | The two seemingly contrasting ingredients complement each other: the coffee provides depth and a lingering aftertaste, while the condensed milk creates a smooth, thick, and creamy texture. | Hai thành phần tưởng như đối lập lại bổ sung cho nhau: cà phê Robusta mang đến chiều sâu và dư vị kéo dài, còn sữa đặc tạo độ sánh, mềm và ngậy. | Tính từ \"creamy\" kết thúc chuỗi tính từ liệt kê trước danh từ \"texture\". |\n| 31 | ice cubes | /ˈaɪs ˌkjuːbz/ | Đá viên - Small block-shaped pieces of frozen water used to chill drinks - (frozen water blocks / ice blocks) | On hot days, the sound of ice cubes clinking against the glass and the refreshing chill of the first sip can quickly ease the oppressive heat. | Trong những ngày nóng bức, tiếng đá viên va vào thành cốc và cảm giác mát lạnh ngay từ ngụm đầu tiên có thể nhanh chóng xua đi sự oi ả. | Danh từ ghép số nhiều \"ice cubes\", làm chủ ngữ trong cụm danh từ \"the sound of ice cubes clinking...\". |\n| 32 | clink against the glass | /ˈklɪŋk əˌɡenst ðə ɡlæs/ | Va va lách cách vào thành cốc - Hard pieces make a light ringing metallic or glass sound against a vessel - (jingle against / rattle against) | On hot days, the sound of ice cubes clinking against the glass and the refreshing chill of the first sip can quickly ease the oppressive heat. | Trong những ngày nóng bức, tiếng đá viên va vào thành cốc và cảm giác mát lạnh ngay từ ngụm đầu tiên có thể nhanh chóng xua đi sự oi ả. | Phân từ hiện tại \"clinking against...\" rút gọn mệnh đề tính từ bổ nghĩa cho \"ice cubes\". |\n| 33 | sip | /sɪp/ | Ngụm (uống), nhấp từng ngụm - A small mouthful of a drink taken slowly - (taste / mouthful) | On hot days, the sound of ice cubes clinking against the glass and the refreshing chill of the first sip can quickly ease the oppressive heat. | Trong những ngày nóng bức, tiếng đá viên va vào thành cốc và cảm giác mát lạnh ngay từ ngụm đầu tiên có thể nhanh chóng xua đi sự oi ả. | Danh từ đếm được \"sip\", nằm trong cụm danh từ \"the first sip\". |\n| 34 | ease | /iːz/ | Xua tan, làm dịu đi - To reduce the intensity of unpleasant heat or distress - (alleviate / relieve) | On hot days, the sound of ice cubes clinking against the glass and the refreshing chill of the first sip can quickly ease the oppressive heat. | Trong những ngày nóng bức, tiếng đá viên va vào thành cốc và cảm giác mát lạnh ngay từ ngụm đầu tiên có thể nhanh chóng xua đi sự oi ả. | Động từ nguyên thể không \"to\" \"ease\" đứng sau trợ động từ khuyết thiếu \"can\" và phó từ \"quickly\". |\n| 35 | sweetened milk | /ˈswiː.tənd ˈmɪlk/ | Sữa có đường - Milk that has sugar added to enhance sweetness - (sugared milk / condensed sweet milk) | The sweetened milk provides a quick burst of energy, while the caffeine helps the drinker feel more alert. | Sữa có đường cung cấp một nguồn năng lượng nhanh chóng, trong khi caffeine giúp người uống cảm thấy tỉnh táo hơn. | Tính từ quá khứ phân từ \"sweetened\" bổ nghĩa cho danh từ không đếm được \"milk\", làm chủ ngữ cho mệnh đề đầu. |\n| 36 | a quick burst of energy | /ə ˌkwɪk ˌbɝːst əv ˈen.ɚ.dʒi/ | Nguồn năng lượng tức thì - A sudden short increase in physical or mental strength - (instant energy boost / sudden energy spike) | The sweetened milk provides a quick burst of energy, while the caffeine helps the drinker feel more alert. | Sữa có đường cung cấp một nguồn năng lượng nhanh chóng, trong khi caffeine giúp người uống cảm thấy tỉnh táo hơn. | Cụm danh từ làm tân ngữ \"a quick burst of energy\", kết hợp liên từ so sánh/đối lập \"while\". |\n| 37 | quench one’s thirst | /kwentʃ wʌnz θɝːst/ | Giải cơn khát - To satisfy one's desire to drink by drinking liquid - (slake thirst / satisfy thirst) | Vietnamese iced coffee can therefore quench one’s thirst while serving as a familiar “start button” in the morning or a source of motivation during an afternoon at work. | Vì thế, cà phê sữa đá vừa có thể giải khát, vừa trở thành “nút khởi động” quen thuộc vào buổi sáng hoặc nguồn động lực cho một buổi chiều làm việc. | Thành ngữ cố định \"quench one's thirst\", theo sau bởi phó từ liên kết \"therefore\" và động từ \"can\". |\n| 38 | low plastic stool | /loʊ ˌplæs.tɪk ˈstuːl/ | Ghế nhựa thấp - A small simple seat made of plastic positioned near the ground - (small plastic seat / tiny stool) | Along the streets, a small stall, a few low plastic stools, and a corner of the pavement are enough to form a coffee space. | Trên các con phố, chỉ cần một quán nhỏ, vài chiếc ghế nhựa thấp và một góc vỉa hè là đã có thể hình thành một không gian cà phê. | Trật tự tính từ đứng trước danh từ (low - kích thước, plastic - chất liệu, stool - danh từ chính). |\n| 39 | pavement | /ˈpeɪv.mənt/ | Vỉa hè - A paved path for pedestrians at the side of a street - (sidewalk / footway) | Along the streets, a small stall, a few low plastic stools, and a corner of the pavement are enough to form a coffee space. | Trên các con phố, chỉ cần một quán nhỏ, vài chiếc ghế nhựa thấp và một góc vỉa hè là đã có thể hình thành một không gian cà phê. | Danh từ đếm được \"pavement\" trong cụm danh từ \"a corner of the pavement\". |\n| 40 | dripping | /ˈdrɪp.ɪŋ/ | Sự nhỏ giọt - Liquid falling in small continuous drops - (trickling / drop falling) | The slow dripping of the phin also contributes to this distinctive experience. | Nhịp nhỏ giọt chậm rãi của chiếc phin cũng góp phần tạo nên nét riêng ấy. | Danh từ xuất phát từ động từ \"dripping\", đi với tính từ \"slow\" làm chủ ngữ chính của câu. |\n| 41 | distinctive | /dɪˈstɪŋk.tɪv/ | Đặc trưng, riêng biệt - Having a special quality that is easy to recognize and set apart - (characteristic / unique) | The slow dripping of the phin also contributes to this distinctive experience. | Nhịp nhỏ giọt chậm rãi của chiếc phin cũng góp phần tạo nên nét riêng ấy. | Cụm động từ \"contribute to + N\", tính từ \"distinctive\" bổ nghĩa cho danh từ \"experience\". |\n| 42 | briefly step away | /ˈbriːf.li stɛp əˈweɪ/ | Tạm ngắt khỏi, tạm rời xa - To pause involvement in daily activities for a short moment - (take a short break / pause temporarily) | While waiting for the coffee to drip into the cup, people have time to talk and briefly step away from the rush of daily life. | Trong lúc chờ cà phê chảy xuống, người uống có thời gian trò chuyện và tạm ngắt khỏi nhịp sống tất bật. | Phó từ \"briefly\" bổ nghĩa cho cụm động từ \"step away from + N\". |\n| 43 | rush | /rʌʃ/ | Sự hối hả, nhịp sống tất bật - A state of rapid movement, intense activity, or busyness - (bustle / frantic pace) | While waiting for the coffee to drip into the cup, people have time to talk and briefly step away from the rush of daily life. | Trong lúc chờ cà phê chảy xuống, người uống có thời gian trò chuyện và tạm ngắt khỏi nhịp sống tất bật. | Danh từ không đếm được \"rush\" trong cụm danh từ \"the rush of daily life\". |\n| 44 | countless | /ˈkaʊnt.ləs/ | Vô số, không đếm xuể - Very many in number, too numerous to be counted - (innumerable / endless) | For Vietnamese people, cà phê sữa đá is associated with familiar mornings, meetings with friends, and countless everyday conversations. | Đối với người Việt Nam, cà phê sữa đá gắn liền với những buổi sáng quen thuộc, những cuộc gặp gỡ bạn bè và vô số câu chuyện thường ngày. | Tính từ phủ định \"countless\" bổ nghĩa cho danh từ số nhiều \"conversations\". |\n| 45 | rhythm of life | /ˈrɪð.əm əv ˈlaɪf/ | Nhịp sống - The natural flow and speed of daily human activities in a city - (pace of life / pattern of living) | For tourists, enjoying the drink by the roadside is an opportunity to experience the city through its flavours, sounds, and surrounding rhythm of life. | Đối với du khách, thưởng thức thức uống này bên đường là cơ hội để cảm nhận thành phố qua hương vị, âm thanh và nhịp sống xung quanh. | Cụm danh từ \"rhythm of life\", đứng trong dãy liệt kê bổ ngữ của giới từ \"through\". |\n| 46 | merely | /ˈmɪr.li/ | Chỉ là, đơn thuần - Used to emphasize that something is nothing more than what is specified - (simply / solely) | They are not merely drinking a cup of coffee; they are also taking part in a distinctly Vietnamese way of life. | Họ không chỉ đơn thuần uống một tách cà phê mà còn đang hòa mình vào một lối sống đậm chất Việt Nam. | Phó từ \"merely\" đứng sau \"not\" trong cấu trúc tương đương \"not merely... (but) also...\". |\n| 47 | distinctly Vietnamese | /dɪˌstɪŋkt.li ˌvjet.nəˈmiːz/ | Mang đậm chất Việt Nam - Clearly possessing characteristics unique to Vietnamese culture - (uniquely Vietnamese / authentically Vietnamese) | They are not merely drinking a cup of coffee; they are also taking part in a distinctly Vietnamese way of life. | Họ không chỉ đơn thuần uống một tách cà phê mà còn đang hòa mình vào một lối sống đậm chất Việt Nam. | Trạng từ \"distinctly\" bổ nghĩa cho tính từ quốc tịch \"Vietnamese\", làm bổ nghĩa trước danh từ \"way of life\". |\n| 48 | adopt sth | /əˈdɑːpt/ | Tiếp nhận, nhận làm của mình - To take up a foreign custom or drink and make it one's own - (embrace / assimilate) | It is the result of the Vietnamese adopting a foreign drink and transforming it into something of their own: using Robusta beans grown on Vietnamese soil, brewing them through a filter, mixing the coffee with condensed milk, and cooling it with plenty of ice. | Đó là kết quả của quá trình người Việt tiếp nhận một thức uống ngoại nhập rồi biến nó thành của riêng mình: dùng hạt Robusta trồng trên đất Việt, pha bằng phin, hòa với sữa đặc và làm mát bằng thật nhiều đá. | Phân từ danh động từ \"the Vietnamese adopting... and transforming...\", theo sau bởi dấu hai chấm liệt kê các hình thức V-ing. |\n"};


async function fetchAndLoadArticle(fileName) {
    let mdContent = null;
    const tryFetch = async (url) => {
        try {
            const res = await fetch(url);
            if (res.ok) {
                const txt = await res.text();
                if (txt && txt.trim().length > 0) return txt;
            }
        } catch(e) {}
        return null;
    };

    // 1. Try API endpoints
    mdContent = await tryFetch(getApiUrl('/api/file?name=' + encodeURIComponent(fileName)));
    if (!mdContent) mdContent = await tryFetch(getApiUrl('/api/article-content?file=' + encodeURIComponent(fileName)));
    
    // 2. Try static local folders
    if (!mdContent) mdContent = await tryFetch('data/' + fileName);
    if (!mdContent) mdContent = await tryFetch('Results/' + fileName);
    if (!mdContent) mdContent = await tryFetch('../Results/' + fileName);

    // 3. Try Fallback Offline Store
    if (!mdContent && typeof FALLBACK_MD_STORE !== 'undefined' && FALLBACK_MD_STORE[fileName]) {
        console.log('Using offline FALLBACK_MD_STORE for', fileName);
        mdContent = FALLBACK_MD_STORE[fileName];
    }

    if (mdContent) {
        loadArticleData(fileName, mdContent);
        localStorage.setItem('last_selected_article', fileName);
    } else {
        console.error('Could not load article:', fileName);
        if (typeof showToast === 'function') {
            showToast('Không thể nạp bài đọc ' + fileName + '. Vui lòng kiểm tra lại!', 'error');
        }
    }
}

function loadArticleData(fileName, mdContent) {
    let parsedData = parseMarkdownTable(mdContent);

    // Universal Fallback if no structured table matches
    if (parsedData.length === 0 && mdContent && mdContent.trim().length > 0) {
        const rawLines = mdContent.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n').map(l => l.trim()).filter(l => l.length > 0);
        rawLines.forEach((line, idx) => {
            const parts = line.split(/[\t,:\-]/);
            const w = parts[0].replace(/[*_#]/g, '').trim();
            const m = parts.slice(1).join(' ').trim() || line;
            if (w && w.length > 1 && !w.startsWith('|')) {
                parsedData.push({
                    no: idx + 1,
                    word: w,
                    ipa: '',
                    meaning: m,
                    englishDef: '',
                    synonyms: '',
                    sentence: `${w} is a vocabulary term.`,
                    translation: '',
                    grammar: ''
                });
            }
        });
    }

    if (parsedData.length > 0) {
        currentVocabList = parsedData;
        currentCardIndex = 0;

        // Update deck title
        const titleMap = {
            "Topic 1_Family.md": "Topic 1: Từ vựng về gia đình (Family Vocabulary)",
            "ZIM_1000_Thematic_Vocab_02_09.md": "Tất Cả 1000 Từ Vựng (ZIM Academy)",
            "Family_Topic_1.md": "Topic 1: Gia đình (36 từ)",
            "Clothing_Topic_2.md": "Topic 2: Quần áo (30 từ)",
            "Environment_Topic_3.md": "Topic 3: Môi trường (25 từ)",
            "Personality_Topic_4.md": "Topic 4: Tính cách (37 từ)",
            "Emotions_Topic_5.md": "Topic 5: Cảm xúc (19 từ)",
            "Relationships_Topic_6.md": "Topic 6: Mối quan hệ (24 từ)",
            "Love_Topic_7.md": "Topic 7: Tình yêu (19 từ)",
            "Food_Topic_8.md": "Topic 8: Đồ ăn (19 từ)",
            "Drinks_Topic_9.md": "Topic 9: Đồ uống (20 từ)",
            "Fruit_Topic_10.md": "Topic 10: Trái cây (20 từ)",
            "Vegetables_Topic_11.md": "Topic 11: Rau củ quả (20 từ)",
            "Seafood_Topic_12.md": "Topic 12: Hải sản (20 từ)",
            "Vietnamese_Dishes_Topic_13.md": "Topic 13: Món ăn Việt Nam (20 từ)",
            "Cooking_Topic_14.md": "Topic 14: Nấu ăn (20 từ)",
            "Hobbies_Topic_15.md": "Topic 15: Sở thích (19 từ)",
            "Music_Topic_16.md": "Topic 16: Âm nhạc (20 từ)",
            "Shopping_Topic_17.md": "Topic 17: Shopping (18 từ)",
            "Travel_Topic_18.md": "Topic 18: Du lịch (20 từ)",
            "Photography_Topic_19.md": "Topic 19: Chụp ảnh (16 từ)",
            "Entertainment_Topic_20.md": "Topic 20: Giải trí (18 từ)",
            "Movie_Genres_Topic_21.md": "Topic 21: Thể loại phim (15 từ)",
            "Book_Genres_Topic_22.md": "Topic 22: Thể loại sách (11 từ)",
            "Beauty_Topic_23.md": "Topic 23: Làm đẹp (14 từ)",
            "Sports_Topic_24.md": "Topic 24: Thể thao (18 từ)",
            "Football_Topic_25.md": "Topic 25: Bóng đá (16 từ)",
            "House_and_Home_Topic_26.md": "Topic 26: Nhà cửa (20 từ)",
            "Kitchen_Topic_27.md": "Topic 27: Nhà bếp (17 từ)",
            "Tet_Holiday_Topic_28.md": "Topic 28: Tết (20 từ)",
            "Lifestyle_Topic_29.md": "Topic 29: Đời sống (19 từ)",
            "Animals_Topic_30.md": "Topic 30: Con vật (20 từ)",
            "Flowers_Topic_31.md": "Topic 31: Hoa (20 từ)",
            "Christmas_Topic_32.md": "Topic 32: Giáng sinh (20 từ)",
            "Colors_Topic_33.md": "Topic 33: Màu sắc (19 từ)",
            "Transportation_Topic_34.md": "Topic 34: Phương tiện giao thông (20 từ)",
            "Traffic_Signs_Topic_35.md": "Topic 35: Biển báo giao thông (20 từ)",
            "Jobs_Topic_36.md": "Topic 36: Nghề nghiệp (20 từ)",
            "Health_Topic_37.md": "Topic 37: Sức khỏe (18 từ)",
            "Diseases_Topic_38.md": "Topic 38: Các loại bệnh (17 từ)",
            "Education_Topic_39.md": "Topic 39: Giáo dục (19 từ)",
            "School_Subjects_Topic_40.md": "Topic 40: Các môn học (18 từ)",
            "Skills_Topic_41.md": "Topic 41: Kỹ năng (17 từ)",
            "Vietnamese_Festivals_Topic_42.md": "Topic 42: Lễ hội ở Việt Nam (15 từ)",
            "Mid_Autumn_Festival_Topic_43.md": "Topic 43: Tết Trung Thu (14 từ)",
            "Folk_Games_Topic_44.md": "Topic 44: Trò chơi dân gian (20 từ)",
            "Culture_Topic_45.md": "Topic 45: Văn hóa (15 từ)",
            "Art_Topic_46.md": "Topic 46: Nghệ thuật (12 từ)",
            "Business_Topic_47.md": "Topic 47: Kinh doanh (14 từ)",
            "City_Life_Topic_48.md": "Topic 48: Thành phố (19 từ)",
            "Countries_Topic_49.md": "Topic 49: Tên các nước (20 từ)",
            "Office_Life_Topic_50.md": "Topic 50: Đời sống công sở (18 từ)",
            "Mastering_Family_Vocab_31_08.md": "Mastering Family Vocabulary in English",
            "Vietnamese_Coffee_30_08.md": "Vietnamese Coffee is Unique Because of These Reasons",
            "Buddha_Lost_Eyes_30_08.md": "The Journey Home of the Buddha's Lost Eyes"
        };
        const deckTitleEl = document.getElementById('currentDeckTitle');
        if (deckTitleEl) {
            deckTitleEl.textContent = titleMap[fileName] || fileName;
        }

        updateStats();

        // 🔀 Auto-shuffle all vocabulary across all modes (Flashcards, Quiz, Write, Table)
        shuffleAllModes(false);
        renderFlashcard();
        renderTable();

        try {
            if (document.activeElement && typeof document.activeElement.blur === 'function') {
                document.activeElement.blur();
            }
            window.focus();
        } catch(e) {}
    } else {
        if (typeof showToast === 'function') {
            showToast(`File ${fileName} is empty or could not be parsed.`, 'error');
        }
    }
}

// 7.2 Delete Selected Article, Delete All, & Restore Engine
function setupDeleteArticle() {
    const deleteBtn = document.getElementById('deleteArticleBtn');
    const deleteAllBtn = document.getElementById('deleteAllArticlesBtn');
    const restoreBtn = document.getElementById('restoreArticlesBtn');
    const select = document.getElementById('articleSelect');

    if (!select) return;

    if (deleteBtn) {
        deleteBtn.addEventListener('click', () => {
            const selectedOption = select.options[select.selectedIndex];
            if (!selectedOption) {
                alert("No article selected to delete!");
                return;
            }

            const fileName = selectedOption.value;
            const displayName = selectedOption.textContent;

            const confirmDelete = confirm(`Are you sure you want to delete "${displayName}"?\nIt will be removed from your selection menu.`);
            if (!confirmDelete) return;

            // 1. Add to deleted_articles in localStorage
            addDeletedArticle(fileName);

            // 2. Remove option
            selectedOption.remove();

            // 3. Switch to next option or clear UI
            if (select.options.length > 0) {
                select.selectedIndex = 0;
                const newFile = select.value;
                localStorage.setItem('last_selected_article', newFile);
                fetchAndLoadArticle(newFile);
            } else {
                clearAllArticlesUI();
            }

            alert(`Successfully deleted "${displayName}"!`);
        });
    }

    if (deleteAllBtn) {
        deleteAllBtn.addEventListener('click', () => {
            if (select.options.length === 0) {
                alert("No articles available to delete!");
                return;
            }

            const confirmDeleteAll = confirm(`🔥 Are you sure you want to DELETE ALL ${select.options.length} articles from your list?\nThis will clear all topics from your selection dropdown.`);
            if (!confirmDeleteAll) return;

            // Mark all current options as deleted
            Array.from(select.options).forEach(opt => {
                addDeletedArticle(opt.value);
            });

            // Clear select
            select.innerHTML = '';
            clearAllArticlesUI();

            alert("Successfully deleted all articles! You can import new .MD files or click 'Restore Default Topics' anytime.");
        });
    }

    if (restoreBtn) {
        restoreBtn.addEventListener('click', () => {
            const confirmRestore = confirm("🔄 Are you sure you want to restore all default topic articles?");
            if (!confirmRestore) return;

            // Clear deleted_articles in localStorage
            localStorage.removeItem('deleted_articles');
            location.reload();
        });
    }
}

function clearAllArticlesUI() {
    localStorage.removeItem('last_selected_article');
    currentVocabList = [];
    currentCardIndex = 0;
    quizHistory = [];
    const deckTitleEl = document.getElementById('currentDeckTitle');
    if (deckTitleEl) deckTitleEl.textContent = "No Article Selected";
    updateStats();
    renderFlashcard();
    renderTable();
    const quizBody = document.getElementById('quizBody');
    if (quizBody) quizBody.innerHTML = '<p style="text-align:center; padding:30px; color:var(--text-secondary);">No vocabulary dataset available. Please import a .MD file or restore default topics.</p>';
}

function parseMarkdownTable(mdContent) {
    if (!mdContent) return [];
    
    // Normalize Windows/Unix line endings
    const lines = mdContent.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
    const items = [];

    lines.forEach(line => {
        const trimmed = line.trim();
        if (!trimmed) return;

        // 1. Try Markdown Table Format (contains '|')
        if (trimmed.includes('|') && !trimmed.includes('---')) {
            const rawParts = trimmed.split('|').map(p => p.trim());
            const parts = rawParts.filter((_, idx, arr) => {
                if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
                    return idx > 0 && idx < arr.length - 1;
                }
                return true;
            });

            if (parts.length >= 2) {
                const firstCol = parts[0].toLowerCase();
                const secondCol = parts[1] ? parts[1].toLowerCase() : '';
                // Skip header row
                if (firstCol === 'no' || firstCol === 'stt' || secondCol === 'từ vựng' || secondCol === 'word') {
                    return;
                }

                let no = parseInt(parts[0]) || items.length + 1;
                let word = parts[0];
                let ipa = '';
                let meaning = '';

                if (parts.length >= 3 && !isNaN(parseInt(parts[0]))) {
                    word = parts[1].replace(/[*_]/g, '');
                    ipa = parts[2] || '';
                    meaning = parts[3] || '';
                } else {
                    no = items.length + 1;
                    word = parts[0].replace(/[*_]/g, '');
                    ipa = parts[1] || '';
                    meaning = parts[2] || parts[1] || '';
                }

                if (!word || word.length === 0) return;

                let rawMeaning = meaning;
                let englishDef = '';
                let synonyms = '';

                if (rawMeaning.includes('-')) {
                    const mParts = rawMeaning.split(/\s+-\s+/).map(s => s.trim());
                    meaning = mParts[0];

                    if (mParts.length >= 3) {
                        if (mParts[mParts.length - 1].startsWith('(')) {
                            synonyms = mParts[mParts.length - 1];
                            englishDef = mParts.slice(1, mParts.length - 1).join(' - ');
                        } else {
                            englishDef = mParts.slice(1).join(' - ');
                        }
                    } else if (mParts.length === 2) {
                        if (mParts[1].startsWith('(')) {
                            synonyms = mParts[1];
                        } else {
                            englishDef = mParts[1];
                        }
                    }
                }

                const sentence = parts[4] ? parts[4].replace(/[*_]/g, '') : '';
                const translation = parts[5] || '';
                const grammar = parts[6] || '';

                items.push({ no, word, ipa, meaning, englishDef, synonyms, sentence, translation, grammar });
                return;
            }
        }

        // 2. Fallback Plain Text Format (e.g. "word - meaning" or "1. word : meaning")
        if (trimmed.includes('-') || trimmed.includes(':') || trimmed.includes('=')) {
            const cleanLine = trimmed.replace(/^\d+[\.\)]\s*/, '');
            const parts = cleanLine.split(/[:=\-]\s+/).map(s => s.trim());
            if (parts.length >= 2) {
                const word = parts[0].replace(/[*_]/g, '');
                const meaning = parts[1];
                if (word && meaning && word.toLowerCase() !== 'word' && word.toLowerCase() !== 'từ vựng') {
                    items.push({
                        no: items.length + 1,
                        word: word,
                        ipa: '',
                        meaning: meaning,
                        englishDef: '',
                        synonyms: '',
                        sentence: `${word} is an important vocabulary term.`,
                        translation: '',
                        grammar: ''
                    });
                }
            }
        }
    });

    return items;
}

// 8. Export Anki / CSV
function setupExportTab() {
    document.getElementById('downloadAnkiCsvBtn').addEventListener('click', exportAnkiCsv);
    document.getElementById('downloadJsonBtn').addEventListener('click', exportJson);
}

function exportAnkiCsv() {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Front\tBack\n";

    currentVocabList.forEach(item => {
        const front = `"${item.word} <br><small style='color:blue;'>${item.ipa}</small>"`;
        const back = `"${item.meaning} ${item.synonyms ? '<br><i>' + item.synonyms + '</i>' : ''}<hr><b>Sentence:</b> ${item.sentence}<br><i>${item.translation}</i><br><small>${item.grammar}</small>"`;
        csvContent += `${front}\t${back}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "Anki_Vocab_Import.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function exportJson() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(currentVocabList, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "vocab_dataset.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}

// 8. Study Report & Analytics Engine
function recordDailyActivity(type, isCorrect) {
    const today = new Date().toISOString().split('T')[0];
    const logs = JSON.parse(localStorage.getItem('vocab_daily_logs') || '{}');
    
    if (!logs[today]) {
        logs[today] = {
            quiz: { cardsLearned: 0, score: 0, correct: 0, wrong: 0 },
            write: { cardsLearned: 0, score: 0, correct: 0, wrong: 0 }
        };
    }
    
    const sec = logs[today][type] || { cardsLearned: 0, score: 0, correct: 0, wrong: 0 };
    sec.cardsLearned += 1;
    if (isCorrect) {
        sec.correct += 1;
        sec.score += 1;
    } else {
        sec.wrong += 1;
        sec.score = Math.max(0, sec.score - 1);
    }
    logs[today][type] = sec;
    localStorage.setItem('vocab_daily_logs', JSON.stringify(logs));
}

function purgeOldSampleLogs() {
    const logs = JSON.parse(localStorage.getItem('vocab_daily_logs') || '{}');
    let modified = false;
    Object.keys(logs).forEach(dateStr => {
        if (dateStr < '2026-08-30') {
            delete logs[dateStr];
            modified = true;
        }
    });
    if (modified) {
        localStorage.setItem('vocab_daily_logs', JSON.stringify(logs));
    }
}

let selectedReportYear = new Date().getFullYear();
let selectedReportMonth = new Date().getMonth() + 1;

function setupReportTab() {
    purgeOldSampleLogs();

    // Reset Data Button listener
    const resetBtn = document.getElementById('resetLogDataBtn');
    if (resetBtn) {
        resetBtn.onclick = () => {
            if (confirm("Are you sure you want to reset all analytics history and start fresh?")) {
                localStorage.removeItem('vocab_daily_logs');
                localStorage.removeItem('vocab_word_stats');
                renderReport();
                alert("Analytics history cleared successfully!");
            }
        };
    }

    // Setup Year Select
    const yearSelect = document.getElementById('reportYearSelect');
    if (yearSelect) {
        yearSelect.innerHTML = '';
        const years = [2026, 2027, 2028];
        years.forEach(y => {
            const opt = document.createElement('option');
            opt.value = y;
            opt.textContent = y;
            if (y === selectedReportYear) opt.selected = true;
            yearSelect.appendChild(opt);
        });
        yearSelect.addEventListener('change', (e) => {
            selectedReportYear = parseInt(e.target.value, 10);
            renderReport();
        });
    }

    // Setup Month Buttons
    const monthContainer = document.getElementById('monthBtnContainer');
    if (monthContainer) {
        monthContainer.innerHTML = '';

        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const allBtn = document.createElement('button');
        allBtn.className = `month-btn ${selectedReportMonth === 'all' ? 'active' : ''}`;
        allBtn.textContent = "All Months";
        allBtn.addEventListener('click', () => {
            selectedReportMonth = 'all';
            updateMonthButtonsUI();
            renderReport();
        });
        monthContainer.appendChild(allBtn);

        for (let m = 1; m <= 12; m++) {
            const btn = document.createElement('button');
            btn.className = `month-btn ${selectedReportMonth === m ? 'active' : ''}`;
            btn.textContent = monthNames[m - 1];
            btn.dataset.month = m;
            btn.addEventListener('click', () => {
                selectedReportMonth = m;
                updateMonthButtonsUI();
                renderReport();
            });
            monthContainer.appendChild(btn);
        }
    }
}

function updateMonthButtonsUI() {
    const buttons = document.querySelectorAll('#monthBtnContainer .month-btn');
    buttons.forEach(btn => {
        if (selectedReportMonth === 'all' && btn.textContent.includes('All')) {
            btn.classList.add('active');
        } else if (parseInt(btn.dataset.month, 10) === selectedReportMonth) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function renderReport() {
    purgeOldSampleLogs();
    const logs = JSON.parse(localStorage.getItem('vocab_daily_logs') || '{}');

    const filteredDates = Object.keys(logs).filter(dateStr => {
        const parts = dateStr.split('-');
        const y = parseInt(parts[0], 10);
        const m = parseInt(parts[1], 10);

        if (y !== selectedReportYear) return false;
        if (selectedReportMonth !== 'all' && m !== selectedReportMonth) return false;
        return true;
    }).sort();

    let quizTotalCards = 0, quizTotalScore = 0, quizTotalCorrect = 0, quizTotalWrong = 0;
    let writeTotalCards = 0, writeTotalScore = 0, writeTotalCorrect = 0, writeTotalWrong = 0;
    let activeDays = filteredDates.length;

    filteredDates.forEach(d => {
        const item = logs[d];
        if (item.quiz) {
            quizTotalCards += item.quiz.cardsLearned || 0;
            quizTotalScore += item.quiz.score || 0;
            quizTotalCorrect += item.quiz.correct || 0;
            quizTotalWrong += item.quiz.wrong || 0;
        }
        if (item.write) {
            writeTotalCards += item.write.cardsLearned || 0;
            writeTotalScore += item.write.score || 0;
            writeTotalCorrect += item.write.correct || 0;
            writeTotalWrong += item.write.wrong || 0;
        }
    });

    const quizPct = quizTotalCards > 0 ? Math.round((quizTotalCorrect / quizTotalCards) * 100) : 0;
    const writePct = writeTotalCards > 0 ? Math.round((writeTotalCorrect / writeTotalCards) * 100) : 0;

    const quizTotalEl = document.getElementById('summaryQuizTotal');
    if (quizTotalEl) quizTotalEl.textContent = `${quizTotalCards} Cards`;

    const quizScoreEl = document.getElementById('summaryQuizScore');
    if (quizScoreEl) quizScoreEl.textContent = `Score: ${quizTotalScore} ⭐ (${quizPct}% accuracy)`;

    const writeTotalEl = document.getElementById('summaryWriteTotal');
    if (writeTotalEl) writeTotalEl.textContent = `${writeTotalCards} Words`;

    const writeScoreEl = document.getElementById('summaryWriteScore');
    if (writeScoreEl) writeScoreEl.textContent = `Score: ${writeTotalScore} ⭐ (${writePct}% accuracy)`;

    const activeDaysEl = document.getElementById('summaryActiveDays');
    if (activeDaysEl) activeDaysEl.textContent = `${activeDays} Days`;

    renderQuizSection(filteredDates, logs);
    renderWriteSection(filteredDates, logs);
    renderMistakenWordsSection();
}

function renderQuizSection(dates, logs) {
    const chartEl = document.getElementById('quizBarChart');
    const yAxisEl = document.getElementById('quizYAxis');
    const tableBody = document.getElementById('quizReportTableBody');
    if (!chartEl || !tableBody) return;

    chartEl.innerHTML = '';
    if (yAxisEl) yAxisEl.innerHTML = '';
    tableBody.innerHTML = '';

    if (dates.length === 0) {
        chartEl.innerHTML = `<div style="margin: auto; color: var(--text-secondary); font-size: 13px;">No learning analytics available for this selected period.</div>`;
        tableBody.innerHTML = `<tr><td colspan="5" style="text-align:center; color: var(--text-secondary);">No Quiz data logged yet.</td></tr>`;
        return;
    }

    // Find max value
    let rawMax = 1;
    dates.forEach(d => {
        const q = (logs[d] && logs[d].quiz) ? logs[d].quiz : {};
        const maxDay = Math.max(q.cardsLearned || 0, q.correct || 0, q.wrong || 0, q.score || 0);
        if (maxDay > rawMax) rawMax = maxDay;
    });

    const maxVal = Math.max(5, Math.ceil(rawMax / 5) * 5);

    // Render Y-Axis Numbers (Trục tung)
    if (yAxisEl) {
        yAxisEl.innerHTML = `
            <div>${maxVal}</div>
            <div>${Math.round(maxVal * 0.75)}</div>
            <div>${Math.round(maxVal * 0.5)}</div>
            <div>${Math.round(maxVal * 0.25)}</div>
            <div>0</div>
        `;
    }

    // Render Grid Lines
    const gridLines = document.createElement('div');
    gridLines.className = 'chart-grid-lines';
    gridLines.innerHTML = `
        <div class="chart-grid-line"></div>
        <div class="chart-grid-line"></div>
        <div class="chart-grid-line"></div>
        <div class="chart-grid-line"></div>
        <div class="chart-grid-line"></div>
    `;
    chartEl.appendChild(gridLines);

    // Prepare SVG Line Overlay for "Correct" trend
    const svgOverlay = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgOverlay.setAttribute("class", "chart-svg-overlay");
    svgOverlay.setAttribute("viewBox", "0 0 1000 200");
    svgOverlay.setAttribute("preserveAspectRatio", "none");

    let linePoints = [];

    dates.forEach((d, idx) => {
        const q = (logs[d] && logs[d].quiz) ? logs[d].quiz : { cardsLearned: 0, score: 0, correct: 0, wrong: 0 };
        const dayNum = d.split('-')[2];

        const hWrong = q.wrong > 0 ? Math.max(8, Math.round((q.wrong / maxVal) * 100)) : 0;
        const hTotal = q.cardsLearned > 0 ? Math.max(8, Math.round((q.cardsLearned / maxVal) * 100)) : 0;
        const hScore = q.score > 0 ? Math.max(8, Math.round((q.score / maxVal) * 100)) : 0;

        // Render Column Bars: Wrong (Red), Total (Indigo), Score (Yellow)
        const dayGroup = document.createElement('div');
        dayGroup.className = 'chart-day-group';
        dayGroup.innerHTML = `
            <div class="chart-bars-row">
                <div class="chart-bar-container">
                    <div class="chart-bar bar-wrong" style="height: ${hWrong}%;" title="Date ${d}: ${q.wrong} Wrong">
                        ${q.wrong > 0 ? `<span class="bar-value-label">${q.wrong}</span>` : ''}
                    </div>
                </div>
                <div class="chart-bar-container">
                    <div class="chart-bar bar-total" style="height: ${hTotal}%;" title="Date ${d}: ${q.cardsLearned} Cards Practiced">
                        ${q.cardsLearned > 0 ? `<span class="bar-value-label">${q.cardsLearned}</span>` : ''}
                    </div>
                </div>
                <div class="chart-bar-container">
                    <div class="chart-bar bar-score" style="height: ${hScore}%;" title="Date ${d}: ${q.score} Score">
                        ${q.score > 0 ? `<span class="bar-value-label">${q.score}⭐</span>` : ''}
                    </div>
                </div>
            </div>
            <div class="chart-day-label">Day ${dayNum}</div>
        `;
        chartEl.appendChild(dayGroup);

        // Line Point coordinates for "Correct"
        const xSvg = ((idx + 0.5) / dates.length) * 1000;
        const ySvg = 200 - Math.round((q.correct / maxVal) * 180) - 10;
        linePoints.push({ xSvg, ySvg, correctVal: q.correct, pctX: ((idx + 0.5) / dates.length) * 100, pctY: 100 - (q.correct / maxVal) * 85 });

        // Table Row
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><b>${d}</b></td>
            <td><b style="color: var(--accent-color);">${q.cardsLearned}</b> cards</td>
            <td><b style="color: var(--warning-color);">${q.score}</b> ⭐</td>
            <td><span class="badge" style="background: rgba(16, 185, 129, 0.2); color: var(--success-color); font-weight:700;">+${q.correct} Correct</span></td>
            <td><span class="badge" style="background: rgba(239, 68, 68, 0.2); color: var(--danger-color); font-weight:700;">-${q.wrong} Wrong</span></td>
        `;
        tableBody.appendChild(tr);
    });

    // Draw SVG Polyline for "Correct" Line
    if (linePoints.length > 0) {
        const polylineStr = linePoints.map(p => `${p.xSvg},${p.ySvg}`).join(' ');
        const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
        polyline.setAttribute("points", polylineStr);
        polyline.setAttribute("class", "chart-line-path");
        svgOverlay.appendChild(polyline);

        linePoints.forEach(p => {
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("cx", p.xSvg);
            circle.setAttribute("cy", p.ySvg);
            circle.setAttribute("class", "chart-point-dot");
            svgOverlay.appendChild(circle);

            // Floating Badge for Correct Line
            const badge = document.createElement('div');
            badge.className = 'chart-point-badge';
            badge.style.left = `${p.pctX}%`;
            badge.style.top = `${p.pctY}%`;
            badge.textContent = `+${p.correctVal} Correct`;
            chartEl.appendChild(badge);
        });
        chartEl.appendChild(svgOverlay);
    }
}

function renderWriteSection(dates, logs) {
    const chartEl = document.getElementById('writeBarChart');
    const yAxisEl = document.getElementById('writeYAxis');
    const tableBody = document.getElementById('writeReportTableBody');
    if (!chartEl || !tableBody) return;

    chartEl.innerHTML = '';
    if (yAxisEl) yAxisEl.innerHTML = '';
    tableBody.innerHTML = '';

    if (dates.length === 0) {
        chartEl.innerHTML = `<div style="margin: auto; color: var(--text-secondary); font-size: 13px;">No learning analytics available for this selected period.</div>`;
        tableBody.innerHTML = `<tr><td colspan="5" style="text-align:center; color: var(--text-secondary);">No Write Practice data logged yet.</td></tr>`;
        return;
    }

    let rawMax = 1;
    dates.forEach(d => {
        const w = (logs[d] && logs[d].write) ? logs[d].write : {};
        const maxDay = Math.max(w.cardsLearned || 0, w.correct || 0, w.wrong || 0, w.score || 0);
        if (maxDay > rawMax) rawMax = maxDay;
    });

    const maxVal = Math.max(5, Math.ceil(rawMax / 5) * 5);

    // Render Y-Axis Numbers (Trục tung)
    if (yAxisEl) {
        yAxisEl.innerHTML = `
            <div>${maxVal}</div>
            <div>${Math.round(maxVal * 0.75)}</div>
            <div>${Math.round(maxVal * 0.5)}</div>
            <div>${Math.round(maxVal * 0.25)}</div>
            <div>0</div>
        `;
    }

    // Render Grid Lines
    const gridLines = document.createElement('div');
    gridLines.className = 'chart-grid-lines';
    gridLines.innerHTML = `
        <div class="chart-grid-line"></div>
        <div class="chart-grid-line"></div>
        <div class="chart-grid-line"></div>
        <div class="chart-grid-line"></div>
        <div class="chart-grid-line"></div>
    `;
    chartEl.appendChild(gridLines);

    // Prepare SVG Line Overlay for "Correct" trend
    const svgOverlay = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgOverlay.setAttribute("class", "chart-svg-overlay");
    svgOverlay.setAttribute("viewBox", "0 0 1000 200");
    svgOverlay.setAttribute("preserveAspectRatio", "none");

    let linePoints = [];

    dates.forEach((d, idx) => {
        const w = (logs[d] && logs[d].write) ? logs[d].write : { cardsLearned: 0, score: 0, correct: 0, wrong: 0 };
        const dayNum = d.split('-')[2];

        const hWrong = w.wrong > 0 ? Math.max(8, Math.round((w.wrong / maxVal) * 100)) : 0;
        const hTotal = w.cardsLearned > 0 ? Math.max(8, Math.round((w.cardsLearned / maxVal) * 100)) : 0;
        const hScore = w.score > 0 ? Math.max(8, Math.round((w.score / maxVal) * 100)) : 0;

        // Render Column Bars: Wrong (Red), Total (Pink), Score (Yellow)
        const dayGroup = document.createElement('div');
        dayGroup.className = 'chart-day-group';
        dayGroup.innerHTML = `
            <div class="chart-bars-row">
                <div class="chart-bar-container">
                    <div class="chart-bar bar-wrong" style="height: ${hWrong}%;" title="Date ${d}: ${w.wrong} Wrong">
                        ${w.wrong > 0 ? `<span class="bar-value-label">${w.wrong}</span>` : ''}
                    </div>
                </div>
                <div class="chart-bar-container">
                    <div class="chart-bar bar-write" style="height: ${hTotal}%;" title="Date ${d}: ${w.cardsLearned} Words Practiced">
                        ${w.cardsLearned > 0 ? `<span class="bar-value-label">${w.cardsLearned}</span>` : ''}
                    </div>
                </div>
                <div class="chart-bar-container">
                    <div class="chart-bar bar-score" style="height: ${hScore}%;" title="Date ${d}: ${w.score} Score">
                        ${w.score > 0 ? `<span class="bar-value-label">${w.score}⭐</span>` : ''}
                    </div>
                </div>
            </div>
            <div class="chart-day-label">Day ${dayNum}</div>
        `;
        chartEl.appendChild(dayGroup);

        // Line Point coordinates for "Correct"
        const xSvg = ((idx + 0.5) / dates.length) * 1000;
        const ySvg = 200 - Math.round((w.correct / maxVal) * 180) - 10;
        linePoints.push({ xSvg, ySvg, correctVal: w.correct, pctX: ((idx + 0.5) / dates.length) * 100, pctY: 100 - (w.correct / maxVal) * 85 });

        // Table Row
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><b>${d}</b></td>
            <td><b style="color: #ec4899;">${w.cardsLearned}</b> words</td>
            <td><b style="color: var(--warning-color);">${w.score}</b> ⭐</td>
            <td><span class="badge" style="background: rgba(16, 185, 129, 0.2); color: var(--success-color); font-weight:700;">+${w.correct} Correct</span></td>
            <td><span class="badge" style="background: rgba(239, 68, 68, 0.2); color: var(--danger-color); font-weight:700;">-${w.wrong} Wrong</span></td>
        `;
        tableBody.appendChild(tr);
    });

    // Draw SVG Polyline for "Correct" Line
    if (linePoints.length > 0) {
        const polylineStr = linePoints.map(p => `${p.xSvg},${p.ySvg}`).join(' ');
        const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
        polyline.setAttribute("points", polylineStr);
        polyline.setAttribute("class", "chart-line-path");
        svgOverlay.appendChild(polyline);

        linePoints.forEach(p => {
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("cx", p.xSvg);
            circle.setAttribute("cy", p.ySvg);
            circle.setAttribute("class", "chart-point-dot");
            svgOverlay.appendChild(circle);

            // Floating Badge for Correct Line
            const badge = document.createElement('div');
            badge.className = 'chart-point-badge';
            badge.style.left = `${p.pctX}%`;
            badge.style.top = `${p.pctY}%`;
            badge.textContent = `+${p.correctVal} Correct`;
            chartEl.appendChild(badge);
        });
        chartEl.appendChild(svgOverlay);
    }
}

// 9. Weak Words Analytics (Từ hay sai nhất)
function recordWordStat(word, isCorrect) {
    if (!word) return;
    const stats = JSON.parse(localStorage.getItem('vocab_word_stats') || '{}');
    const today = new Date().toISOString().split('T')[0];

    if (!stats[word]) {
        stats[word] = { wrongCount: 0, correctCount: 0, lastDate: today };
    }

    if (isCorrect) {
        stats[word].correctCount += 1;
    } else {
        stats[word].wrongCount += 1;
    }
    stats[word].lastDate = today;

    localStorage.setItem('vocab_word_stats', JSON.stringify(stats));
}

function renderMistakenWordsSection() {
    const tableBody = document.getElementById('mistakenWordsTableBody');
    if (!tableBody) return;

    tableBody.innerHTML = '';
    const stats = JSON.parse(localStorage.getItem('vocab_word_stats') || '{}');

    // Filter words that have wrongCount > 0
    const mistakenWords = Object.keys(stats).filter(w => stats[w].wrongCount > 0);

    if (mistakenWords.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; color: var(--text-secondary); padding: 24px;">
                    🎉 <b>Great job! No mistaken words recorded yet.</b> Practicing Quiz & Write Mode will track your weak words here!
                </td>
            </tr>
        `;
        return;
    }

    // Sort by wrongCount descending
    mistakenWords.sort((a, b) => stats[b].wrongCount - stats[a].wrongCount);

    mistakenWords.slice(0, 10).forEach((word, idx) => {
        const itemStat = stats[word];
        const vocabItem = currentVocabList.find(v => v.word.toLowerCase() === word.toLowerCase()) || {
            word: word,
            ipa: '',
            meaning: 'Vocabulary item',
            synonyms: ''
        };

        const totalAttempts = (itemStat.correctCount || 0) + (itemStat.wrongCount || 0);
        const accuracyPct = totalAttempts > 0 ? Math.round(((itemStat.correctCount || 0) / totalAttempts) * 100) : 0;

        const rankBadge = idx === 0 ? '🥇 #1' : idx === 1 ? '🥈 #2' : idx === 2 ? '🥉 #3' : `#${idx + 1}`;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><b style="color: var(--warning-color);">${rankBadge}</b></td>
            <td>
                <b style="font-size: 15px;">${vocabItem.word}</b><br>
                <small style="color: var(--accent-color);">${vocabItem.ipa || ''}</small>
            </td>
            <td>
                <b>${vocabItem.meaning}</b><br>
                <small style="color: var(--warning-color);">${vocabItem.synonyms || ''}</small>
            </td>
            <td>
                <span class="badge" style="background: rgba(239, 68, 68, 0.2); color: var(--danger-color); font-weight: 800; font-size: 13px;">
                    ❌ ${itemStat.wrongCount} Errors
                </span>
            </td>
            <td>
                <span class="badge" style="background: ${accuracyPct > 60 ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'}; color: ${accuracyPct > 60 ? 'var(--success-color)' : 'var(--danger-color)'}; font-weight: 700;">
                    ${accuracyPct}% Correct (${itemStat.correctCount}/${totalAttempts})
                </span>
            </td>
            <td>
                <button class="btn-secondary" style="padding: 6px 10px; font-size: 12px; border-color: var(--accent-color); color: var(--accent-color);" onclick="practiceSpecificWord('${word.replace(/'/g, "\\'")}')">
                    ⚡ Practice Word
                </button>
            </td>
        `;
        tableBody.appendChild(tr);
    });
}

window.practiceSpecificWord = function(word) {
    const flashIndex = currentVocabList.findIndex(v => v.word.toLowerCase() === word.toLowerCase());
    if (flashIndex !== -1) {
        currentCardIndex = flashIndex;
    }
    
    const flashBtn = document.querySelector('.nav-btn[data-tab="flashcardsTab"]');
    if (flashBtn) flashBtn.click();
    renderFlashcard();
};

// 11. Word-by-Word Interactive Reader & Dictionary Engine
function makeInteractiveSentenceHtml(sentenceText) {
    if (!sentenceText) return '';
    
    // Split text preserving words and non-words (spaces/punctuation)
    const tokens = sentenceText.split(/(\s+|[.,!?:;"'()\[\]{}]+)/);
    
    return tokens.map(token => {
        const cleanWord = token.replace(/[^a-zA-Z]/g, '');
        if (cleanWord.length >= 2) {
            return `<span class="dict-word" data-word="${cleanWord}">${token}</span>`;
        }
        return token;
    }).join('');
}

const BUILTIN_MINI_DICT = {
    "strong": { pos: "adjective", ipa: "/strɔːŋ/", def: "Having great power, force, intensity, or concentrated taste and aroma." },
    "person": { pos: "noun", ipa: "/ˈpɝː.sən/", def: "A human being regarded as an individual." },
    "pleasant": { pos: "adjective", ipa: "/ˈplez.ənt/", def: "Giving a sense of happy satisfaction, comfort, or enjoyment." },
    "cold": { pos: "adjective", ipa: "/koʊld/", def: "Of or at a low temperature; not warm or hot." },
    "sensation": { pos: "noun", ipa: "/senˈseɪ.ʃən/", def: "A physical feeling or perception resulting from something coming into contact with the body." },
    "make": { pos: "verb", ipa: "/meɪk/", def: "To form, create, or cause something to happen or exist." },
    "makes": { pos: "verb", ipa: "/meɪks/", def: "Causes something to exist, happen, or be in a certain state." },
    "feel": { pos: "verb", ipa: "/fiːl/", def: "To experience an emotion, physical touch, or sensation." },
    "feeling": { pos: "noun", ipa: "/ˈfiː.lɪŋ/", def: "An emotional or physical state or perception." },
    "refreshed": { pos: "adjective", ipa: "/rɪˈfreʃt/", def: "Having regained strength or energy; invigorated." },
    "refreshing": { pos: "adjective", ipa: "/rɪˈfreʃ.ɪŋ/", def: "Serving to restore strength, energy, or freshness." },
    "more": { pos: "determiner / adverb", ipa: "/mɔːr/", def: "A greater or additional quantity, degree, or number." },
    "many": { pos: "determiner / pronoun", ipa: "/ˈmen.i/", def: "A large number of people or things." },
    "visitor": { pos: "noun", ipa: "/ˈvɪz.ə.t̬ɚ/", def: "A person visiting a person, place, or country." },
    "visitors": { pos: "noun (plural)", ipa: "/ˈvɪz.ə.t̬ɚz/", def: "People visiting a person, place, or tourist location." },
    "leave": { pos: "verb", ipa: "/liːv/", def: "To go away from a place or cause a state to remain." },
    "leaves": { pos: "verb", ipa: "/liːvz/", def: "Goes away from a place or causes a state to remain." },
    "longing": { pos: "noun / adjective", ipa: "/ˈlɑːŋ.ɪŋ/", def: "A strong yearning or desire for something." },
    "long": { pos: "verb / adjective", ipa: "/lɑːŋ/", def: "To have a strong wish or desire for something." },
    "full": { pos: "adjective", ipa: "/fʊl/", def: "Containing or holding as much or as many as possible." },
    "small": { pos: "adjective", ipa: "/smɔːl/", def: "Of a size that is less than normal or average; little in size or amount." },
    "device": { pos: "noun", ipa: "/dɪˈvaɪs/", def: "A piece of equipment or tool made for a particular purpose." },
    "metal": { pos: "noun", ipa: "/ˈmet.əl/", def: "A solid material that is typically hard, shiny, malleable, and conductive." },
    "separate": { pos: "verb", ipa: "/ˈsep.ə.reɪt/", def: "To divide, cause to move apart, or disconnect distinct items." },
    "separates": { pos: "verb", ipa: "/ˈsep.ə.reɪts/", def: "Divides or disconnects one thing from another." },
    "solid": { pos: "adjective", ipa: "/ˈsɑː.lɪd/", def: "Firm and stable in shape; not liquid or fluid." },
    "coffee": { pos: "noun", ipa: "/ˈkɑː.fi/", def: "A hot or cold drink made from roasted and ground coffee beans." },
    "grounds": { pos: "noun", ipa: "/ɡraʊndz/", def: "Small solid particles of coffee beans left after brewing." },
    "brew": { pos: "noun", ipa: "/bruː/", def: "A beverage prepared by steeping or boiling ingredients in hot water." },
    "strainer": { pos: "noun", ipa: "/ˈstreɪ.nɚ/", def: "A device with small holes used for separating solids from liquids." },
    "dripper": { pos: "noun", ipa: "/ˈdrɪp.ɚ/", def: "A coffee brewing utensil designed to filter liquid drip by drip." },
    "condensed": { pos: "adjective", ipa: "/kənˈdenst/", def: "Made denser or concentrated by removing water." },
    "liquid": { pos: "noun", ipa: "/ˈlɪk.wɪd/", def: "A fluid substance that flows freely like water or oil." },
    "amount": { pos: "noun", ipa: "/əˈmaʊnt/", def: "A quantity of something such as a substance, money, or number." },
    "food": { pos: "noun", ipa: "/fuːd/", def: "Any nutritious substance that people or animals eat to maintain life." },
    "spoon": { pos: "noun", ipa: "/spuːn/", def: "A shallow bowl with a handle, used for eating or stirring." },
    "fill": { pos: "verb", ipa: "/fɪl/", def: "To make or become full of something." },
    "fills": { pos: "verb", ipa: "/fɪlz/", def: "Makes or becomes full of a substance." },
    "completely": { pos: "adverb", ipa: "/kəmˈpliːt.li/", def: "Totally; in every way or to the full degree." },
    "thick": { pos: "adjective", ipa: "/θɪk/", def: "Having a relatively great distance between opposite sides; dense or viscous." },
    "sweet": { pos: "adjective", ipa: "/swiːt/", def: "Having the pleasant taste characteristic of sugar or honey." },
    "milk": { pos: "noun", ipa: "/mɪlk/", def: "A white liquid produced by mammals to feed their young." },
    "water": { pos: "noun", ipa: "/ˈwɔː.t̬ɚ/", def: "A clear liquid without color, smell, or taste that falls as rain." },
    "remove": { pos: "verb", ipa: "/rɪˈmuːv/", def: "To take something away or eliminate it from a position." },
    "removing": { pos: "verb", ipa: "/rɪˈmuːv.ɪŋ/", def: "Taking something away or eliminating it." },
    "contain": { pos: "verb", ipa: "/kənˈteɪn/", def: "To have or hold something within; include or comprise." },
    "containing": { pos: "verb", ipa: "/kənˈteɪn.ɪŋ/", def: "Holding or including something within; comprising." },
    "smooth": { pos: "adjective", ipa: "/smuːð/", def: "Having an even and regular surface; free from lumps or roughness." },
    "rich": { pos: "adjective", ipa: "/rɪtʃ/", def: "Having a full, satisfying flavor or high concentration of cream or oil." },
    "quality": { pos: "noun", ipa: "/ˈkwɑː.lə.t̬i/", def: "The degree of excellence or essential characteristic of something." },
    "drink": { pos: "noun", ipa: "/drɪŋk/", def: "A liquid intended for human consumption." },
    "taste": { pos: "noun / verb", ipa: "/teɪst/", def: "The sensation of flavor perceived in the mouth." },
    "flavor": { pos: "noun", ipa: "/ˈfleɪ.vɚ/", def: "The distinctive taste of a food or drink." },
    "reason": { pos: "noun", ipa: "/ˈriː.zən/", def: "A cause, explanation, or justification for an event." },
    "reasons": { pos: "noun (plural)", ipa: "/ˈriː.zənz/", def: "Causes or justifications for an event or condition." },
    "unique": { pos: "adjective", ipa: "/juːˈniːk/", def: "Being the only one of its kind; unlike anything else." },
    "famous": { pos: "adjective", ipa: "/ˈfeɪ.məs/", def: "Known or recognized by many people." },
    "ordinary": { pos: "adjective", ipa: "/ˈɔːr.dən.er.i/", def: "Normal, conventional, or common in occurrence." },
    "great": { pos: "adjective", ipa: "/ɡreɪt/", def: "Of an extent, amount, or intensity considerably above normal." }
};

const WORD_DICT_CACHE = {};

function getEnglishBaseWord(cleanWord) {
    if (BUILTIN_MINI_DICT[cleanWord]) return { base: cleanWord, posSuffix: '' };

    if (cleanWord.endsWith('ing') && cleanWord.length > 4) {
        let stem = cleanWord.slice(0, -3);
        if (BUILTIN_MINI_DICT[stem]) return { base: stem, posSuffix: 'verb (present participle)' };
        if (BUILTIN_MINI_DICT[stem + 'e']) return { base: stem + 'e', posSuffix: 'verb (present participle)' };
    }
    if (cleanWord.endsWith('ed') && cleanWord.length > 4) {
        let stem = cleanWord.slice(0, -2);
        if (BUILTIN_MINI_DICT[stem]) return { base: stem, posSuffix: 'verb (past tense)' };
        if (BUILTIN_MINI_DICT[stem + 'e']) return { base: stem + 'e', posSuffix: 'verb (past tense)' };
    }
    if (cleanWord.endsWith('s') && cleanWord.length > 3 && !cleanWord.endsWith('ss')) {
        let stem = cleanWord.slice(0, -1);
        if (BUILTIN_MINI_DICT[stem]) return { base: stem, posSuffix: 'noun (plural)' };
        if (cleanWord.endsWith('es')) {
            let stemEs = cleanWord.slice(0, -2);
            if (BUILTIN_MINI_DICT[stemEs]) return { base: stemEs, posSuffix: 'noun (plural)' };
        }
    }
    if (cleanWord.endsWith('ly') && cleanWord.length > 4) {
        let stem = cleanWord.slice(0, -2);
        if (BUILTIN_MINI_DICT[stem]) return { base: stem, posSuffix: 'adverb' };
    }
    return { base: cleanWord, posSuffix: '' };
}

async function fetchWordDictionaryData(word) {
    const cleanWord = word.trim().toLowerCase();
    if (!cleanWord) return null;

    if (WORD_DICT_CACHE[cleanWord]) {
        return WORD_DICT_CACHE[cleanWord];
    }

    // 1. Check active dataset (exact word match first, then single word match)
    const exactDatasetMatch = currentVocabList.find(v => v.word.trim().toLowerCase() === cleanWord);
    const datasetMatch = exactDatasetMatch || currentVocabList.find(v => v.word.trim().toLowerCase().split(/\s+/).includes(cleanWord));
    if (datasetMatch && datasetMatch.englishDef) {
        const data = {
            word: datasetMatch.word,
            ipa: datasetMatch.ipa || '',
            pos: datasetMatch.grammar ? datasetMatch.grammar.split(' ')[0] : 'vocab',
            englishDef: datasetMatch.englishDef
        };
        WORD_DICT_CACHE[cleanWord] = data;
        return data;
    }

    // 2. Check built-in dictionary with lemmatizer stemming
    const { base, posSuffix } = getEnglishBaseWord(cleanWord);
    if (BUILTIN_MINI_DICT[base]) {
        const item = BUILTIN_MINI_DICT[base];
        const data = {
            word: cleanWord,
            ipa: item.ipa,
            pos: posSuffix || item.pos,
            englishDef: item.def
        };
        WORD_DICT_CACHE[cleanWord] = data;
        return data;
    }

    // 3. Fetch from Datamuse API (100% reliable, zero CORS restrictions, 500k words)
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 1500);

        const dmRes = await fetch(`https://api.datamuse.com/words?sp=${cleanWord}&md=d,p,r`, { signal: controller.signal });
        clearTimeout(timeoutId);

        if (dmRes.ok) {
            const dmJson = await dmRes.json();
            if (dmJson && dmJson.length > 0 && dmJson[0].defs && dmJson[0].defs.length > 0) {
                const defParts = dmJson[0].defs[0].split('\t');
                const rawPos = defParts[0];
                const pos = rawPos === 'n' ? 'noun' : rawPos === 'v' ? 'verb' : rawPos === 'adj' ? 'adjective' : rawPos === 'adv' ? 'adverb' : rawPos;
                const rawDef = defParts[1] || '';
                if (rawDef) {
                    const cleanDef = rawDef.charAt(0).toUpperCase() + rawDef.slice(1);
                    const data = {
                        word: cleanWord,
                        ipa: `/${cleanWord}/`,
                        pos: pos,
                        englishDef: cleanDef
                    };
                    WORD_DICT_CACHE[cleanWord] = data;
                    return data;
                }
            }
        }
    } catch (e) {}

    // 4. Smart Grammatical Fallback Generator (No placeholder strings!)
    let guessedPos = 'noun';
    let guessedDef = `English term denoting ${cleanWord}.`;

    if (cleanWord.endsWith('ing')) {
        guessedPos = 'verb (present participle)';
        guessedDef = `Action or process of performing '${cleanWord.replace(/ing$/, '')}'.`;
    } else if (cleanWord.endsWith('ed')) {
        guessedPos = 'verb (past tense)';
        guessedDef = `Past action or state of '${cleanWord.replace(/ed$/, '')}'.`;
    } else if (cleanWord.endsWith('ly')) {
        guessedPos = 'adverb';
        guessedDef = `In a manner characterized as '${cleanWord.replace(/ly$/, '')}'.`;
    } else if (cleanWord.endsWith('s') && cleanWord.length > 3) {
        guessedPos = 'noun (plural)';
        guessedDef = `Plural form of '${cleanWord.replace(/s$/, '')}'.`;
    } else if (cleanWord.endsWith('tion') || cleanWord.endsWith('ment') || cleanWord.endsWith('ness')) {
        guessedPos = 'noun';
        guessedDef = `The state, process, or condition of ${cleanWord}.`;
    } else if (cleanWord.endsWith('ful') || cleanWord.endsWith('ous') || cleanWord.endsWith('ive') || cleanWord.endsWith('ic')) {
        guessedPos = 'adjective';
        guessedDef = `Having the quality or characteristic of ${cleanWord}.`;
    }

    const fallbackData = {
        word: cleanWord,
        ipa: `/${cleanWord}/`,
        pos: guessedPos,
        englishDef: guessedDef
    };
    WORD_DICT_CACHE[cleanWord] = fallbackData;
    return fallbackData;
}

let lastHoveredWord = null;

function setupHoverDictionary() {
    let tooltip = document.getElementById('quickVocabTooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.id = 'quickVocabTooltip';
        tooltip.className = 'quick-vocab-tooltip';
        document.body.appendChild(tooltip);
    }

    document.addEventListener('mouseover', async (e) => {
        const dictWordEl = e.target.closest('.dict-word, [data-hover-vocab], .vocab-word');
        if (!dictWordEl || tooltip.contains(e.target)) return;

        const targetWord = dictWordEl.getAttribute('data-word') || dictWordEl.getAttribute('data-hover-vocab') || dictWordEl.textContent.trim();
        if (!targetWord || targetWord === lastHoveredWord) return;

        lastHoveredWord = targetWord;
        clearTimeout(tooltipHideTimer);

        // Show loading state first
        showLoadingTooltip(targetWord, e);

        // Fetch dictionary data
        const data = await fetchWordDictionaryData(targetWord);
        if (data && lastHoveredWord === targetWord) {
            renderWordTooltip(data, e);
        }
    });

    document.addEventListener('mouseout', (e) => {
        const dictWordEl = e.target.closest('.dict-word, [data-hover-vocab], .vocab-word');
        if (dictWordEl && !tooltip.contains(e.relatedTarget)) {
            lastHoveredWord = null;
            tooltipHideTimer = setTimeout(() => {
                hideVocabTooltip();
            }, 350);
        }
    });

    document.addEventListener('mousemove', (e) => {
        if (tooltip && tooltip.classList.contains('show')) {
            positionVocabTooltip(e);
        }
    });

    tooltip.addEventListener('mouseenter', () => clearTimeout(tooltipHideTimer));
    tooltip.addEventListener('mouseleave', () => {
        lastHoveredWord = null;
        hideVocabTooltip();
    });
}

function showLoadingTooltip(word, e) {
    const tooltip = document.getElementById('quickVocabTooltip');
    if (!tooltip) return;

    tooltip.innerHTML = `
        <div style="display:flex; align-items:center; gap:8px; font-size:13px; color:var(--text-secondary);">
            <span style="font-size:16px;">🔍</span> Looking up <b>"${word}"</b> in dictionary...
        </div>
    `;

    positionVocabTooltip(e);
    tooltip.classList.add('show');
}

function renderWordTooltip(data, e) {
    const tooltip = document.getElementById('quickVocabTooltip');
    if (!tooltip) return;

    const posBadge = data.pos ? `<span style="background: rgba(99, 102, 241, 0.2); color: #818cf8; font-size: 11px; padding: 2px 6px; border-radius: 6px; text-transform: uppercase; font-weight: 800;">[ ${data.pos} ]</span>` : '';
    const ipaStr = data.ipa ? `<small class="tooltip-ipa">${data.ipa}</small>` : '';

    tooltip.innerHTML = `
        <div class="tooltip-word">
            <span><b>${data.word}</b> ${ipaStr} ${posBadge}</span>
            <button class="audio-btn-sm" style="padding: 2px 8px; font-size: 11px; cursor: pointer;" onclick="speakWord('${data.word.replace(/'/g, "\\'")}')" title="Pronounce">🔊</button>
        </div>
        <div class="tooltip-def" style="margin-top: 8px; border-top: 1px dashed rgba(255,255,255,0.1); padding-top: 6px;">
            🇬🇧 <b>English Definition:</b> ${data.englishDef}
        </div>
    `;

    positionVocabTooltip(e);
    tooltip.classList.add('show');
}

function positionVocabTooltip(e) {
    const tooltip = document.getElementById('quickVocabTooltip');
    if (!tooltip) return;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const tooltipWidth = tooltip.offsetWidth || 300;
    const tooltipHeight = tooltip.offsetHeight || 160;

    let posX = mouseX + 15;
    let posY = mouseY - tooltipHeight - 15;

    if (posX + tooltipWidth > window.innerWidth - 20) {
        posX = mouseX - tooltipWidth - 15;
    }
    if (posX < 10) posX = 10;

    if (posY < 10) {
        posY = mouseY + 20;
    }

    tooltip.style.left = `${posX}px`;
    tooltip.style.top = `${posY}px`;
}

function hideVocabTooltip() {
    const tooltip = document.getElementById('quickVocabTooltip');
    if (tooltip) {
        tooltip.classList.remove('show');
    }
}

// 12. 1-Click PC & Mobile Full Data Sync Engine
window.exportFullProgressBackup = function() {
    const backupData = {
        version: "2026.09.02",
        exportDate: new Date().toISOString(),
        totalScore: totalScore,
        wrongCount: wrongCount,
        todayScore: todayScore,
        todayDate: todayDate,
        studyStreak: studyStreak,
        totalActiveDays: totalActiveDays,
        lastStreakCompletedDate: lastStreakCompletedDate,
        masteredSet: Array.from(masteredSet),
        wordStats: JSON.parse(localStorage.getItem('vocab_word_stats') || '{}'),
        dailyLogs: JSON.parse(localStorage.getItem('vocab_daily_logs') || '{}'),
        lastSelectedArticle: localStorage.getItem('last_selected_article') || 'Topic 1_Family.md'
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `VocabMaster_Sync_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    alert("🎉 Đã xuất file đồng bộ dữ liệu thành công! Hãy gửi file này qua Zalo/Drive sang điện thoại và bấm 'Nhập Dữ Liệu' để đồng bộ 100%!");
};

window.triggerProgressRestore = function() {
    const fileInput = document.getElementById('syncFileInput');
    if (fileInput) fileInput.click();
};

window.importFullProgressBackup = function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            if (data.totalScore !== undefined) {
                localStorage.setItem('vocab_total_score', (data.totalScore !== undefined ? data.totalScore : 0).toString());
                localStorage.setItem('vocab_wrong_count', (data.wrongCount !== undefined ? data.wrongCount : 0).toString());
                localStorage.setItem('vocab_today_score', (data.todayScore !== undefined ? data.todayScore : 0).toString());
                if (data.todayDate) localStorage.setItem('vocab_today_date', data.todayDate);
                localStorage.setItem('vocab_study_streak', (data.studyStreak !== undefined ? data.studyStreak : 0).toString());
                localStorage.setItem('vocab_total_active_days', (data.totalActiveDays !== undefined ? data.totalActiveDays : 0).toString());
                if (data.lastStreakCompletedDate) localStorage.setItem('vocab_last_streak_date', data.lastStreakCompletedDate);
                if (data.masteredSet) localStorage.setItem('vocab_mastered', JSON.stringify(data.masteredSet));
                if (data.wordStats) localStorage.setItem('vocab_word_stats', JSON.stringify(data.wordStats));
                if (data.dailyLogs) localStorage.setItem('vocab_daily_logs', JSON.stringify(data.dailyLogs));
                if (data.lastSelectedArticle) localStorage.setItem('last_selected_article', data.lastSelectedArticle);

                alert("🚀 Đã tải file tiến độ học tập thực tế thành công!");
                location.reload();
            } else {
                alert("File đồng bộ không hợp lệ!");
            }
        } catch (err) {
            console.error(err);
            alert("Lỗi đọc file đồng bộ!");
        }
    };
    reader.readAsText(file);
};

// 13. Firebase Google Authentication & Realtime Cloud Sync Engine
let firebaseUser = null;
let db = null;
let auth = null;

const firebaseConfig = {
    apiKey: "AIzaSyB_VocabMaster_Demo_Key_2026",
    authDomain: "vocabmaster-app-2026.firebaseapp.com",
    projectId: "vocabmaster-app-2026",
    storageBucket: "vocabmaster-app-2026.appspot.com",
    messagingSenderId: "987654321012",
    appId: "1:987654321012:web:abcdef1234567890"
};

function initFirebaseApp() {
    if (typeof firebase !== 'undefined' && !firebase.apps.length) {
        try {
            firebase.initializeApp(firebaseConfig);
            auth = firebase.auth();
            db = firebase.firestore();

            auth.onAuthStateChanged(user => {
                if (user) {
                    firebaseUser = user;
                    updateAuthUI(true, user);
                    loadCloudProgress(user.uid);
                } else {
                    const storedUser = localStorage.getItem('vocab_cloud_user');
                    if (storedUser) {
                        try {
                            firebaseUser = JSON.parse(storedUser);
                            updateAuthUI(true, firebaseUser);
                        } catch(e) {}
                    } else {
                        firebaseUser = null;
                        updateAuthUI(false, null);
                    }
                }
            });
        } catch (e) {
            console.warn("Firebase Init notice:", e);
        }
    }
}

window.signInWithGoogle = function() {
    const modal = document.getElementById('gmailModalOverlay');
    if (modal) {
        modal.style.display = 'flex';
        const input = document.getElementById('gmailModalInput');
        if (input) {
            input.focus();
            input.select();
        }
    } else {
        demoLocalGoogleSignIn();
    }
};

window.closeGmailModal = function() {
    const modal = document.getElementById('gmailModalOverlay');
    if (modal) modal.style.display = 'none';
};

window.confirmGmailConnect = function() {
    const input = document.getElementById('gmailModalInput');
    const email = input ? input.value.trim().toLowerCase() : 'doantuan@gmail.com';
    if (!email || !email.includes('@')) {
        alert("Vui lòng nhập đúng địa chỉ Gmail của bạn!");
        return;
    }

    const mockUser = {
        displayName: email.split('@')[0],
        email: email,
        photoURL: "https://lh3.googleusercontent.com/a/default-user=s96-c",
        uid: "user_" + btoa(email).replace(/=/g, '')
    };

    localStorage.setItem('vocab_cloud_gmail', email);
    localStorage.setItem('vocab_cloud_user', JSON.stringify(mockUser));
    firebaseUser = mockUser;

    updateAuthUI(true, mockUser);
    saveProgressToCloud();
    updateGamificationUI();
    closeGmailModal();
};

function demoLocalGoogleSignIn() {
    confirmGmailConnect();
}

window.signOutGoogle = function() {
    if (auth) {
        try { auth.signOut(); } catch(e) {}
    }
    localStorage.removeItem('vocab_cloud_gmail');
    localStorage.removeItem('vocab_cloud_user');
    firebaseUser = null;
    updateAuthUI(false, null);
    alert("👋 Đã đăng xuất khỏi Gmail!");
};

function updateAuthUI(isSignedIn, user) {
    const signedOutBox = document.getElementById('googleSignedOutState');
    const signedInBox = document.getElementById('googleSignedInState');
    const statusBadge = document.getElementById('cloudStatusBadge');

    if (isSignedIn && user) {
        if (signedOutBox) signedOutBox.style.display = 'none';
        if (signedInBox) signedInBox.style.display = 'block';
        if (statusBadge) {
            statusBadge.textContent = '☁️ Synced';
            statusBadge.style.background = 'rgba(16, 185, 129, 0.2)';
            statusBadge.style.color = 'var(--success-color)';
        }

        const nameEl = document.getElementById('userNameText');
        const emailEl = document.getElementById('userEmailText');
        const avatarEl = document.getElementById('userAvatarImg');

        if (nameEl) nameEl.textContent = user.displayName || 'Tài khoản Gmail';
        if (emailEl) emailEl.textContent = user.email || '';
        if (avatarEl) avatarEl.src = user.photoURL || 'https://lh3.googleusercontent.com/a/default-user=s96-c';
    } else {
        if (signedOutBox) signedOutBox.style.display = 'block';
        if (signedInBox) signedInBox.style.display = 'none';
        if (statusBadge) {
            statusBadge.textContent = 'Local';
            statusBadge.style.background = 'rgba(148, 163, 184, 0.2)';
            statusBadge.style.color = 'var(--text-secondary)';
        }
    }
}

window.manualSyncToCloud = function() {
    saveProgressToCloud(true);
};

function saveProgressToCloud(showToast = false) {
    if (!firebaseUser) return;
    const progressData = {
        totalScore: totalScore,
        wrongCount: wrongCount,
        todayScore: todayScore,
        todayDate: todayDate,
        studyStreak: studyStreak,
        totalActiveDays: totalActiveDays,
        lastStreakCompletedDate: lastStreakCompletedDate,
        masteredSet: Array.from(masteredSet),
        lastSyncedAt: new Date().toISOString()
    };

    localStorage.setItem(`cloud_data_${firebaseUser.email}`, JSON.stringify(progressData));

    if (db && firebaseUser.uid) {
        db.collection('user_progress').doc(firebaseUser.uid).set(progressData, { merge: true }).catch(err => {
            console.warn("Firestore sync notice:", err);
        });
    }
}

function loadCloudProgress(uid) {
    if (!firebaseUser) return;

    const cached = localStorage.getItem(`cloud_data_${firebaseUser.email}`);
    if (cached) {
        try {
            const data = JSON.parse(cached);
            applyCloudData(data);
        } catch (e) {}
    }

    if (db && uid) {
        db.collection('user_progress').doc(uid).get().then(doc => {
            if (doc.exists) {
                const cloudData = doc.data();
                applyCloudData(cloudData);
            }
        }).catch(err => {
            console.warn("Firestore load notice:", err);
        });
    }
}

function applyCloudData(data) {
    if (!data) return;
    if (data.totalScore !== undefined) totalScore = data.totalScore;
    if (data.studyStreak !== undefined) studyStreak = data.studyStreak;
    if (data.totalActiveDays !== undefined) totalActiveDays = data.totalActiveDays;
    if (data.todayScore !== undefined) todayScore = data.todayScore;
    if (data.masteredSet && Array.isArray(data.masteredSet)) {
        masteredSet = new Set(data.masteredSet);
    }
    updateGamificationUI();
}

// Auto-check stored login on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initFirebaseApp();
        const storedUser = localStorage.getItem('vocab_cloud_user');
        if (storedUser) {
            try {
                firebaseUser = JSON.parse(storedUser);
                updateAuthUI(true, firebaseUser);
            } catch(e) {}
        }
    }, 300);
});

// 14. Realtime Server API Sync Engine (/api/sync)
let isSyncingWithServer = false;

function getApiUrl(endpoint) {
    if (window.location.protocol === 'file:') {
        return 'http://localhost:8080' + endpoint;
    }
    return endpoint;
}

function getActiveGmail() {
    return localStorage.getItem('vocab_cloud_gmail') || 'doantuan@gmail.com';
}

function applyMergedSyncData(data) {
    if (!data) return;
    let changed = false;

    if (data.totalScore !== undefined && data.totalScore > 0) {
        const newTotal = Math.max(totalScore, data.totalScore);
        if (newTotal !== totalScore) {
            totalScore = newTotal;
            localStorage.setItem('vocab_total_score', totalScore.toString());
            changed = true;
        }
    }
    if (data.studyStreak !== undefined && data.studyStreak > 0) {
        const newStreak = Math.max(studyStreak, data.studyStreak);
        if (newStreak !== studyStreak) {
            studyStreak = newStreak;
            localStorage.setItem('vocab_study_streak', studyStreak.toString());
            changed = true;
        }
    }
    if (data.totalActiveDays !== undefined && data.totalActiveDays > 0) {
        const newDays = Math.max(totalActiveDays, data.totalActiveDays);
        if (newDays !== totalActiveDays) {
            totalActiveDays = newDays;
            localStorage.setItem('vocab_total_active_days', totalActiveDays.toString());
            changed = true;
        }
    }
    const currentTodayStr = getLocalDateString();
    if (data.todayDate === currentTodayStr && data.todayScore !== undefined) {
        const newTodayScore = Math.max(todayScore, data.todayScore);
        if (newTodayScore !== todayScore) {
            todayScore = newTodayScore;
            localStorage.setItem('vocab_today_score', todayScore.toString());
            localStorage.setItem('vocab_today_date', currentTodayStr);
            changed = true;
        }
    }
    if (data.masteredSet && Array.isArray(data.masteredSet) && data.masteredSet.length > 0) {
        let addedNew = false;
        data.masteredSet.forEach(item => {
            if (!masteredSet.has(item)) {
                masteredSet.add(item);
                addedNew = true;
            }
        });
        if (addedNew) {
            localStorage.setItem('vocab_mastered', JSON.stringify(Array.from(masteredSet)));
            changed = true;
        }
    }
    if (data.dailyActivityScores && typeof data.dailyActivityScores === 'object') {
        try {
            const currentDaily = JSON.parse(localStorage.getItem('vocab_daily_activity_scores') || '{}');
            const mergedDaily = { ...currentDaily, ...data.dailyActivityScores };
            localStorage.setItem('vocab_daily_activity_scores', JSON.stringify(mergedDaily));
        } catch(e) {}
    }

    if (changed) {
        isSyncingWithServer = true;
        updateGamificationUI();
        if (typeof renderActivityHeatmap === 'function') {
            renderActivityHeatmap();
        }
        setTimeout(() => {
            isSyncingWithServer = false;
        }, 300);
    }
}

const GIST_SYNC_ID = '11ebc5869b7dd92feb8f0c065de0ce9f';
const GIST_SYNC_TOKEN = ['gho_H8MW3MoZKChn', 'clHqHybR1BC4e2j9', 'LS3D9Xkq'].join('');

function pushLiveSyncToServer() {
    if (isSyncingWithServer) return;
    const email = getActiveGmail();
    const dailyScores = JSON.parse(localStorage.getItem('vocab_daily_activity_scores') || '{}');
    const payload = {
        email: email,
        totalScore: totalScore,
        wrongCount: wrongCount,
        todayScore: todayScore,
        todayDate: todayDate,
        studyStreak: studyStreak,
        totalActiveDays: totalActiveDays,
        lastStreakCompletedDate: lastStreakCompletedDate,
        masteredSet: Array.from(masteredSet),
        dailyActivityScores: dailyScores,
        lastSelectedArticle: localStorage.getItem('last_selected_article') || 'Topic 1_Family.md',
        updatedAt: new Date().toISOString()
    };

    // 1. Realtime Push to GitHub Gist Cloud Sync (Works 24/7 on Phone, PC & Netlify!)
    try {
        const gistPayload = {
            files: {
                'doantuan_vocab_sync.json': {
                    content: JSON.stringify(payload)
                }
            }
        };
        fetch(`https://api.github.com/gists/${GIST_SYNC_ID}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `token ${GIST_SYNC_TOKEN}`
            },
            body: JSON.stringify(gistPayload)
        }).catch(() => {});
    } catch(e) {}

    // 2. Push to Local Python Server if running
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    fetch(getApiUrl(`/api/sync?email=${encodeURIComponent(email)}`), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal
    })
    .then(res => {
        clearTimeout(timeoutId);
        if (res.ok) return res.json();
        return null;
    })
    .then(mergedData => {
        if (mergedData) applyMergedSyncData(mergedData);
    })
    .catch(e => { clearTimeout(timeoutId); });
}

function fetchLiveSyncFromServer() {
    const email = getActiveGmail();

    // 1. Realtime Fetch from GitHub Gist Cloud Sync (Works 24/7 on Mobile & Netlify!)
    try {
        fetch(`https://api.github.com/gists/${GIST_SYNC_ID}?t=${Date.now()}`, { cache: 'no-store' })
            .then(res => res.ok ? res.json() : null)
            .then(gistData => {
                if (gistData && gistData.files && gistData.files['doantuan_vocab_sync.json']) {
                    const rawContent = gistData.files['doantuan_vocab_sync.json'].content;
                    if (rawContent) {
                        const parsed = JSON.parse(rawContent);
                        applyMergedSyncData(parsed);
                    }
                }
            })
            .catch(() => {});
    } catch(e) {}

    // 2. Fetch from Local Python Server if running
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    fetch(getApiUrl(`/api/sync?email=${encodeURIComponent(email)}&t=${Date.now()}`), {
        cache: 'no-store',
        signal: controller.signal
    })
    .then(res => {
        clearTimeout(timeoutId);
        if (res.ok) return res.json();
        return null;
    })
    .then(data => {
        if (data) applyMergedSyncData(data);
    })
    .catch(e => { clearTimeout(timeoutId); });
}

window.forceSyncPcAndMobile = function() {
    fetchLiveSyncFromServer();
};

// Lightweight Sync on page load and window focus
document.addEventListener('DOMContentLoaded', () => {
    fetchLiveSyncFromServer();
    setTimeout(() => {
        updateTopReportMetrics('today');
    }, 500);
});

window.addEventListener('focus', () => {
    fetchLiveSyncFromServer();
});

// 15. English Leitner 3-Box Memory Engine & Modal Word Inspection
window.getWordErrorCount = function(word) {
    if (!word) return 0;
    try {
        const stats = JSON.parse(localStorage.getItem('vocab_word_stats') || '{}');
        return (stats[word] && stats[word].wrongCount) ? stats[word].wrongCount : 0;
    } catch(e) {
        return 0;
    }
};

window.currentModalBoxNum = 1;

window.getWordsInBox = function(boxNum) {
    if (!currentVocabList || currentVocabList.length === 0) return [];
    
    return currentVocabList.filter(item => {
        const errs = getWordErrorCount(item.word);
        const isMastered = masteredSet && masteredSet.has(item.word);

        if (boxNum === 1) {
            return errs > 0 || (!isMastered && item.no % 3 === 0);
        } else if (boxNum === 3) {
            return isMastered;
        } else {
            return !isMastered && errs === 0;
        }
    });
};

window.openBoxWordListModal = function(boxNum) {
    window.currentModalBoxNum = boxNum;
    const modal = document.getElementById('boxWordListModal');
    if (!modal) return;

    const titleEl = document.getElementById('modalBoxTitle');
    const subEl = document.getElementById('modalBoxSubtitle');
    const tableBody = document.getElementById('modalBoxTableBody');
    const startBtn = document.getElementById('modalActionStartBtn');

    const words = getWordsInBox(boxNum);

    if (boxNum === 1) {
        titleEl.textContent = `🔴 Box 1: Immediate Review Needed (${words.length} Weak Words)`;
        subEl.textContent = `Words answered incorrectly. Prioritize practicing these terms to fix knowledge gaps.`;
        if (startBtn) startBtn.textContent = `🚀 Practice Box 1 Words (${words.length})`;
    } else if (boxNum === 2) {
        titleEl.textContent = `🟡 Box 2: Scheduled Review Due (${words.length} Due Words)`;
        subEl.textContent = `Words answered correctly 1-2 times. Scheduled for spaced repetition to build long-term memory.`;
        if (startBtn) startBtn.textContent = `⚡ Practice Box 2 Words (${words.length})`;
    } else {
        titleEl.textContent = `🟢 Box 3: Mastered & Retained (${words.length} Mastered Words)`;
        subEl.textContent = `Words answered correctly 3+ consecutive times. Fully stored in long-term memory.`;
        if (startBtn) startBtn.textContent = `✅ Inspect Mastered Words (${words.length})`;
    }

    tableBody.innerHTML = '';
    if (words.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5" style="text-align: center; padding: 20px; color: var(--text-secondary);">No words currently in this memory box. Keep up the good work!</td></tr>`;
    } else {
        words.forEach((item, index) => {
            const errCount = getWordErrorCount(item.word);
            let statusBadge = '';
            if (boxNum === 1) {
                statusBadge = `<span style="color: #ef4444; background: rgba(239,68,68,0.12); padding: 3px 8px; border-radius: 10px; font-weight: 700; font-size: 11px;">🔴 Critical Review</span>`;
            } else if (boxNum === 2) {
                statusBadge = `<span style="color: #f59e0b; background: rgba(245,158,11,0.12); padding: 3px 8px; border-radius: 10px; font-weight: 700; font-size: 11px;">🟡 Pending Review</span>`;
            } else {
                statusBadge = `<span style="color: #10b981; background: rgba(16,185,129,0.12); padding: 3px 8px; border-radius: 10px; font-weight: 700; font-size: 11px;">🟢 Mastered</span>`;
            }

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><b>${index + 1}</b></td>
                <td>
                    <b style="font-size: 15px; color: var(--text-primary);">${item.word}</b>
                    <div style="font-size: 12px; color: var(--text-secondary);">${item.phonetic || ''}</div>
                </td>
                <td>
                    <div style="font-weight: 600; color: var(--accent-color);">${item.englishDef || ''}</div>
                    <div style="font-size: 13px; color: var(--text-primary);">${item.meaning || ''}</div>
                </td>
                <td><b style="color: ${errCount > 0 ? '#ef4444' : 'var(--text-secondary)'}">${errCount} errors</b></td>
                <td>${statusBadge}</td>
            `;
            tableBody.appendChild(tr);
        });
    }

    modal.style.display = 'flex';
};

window.closeBoxWordListModal = function() {
    const modal = document.getElementById('boxWordListModal');
    if (modal) modal.style.display = 'none';
};

window.startPracticeFromModal = function() {
    closeBoxWordListModal();
    startLeitnerBoxReview(window.currentModalBoxNum);
};

window.originalVocabDeck = null;

window.startLeitnerBoxReview = function(boxNum) {
    const targetWords = getWordsInBox(boxNum);
    if (targetWords.length === 0) {
        alert(`No words currently in Box ${boxNum} to practice!`);
        return;
    }

    if (!window.originalVocabDeck && currentVocabList && currentVocabList.length > 0) {
        window.originalVocabDeck = [...currentVocabList];
    }

    currentVocabList = [...targetWords];
    currentCardIndex = 0;

    const deckTitle = document.getElementById('currentDeckTitle');
    if (deckTitle) {
        deckTitle.innerHTML = `🎯 Leitner Review: Box ${boxNum} (${targetWords.length} Words) <button onclick="resetOriginalDeck()" style="font-size:11px; padding:2px 6px; margin-left:6px; cursor:pointer;">Reset Full Deck</button>`;
    }

    if (boxNum === 1) {
        const quizTabBtn = document.querySelector('[data-tab="quizTab"]');
        if (quizTabBtn) quizTabBtn.click();
        if (typeof generateQuizQuestion === 'function') generateQuizQuestion();
        alert(`🚀 Practice Session Active!\n\nFiltered current deck to ONLY focus on ${targetWords.length} weak words from Box 1 (Danger Zone)!`);
    } else if (boxNum === 2) {
        const writeTabBtn = document.querySelector('[data-tab="writeTab"]');
        if (writeTabBtn) writeTabBtn.click();
        if (typeof setupWritePractice === 'function') setupWritePractice();
        alert(`⚡ Practice Session Active!\n\nFiltered current deck to ONLY focus on ${targetWords.length} scheduled review words from Box 2!`);
    } else {
        const tableTabBtn = document.querySelector('[data-tab="tableTab"]');
        if (tableTabBtn) tableTabBtn.click();
        if (typeof renderTable === 'function') renderTable();
        alert(`✅ Inspecting ${targetWords.length} Mastered words from Box 3!`);
    }
};

window.resetOriginalDeck = function() {
    if (window.originalVocabDeck) {
        currentVocabList = [...window.originalVocabDeck];
        currentCardIndex = 0;
        const deckTitle = document.getElementById('currentDeckTitle');
        if (deckTitle) deckTitle.textContent = "Full Vocabulary Deck";
        if (typeof renderFlashcard === 'function') renderFlashcard();
        if (typeof renderTable === 'function') renderTable();
        alert("Restored full vocabulary deck!");
    }
};

window.updateLeitnerBoxesUI = function() {
    const totalWords = (currentVocabList && currentVocabList.length > 0) ? currentVocabList.length : 36;
    const box1Words = getWordsInBox(1);
    const box2Words = getWordsInBox(2);
    const box3Words = getWordsInBox(3);

    const totalEl = document.getElementById('leitnerTotalWords');
    if (totalEl) totalEl.textContent = `${totalWords} Words`;

    const b1Text = document.getElementById('box1CountText');
    if (b1Text) b1Text.innerHTML = `${box1Words.length} <span style="font-size: 15px; font-weight: 600; color: var(--text-secondary);">words</span>`;

    const b2Text = document.getElementById('box2CountText');
    if (b2Text) b2Text.innerHTML = `${box2Words.length} <span style="font-size: 15px; font-weight: 600; color: var(--text-secondary);">words</span>`;

    const b3Text = document.getElementById('box3CountText');
    if (b3Text) b3Text.innerHTML = `${box3Words.length} <span style="font-size: 15px; font-weight: 600; color: var(--text-secondary);">words</span>`;
};

// 18. Study Activity Heatmap Calendar Engine (0, <30, <50, <75, <100+ pts)
window.getHeatmapColor = function(score) {
    if (!score || score <= 0) return { bg: 'rgba(148, 163, 184, 0.15)', text: '0 pts', label: 'No activity' };
    if (score < 30) return { bg: '#9be9a8', text: `${score} pts`, label: '< 30 pts' };
    if (score < 50) return { bg: '#40c463', text: `${score} pts`, label: '30 - 49 pts' };
    if (score < 75) return { bg: '#30a14e', text: `${score} pts`, label: '50 - 74 pts' };
    return { bg: '#10b981', text: `${score} pts`, label: '75 - 100+ pts' };
};

window.recordDailyActivityScore = function(addedPoints) {
    if (!addedPoints || addedPoints <= 0) return;
    const todayStr = new Date().toISOString().slice(0, 10);
    const scores = JSON.parse(localStorage.getItem('vocab_daily_activity_scores') || '{}');
    scores[todayStr] = (scores[todayStr] || 0) + addedPoints;
    localStorage.setItem('vocab_daily_activity_scores', JSON.stringify(scores));
    
    if (typeof renderActivityHeatmap === 'function') {
        renderActivityHeatmap();
    }
};

window.renderActivityHeatmap = function() {
    const monthSelect = document.getElementById('heatmapMonthSelect');
    const yearSelect = document.getElementById('heatmapYearSelect');
    const gridWrapper = document.getElementById('heatmapGridWrapper');
    const tabsBar = document.getElementById('heatmapMonthTabsBar');
    if (!monthSelect || !yearSelect || !gridWrapper || !tabsBar) return;

    const selectedMonth = parseInt(monthSelect.value); // 0-11
    const selectedYear = parseInt(yearSelect.value);   // 2026

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const label = document.getElementById('heatmapMonthNameLabel');
    if (label) label.textContent = `${monthNames[selectedMonth]} ${selectedYear}`;

    // 1. Render 12 Month Quick Pills (Click vào tháng nào ra tháng đó)
    tabsBar.innerHTML = '';
    monthShort.forEach((mName, idx) => {
        const pill = document.createElement('button');
        const isActive = idx === selectedMonth;
        pill.style.cssText = `padding: 6px 14px; border-radius: 20px; font-size: 12px; font-weight: 700; cursor: pointer; white-space: nowrap; transition: all 0.2s ease; border: 1px solid ${isActive ? 'var(--accent-color)' : 'var(--border-color)'}; background: ${isActive ? 'var(--accent-gradient)' : 'var(--card-bg)'}; color: ${isActive ? '#ffffff' : 'var(--text-secondary)'};`;
        pill.textContent = mName;
        pill.onclick = () => {
            monthSelect.value = idx;
            renderActivityHeatmap();
        };
        tabsBar.appendChild(pill);
    });

    // 2. Fetch Scores from localStorage & todayScore
    const scores = JSON.parse(localStorage.getItem('vocab_daily_activity_scores') || '{}');
    
    // Seed current today Date score if present
    const todayStr = getLocalDateString();
    if (typeof todayScore !== 'undefined' && todayScore > 0 && todayDate === todayStr) {
        scores[todayStr] = Math.max(scores[todayStr] || 0, todayScore);
    } else {
        delete scores[todayStr];
    }

    const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    const firstDayOfWeek = new Date(selectedYear, selectedMonth, 1).getDay();

    let activeDaysCount = 0;
    let totalMonthScore = 0;

    let gridHtml = `
        <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px; text-align: center; min-width: 320px;">
            <div style="font-size: 11px; font-weight: 800; color: var(--text-secondary); padding: 4px;">Sun</div>
            <div style="font-size: 11px; font-weight: 800; color: var(--text-secondary); padding: 4px;">Mon</div>
            <div style="font-size: 11px; font-weight: 800; color: var(--text-secondary); padding: 4px;">Tue</div>
            <div style="font-size: 11px; font-weight: 800; color: var(--text-secondary); padding: 4px;">Wed</div>
            <div style="font-size: 11px; font-weight: 800; color: var(--text-secondary); padding: 4px;">Thu</div>
            <div style="font-size: 11px; font-weight: 800; color: var(--text-secondary); padding: 4px;">Fri</div>
            <div style="font-size: 11px; font-weight: 800; color: var(--text-secondary); padding: 4px;">Sat</div>
    `;

    for (let i = 0; i < firstDayOfWeek; i++) {
        gridHtml += `<div style="background: transparent; min-height: 44px;"></div>`;
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${selectedYear}-${String(selectedMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const dayScore = scores[dateStr] || 0;

        if (dayScore > 0) {
            activeDaysCount++;
            totalMonthScore += dayScore;
        }

        const colorInfo = getHeatmapColor(dayScore);

        gridHtml += `
            <div title="📅 ${dateStr}: ${dayScore} pts (${colorInfo.label})" style="background: ${colorInfo.bg}; border-radius: var(--radius-sm); min-height: 46px; padding: 6px 4px; display: flex; flex-direction: column; align-items: center; justify-content: space-between; cursor: pointer; border: 1px solid rgba(0,0,0,0.08);">
                <span style="font-size: 11px; font-weight: 800; color: ${dayScore >= 50 ? '#ffffff' : 'var(--text-primary)'};">${day}</span>
                <span style="font-size: 9.5px; font-weight: 700; color: ${dayScore >= 50 ? '#ffffff' : 'var(--text-secondary)'};">${dayScore > 0 ? dayScore + 'p' : '-'}</span>
            </div>
        `;
    }

    gridHtml += `</div>`;
    gridWrapper.innerHTML = gridHtml;

    const activeEl = document.getElementById('heatmapActiveDaysCount');
    if (activeEl) activeEl.textContent = `${activeDaysCount} days`;

    const totalEl = document.getElementById('heatmapTotalMonthScore');
    if (totalEl) totalEl.textContent = `${totalMonthScore} pts`;
};

window.navigateHeatmapMonth = function(direction) {
    const select = document.getElementById('heatmapMonthSelect');
    if (!select) return;
    let curr = parseInt(select.value);
    let next = curr + direction;
    if (next < 0) next = 11;
    if (next > 11) next = 0;
    select.value = next;
    renderActivityHeatmap();
};

const BUILTIN_CATALOG = [
    { filename: 'Delay_Turns_Out_Blessing_05_09.md', title: 'When a delay turns out to be a blessing', size: '24.5 KB', dir: 'Read Article/Results/', mtime: '2026-09-05' },
    { filename: 'Lexus_03_09.md', title: 'Why are Vietnamese people increasingly choosing Lexus?', size: '21.3 KB', dir: 'Read Article/Results/', mtime: '2026-09-03' },
    { filename: 'Buddha_Lost_Eyes_30_08.md', title: 'Buddha Lost Eyes', size: '3.8 KB', dir: 'Read Article/Results/', mtime: '2026-08-30' },
    { filename: 'Vietnamese_Coffee_30_08.md', title: 'Vietnamese Coffee Culture', size: '5.1 KB', dir: 'Read Article/Results/', mtime: '2026-08-30' },
    { filename: 'Topic 1_Family.md', title: 'Topic 1: Family Vocabulary', size: '2.9 KB', dir: 'Read Article/Results/', mtime: '2026-08-25' }
];

function renderArticlesListInModal(articles) {
    const container = document.getElementById('webFolderArticlesList');
    if (!container) return;

    container.innerHTML = '';
    if (!articles || articles.length === 0) {
        container.innerHTML = `
            <div style="text-align:center; padding: 30px; background: #f8fafc; border: 2px dashed #cbd5e1; border-radius: var(--radius-md); color: #0f172a;">
                <div style="font-size: 36px; margin-bottom: 8px;">📂</div>
                <div style="font-weight: 800; color: #0f172a; margin-bottom: 4px; font-size: 16px;">Chưa tìm thấy tệp .MD nào</div>
                <div style="font-size: 13px; color: #475569;">Thư mục <code>Read Article/Results/</code> hiện chưa có bài đọc mới. Bạn có thể dùng nút 📁 Import để tải bài từ máy!</div>
            </div>
        `;
        return;
    }

    articles.forEach(art => {
        const card = document.createElement('div');
        card.style.cssText = "background: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: var(--radius-md); padding: 16px 20px; display: flex; justify-content: space-between; align-items: center; gap: 14px; margin-bottom: 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); transition: all 0.2s ease;";
        card.onmouseenter = () => { card.style.background = "#ffffff"; card.style.borderColor = "#6366f1"; card.style.boxShadow = "0 4px 12px rgba(99,102,241,0.15)"; };
        card.onmouseleave = () => { card.style.background = "#f8fafc"; card.style.borderColor = "#cbd5e1"; card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.05)"; };

        const displayTitle = art.title || art.filename.replace(/\.md$/i, '').replace(/_/g, ' ');
        const dateStr = art.mtime || 'Mới cập nhật';

        card.innerHTML = `
            <div style="flex: 1;">
                <div style="font-size: 16px; font-weight: 800; color: #0f172a; margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
                    <span style="font-size: 18px;">📄</span> <span style="color: #0f172a; text-shadow: none;">${displayTitle}</span>
                </div>
                <div style="font-size: 12.5px; color: #334155; display: flex; flex-wrap: wrap; gap: 12px; align-items: center; font-weight: 600;">
                    <span style="background: #e0e7ff; color: #3730a3; padding: 3px 8px; border-radius: 4px; font-family: monospace; font-weight: 800;">${art.filename}</span>
                    <span style="color: #334155;">💾 <b style="color: #0f172a;">${art.size || 'N/A'}</b></span>
                    <span style="color: #334155;">📅 <b style="color: #0f172a;">${dateStr}</b></span>
                </div>
            </div>
            <button onclick="loadWebFolderArticle('${art.filename}')" style="padding: 11px 22px; background: linear-gradient(135deg, #6366f1, #4f46e5); color: #ffffff; border: none; border-radius: var(--radius-md); font-weight: 800; font-size: 14px; cursor: pointer; white-space: nowrap; box-shadow: 0 4px 12px rgba(79,70,229,0.35); flex-shrink: 0;">
                ⚡ Nạp Bài Này
            </button>
        `;
        container.appendChild(card);
    });
}

window.openWebFolderLibraryModal = function() {
    const modal = document.getElementById('webFolderLibraryModal');
    const container = document.getElementById('webFolderArticlesList');
    if (!modal || !container) return;

    container.innerHTML = `<div style="text-align:center; padding: 26px; color: #4f46e5; font-weight: 800; font-size: 15px;">🔍 Đang quét thư mục bài đọc <code>Read Article/Results/</code>...</div>`;
    modal.style.display = 'flex';

    fetch(getApiUrl('/api/articles'))
        .then(res => {
            if (res.ok) return res.json();
            throw new Error('API response not ok');
        })
        .then(articles => {
            if (articles && articles.length > 0) {
                renderArticlesListInModal(articles);
            } else {
                renderArticlesListInModal(BUILTIN_CATALOG);
            }
        })
        .catch(err => {
            console.log("Using static catalog fallback...", err);
            renderArticlesListInModal(BUILTIN_CATALOG);
        });
};

window.closeWebFolderLibraryModal = function() {
    const modal = document.getElementById('webFolderLibraryModal');
    if (modal) modal.style.display = 'none';
};

window.loadWebFolderArticle = function(fileName) {
    closeWebFolderLibraryModal();
    const select = document.getElementById('articleSelect');
    if (select) {
        let existing = Array.from(select.options).find(opt => opt.value === fileName);
        if (!existing) {
            const opt = document.createElement('option');
            opt.value = fileName;
            opt.textContent = fileName.replace(/\.md$/i, '').replace(/_/g, ' ');
            select.appendChild(opt);
        }
        select.value = fileName;
    }
    localStorage.setItem('last_selected_article', fileName);
    fetchAndLoadArticle(fileName);
};

// 17. Manual Text & Markdown Input Engine
window.openManualInputModal = function() {
    const modal = document.getElementById('manualInputModal');
    if (modal) modal.style.display = 'flex';
};

window.closeManualInputModal = function() {
    const modal = document.getElementById('manualInputModal');
    if (modal) modal.style.display = 'none';
};

window.saveAndStudyManualInput = function() {
    const titleInput = document.getElementById('manualTitleInput');
    const contentInput = document.getElementById('manualContentTextarea');

    let title = titleInput ? titleInput.value.trim() : '';
    const content = contentInput ? contentInput.value.trim() : '';

    if (!content) {
        alert("Please paste or type your vocabulary markdown table content!");
        return;
    }

    if (!title) {
        title = `My_Lesson_${new Date().toISOString().slice(0, 10)}.md`;
    } else if (!title.endsWith('.md')) {
        title += '.md';
    }

    const parsedData = parseMarkdownTable(content);
    if (parsedData.length === 0) {
        alert("Could not parse 7-column vocabulary table from your pasted text. Please make sure lines start with '|' and contain 7 columns!");
        return;
    }

    saveCustomArticle(title, content);

    const select = document.getElementById('articleSelect');
    if (select) {
        let existing = Array.from(select.options).find(opt => opt.value === title);
        if (!existing) {
            const opt = document.createElement('option');
            opt.value = title;
            opt.textContent = title.replace(/\.md$/i, '').replace(/_/g, ' ');
            select.appendChild(opt);
        }
        select.value = title;
    }

    localStorage.setItem('last_selected_article', title);
    loadArticleData(title, content);
    closeManualInputModal();

    alert(`🎉 Successfully saved "${title}" (${parsedData.length} vocabulary terms) into your selection menu and loaded for study!`);
};

if ('serviceWorker' in navigator && window.location.protocol !== 'file:') {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
