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

## **Timeline**

| Type          | Feature                                    | Task                                                                     | Done                  | Time          | Day |
| ------------- | ------------------------------------------ | ------------------------------------------------------------------------ | --------------------- | ------------- | --- |
| **Must Have** |                                            |                                                                          |                       |               |     |
|               | **plan**                                   |                                                                          |                       |               |     |
|               |                                            | Design , Choose & explore the technologies and packages I will be useing | :white_check_mark:    | **~16 hours** |     |
|               |                                            |                                                                          |                       |               |     |
|               | **Generate html from data using template** | →service classe that recive data and return html                         |                       |               |     |
|               |                                            | create template component                                                | :white_check_mark:    | **9 hours**   |     |
|               |                                            | add function to template component→ check if page is "Cont"              | :black_square_button: | **9 hours**   |     |
|               |                                            | use ssr render to generate html string                                   | :white_check_mark:    | **5 hours**   |     |
|               |                                            | create header component                                                  | :white_check_mark:    | **4 hours**   |     |
|               |                                            | build functionality to header component-stamp Page X of Y                | :black_square_button: | **9 hours**   |     |
|               |                                            | create footer component                                                  | :black_square_button: | **4 hours**   |     |
|               |                                            | create Cover Page component                                              | :black_square_button: | **3 hours**   |     |
|               |                                            | create T.O.C component                                                   | :black_square_button: | **9 hours**   |     |
|               |                                            | accessibility -According to the standard and the requirements of the law | :black_square_button: | TBD           |     |
|               | **pdf Generator**                          |                                                                          |                       |               |     |
|               |                                            | use puppeteer package to generate pdf from recived html                  | :white_check_mark:    | **9 hours**   |     |
|               |                                            |                                                                          |                       |               |     |
|               | **Rest Service**                           |                                                                          |                       |               |     |
|               |                                            | Create Rest Service that will manage pdf generation                      | :white_check_mark:    | **6 hours**   |     |
|               |                                            |                                                                          |                       |               |     |
|               | **Deployment Production Preparation**      |                                                                          |                       |               |     |
|               |                                            | Testing localy-call from diffrent browser/api crate banxh of file        | :black_square_button: | **2-3 hours** |     |
|               |                                            | load the project to server                                               | :black_square_button: | **2 hours**   |     |
|               |                                            | Testing -on server (using the tools create for local test)               | :black_square_button: | **1 hours**   |     |

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
