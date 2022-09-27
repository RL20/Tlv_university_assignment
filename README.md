<div dir="auto" align="right">

<span style="color: #177187">

# תיאור התוכנית

</span>

יצירת תוכנית/ (REST API) להפקת קבצי PDF שתוכנם מתעד תוכנית לימודים כפי שהופיע באתר האוניברסיטה .
התוכנית כאמור תהיה מבוססת על שירות שיקבל את הפרמטרים (JSONSׂ ) דרך התחברות לממשק שהאוניברסיטה תספק ויחזיר בחזרה BLOB של קובץ PDF .

התכנית תכיל AND POINT שיקבל REQUEST במתודת POST ותכיל את ההתייחסות לנקודות הבאות
התוכנית תעשה

- פורמט אחיד של קבצי הPDF
- נגישות לפי דרישות התקן הישראלי

</div>
<span style="color: #A54D69">

**סקיצה ראשונית המוצעת לגשת אל הפתרון :**

 </span>

```javascript
let data = {};

let htmlOutput = reactRenderService.generateHtml(data);

let pdf = pdfService.generatePdf(htmlOutput);

MediaRecorder.pdf = pdf;
```

<div dir="auto" align="right">

<span style="color: #177187">

## שלבי התוכנית במבט על :

</span>

1. יצירת ממשק התחברות לAPI כדי למשוך את הדאטה -
   יצירת קובץ api.js שימשוך מידע מהAPI יבצע חיבור וקריאות http request דרך פונקציות שיחזירו את הdata .
2. יצירת קומפוננטת ריאקט reactRenderService שתיצור תבנית/טמפלט ליצירת דפי HTML .תקבל את הקלט data דרך קריאות לפונקציות של ממשק ההתחברות לAPI ותחזיר בחזרה HTML -
   כדי שנוכל לקבל PDF לפי תבנית נדרשת ,יש לפרמט את הdata לתבנית שהתבקשנו לייצר ,וממנה ליצור קובץ PDF בהתאם לסעיף 6 במסמך האפיון
3. יצירת pdfService ליצירת קבצי PDF יקבל כקלט את הHTML l ויחזיר חזרה קובץ PDF יש להתייחס לדרישות הנגישות
4. יצירת REST API לטובת יצירת אוטונומיה כך ששימוש בAPI יצפה לקבל JSON בפורמט הספציפי ויחזיר בחזרה BLOB לPDF
5. העלאת הקוד לפרודקשיין - העלאה לרשת וזמינות הAPI

<span style="color: #177187">

## סיבות לבחירת בטכנולוגיות הנ"ל:

</span>

</div>
<div dir="auto" align="left">

<hr >

## Server API Endpoints

| Request              |           |                              | Response                |               |
| -------------------- | --------- | ---------------------------- | ----------------------- | ------------- |
| Route                | Method    | Body                         | Success                 | Errors        |
| -------------------- | --------- | ---------------------------- | ----------------------- | ------------- |
| `/api`               | `POST`    | {json}                       | { blob } -200           | 400 ,500      |

You can find here an example of the structures **[JSON passed](./docs/body_request_example)** as a parameter

## postman demonstration ↓

![request](./docs/screenshots/postman_request_1.png)

## Build process

Run the build npm script, then the server script

`npm run build`

`npm run ssr`

This will start the server on port 8000 on your local machine

## Technologies

`ssr`

- NodeJS
- Express
- ReactJS
- Axios - API

`Services & packages`

- html-react-parser
- ignore-styles
- style-loader
- css-loader
- puppeteer
