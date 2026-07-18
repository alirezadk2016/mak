# 📘 راهنمای مالک — makvandi.dk

این سند مال توئه، علیرضا. همه‌چیز درباره سایتت: چطور کار می‌کنه، هر چیزی کجاست، و چطور خودت تغییرش بدی.

---

## ۱. سایتت با چی ساخته شده؟

| ابزار | چیه؟ (یک خط) |
|---|---|
| **React** | کتابخانه‌ای که صفحات رو به قطعات کوچیک (کامپوننت) تقسیم می‌کنه |
| **TypeScript** | همون JavaScript ولی با تایپ — خطاها رو قبل از اجرا می‌گیره |
| **Vite** | ابزار build — کد رو به فایل‌های نهایی سایت تبدیل می‌کنه |
| **Tailwind CSS** | استایل‌دهی با کلاس‌های آماده (مثل `px-5` یعنی padding چپ‌وراست) |
| **Framer Motion** | انیمیشن‌ها (fade، حرکت کارت‌ها) |
| **Vercel** | هاست — هر push به GitHub اتوماتیک deploy می‌شه |

**جمله آماده مصاحبه (دانمارکی):**
> «Siden er bygget med React og TypeScript, hostet på Vercel. Indholdet, billederne og alle beslutninger er mine egne — jeg brugte moderne AI-værktøjer i processen, ligesom man bruger enhver anden professionel værktøjskasse.»

(سایت با React و TypeScript ساخته شده، روی Vercel هاست می‌شه. محتوا، عکس‌ها و همه تصمیم‌ها مال خودمه — از ابزارهای مدرن AI تو مسیر استفاده کردم، مثل هر جعبه‌ابزار حرفه‌ای دیگه.)

---

## ۲. نقشه سایت — هر صفحه کجاست؟

| آدرس | فایل | چیه |
|---|---|---|
| `/` | `src/App.tsx` (Home) | صفحه اصلی: Hero، Om mig، Kompetencer، Erfaring، Projekter، Kontakt |
| `/about` | `src/pages/AboutPage.tsx` | صفحه کامل درباره من (سفر، مهارت‌ها، زبان‌ها) |
| `/recommendations` | `src/pages/RecommendationsPage.tsx` | انبفالینگ‌ها (نامه YouSee) |
| `/experience/yousee` و... | `src/pages/ExperienceDetail.tsx` | جزئیات هر تجربه کاری (۴ شرکت تو همین یه فایله) |
| `/projects/svendeproeve` | `src/pages/SvendeproevePage.tsx` | صفحه سونده‌پروه |
| `/projects/gaming-pc` | `src/pages/GamingPCPage.tsx` | صفحه گیمینگ PC |
| `/projects/elite-vask` | `src/pages/EliteVaskPage.tsx` | صفحه Elite Vask |
| `/projects/mak-painting` | `src/pages/MakPaintingPage.tsx` | صفحه MAK Painting |
| `/viden` و `/viden/dhcp` و... | `src/pages/Glossary*.tsx` + `src/data/glossary.ts` | دانشنامه IT (۱۲ اصطلاح) |
| صفحه ۴۰۴ | `src/pages/NotFound.tsx` | وقتی آدرس اشتباهه |

**قطعات صفحه اصلی** تو `src/components/`:
- `HeroSection.tsx` — بالای صفحه (اسمت، عکس پولاروید، منو)
- `AboutTeaser.tsx` — خلاصه «Om mig»
- `ServicesSection.tsx` — بخش Kompetencer (پنل روشن)
- `ExperienceSection.tsx` — کارت‌های تجربه
- `ProjectsSection.tsx` — کارت‌های پروژه
- `FooterSection.tsx` — تماس + امضا

---

## ۳. متن‌ها کجان؟ (مهم‌ترین بخش)

**بیشتر متن‌های دوزبانه (دانمارکی/انگلیسی) تو یه فایله:**
```
src/translations.ts
```
بالای فایل `da:` (دانمارکی) و پایینش `en:` (انگلیسی). هر متنی که تو سایته رو با Ctrl+F پیدا کن، عوضش کن، تمام.

