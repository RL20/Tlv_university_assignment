import express from "express";
import fs from "fs";
import path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";

import { Readable } from 'stream';
import puppeteer from 'puppeteer';

import App from "../src/App";


const PORT = 8000;

const app = express();
app.use(express.json())
// Example of JSON format needed to be passed in the request body  You can see the root folder under the name → body_request_example
app.use("^/$", async (req, res, next) => {
    //let jsonData = fetch data
    const gg=req.body.data.results.body[0].tclongkey;
    let template = ReactDOMServer.renderToString(<App  generalExplanation={req.body}/>);
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
  
    await page.setContent(template);
    const pdf = await page.pdf({ format: 'A4' });
    await browser.close();

    const stream = Readable.from(pdf);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=quote.pdf');
    stream.pipe(res);
});

app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});


// This is example of the JSON request body formay ↓↓↓
