import { Box } from "@mantine/core";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import bg from "../assets/baseforcollar.png";
import concal from "../assets/concealed-collar.png";
import zIndex from "@mui/material/styles/zIndex";
import iconconcal from "../assets/concealed-icon.svg";
import spread from "../assets/spread.png";
import prince from "../assets/prince.png";
import madmen from "../assets/madmen.png";
import hipster from "../assets/hipster.png";
import hipsterrounded from "../assets/hipsterrounded.png";
import polo from "../assets/polo.png";
import club from "../assets/club.png";

import iconspread from "../assets/spread-icon.svg";
import iconsprince from "../assets/prince-icon.svg";
import iconmadmen from "../assets/madmen-icon.svg";
import iconbndhgala from "../assets/bandhgala-icon.svg";
import iconhipster from "../assets/hipster-icon.svg";
import iconhipsterround from "../assets/hipster-round-icon.svg";
import iconpolo from "../assets/polo-icon.svg";
import iconclub from "../assets/club-collr-icon.svg";
import button from "../assets/baseforcollarbutton.png";
import colarbutton from "../assets/colarbutton.png";
// import ColourPicker from "../utils/ColourPicker";

function HomeSizePage() {
  const [select, Setselect] = useState(concal);

  return (
    <div>
      <Grid
      sx={{
        // marginBottom:10,
        // height: "500px",
        // "@media (min-width: 768px)": {
        //   height: "600px",
        padding:6
        // },
      }}
       container >
        <Grid item xs={6 }sm={12} md={8}>

        <div>
            <img
              className="background-img"
              src={bg}
              alt="bg"
              style={{ zIndex: "1" }}
            />
            {select && (
              <img
                className="selected-img"
                src={select}
                alt="test"
                style={{ zIndex: "9", position: "absolute", left: "3rem" }}
              />
            )}

            <img
              className="colarbutton-img"
              src={colarbutton}
              alt="button"
              style={{ zIndex: "3", position: "absolute", left: "3rem" }}
            />

            <img
              className="button-img"
              src={button}
              alt="button"
              style={{ zIndex: "3", position: "absolute", left: "1rem" }}
            />
          </div>
        </Grid>
        <Grid item xs={6} sm={12} md={4}>

        <div
            className="cardbody"
            style={{
              marginTop: "25%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <div
              className="card"
              style={{
                width: "20%",
                height: "7rem",
                cursor: "pointer",
                border: `solid 2px ${select === concal ? "black" : "#dddddd"}`,

                margin: "1%",
                padding: "13px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => {
                Setselect(concal);
                localStorage.setItem("selectedCollar", "conceal");
              }}
            >
              <img src={iconconcal} alt="iconconcal" style={{}} />
              <p style={{ textAlign: "center" }}>concal</p>
            </div>
            <div
              className="card"
              style={{
                width: "20%",
                height: "7rem",
                cursor: "pointer",
                border: `solid 2px ${select === spread ? "black" : "#dddddd"}`,

                margin: "1%",
                padding: "13px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => {
                Setselect(spread);
                localStorage.setItem("selectedCollar", "spread");
              }}
            >
              <img src={iconspread} alt="iconspread" style={{}} />
              <p style={{ textAlign: "center" }}>Spread</p>
            </div>
            <div
              className="card"
              style={{
                width: "20%",
                height: "7rem",
                cursor: "pointer",
                border: `solid 2px ${select === prince ? "black" : "#dddddd"}`,

                margin: "1%",
                padding: "13px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => {
                Setselect(prince);
                localStorage.setItem("selectedCollar", "prince");
              }}
            >
              <img src={iconsprince} alt="iconsprince" style={{}} />
              <p style={{ textAlign: "center" }}>Prince</p>
            </div>
            <div
              className="card"
              style={{
                width: "20%",
                height: "7rem",
                cursor: "pointer",
                border: `solid 2px ${select === madmen ? "black" : "#dddddd"}`,

                margin: "1%",
                padding: "13px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => {
                Setselect(madmen);
                localStorage.setItem("selectedCollar", "madmen");
              }}
            >
              <img src={iconmadmen} alt="iconmadmen" style={{}} />
              <p style={{ textAlign: "center" }}>Madmen</p>
            </div>
            <div
              className="card"
              style={{
                width: "20%",
                height: "7rem",
                cursor: "pointer",
                border: `solid 2px ${select === "" ? "black" : "#dddddd"}`,

                margin: "1%",
                padding: "13px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => {
                Setselect("");
                localStorage.setItem("selectedCollar", "bang");
              }}
            >
              <img src={iconbndhgala} alt="iconbndhgala" style={{}} />
              <p style={{ textAlign: "center" }}>Bandhgala</p>
            </div>
            <div
              className="card"
              style={{
                width: "20%",
                height: "7rem",
                cursor: "pointer",
                border: `solid 2px ${select === hipster ? "black" : "#dddddd"}`,

                margin: "1%",
                padding: "13px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => {
                Setselect(hipster);
                localStorage.setItem("selectedCollar", "hipster");
              }}
            >
              <img src={iconhipster} alt="iconhipster" style={{}} />
              <p style={{ textAlign: "center" }}>Hipster</p>
            </div>
            <div
              className="card"
              style={{
                width: "20%",
                height: "7rem",
                cursor: "pointer",
                border: `solid 2px ${
                  select === hipsterrounded ? "black" : "#dddddd"
                }`,

                margin: "1%",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign:'center'
              }}
              onClick={() => {
                Setselect(hipsterrounded);
                localStorage.setItem("selectedCollar", "hipsterround");
              }}
            >
              <img src={iconhipsterround} alt="iconhipsterround" style={{}} />
              <p style={{ textAlign: "center" }}>Hipster-R</p>
            </div>
            <div
              className="card"
              style={{
                width: "20%",
                height: "7rem",
                cursor: "pointer",
                border: `solid 2px ${select === polo ? "black" : "#dddddd"}`,

                margin: "1%",
                padding: "13px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => {
                Setselect(polo);
                localStorage.setItem("selectedCollar", "polo");
              }}
            >
              <img src={iconpolo} alt="iconpolo" style={{}} />
              <p style={{ textAlign: "center" }}>Polo</p>
            </div>
            <div
              className="card"
              style={{
                width: "20%",
                height: "7rem",
                cursor: "pointer",
                border: `solid 2px ${select === club ? "black" : "#dddddd"}`,

                margin: "1%",
                padding: "13px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => {
                Setselect(club);
                localStorage.setItem("selectedCollar", "club");
              }}
            >
              <img src={iconclub} alt="iconclub" style={{}} />
              <p style={{ textAlign: "center" }}>Club Collar</p>
            </div>
          </div>
          <button className="buto"
            style={{
              width: "98.5%",
              height: "3rem",
              cursor: "pointer",
              border: `solid 2px ${select === club ? "black" : "#dddddd"}`,
              margin: "1%",
              padding: "13px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "white", // Text color
              fontSize:'20px',
              // background: "black", // Initial background color
              transition: "background 0.5s", // Smooth transition for background color
              position: "relative",
              overflow: "hidden", // Hide overflow to prevent background gradient overflow
            }}
            // onMouseEnter={(e) => {
            //   // On hover, set the background color to slide from left to right
            //   e.target.style.background =
            //     "linear-gradient(to right, black, #dddddd)";
            // }}
            onClick={(e) => {
              window.location.href = "/";
            }}
            // onMouseLeave={(e) => {
            //   // On mouse leave, reset the background color
            //   e.target.style.background = "black";
            // }}
          >
Apply          </button>

        </Grid>
        
      </Grid>

      {/* <Grid
        container
        // columns={{ xs: 12, sm: 12, md: 6 }}
        spacing={2}
        sx={{
          height: "500px",
          "@media (min-width: 768px)": {
            height: "600px",
          },
        }}
      >
        <Grid
          item
          xs={8}
          sm={3}
          md={6}
          lg={6}
          sx={{
            margin: "1rem",
            alignContent: "center",
          }}
        >
          <div>
            <img
              className="background-img"
              src={bg}
              alt="bg"
              style={{ zIndex: "1" }}
            />
            {select && (
              <img
                className="selected-img"
                src={select}
                alt="test"
                style={{ zIndex: "9", position: "absolute", left: "1rem" }}
              />
            )}

            <img
              className="colarbutton-img"
              src={colarbutton}
              alt="button"
              style={{ zIndex: "3", position: "absolute", left: "1rem" }}
            />

            <img
              className="button-img"
              src={button}
              alt="button"
              style={{ zIndex: "3", position: "absolute", left: "1rem" }}
            />
          </div>
        </Grid>

        <Grid item xs={4} sm={3} md={6} lg={6}>
          <div
            className="cardbody"
            style={{
              marginTop: "25%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <div
              className="card"
              style={{
                width: "20%",
                height: "7rem",
                cursor: "pointer",
                border: `solid 2px ${select === concal ? "black" : "#dddddd"}`,

                margin: "1%",
                padding: "13px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => {
                Setselect(concal);
                localStorage.setItem("selectedCollar", "conceal");
              }}
            >
              <img src={iconconcal} alt="iconconcal" style={{}} />
              <p style={{ textAlign: "center" }}>concal</p>
            </div>
            <div
              className="card"
              style={{
                width: "20%",
                height: "7rem",
                cursor: "pointer",
                border: `solid 2px ${select === spread ? "black" : "#dddddd"}`,

                margin: "1%",
                padding: "13px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => {
                Setselect(spread);
                localStorage.setItem("selectedCollar", "spread");
              }}
            >
              <img src={iconspread} alt="iconspread" style={{}} />
              <p style={{ textAlign: "center" }}>Spread</p>
            </div>
            <div
              className="card"
              style={{
                width: "20%",
                height: "7rem",
                cursor: "pointer",
                border: `solid 2px ${select === prince ? "black" : "#dddddd"}`,

                margin: "1%",
                padding: "13px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => {
                Setselect(prince);
                localStorage.setItem("selectedCollar", "prince");
              }}
            >
              <img src={iconsprince} alt="iconsprince" style={{}} />
              <p style={{ textAlign: "center" }}>Prince</p>
            </div>
            <div
              className="card"
              style={{
                width: "20%",
                height: "7rem",
                cursor: "pointer",
                border: `solid 2px ${select === madmen ? "black" : "#dddddd"}`,

                margin: "1%",
                padding: "13px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => {
                Setselect(madmen);
                localStorage.setItem("selectedCollar", "madmen");
              }}
            >
              <img src={iconmadmen} alt="iconmadmen" style={{}} />
              <p style={{ textAlign: "center" }}>Madmen</p>
            </div>
            <div
              className="card"
              style={{
                width: "20%",
                height: "7rem",
                cursor: "pointer",
                border: `solid 2px ${select === "" ? "black" : "#dddddd"}`,

                margin: "1%",
                padding: "13px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => {
                Setselect("");
                localStorage.setItem("selectedCollar", "bang");
              }}
            >
              <img src={iconbndhgala} alt="iconbndhgala" style={{}} />
              <p style={{ textAlign: "center" }}>Bandhgala</p>
            </div>
            <div
              className="card"
              style={{
                width: "20%",
                height: "7rem",
                cursor: "pointer",
                border: `solid 2px ${select === hipster ? "black" : "#dddddd"}`,

                margin: "1%",
                padding: "13px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => {
                Setselect(hipster);
                localStorage.setItem("selectedCollar", "hipster");
              }}
            >
              <img src={iconhipster} alt="iconhipster" style={{}} />
              <p style={{ textAlign: "center" }}>Hipster</p>
            </div>
            <div
              className="card"
              style={{
                width: "20%",
                height: "7rem",
                cursor: "pointer",
                border: `solid 2px ${
                  select === hipsterrounded ? "black" : "#dddddd"
                }`,

                margin: "1%",
                padding: "13px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => {
                Setselect(hipsterrounded);
                localStorage.setItem("selectedCollar", "hipsterround");
              }}
            >
              <img src={iconhipsterround} alt="iconhipsterround" style={{}} />
              <p style={{ textAlign: "center" }}>Hipster Round</p>
            </div>
            <div
              className="card"
              style={{
                width: "20%",
                height: "7rem",
                cursor: "pointer",
                border: `solid 2px ${select === polo ? "black" : "#dddddd"}`,

                margin: "1%",
                padding: "13px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => {
                Setselect(polo);
                localStorage.setItem("selectedCollar", "polo");
              }}
            >
              <img src={iconpolo} alt="iconpolo" style={{}} />
              <p style={{ textAlign: "center" }}>Polo</p>
            </div>
            <div
              className="card"
              style={{
                width: "20%",
                height: "7rem",
                cursor: "pointer",
                border: `solid 2px ${select === club ? "black" : "#dddddd"}`,

                margin: "1%",
                padding: "13px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => {
                Setselect(club);
                localStorage.setItem("selectedCollar", "club");
              }}
            >
              <img src={iconclub} alt="iconclub" style={{}} />
              <p style={{ textAlign: "center" }}>Club Collar</p>
            </div>
          </div>

          <button
            style={{
              width: "98.5%",
              height: "3rem",
              cursor: "pointer",
              border: `solid 2px ${select === club ? "black" : "#dddddd"}`,
              margin: "1%",
              padding: "13px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "white", // Text color
              background: "black", // Initial background color
              transition: "background 0.5s", // Smooth transition for background color
              position: "relative",
              overflow: "hidden", // Hide overflow to prevent background gradient overflow
            }}
            onMouseEnter={(e) => {
              // On hover, set the background color to slide from left to right
              e.target.style.background =
                "linear-gradient(to right, black, #dddddd)";
            }}
            onClick={(e) => {
              window.location.href = "/";
            }}
            onMouseLeave={(e) => {
              // On mouse leave, reset the background color
              e.target.style.background = "black";
            }}
          >
            Button
          </button>
        </Grid>
      </Grid> */}
      {/* <ColourPicker />s */}
    </div>
  );
}

export default HomeSizePage;