**استثناها (متن داخل خود صفحه‌ست):**
- صفحه About → `src/pages/AboutPage.tsx` (بخش `content = { da: ..., en: ... }`)
- دانشنامه → `src/data/glossary.ts`
- صفحات پروژه → داخل خود فایل صفحه

---

## ۴. چطور خودم چیزی رو عوض کنم؟

### راه ساده (از مرورگر، بدون نصب چیزی):
1. برو به `github.com/alirezadk2016/mak`
2. فایل رو پیدا کن (مثلاً `src/translations.ts`) → روی ✏️ (Edit) کلیک کن
3. متن رو عوض کن → پایین صفحه **Commit changes**
4. صبر کن ۱-۲ دقیقه — Vercel خودش deploy می‌کنه. تمام! ✅

### عوض کردن عکس:
- عکس‌ها تو پوشه `public/` هستن
- عکس جدید رو با **همون اسم قبلی** آپلود کن (Add file → Upload files تو GitHub)
- عکس اصلی تو: `6F4611AC-9D3C-47F1-8BA0-49E69A35BCDE.jpeg`
- عکس کارتونی: `f1145949-....png`

### عوض کردن CV:
- فایل CV: `public/cv-alireza-makvandi.pdf`
- یا مستقیم PDF جدید آپلود کن، یا `scripts/build_cv.py` رو ویرایش کن (متن CV اونجاست)

---

## ۵. SEO چطور کار می‌کنه؟

- **مشکل:** سایت‌های React معمولاً برای گوگل «خالی» به نظر می‌رسن.
- **راه‌حل تو:** یه اسکریپت (`scripts/prerender.mjs`) از هر ۲۴ صفحه یه نسخه HTML آماده می‌سازه که تو پوشه `prerendered/` ذخیره می‌شه. گوگل همون رو می‌بینه.
- **اتوماتیک:** هر بار که push می‌کنی، GitHub Actions (فایل `.github/workflows/prerender.yml`) خودش این HTML‌ها رو تازه می‌کنه.
- **sitemap.xml** لیست هر ۲۴ صفحه‌ست و به گوگل معرفی شده (Search Console).
- دانشنامه Viden هم برای همین ساخته شده: صفحات «Hvad er DHCP?» چیزیه که مردم واقعاً سرچ می‌کنن.

---

## ۶. سوال‌جواب‌های مصاحبه درباره سایت

**«سایتت رو خودت ساختی؟»**
> بله، پروژه خودمه. محتوا، عکس‌ها، ساختار و همه تصمیم‌های طراحی مال منه. تو ساختش از ابزارهای مدرن (از جمله AI) استفاده کردم — همونطور که یه حرفه‌ای از هر ابزاری استفاده می‌کنه. مهم اینه که می‌دونم چی توشه و چرا.

**«چرا React؟»**
> چون استاندارد صنعته، کامپوننت‌محوره (هر بخش یه قطعه قابل‌استفاده مجدده) و با TypeScript خطاها زودتر پیدا می‌شن.

**«SEO چیکار کردی؟»**
> سایت pre-render می‌شه که گوگل محتوا رو ببینه، هر صفحه title و description خودش رو داره، sitemap به Search Console معرفی شده، و یه بخش دانشنامه ساختم که سرچ‌های واقعی («hvad er dhcp») رو جواب می‌ده.

**«امنیتش چی؟»**
> HTTPS اجباری (HSTS)، هدرهای امنیتی CSP و X-Frame-Options تنظیمه، فونت‌ها self-host هستن (GDPR — بدون Google Fonts).

**نکته طلایی:** درباره بخش‌های فنی که تو مصاحبه راحت می‌تونی توضیح بدی، همیشه از سونده‌پروه‌ت مثال بزن (AD، DNS، DHCP، VLAN، pfSense) — اون ۱۰۰٪ کار خودته و قوی‌ترین کارتته. سایت فقط ویترینه؛ محصول اصلی تویی. 💪

---

## ۷. دستورهای فنی (اگه خواستی لوکال کار کنی)

```bash
npm install        # نصب پکیج‌ها (یه بار)
npm run dev        # اجرای سایت لوکال → localhost:5173
npm run build      # ساخت نسخه نهایی تو dist/
```

---

*این فایل تو ریپوی خودته — هر وقت چیزی یادت رفت برگرد همینجا.*
