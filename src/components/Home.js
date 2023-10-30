import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bodyimg from "../assets/body.png";
import set1 from "../assets/bodyset1.png";
import set2 from "../assets/bodyset2.png";
import set3 from "../assets/bodyset3.png";
import set4 from "../assets/bodyset4.png";
import set5 from "../assets/bodyset5.png";
import set6 from "../assets/bodyset6.png";
import set7 from "../assets/bodyset7.png";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ColourPicker from "../utils/ColourPicker";
import singlebuttoncuffarm from "../assets/cuffstyle/bsc-cuff-single-button.png";
import doublebuttoncuff from "../assets/cuffstyle/bsc-cuff-double-button.png";
import neapolitian from "../assets/cuffstyle/bsc-cuff-neopolitan.png";
import french from "../assets/cuffstyle/bsc-sleeve-long-cuff-french.png";
import slevee from '../assets/cuffstyle/bsc-sleeve-half.png'
import spread from "../assets/collar/spread.png";
import prince from "../assets/collar/prince.png";
import polo from "../assets/collar/polo.png";
import madmen from "../assets/collar/madmen.png";
import conceal from "../assets/collar/concealed.png";
import hipster from "../assets/collar/hipster.png";
import hipsterround from "../assets/collar/hipster-rounded.png";
import club from "../assets/collar/club.png";

const Home = () => {
  let bang;
  const [selectedItem, setSelectedItem] = useState(set2);
  const [selectedItemcuf, setSelectedItemcuf] = useState(set4);

  useEffect(() => {
    const storedItem = localStorage.getItem("selectedCollar");
    // localStorage.setItem('selectedcuff', 'neapolitian');

    let newSelectedItem = set2; // Default value
    const storedItemcuf = localStorage.getItem("selectedcuff");

    let newSelectedItemcuff = set4;
    if (storedItem) {
      // Check if the stored item matches any of the image paths
      if (storedItem === "spread") {
        console.log("spread");

        newSelectedItem = spread;
      } else if (storedItem === "prince") {
        console.log("prince");
        newSelectedItem = prince;
      } else if (storedItem === "polo") {
        newSelectedItem = polo;
      } else if (storedItem === "madmen") {
        newSelectedItem = madmen;
      } else if (storedItem === "conceal") {
        newSelectedItem = conceal;
        console.log("conceal");
      } else if (storedItem === "hipster") {
        newSelectedItem = hipster;
        console.log("hip");
      } else if (storedItem === "hipsterround") {
        newSelectedItem = hipsterround;
        console.log("hipround");
      } else if (storedItem === "club") {
        newSelectedItem = club;
        console.log("club");
      } else if (storedItem === "bang") {
        newSelectedItem = bang;
        console.log("bang");
      }

      // Update the state with the selected item
      setSelectedItem(newSelectedItem);
      // console.log("selectedItem",selectedItem);
    }
    if (storedItemcuf) {
      console.log(storedItemcuf, "selecteditm");
      if (storedItemcuf === "singlebuttoncuffarm") {
        console.log("singlebuttoncuffarm");

        newSelectedItemcuff = singlebuttoncuffarm;
      } else if (storedItemcuf === "doublebuttoncuff") {
        console.log("doublebuttoncuff");
        newSelectedItemcuff = doublebuttoncuff;
      } else if (storedItemcuf === "neapolitian") {
        console.log("neapolitian");
        newSelectedItemcuff = neapolitian;
      } else if (storedItemcuf === "french") {
        console.log("french");
        newSelectedItemcuff = french;
      }
      else if (storedItemcuf === "slevee") {
        console.log("sleve");
        newSelectedItemcuff = slevee;
      }
      setSelectedItemcuf(newSelectedItemcuff);
      // console.log('selectedItemcuf',selectedItemcuf)
    }
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  const handleCollar = () => {
    window.location.href = "/collar";
  };

  return (
    <>
      {/* <ColourPicker /> */}
      {/* <Link to="/collar">Collar</Link>
      <br />
      <br />
      <br />
      <Link to="/hand">Hand</Link> */}
      <div style={{ alignContent: "center", justifyContent: "center" }}>
        <div
          style={{
            position: "absolute",
            objectFit: "contain",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src={set1}
            alt="bodyimg1"
            style={{ position: "absolute", zIndex: "1" }}
          />
          {/* <button>hi</button> */}
          {selectedItem !== bang && (
            <img
              src={selectedItem}
              alt="bodyimg2"
              style={{ position: "absolute", zIndex: "9" }}
            />
          )}

          <img
            src={set3}
            alt="bodyimg3"
            style={{ position: "absolute", zIndex: "15" }}
          />
          {selectedItemcuf !== slevee &&( <img
            src={selectedItemcuf}
            alt="bodyimg4"
            style={{ position: "absolute", zIndex: "3  " }}
          />)}
          <img
            src={set5}
            alt="bodyimg5"
            style={{ position: "absolute", zIndex: "3" }}
          />
         {selectedItemcuf !==slevee ? <img
            src={set6}
            alt="bodyimg6"
            style={{ position: "absolute", zIndex: "2" }}
          /> :<img
          src={slevee}
          alt="bodyimg6"
          style={{ position: "absolute", zIndex: "2" }}
        />}
          {/* <img src={set7} alt="bodyimg7"   style={{position:'absolute', zIndex:'1'}}/> */}
        </div>
      </div>
      {/* <Box sx={{ "& > :not(style)": { ml: 35, mt: 5 } }}>
        <Button
          onClick={() => (window.location.href = "/collar")}

          sx={{
            borderRadius: 10,
            border: "1px solid #011638",
            cursor: "pointer",
            height: 40,
          }}
          size="small"
          component="label"
          startIcon={
            <Fab
              sx={{ left: -3, backgroundColor: "#9055A2" }}
              aria-label="add"
              size="small"
            >
              <AddIcon />
            </Fab>
          }
        >
          <div style={{ color: "#011638" }}>COLLAR </div>
        </Button>
      </Box>{" "} */}
       <Box sx={{ "& > :not(style)": { ml: 39, mt: 5 } }}>
        <Button
          onClick={() => (window.location.href = "/collar")}
          sx={{
            borderRadius: 10,
            border: "1px solid #011638",
            cursor: "pointer",
            height: 40,
            zIndex: 15,
          }}
          size="small"
          component="label"
          startIcon={
            <Fab
              sx={{ left: -3.5, backgroundColor: "#9055A2" }}
              aria-label="add"
              size="small"
            >
              <AddIcon />
            </Fab>
          }
        >
          <div style={{ color: "#011638" }}>Collar </div>
        </Button>
      </Box>{" "}
      <Box sx={{ "& > :not(style)": { ml: 50, mt: 40 } }}>
        <Button
          onClick={() => (window.location.href = "/hand")}
          sx={{
            borderRadius: 10,
            border: "1px solid #011638",
            cursor: "pointer",
            height: 40,
            zIndex: 15,
          }}
          size="small"
          component="label"
          startIcon={
            <Fab
              sx={{ left: -5, backgroundColor: "#9055A2" }}
              aria-label="add"
              size="small"
            >
              <AddIcon />
            </Fab>
          }
        >
          <div style={{ color: "#011638" }}>Hand </div>
        </Button>
      </Box>{" "}

      {/* <div style={{ position: 'absolute', top: 0, right: 0, width: '200px', padding: '20px', background: '#f0f0f0' }}>
      <h3>Additional Content</h3>
      <p>This is some additional content on the right side.</p>
    </div> */}
    </>
  );
};

export default Home;
