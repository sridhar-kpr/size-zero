import { Box } from "@mantine/core";
import React, { useEffect, useState } from "react";
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
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import Quill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles
import Circle from "@uiw/react-color-circle";

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
import ColourPicker from "../utils/ColourPicker";
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
  if(collarename){

    setEditorHtml(collarename);
  // onContentChange(collarename);
  console.log(collarename,'<----------');
  }
  
  },[]);  
 
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

function HomeSizePage() {
  const [editorContent, setEditorContent] = useState("");
  const [selectedColor, setSelectedColor] = useState("#000000");

  useEffect(() => {
    const collarcolour = localStorage.getItem("collarcolour");

    if(collarcolour){
      setSelectedColor(collarcolour);
  
    }  }, []);
  const handleContentChange = (content) => {
    
        
    const remove = content.replace(/<[^>]*>/g, "");

    if (remove.length <= 3) {
      setEditorContent(content.replace(/<[^>]*>/g, ""));
      console.log(remove, "editor");
      localStorage.setItem('collarname',remove
      )

    } else {
      return false;
    }
  };

  const handleColorChange = (color) => {
    // Extract the hex color value from the color object
    const hexColor = color.hex || color;
    setSelectedColor(hexColor);
    console.log(selectedColor, "selectedColor");
    localStorage.setItem('collarcolour',hexColor
    )
    // Do anything else you want with the selected color
  };
  const [tabValue, setTabValue] = React.useState("1");

  const [select, Setselect] = useState(concal);

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
          <div style={{marginTop:'-90px'}}>
            <img
              className="background-img"
              src={bg}
              alt="bg"
              style={{ zIndex: "1" }}
            />
            {select ?
             
              <>
                {/* Display the content */}
                <div
                  style={{
                    position: "absolute",
                    zIndex: "15",
                    left: "15.6rem",
                    zIndex: " 15",
                    top: "14.8rem",
                    opacity: "0.7",
                    fontSize: "30px",
                    transform: "rotate(3deg)",
                    color: selectedColor, // Corrected the rotate value to a string
                  }}
                >
                  <p
                    style={{ color: { selectedColor } }}
                    dangerouslySetInnerHTML={{ __html: editorContent }}
                  />
                </div>
                <img
                  className="selected-img"
                  src={select}
                  alt="test"
                  style={{ zIndex: "9", position: "absolute", left: "3rem" }}
                />
                </>
                : <div
                style={{
                  position: "absolute",
                  zIndex: "15",
                  left: "15.6rem",
                  zIndex: " 15",
                  top: "14.8rem",
                  opacity: "0.7",
                  fontSize: "30px",
                  transform: "rotate(3deg)",
                  color: selectedColor, // Corrected the rotate value to a string
                }}
              >
                <p
                  style={{ color: { selectedColor } }}
                  dangerouslySetInnerHTML={{ __html: editorContent }}
                />
              </div>
            }
 {/* <div
                  style={{
                    position: "absolute",
                    zIndex: "15",
                    left: "15.6rem",
                    zIndex: " 15",
                    top: "14.8rem",
                    opacity: "0.7",
                    fontSize: "30px",
                    transform: "rotate(3deg)",
                    color: selectedColor, // Corrected the rotate value to a string
                  }}
                >
                  <p
                    style={{ color: { selectedColor } }}
                    dangerouslySetInnerHTML={{ __html: editorContent }}
                  />
                </div> */}
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
          <TabContext value={tabValue}>
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
              <Tabs
                value={tabValue}
                indicatorColor="secondary"
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab
                  label="Cuff style"
                  value="1"
                  style={{ color: "#690500" }}
                />
                {/* <Tab label="Monogram" value="2" style={{ color: "#690500" }} /> */}
                {/* <Tab
                  label="Cuff stiffness"
                  value="3"
                  style={{ color: "#690500" }}
                 
                /> */}
              </Tabs>
            </Box>
            <TabPanel
              value="1"
              sx={{
                padding: 0, // Set padding to 0px
              }}
            >
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
                    border: `solid 2px ${
                      select === concal ? "#0B093B" : "#dddddd"
                    }`,

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
                    width: "30%",
                    height: "7rem",
                    cursor: "pointer",
                    border: `solid 2px ${
                      select === spread ? "#0B093B" : "#dddddd"
                    }`,

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
                    width: "30%",
                    height: "7rem",
                    cursor: "pointer",
                    border: `solid 2px ${
                      select === prince ? "#0B093B" : "#dddddd"
                    }`,

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
                    width: "30%",
                    height: "7rem",
                    cursor: "pointer",
                    border: `solid 2px ${
                      select === madmen ? "#0B093B" : "#dddddd"
                    }`,

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
                    width: "30%",
                    height: "7rem",
                    cursor: "pointer",
                    border: `solid 2px ${select === "" ? "#0B093B" : "#dddddd"}`,

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
                    width: "30%",
                    height: "7rem",
                    cursor: "pointer",
                    border: `solid 2px ${
                      select === hipster ? "#0B093B" : "#dddddd"
                    }`,

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
                    width: "30%",
                    height: "7rem",
                    cursor: "pointer",
                    border: `solid 2px ${
                      select === hipsterrounded ? "#0B093B" : "#dddddd"
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
                  <img
                    src={iconhipsterround}
                    alt="iconhipsterround"
                    style={{}}
                  />
                  <p style={{ textAlign: "center" }}>Hipster-R</p>
                </div>
                <div
                  className="card"
                  style={{
                    width: "30%",
                    height: "7rem",
                    cursor: "pointer",
                    border: `solid 2px ${
                      select === polo ? "#0B093B" : "#dddddd"
                    }`,

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
                    width: "30%",
                    height: "7rem",
                    cursor: "pointer",
                    border: `solid 2px ${
                      select === club ? "#0B093B" : "#dddddd"
                    }`,

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
            </TabPanel>
            <TabPanel
              value="2"
              sx={{
                padding: 0,
                marginTop: "10px", // Set padding to 0px
              }}
            >
              <Circle
                colors={[
                  "#F44E3B",
                  "#FE9200",
                  "#FCDC00",
                  "#DBDF00",
                  "#00AEEF",
                  "#8A2BE2",
                  "#32CD32",
                  "#FFD700",
                  "#FF69B4",
                  "#FF6347",
                  "#40E0D0",
                  "#800080",
                  "#008080",
                  "#FF8C00",
                  "#B0E0E6",
                ]}
                color={selectedColor}
                onChange={handleColorChange}
              />

              {/* Display the selected color */}
              {/* <div style={{ marginTop: "20px" }}>
                Selected Color: {selectedColor}
              </div> */}

              {/* Text Editor */}
              <TextEditor
                placeholder="Type something..."
                onContentChange={handleContentChange}
                // textColor={selectedColor}
                maxCharacters={2}

              />
            </TabPanel>
          </TabContext>

          <button
            className="buto"
            style={{
              width: "98.5%",
              height: "3rem",
              cursor: "pointer",
              border: `solid 2px ${select === club ? "black" : "#dddddd"}`,
              margin: "1%",
              marginTop:'3%',
              padding: "13px",
              display: "flex",
              flexDirection: "column",
              borderRadius:"12px",
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

export default HomeSizePage;
