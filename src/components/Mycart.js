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
import frenchplacket from "../assets/main-placket/placket-french.png";
import conceals from "../assets/main-placket/placket-concealed.png";
import skinny from "../assets/main-placket/placket-skinny.png";
import regular from "../assets/main-placket/placket-regular.png";
import Box from "@mui/material/Box";
import back from '../assets/icons8-back-50.png'
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ColourPicker from "../utils/ColourPicker";
import singlebuttoncuffarm from "../assets/cuffstyle/bsc-cuff-single-button.png";
import doublebuttoncuff from "../assets/cuffstyle/bsc-cuff-double-button.png";
import neapolitian from "../assets/cuffstyle/bsc-cuff-neopolitan.png";
import french from "../assets/cuffstyle/bsc-sleeve-long-cuff-french.png";
import slevee from "../assets/cuffstyle/bsc-sleeve-half.png";
import spread from "../assets/collar/spread.png";
import prince from "../assets/collar/prince.png";
import polo from "../assets/collar/polo.png";
import madmen from "../assets/collar/madmen.png";
import conceal from "../assets/collar/concealed.png";
import hipster from "../assets/collar/hipster.png";
import hipsterround from "../assets/collar/hipster-rounded.png";
import club from "../assets/collar/club.png";
import pocket1 from "../assets/main-pocket/pocket-single-flap.png";
import pocket2 from "../assets/main-pocket/pocket-single-angled.png";
import front from "../assets/bodyset1.png";
import hand1 from "../assets/poc/left sleeve.png";
const Mycart = () => {
    const [amount, setAmount] = useState(50);
    const [data, setData] = useState(1);
    
    const doubleAmount = () => {
        setAmount(prevAmount => prevAmount + 50);
        setData(prevData => prevData + 1);
    };
    
    const halveAmount = () => {
        if (amount > 50) {
            setAmount(prevAmount => prevAmount - 50);
            setData(prevData => prevData - 1 < 1 ? 1 : prevData - 1); // Ensure data doesn't go below 1
        } else {
            // alert("Amount can't go below $50");
        }
    };
    
    const storedItemcuf = localStorage.getItem("selectedcuff");
    const [select, Setselect] = useState();
  
    const collarename = localStorage.getItem("collarname");
    const collarcolour = localStorage.getItem("collarcolour");
    // const placketdata = localStorage.getItem("placket");
  
    const [placket, setPlacket] = useState(french);
  
    console.log("storedItemcuf----->", storedItemcuf);
  
    let bang;
    const [selectedItem, setSelectedItem] = useState(set2);
    const [selectedItemcuf, setSelectedItemcuf] = useState(set4);
  
    useEffect(() => {
      const storedItem = localStorage.getItem("selectedCollar");
  
      let pocket = localStorage.getItem("pocket");
  
      // localStorage.setItem('selectedcuff', 'neapolitian');
      if (pocket === "pocket2") {
        Setselect(pocket2);
      }
      if (pocket === "pocket1") {
        Setselect(pocket1);
      }
  
      let plackets = localStorage.getItem("placket");
      if (plackets == "frenchplacket") {
        setPlacket(frenchplacket);
      }
      if (plackets == "conceal") {
        setPlacket(conceals);
      }
      if (plackets == "skinny") {
        setPlacket(skinny);
      }
      if (plackets == "regular") {
        setPlacket(regular);
      }
  
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
        } else if (storedItemcuf === "slevee") {
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
    <div>
      <img src={back} style={{cursor:'pointer',width:'30px',marginTop:'5px',position:'absolute'}}
          onClick={() => (window.location.href = "/home")}
          ></img>
      <div className="right">
      <>
      <div
        style={{
            width:'30rem',
          display: "flex",
          flexDirection: "column",
          // flexWrap: "nowrap",
          top:"10px",
          alignitems: "center",
          position: "absolute",
          left:'45rem',
          backgroundColor:'#e5e5e5',
          top:'10rem',
          padding:'30px',
          marginRight:'25px',
          borderRadius:'30px'
          
        }}
      >
        <h1>
          Your Cart
        </h1>
        <h1>
        ${amount} 
          <div style={{display:'flex', flexDirection:'row',gap:'10px',alignItems:'baseline'}}>
          <button  className="buto" onClick={doubleAmount}  style={{
            borderRadius:'12px',
            width: "10.5%",
            height: "3rem",
            cursor: "pointer",
            border: `solid 2px ${select === club ? "black" : "#dddddd"}`,
            // margin: "1%",
            marginTop: "3%",
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
          }} >
            +
          </button>
          {data}
          <button  className="buto"  onClick={halveAmount}  style={{
            borderRadius:'12px',
            width: "10.5%",
            height: "3rem",
            cursor: "pointer",
            border: `solid 2px ${select === club ? "black" : "#dddddd"}`,
            // margin: "1%",
            marginTop: "3%",
            padding: "11px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white", // Text color
            fontSize: "20px",
            
            // background: "black", // Initial background color
            transition: "background 0.5s", // Smooth transition for background color
            position: "relative",
            overflow: "hidden", // Hide overflow to prevent background gradient overflow
          }} >
            -
          </button>
          </div>
        </h1>
        {/* <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p> */}
        <button
          className="buto"
          style={{
            borderRadius:'20px',
            width: "98.5%",
            height: "3rem",
            cursor: "pointer",
            border: `solid 2px ${select === club ? "black" : "#dddddd"}`,
            // margin: "1%",
            marginTop: "3%",
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
         
          // onClick={(e) => {
          //   window.location.href = "/cart";
          // }}
          // onMouseLeave={(e) => {
          //   // On mouse leave, reset the background color
          //   e.target.style.background = "black";
          // }}
        >
          Proceed to Payment{" "}
        </button>
      </div>

      <div style={{backgroundColor:'#e5e5e5', height:'100%',position:'absolute ',width:'47%', borderRadius:'35px',margin:'30px'}}>
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
            src={front}
            alt="bodyimg1"
            width={500}
            style={{ position: "absolute", zIndex: "0", top: "0rem" }}
          />
          {selectedItem !== bang ? (
            <>
              <div
                style={{
                  position: "absolute",
                  zIndex: "15",
                  left: "15rem",
                  zIndex: " 15",
                  top: "2.2rem",
                  opacity: "0.7",
                  fontSize: "14px",
                  // fontFamily:'cursive',
                  // transform: "rotate(3deg)",
                  color: collarcolour, // Corrected the rotate value to a string
                }}
              >
                {/* <p
                 dangerouslySetInnerHTML={{ __html: collarename }}
               /> */}
              </div>
              <img
                src={selectedItem}
                alt="bodyimg2"
                style={{ position: "absolute", zIndex: "9" }}
              />{" "}
            </>
          ) : (
            <div
              style={{
                position: "absolute",
                zIndex: "15",
                left: "15rem",
                zIndex: " 15",
                top: "2.2rem",
                opacity: "0.7",
                fontSize: "14px",
                // transform: "rotate(3deg)",
                color: collarcolour, // Corrected the rotate value to a string
              }}
            >
              <p dangerouslySetInnerHTML={{ __html: collarename }} />
            </div>
          )}
          {
            <img
              src={set3}
              alt="bodyimg3"
              style={{ position: "absolute", zIndex: "15" }}
            />
          }
          {selectedItemcuf !== slevee && (
            <img
              src={selectedItemcuf}
              alt="bodyimg4"
              style={{ position: "absolute", zIndex: "3  " }}
            />
          )}
          {
            <img
              src={placket}
              alt="bodyimg5"
              style={{ position: "absolute", zIndex: "3" }}
            />
          }
          {selectedItemcuf !== slevee ? (
            <img
              src={set6}
              // width={900}
              alt="bodyimg6"
              style={{ zIndex: "2", position: "absolute" }}
            />
          ) : (
            <img
              src={slevee}
              alt="bodyimg6"
              style={{ position: "absolute", zIndex: "2" }}
            />
          )}
          {!select == "none" ? (
            <></>
          ) : (
            <>
              <img
                src={select}
                alt=""
                style={{ position: "absolute", zIndex: "1" }}
              />
            </>
          )}{" "}
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
        {/* <Button
        //   onClick={() => (window.location.href = "/collar")}
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
              className="buto"
              sx={{ left: -5, backgroundColor: "#9055A2" }}
              aria-label="add"
              size="small"
            >
              <AddIcon sx={{ color: "black" }} />
            </Fab>
          }
        >
          <div style={{ color: "#011638" }}>Collar </div>
        </Button> */}
      </Box>{" "}
      {/* pocket */}
      <Box sx={{ "& > :not(style)": { ml: 41, mt: 10 } }}>
        {/* <Button
          onClick={() => (window.location.href = "/pocket")}
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
              className="buto"
              sx={{ left: -5, backgroundColor: "#9055A2" }}
              aria-label="add"
              size="small"
            >
              <AddIcon sx={{ color: "black" }} />
            </Fab>
          }
        >
          <div style={{ color: "#011638" }}>Pocket </div>
        </Button> */}
      </Box>{" "}
      {/* placket */}
      <Box sx={{ "& > :not(style)": { ml: 33, mt: 10 } }}>
        {/* <Button
          onClick={() => (window.location.href = "/placket")}
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
              className="buto"
              sx={{ left: -5, backgroundColor: "#9055A2" }}
              aria-label="add"
              size="small"
            >
              <AddIcon sx={{ color: "black" }} />
            </Fab>
          }
        >
          <div style={{ color: "#011638" }}>P lacket </div>
        </Button> */}
      </Box>{" "}
      {storedItemcuf !== "slevee" ? (
        <Box sx={{ "& > :not(style)": { ml: 48, mt: 10 } }}>
          {/* <Button
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
                className="buto"
                sx={{ left: -5, backgroundColor: "#9055A2" }}
                aria-label="add"
                size="small"
              >
              <AddIcon sx={{ color: "black" }} />
              </Fab>
            }
          >
            <div style={{ color: "#011638" }}>Hand </div>
          </Button> */}
        </Box>
      ) : (
        <Box sx={{ "& > :not(style)": { ml: 55, mt: -12 } }}>
          {/* <Button
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
                className="buto"
                sx={{ left: -5, backgroundColor: "#9055A2" }}
                aria-label="add"
                size="small"
              >
              <AddIcon sx={{ color: "black" }} />
              </Fab>
            }
          >
            <div style={{ color: "#011638" }}>Hand </div>
          </Button> */}
        </Box>
      )}
      </div>
    </>
      </div>
      <div className="left">

      </div>
    </div>
  );
};

export default Mycart;
