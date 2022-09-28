import React from "react";
import { useState } from "react";
import Header from "./components/Header/Header";
// import generalExplanation from "./api/JSONS/generalExplanation";// will send directly from the req body
import titles from "./api/JSONS/titles";
import parse from "html-react-parser";
import "./App.css";

function App({ generalExplanation }) {
  const shnotLimud = generalExplanation.data.results.body[0].mivnelimudim.map((year, i) => {
    return (
      <div className="generalExplanation" key={i}>
        <div className="">{year.shaot}</div>
        <div className="">{year.teurrama}</div>
      </div>
    );
  });
  return (
    <div dir="rtl" className="mainDescription">
      <Header></Header>
      <h3 className="mainDescription_titles"> שנה"ל {generalExplanation.data.results.body[0].teurshana}</h3>
      <h2 className="mainDescription_program">{generalExplanation.data.results.body[0].teur}</h2>
      {/* <div dangerouslySetInnerHTML={{ __html: generalExplanation.data.results.body[0].hesberklali }}></div> */}
      <div className="mainDescription_topics">
        <p className=" wrapper open embedded-html">{parse(generalExplanation.data.results.body[0].hesberklali)}</p>
      </div>
      <h3 className="mainDescription_titles">{titles.data.configuration.body.data.tabs.GeneralExplanation.degreeStructure}</h3>
      <div>{shnotLimud}</div>
      {/* 
      <h4> {titles.data.configuration.body.data.tabs.GeneralExplanation.degreeTotalHours}</h4>
      <div>{generalExplanation.data.results.body[0].michsa}</div> */}
      <div className="inner-2 align-items-baseline  mt-5 mb-3 row">
        <div ex="12" className="col-md-auto">
          <h4>{titles.data.configuration.body.data.tabs.GeneralExplanation.degreeTotalHours}</h4>
        </div>
        <div ex="12" className="col-md-auto">
          <div className="d-flex flex-row align-items-baseline">
            <div className="houre p-1">{generalExplanation.data.results.body[0].michsa}</div>
            <div className="small-text  p-1">{generalExplanation.data.results.body[0].teurshaot}</div>
          </div>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div dir="rtl" className="mainDescription">
  //     <Header></Header>
  //     {data}
  //     <h3 className="mainDescription_titles"> שנה"ל {generalExplanation.data.results.body[0].teurshana}</h3>
  //     <h2 className="mainDescription_program">{generalExplanation.data.results.body[0].teur}</h2>
  //     {/* <div dangerouslySetInnerHTML={{ __html: generalExplanation.data.results.body[0].hesberklali }}></div> */}
  //     <div className="mainDescription_topics">
  //       <p className=" wrapper open embedded-html">{parse(generalExplanation.data.results.body[0].hesberklali)}</p>
  //     </div>
  //     <h3 className="mainDescription_titles">{titles.data.configuration.body.data.tabs.GeneralExplanation.degreeStructure}</h3>
  //     <div>{shnotLimud}</div>
  //     {/*
  //     <h4> {titles.data.configuration.body.data.tabs.GeneralExplanation.degreeTotalHours}</h4>
  //     <div>{generalExplanation.data.results.body[0].michsa}</div> */}
  //     <div className="inner-2 align-items-baseline  mt-5 mb-3 row">
  //       <div ex="12" className="col-md-auto">
  //         <h4>{titles.data.configuration.body.data.tabs.GeneralExplanation.degreeTotalHours}</h4>
  //       </div>
  //       <div ex="12" className="col-md-auto">
  //         <div className="d-flex flex-row align-items-baseline">
  //           <div className="houre p-1">{generalExplanation.data.results.body[0].michsa}</div>
  //           <div className="small-text  p-1">{generalExplanation.data.results.body[0].teurshaot}</div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default App;
