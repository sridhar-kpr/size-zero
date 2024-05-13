import { Box } from "@mantine/core";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import bg from "../assets/Pocket/placket-bottom1.png";
import concal from "../assets/concealed-collar.png";
import zIndex from "@mui/material/styles/zIndex";
import iconconcal from "../assets/concealed-icon.svg";
import spread from "../assets/spread.png";
import prince from "../assets/prince.png";
import madmen from "../assets/madmen.png";
import hipster from "../assets/hipster.png";
import hipsterrounded from "../assets/hipsterrounded.png";
import polo from "../assets/polo.png";
import logo1 from '../assets/planket/Front-French-logo.svg'
import logo2 from '../assets/planket/Front-Regular-logo.svg'
import logo3 from '../assets/planket/Front-Pencil-logo.svg'
import logo4 from '../assets/planket/Front-Concealed-logo.svg'

import club from "../assets/club.png";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import frenchplank from '../assets/planket/Front-French-logo.svg'
import regularplank from '../assets/planket/Front-Regular-logo.svg'
// import skinny from '../assets/planket/Front-Pencil-logo.svg'
import concel from '../assets/planket/Front-Concealed-logo.svg'
import Quill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles
import Circle from "@uiw/react-color-circle";
import base2pocket from "../assets/Pocket/placket-concealed2.png";
import singlepocket from "../assets/Pocket/Pocket-Single Flap-logo.svg";
import angledpocket from "../assets/Pocket/Pocket-Single-angled-logo.svg";
import nopocket from '../assets/Pocket/Pocket-none-logo.svg'
import iconmadmen from "../assets/madmen-icon.svg";
import iconbndhgala from "../assets/bandhgala-icon.svg";
import iconhipster from "../assets/hipster-icon.svg";
import iconhipsterround from "../assets/hipster-round-icon.svg";
import iconpolo from "../assets/polo-icon.svg";
import iconclub from "../assets/club-collr-icon.svg";
import button from "../assets/baseforcollarbutton.png";
import colarbutton from "../assets/colarbutton.png";
import ColourPicker from "../utils/ColourPicker";
import frenchplacket from '../assets/planket/placket-french.png'
import regular from '../assets/planket/placket-regular.png'
import skinny from '../assets/planket/placket-skinny.png'
import conceal from '../assets/planket/placket-concealed.png'
import pocket1 from "../assets/Pocket/placket-pocket-single-flap.png";
import pocket2 from "../assets/Pocket/placket-pocket-single-angled.png";
// import ColourPicker from "../utils/ColourPicker";
const TextEditor = ({ placeholder, onContentChange, textColor }) => {
  const [editorHtml, setEditorHtml] = useState("");

  const modules = {
    toolbar: [
      [{ header: [false] }],
      [],
      [{ color: textColor }], // Set the text color in the toolbar
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "link",
    "blockquote",
    "code-block",
    "color",
  ];
  useEffect(() => {
    const collarename = localStorage.getItem("collarname");
    if (collarename) {
      setEditorHtml(collarename);
      // onContentChange(collarename);
      console.log(collarename, "<----------");
    }
  }, []);

  const handleChange = (content, delta, source, editor) => {
    setEditorHtml(content);
    onContentChange(content);
  };

  return (
    <Quill
      modules={modules}
      formats={formats}
      placeholder={placeholder}
      value={editorHtml}
      onChange={handleChange}
      style={{ marginTop: "10px" }}
      theme="snow"
    />
  );
};

function Placket() {
  const [editorContent, setEditorContent] = useState("");
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [placket,setPlacket] = useState(frenchplacket)
  const [select, Setselect] = useState(pocket1);

  useEffect(() => {
    const collarcolour = localStorage.getItem("collarcolour");
   let pocket = localStorage.getItem("pocket");
//    const collarename = localStorage.getItem("collarname");
if(pocket === 'pocket2'){
    Setselect(pocket2)
}
if(pocket === 'pocket1'){
    Setselect(pocket1)
}


    if (collarcolour) {
      setSelectedColor(collarcolour);
    }
  }, []);
  const handleContentChange = (content) => {
    const remove = content.replace(/<[^>]*>/g, "");

    if (remove.length <= 3) {
      setEditorContent(content.replace(/<[^>]*>/g, ""));
      console.log(remove, "editor");
      localStorage.setItem("collarname", remove);
    } else {
      return false;
    }
  };

  const handleColorChange = (color) => {
    // Extract the hex color value from the color object
    const hexColor = color.hex || color;
    setSelectedColor(hexColor);
    console.log(selectedColor, "selectedColor");
    localStorage.setItem("collarcolour", hexColor);
    // Do anything else you want with the selected color
  };
  const [tabValue, setTabValue] = React.useState("1");


  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <Grid
        sx={{
          // marginBottom:10,
          // height: "500px",
          // "@media (min-width: 768px)": {
          //   height: "600px",
          padding: 6,
          // },
        }}
        container
      >
        <Grid item xs={6} sm={12} md={8} style={{ marginBottom: "20px" }}>
          <div>
            <img
              className="background-img"
              src={bg}
              alt="bg"
              style={{ zIndex: "1" }}
            />
            {
              <>
                {/* Display the content */}

                <img
                  className="selected-img"
                  src={placket}
                  alt="test"
                  style={{ zIndex: "9", position: "absolute", left: "3rem" }}
                />
              </>
            }
{!select ?<></>:
            <img
              className="colarbutton-img"
              src={select}
              alt="button"
              style={{ zIndex: "9", position: "absolute", left: "3rem" }}
            />}

            {/* <img
              className="button-img"
              src={button}
              alt="button"
              style={{ zIndex: "3", position: "absolute", left: "1rem" }}
            /> */}
          </div>
        </Grid>
        <Grid item xs={6} sm={12} md={4}>
          <Box
            sx={{
              width: "100%",
              top: "10px",
              typography: "body1",
              "& .MuiTabList-indicator": {
                backgroundColor: "#690500",
                height: "2px", // Set the height of the underline
              },
            }}
          >
            {" "}
          </Box>

          <div
            className="cardbody"
            style={{
              marginTop: "5%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <div
              className="card"
              style={{
                width: "30%",
                height: "7rem",
                cursor: "pointer",
                border: `solid 2px ${placket === frenchplacket ?  "#0B093B":"#dddddd"}`,

                margin: "1%",
                padding: "13px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => {
                setPlacket(frenchplacket);
                localStorage.setItem("placket", "frenchplacket");
              }}
            >
              <img src={logo1} alt="iconconcal" style={{}} />
              <p style={{ textAlign: "center" }}>french</p>
            </div>
            <div
              className="card"
              style={{
                width: "30%",
                height: "7rem",
                cursor: "pointer",
                border: `solid 2px ${placket === regular ? "#0B093B" : "#dddddd"}`,

                margin: "1%",
                padding: "13px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => {
                setPlacket(regular);
                localStorage.setItem("placket", "regular");
              }}
            >
              <img src={logo2} alt="iconspread" style={{}} />
              <p style={{ textAlign: "center" }}>Regular</p>
            </div>
            <div
              className="card"
              style={{
                width: "30%",
                height: "7rem",
                cursor: "pointer",
                border: `solid 2px ${placket === skinny ? "#0B093B" : "#dddddd"}`,

                margin: "1%",
                padding: "13px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => {
                setPlacket(skinny);
                localStorage.setItem("placket", "skinny");
              }}
            >
              <img src={logo3}  alt="iconsprince" style={{}} />
              <p style={{ textAlign: "center" }}>Skinny</p>
            </div>
            <div
              className="card"
              style={{
                width: "30%",
                height: "7rem",
                cursor: "pointer",
                border: `solid 2px ${placket === conceal ? "#0B093B" : "#dddddd"}`,

                margin: "1%",
                padding: "13px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => {
                setPlacket(conceal);
                localStorage.setItem("placket", "conceal");
              }}
            >
              <img src={logo4} alt="iconmadmen" style={{}} />
              <p style={{ textAlign: "center" }}>Conceal</p>
            </div>
            {/*  <div
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
                textAlign: "center",
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
            </div> */}
          </div>

          <button
            className="buto"
            style={{
              width: "98.5%",
              height: "3rem",
              cursor: "pointer",
              border: `solid 2px ${select === club ? "#0B093B" : "#dddddd"}`,
              margin: "1%",
              marginTop: "3%",
              borderRadius:'12px',
              padding: "13px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "white", // Text color
              fontSize: "20px",
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
              window.location.href = "/home";
            }}
            // onMouseLeave={(e) => {
            //   // On mouse leave, reset the background color
            //   e.target.style.background = "black";
            // }}
          >
            Apply{" "}
          </button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Placket;
