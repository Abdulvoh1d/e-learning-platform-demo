# Learnwell — E-Learning Platform

Learnwell — kurslarni ko‘rib chiqish, darslar bo‘ylab harakatlanish, qisqa viktorinalarni ishlash va o‘quv progressini shu brauzerda saqlash imkonini beruvchi namunaviy elektron ta’lim interfeysi.

- **Jonli demo:** [elearning-platform-demo.netlify.app](https://elearning-platform-demo.netlify.app)
- **GitHub repository:** [Abdulvoh1d/e-learning-platform-demo](https://github.com/Abdulvoh1d/e-learning-platform-demo)

## Loyiha nimani ko‘rsatadi?

Bu loyiha statik veb-sahifada kurslar katalogi va o‘quv jarayonining asosiy bosqichlarini namoyish etadi: kurs topish, kurs tafsilotlarini ko‘rish, darslarni ochish, darsni tugallangan deb belgilash va viktorina natijasini olish. Namuna ma’lumotlari yozish, dizayn, diqqatni jamlash, byudjet, fotografiya va uchrashuvlar mavzularidagi oltita kursni qamrab oladi.

## Tasdiqlangan funksiyalar

- Kurslarni nomi, mavzusi, tavsifi yoki o‘qituvchi nomi bo‘yicha qidirish va kategoriya bo‘yicha filtrlash.
- Kurs tafsilotlari, uchta dars, davomiylik, o‘qituvchi va namunaviy viktorinani ko‘rish.
- Kurs ichida darslar ro‘yxati orqali yurish, darsni ochish va tugallangan deb belgilash; progress foizi va tugallangan darslar sonini ko‘rish.
- Har bir kurs uchun uch savolli namunaviy viktorinani bajarish. Barcha savollarga javob berilgach natija darhol hisoblanadi; keyin viktorinani qayta ochib yana topshirish mumkin.
- **My learning** bo‘limida boshlangan kurslarni ko‘rish.
- Boshlangan kurs, tugallangan darslar va oxirgi viktorina natijasini brauzerning `localStorage` xotirasida saqlash.

## Texnologiyalar

- HTML5
- CSS3
- Vanilla JavaScript
- Brauzerning DOM va `FormData` API’lari, shuningdek `localStorage`

Loyiha statik fayllardan iborat; JavaScript kodi server yoki tashqi API bilan aloqa qilmaydi. Framework, backend, ma’lumotlar bazasi, to‘lov xizmati yoki WebSocket integratsiyasi mavjud emas.

## Talablar va mahalliy ishga tushirish

Kerak bo‘ladigan vositalar: zamonaviy veb-brauzer, Python 3 va repozitoriyni olish uchun Git. Paket o‘rnatish yoki yig‘ish bosqichi talab qilinmaydi; `npm install` va `npm run build` kerak emas.

```sh
git clone https://github.com/Abdulvoh1d/e-learning-platform-demo.git
cd e-learning-platform-demo
python3 -m http.server 8765
```

So‘ng brauzerda [http://localhost:8765](http://localhost:8765) manzilini oching. Serverni to‘xtatish uchun terminalda `Ctrl+C` bosing.

## Fayllar tuzilishi

```text
e-learning-platform-demo/
├── index.html   # Asosiy sahifa, navigatsiya va ilova uchun konteyner
├── app.js       # Kurs ma’lumotlari, ekranlar, interaktivlik va progressni saqlash
├── styles.css   # Sahifa uslublari va moslashuvchan joylashuv
└── README.md    # Loyiha haqidagi hujjat
```

## Ma’lumotlar, maxfiylik va demo cheklovlari

Kurs nomlari, tavsiflar, o‘qituvchilar, dars matnlari, rasmlar va viktorina savollari — namoyish uchun yaratilgan namunaviy ma’lumotlar. Dars ekrani video pleyer emas: haqiqiy video yuklanmaydi yoki uzatilmaydi. Viktorina natijalari ham faqat demo uchun; ular rasmiy baholash, sertifikat yoki haqiqiy kurs natijasi hisoblanmaydi.

Ilova akkaunt yaratmaydi va progressni serverga yubormaydi. Boshlangan kurslar, tugallangan darslar va oxirgi viktorina natijasi joriy brauzerdagi `localStorage`-da saqlanadi, shu sababli boshqa brauzer yoki qurilmada avtomatik ko‘rinmaydi. Brauzer ma’lumotlarini tozalash saqlangan progressni o‘chirishi mumkin; brauzerda saqlash imkoni bo‘lmasa, progress faqat joriy tashrif davomida ishlashi mumkin.

## Litsenziya

Repozitoriyda `LICENSE` fayli yo‘q. GitHub’dagi repozitoriyning ochiq bo‘lishi o‘z-o‘zidan ochiq litsenziya bermaydi; koddan foydalanish huquqlari avtomatik belgilanmaydi.
