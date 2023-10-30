import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Grid } from "@mui/material";
import bg from "../assets/handcuff/basebody.png";
import singlebuttoncuff from "../assets/handcuff/singlebuttoncuff.png";
import iconconcal from "../assets/handcuff/singlecufficon.svg";
import spread from "../assets/spread.png";
import prince from "../assets/prince.png";
import neapolitian from "../assets/handcuff/neopolitancuff.png";
import madmen from "../assets/madmen.png";
import hipster from "../assets/hipster.png";
import hipsterrounded from "../assets/hipsterrounded.png";
import polo from "../assets/polo.png";
import longsleeve from "../assets/handcuff/longsleeveicon.svg";
import shortsleeveicon from "../assets/handcuff/shortsleeveicon.svg";
import shortsleeve from '../assets/shorthandsleeve.png'
import club from "../assets/club.png";
import stiffcuff from '../assets/handcuff/stiffcuff.svg'
import softcuff from '../assets/handcuff/softcuff.svg'

import french from "../assets/handcuff/frenchlongcuff.png";
import singlebuttoncuffarm from "../assets/handcuff/singlebuttoncuffarm.png";
import doublebuttoncuff from "../assets/handcuff/doublebuttoncuff.png";
import iconspread from "../assets/handcuff/doublebuttonicon.svg";
import iconsprince from "../assets/handcuff/neopolitianicon.svg";
import iconmadmen from "../assets/handcuff/frenchcufficon.svg";
import iconbndhgala from "../assets/bandhgala-icon.svg";
import iconhipster from "../assets/hipster-icon.svg";
import iconhipsterround from "../assets/hipster-round-icon.svg";
import iconpolo from "../assets/polo-icon.svg";
import iconclub from "../assets/club-collr-icon.svg";
import button from "../assets/baseforcollarbutton.png";
import colarbutton from "../assets/colarbutton.png";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  //   color: theme.palette.text.secondary,
}));
function Handsizepge() {
  const [select, Setselect] = React.useState(singlebuttoncuffarm);
  const [tabValue, setTabValue] = React.useState("1");
const [shortsleve,Setshortsleve] = React.useState(false)
const[softcuf, Setsoftcuf] = React.useState(false)
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <Grid
        container
        sx={
          {
            padding:1
          }
        }
        // spacing={2}
       
      >
        <Grid
          item
          xs={6}
          sm={12}
          md={8}
          // sx={{
          //   margin: "2rem",
          // }}
        >
          {shortsleve ? <div style={{ paddingTop: "1rem" }}>
          <img
              className="background-img"
              src={shortsleeve}
              alt="bg"
              style={{ zIndex: "1" }}
            />
          </div>:<div style={{ paddingTop: "1rem" }}>
            <img
              className="background-img"
              src={bg}
              alt="bg"
              style={{ zIndex: "1" }}
            />
            {select == french ? (
              <></>
            ) : (
              <img
                className="selected-img"
                src={singlebuttoncuff}
                alt="test"
                style={{ zIndex: "2", position: "absolute", left: "1rem" }}
              />
            )}

            <img
              className="colarbutton-img"
              src={select}
              alt="button"
              style={{ zIndex: "14", position: "absolute", left: "1rem" }}
            />

            {/* <img
              className="button-img"
              src={button}
              alt="button"
              style={{ zIndex: "3", position: "absolute", left: "1rem" }}
            /> */}
          </div>}
        </Grid>
        <Grid item  xs={6} sm={12} md={4} sx={{ marginLeft: "0", marginTop: "1%" }}>
          {/* This item will take up 4 out of 12 grid columns */}
          <TabContext value={tabValue}>
            <Box
              sx={{
                width: "100%",
                typography: "body1",
                "& .MuiTabList-indicator": {
                  backgroundColor: "black",
                  height: "2px", // Set the height of the underline
                },
              }}
            >
              {" "}
              <TabList
                onChange={handleTabChange}
                aria-label="lab API tabs example"
                style={{ border: "solid 0.2px #011638",borderRadius:'20px' }}
                indicatorColor="" // Change this line to set the underline color
                sx={{ "& .Mui-selected": { borderBottom: "solid 2px white" } }}


              >
                <Tab label="Cuff style" value="1" style={{color:'#011638'}} onClick={()=>{Setshortsleve(false)}} />
                <Tab label="Sleeves" value="2"  style={{color:'#011638'}} onClick={()=>{Setshortsleve(false)}} />
                <Tab label="Cuff stiffness" value="3"  style={{color:'#011638'}} onClick={()=>{Setshortsleve(false)}}/>
              </TabList>
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
              ></div>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={4}>
                  <div
                    className="card"
                    style={{
                      // width: "2rem",
                      height: "7rem",
                      border: `solid 2px ${
                        select === singlebuttoncuffarm ? "black" : "#dddddd"
                      }`,

                      margin: "1%",
                      padding: "13px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    onClick={() => {Setselect(singlebuttoncuffarm)
                      localStorage.setItem('selectedcuff', 'singlebuttoncuffarm');

                    }}
                  >
                    <img src={iconconcal} alt="iconconcal" style={{}} />
                    <p style={{ textAlign: "center" , paddingBottom:'5px',display:'contents',wordBreak:"break-word" }}>singlebuttoncuff</p>
                  </div>
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <div
                    className="card"
                    style={{
                      // width: "2rem",
                      height: "7rem",
                      border: `solid 2px ${
                        select === doublebuttoncuff ? "black" : "#dddddd"
                      }`,

                      margin: "2%",
                      padding: "13px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    onClick={() => {Setselect(doublebuttoncuff)
                      localStorage.setItem('selectedcuff', 'doublebuttoncuff');

                    }}
                  >
                    <img src={iconspread} alt="iconspread" style={{}} />
                    <p style={{ textAlign: "center" , paddingBottom:'5px',display:'contents',wordBreak:"break-word" }}>doublebuttoncuff</p>
                  </div>{" "}
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <div
                    className="card"
                    style={{
                      // width: "2rem",
                      height: "7rem",
                      border: `solid 2px ${
                        select === neapolitian ? "black" : "#dddddd"
                      }`,

                      margin: "2%",
                      padding: "13px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    onClick={() => {Setselect(neapolitian)
                      localStorage.setItem('selectedcuff', 'neapolitian');
                    }}
                  >
                    <img src={iconsprince} alt="iconsprince" style={{}} />
                    <p style={{ textAlign: "center" , paddingBottom:'5px',display:'contents',wordBreak:"break-word" }}>neapolitian</p>
                  </div>{" "}
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <div
                    className="card"
                    style={{
                      // width: "2rem",
                      height: "7rem",
                      border: `solid 2px ${
                        select === french ? "black" : "#dddddd"
                      }`,

                      margin: "2%",
                      padding: "13px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    onClick={() => {Setselect(french)
                      localStorage.setItem('selectedcuff', 'french');

                    }}
                  >
                    <img src={iconmadmen} alt="iconmadmen" style={{}} />
                    <p style={{ textAlign: "center" , paddingBottom:'5px',display:'contents',wordBreak:"break-word" }}>french</p>
                  </div>{" "}
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  {/* <div
                    className="card"
                    style={{
                      // width: "2rem",
                      height: "7rem",
                      border: `solid 2px ${
                        select === "" ? "black" : "#dddddd"
                      }`,

                      margin: "2%",
                      padding: "13px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    onClick={() => Setselect("")}
                  >
                    <img src={iconbndhgala} alt="iconbndhgala" style={{}} />
                    <p style={{ textAlign: "center" }}>Bandhgala</p>
                  </div>{" "} */}
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  {/* <div
                    className="card"
                    style={{
                      // width: "2rem",
                      height: "7rem",
                      border: `solid 2px ${
                        select === hipster ? "black" : "#dddddd"
                      }`,

                      margin: "2%",
                      padding: "13px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    onClick={() => Setselect(hipster)}
                  >
                    <img src={iconhipster} alt="iconhipster" style={{}} />
                    <p style={{ textAlign: "center" }}>Hipster</p>
                  </div>{" "} */}
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  {/* <div
                    className="card"
                    style={{
                      // width: "2rem",
                      height: "7rem",
                      border: `solid 2px ${
                        select === hipsterrounded ? "black" : "#dddddd"
                      }`,

                      margin: "2%",
                      padding: "13px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    onClick={() => Setselect(hipsterrounded)}
                  >
                    <img
                      src={iconhipsterround}
                      alt="iconhipsterround"
                      style={{}}
                    />
                    <p style={{ textAlign: "center" }}>Hipster Round</p>
                  </div>{" "} */}
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  {/* <div
                    className="card"
                    style={{
                      // width: "2rem",
                      height: "7rem",
                      border: `solid 2px ${
                        select === polo ? "black" : "#dddddd"
                      }`,

                      margin: "2%",
                      padding: "13px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    onClick={() => Setselect(polo)}
                  >
                    <img src={iconpolo} alt="iconpolo" style={{}} />
                    <p style={{ textAlign: "center" }}>Polo</p>
                  </div>{" "} */}
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  {/* <div
                    className="card"
                    style={{
                      // width: "2rem",
                      height: "7rem",
                      border: `solid 2px ${
                        select === club ? "black" : "#dddddd"
                      }`,

                      margin: "2%",
                      padding: "13px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    onClick={() => Setselect(club)}
                  >
                    <img src={iconclub} alt="iconclub" style={{}} />
                    <p style={{ textAlign: "center" }}>Club Collar</p>
                  </div>{" "} */}
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel
              value="2"
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
              ></div>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={4}>
                  <div
                    className="card"
                    style={{
                      // width: "2rem",
                      height: "7rem",
                      border: `solid 2px ${
                        !shortsleve  ? "black" : "#dddddd"
                      }`,

                      margin: "1%",
                      padding: "13px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    onClick={() => Setshortsleve(false)}
                  >
                    <img src={longsleeve} alt="iconconcal" style={{}} />
                    <p style={{ textAlign: "center" , paddingBottom:'5px',display:'contents',wordBreak:"break-word" }}>longsleeve</p>
                  </div>
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <div
                    className="card"
                    style={{
                      // width: "2rem",
                      height: "7rem",
                      border: `solid 2px ${
                        shortsleve ? "black" : "#dddddd"
                      }`,

                      margin: "2%",
                      padding: "13px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    onClick={() => {Setshortsleve(true)
                      localStorage.setItem('selectedcuff', 'slevee');

                    }}
                  >
                    <img src={shortsleeveicon} alt="iconspread" style={{}} />
                    <p style={{ textAlign: "center"  , paddingBottom:'5px',display:'contents',wordBreak:"break-word"}}>shortsleeve</p>
                  </div>{" "}
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  {/* <div
                    className="card"
                    style={{
                      // width: "2rem",
                      height: "7rem",
                      border: `solid 2px ${
                        select === neapolitian ? "black" : "#dddddd"
                      }`,

                      margin: "2%",
                      padding: "13px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    onClick={() => Setselect(neapolitian)}
                  >
                    <img src={iconsprince} alt="iconsprince" style={{}} />
                    <p style={{ textAlign: "center" }}>neapolitian</p>
                  </div>{" "} */}
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  {/* <div
                    className="card"
                    style={{
                      // width: "2rem",
                      height: "7rem",
                      border: `solid 2px ${
                        select === french ? "black" : "#dddddd"
                      }`,

                      margin: "2%",
                      padding: "13px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    onClick={() => Setselect(french)}
                  >
                    <img src={iconmadmen} alt="iconmadmen" style={{}} />
                    <p style={{ textAlign: "center" }}>french</p>
                  </div>{" "} */}
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  {/* <div
                    className="card"
                    style={{
                      // width: "2rem",
                      height: "7rem",
                      border: `solid 2px ${
                        select === "" ? "black" : "#dddddd"
                      }`,

                      margin: "2%",
                      padding: "13px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    onClick={() => Setselect("")}
                  >
                    <img src={iconbndhgala} alt="iconbndhgala" style={{}} />
                    <p style={{ textAlign: "center" }}>Bandhgala</p>
                  </div>{" "} */}
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  {/* <div
                    className="card"
                    style={{
                      // width: "2rem",
                      height: "7rem",
                      border: `solid 2px ${
                        select === hipster ? "black" : "#dddddd"
                      }`,

                      margin: "2%",
                      padding: "13px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    onClick={() => Setselect(hipster)}
                  >
                    <img src={iconhipster} alt="iconhipster" style={{}} />
                    <p style={{ textAlign: "center" }}>Hipster</p>
                  </div>{" "} */}
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  {/* <div
                    className="card"
                    style={{
                      // width: "2rem",
                      height: "7rem",
                      border: `solid 2px ${
                        select === hipsterrounded ? "black" : "#dddddd"
                      }`,

                      margin: "2%",
                      padding: "13px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    onClick={() => Setselect(hipsterrounded)}
                  >
                    <img
                      src={iconhipsterround}
                      alt="iconhipsterround"
                      style={{}}
                    />
                    <p style={{ textAlign: "center" }}>Hipster Round</p>
                  </div>{" "} */}
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  {/* <div
                    className="card"
                    style={{
                      // width: "2rem",
                      height: "7rem",
                      border: `solid 2px ${
                        select === polo ? "black" : "#dddddd"
                      }`,

                      margin: "2%",
                      padding: "13px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    onClick={() => Setselect(polo)}
                  >
                    <img src={iconpolo} alt="iconpolo" style={{}} />
                    <p style={{ textAlign: "center" }}>Polo</p>
                  </div>{" "} */}
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  {/* <div
                    className="card"
                    style={{
                      // width: "2rem",
                      height: "7rem",
                      border: `solid 2px ${
                        select === club ? "black" : "#dddddd"
                      }`,

                      margin: "2%",
                      padding: "13px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    onClick={() => Setselect(club)}
                  >
                    <img src={iconclub} alt="iconclub" style={{}} />
                    <p style={{ textAlign: "center" }}>Club Collar</p>
                  </div>{" "} */}
                </Grid>
              </Grid> 
            </TabPanel>
            <TabPanel
              value="3"
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
              ></div>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={4}>
                  <div
                    className="card"
                    style={{
                      // width: "2rem",
                      height: "7rem",
                      border: `solid 2px ${
                        !softcuf  ? "black" : "#dddddd"
                      }`,

                      margin: "1%",
                      padding: "13px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    onClick={() => Setsoftcuf(false)}
                  >
                    <img src={stiffcuff} alt="iconconcal" style={{}} />
                    <p style={{ textAlign: "center"  , paddingBottom:'5px',display:'contents',wordBreak:"break-word"}}> Stiff Cuff</p>
                  </div>
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <div
                    className="card"
                    style={{
                      // width: "2rem",
                      height: "7rem",
                      border: `solid 2px ${
                        softcuf ? "black" : "#dddddd"
                      }`,

                      margin: "2%",
                      padding: "13px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    onClick={() => Setsoftcuf(true)}
                  >
                    <img src={softcuff} alt="iconspread" style={{}} />
                    <p style={{ textAlign: "center" , paddingBottom:'5px',display:'contents',wordBreak:"break-word" }}>Soft Cuff</p>
                  </div>{" "}
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  {/* <div
                    className="card"
                    style={{
                      // width: "2rem",
                      height: "7rem",
                      border: `solid 2px ${
                        select === neapolitian ? "black" : "#dddddd"
                      }`,

                      margin: "2%",
                      padding: "13px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    onClick={() => Setselect(neapolitian)}
                  >
                    <img src={iconsprince} alt="iconsprince" style={{}} />
                    <p style={{ textAlign: "center" }}>neapolitian</p>
                  </div>{" "} */}
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  {/* <div
                    className="card"
                    style={{
                      // width: "2rem",
                      height: "7rem",
                      border: `solid 2px ${
                        select === french ? "black" : "#dddddd"
                      }`,

                      margin: "2%",
                      padding: "13px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    onClick={() => Setselect(french)}
                  >
                    <img src={iconmadmen} alt="iconmadmen" style={{}} />
                    <p style={{ textAlign: "center" }}>french</p>
                  </div>{" "} */}
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  {/* <div
                    className="card"
                    style={{
                      // width: "2rem",
                      height: "7rem",
                      border: `solid 2px ${
                        select === "" ? "black" : "#dddddd"
                      }`,

                      margin: "2%",
                      padding: "13px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    onClick={() => Setselect("")}
                  >
                    <img src={iconbndhgala} alt="iconbndhgala" style={{}} />
                    <p style={{ textAlign: "center" }}>Bandhgala</p>
                  </div>{" "} */}
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  {/* <div
                    className="card"
                    style={{
                      // width: "2rem",
                      height: "7rem",
                      border: `solid 2px ${
                        select === hipster ? "black" : "#dddddd"
                      }`,

                      margin: "2%",
                      padding: "13px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    onClick={() => Setselect(hipster)}
                  >
                    <img src={iconhipster} alt="iconhipster" style={{}} />
                    <p style={{ textAlign: "center" }}>Hipster</p>
                  </div>{" "} */}
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  {/* <div
                    className="card"
                    style={{
                      // width: "2rem",
                      height: "7rem",
                      border: `solid 2px ${
                        select === hipsterrounded ? "black" : "#dddddd"
                      }`,

                      margin: "2%",
                      padding: "13px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    onClick={() => Setselect(hipsterrounded)}
                  >
                    <img
                      src={iconhipsterround}
                      alt="iconhipsterround"
                      style={{}}
                    />
                    <p style={{ textAlign: "center" }}>Hipster Round</p>
                  </div>{" "} */}
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  {/* <div
                    className="card"
                    style={{
                      // width: "2rem",
                      height: "7rem",
                      border: `solid 2px ${
                        select === polo ? "black" : "#dddddd"
                      }`,

                      margin: "2%",
                      padding: "13px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    onClick={() => Setselect(polo)}
                  >
                    <img src={iconpolo} alt="iconpolo" style={{}} />
                    <p style={{ textAlign: "center" }}>Polo</p>
                  </div>{" "} */}
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  {/* <div
                    className="card"
                    style={{
                      // width: "2rem",
                      height: "7rem",
                      border: `solid 2px ${
                        select === club ? "black" : "#dddddd"
                      }`,

                      margin: "2%",
                      padding: "13px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    onClick={() => Setselect(club)}
                  >
                    <img src={iconclub} alt="iconclub" style={{}} />
                    <p style={{ textAlign: "center" }}>Club Collar</p>
                  </div>{" "} */}
                </Grid>
              </Grid>             </TabPanel>
          </TabContext>
          <button
  style={{
    width: '98.5%',
    height: '3rem',
    cursor: 'pointer',
    border: `solid 2px ${select === club ? 'black' : '#dddddd'}`,
    margin: '1%',
    padding: '13px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',  // Text color
    background: 'black',  // Initial background color
    transition: 'background 0.5s',  // Smooth transition for background color
    position: 'relative',
    overflow: 'hidden',  // Hide overflow to prevent background gradient overflow
  }}
  onMouseEnter={(e) => {
    // On hover, set the background color to slide from left to right
    e.target.style.background = 'linear-gradient(to right, black, #dddddd)';
  }}
  onClick={(e)=>{
    window.location.href = "/";

  }}
  onMouseLeave={(e) => {
    // On mouse leave, reset the background color
    e.target.style.background = 'black';
  }}
>
  Button
</button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Handsizepge;
