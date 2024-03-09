import { Box, Button, Stack, Typography } from "@mui/material";
// import React from "react";
import Image from "../IMG/main.jpg";
function Main() {
  return (
    <>
      <Box sx={{ width: "100vw", overflow: "auto" }}>
        <Stack
          sx={{
            position: "relative",
            height: "502.13px",
            backgroundImage: `url(${Image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            overflow: "auto",
            transition: "background-size 1.3s ease-in-out",
            "&:hover": {
              backgroundSize: "110%",
            },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1140 220"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
            
              zIndex: 1,
              overflow: "auto",
            }}
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,128L60,138.7C120,149,240,171,360,176C480,181,600,171,720,160C840,149,960,139,1080,154.7C1200,171,1320,213,1380,234.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
          <Box sx={{ width: "564.12px", margin: "auto" }}>
            <Typography
              sx={{
                
                fontWeight: 500,
                lineHeight: "84px",
                letterSpacing: "0em",
                textAlign: "center",
                color: "white",
                fontFamily: "serif",
                fontSize: {lg :"74px" , sm :'50px' , xs:'40px'},
              }}
            >
              Your World of Joy
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "10px",
                lineHeight: "28.13px",
                textAlign: "center",
                color: "white",
                letterSpacing: "2px",
              }}
            >
              From local escapes to far-flung adventures, find what makes you
              happy anytime, anywhere
            </Typography>
            <Box
              sx={{
                height: "78px",
                background: "white",
                borderRadius: "20px",
                display: "flex",
                width: {lg:"100%" , sm:'100%' , xs:'83%'},
                // justifyContent: "space-between",
                paddingX: "10px",
                //   alignItems:'center' ,
                  
                  justifyContent:'center',
                lineHeight: "70px",
                alignItems: "flex-start",
                margin:'auto'
              }}
            >
              <Box
                sx={{
                  width: {lg:"290px" , sm:'290px' , xs:'440px'},
                //   height: "70px",
                  background: "white",
                  borderRadius: "20px",

                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "20px",
                  gap: 1,
                }}
              >
                <Typography
                  sx={{
                    height: "37px",
                    width: "37px",
                    background: "white",
                    border: 1,
                    borderColor: "#e3e3e3a8",
                    borderRadius: "3px",
                    lineHeight: "70px",
                  }}
                ></Typography>
                <Box sx={{}}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14.88px",
                      lineHeight: "24px",
                      color: "#05073C",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Where
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: 400,
                      lineHeight: "20px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      fontFamily: "sans-serif",
                      color: "gray",
                    }}
                  >
                    Search destinations
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  // width: "200px",
                  width: {lg:"200px" , sm:'200px' , xs:'340px'},
                //   height: "70px",
                  background: "white",
                  borderRadius: "20px",

                  display: "flex",
                  paddingTop: "20px",

                  gap: 1,
                }}
              >
                <Typography
                  sx={{
                    height: "37px",
                    width: "37px",
                    background: "white",
                    border: 1,
                    borderColor: "#e3e3e3a8",
                    borderRadius: "3px",
                    lineHeight: "70px",
                  }}
                ></Typography>
                <Box sx={{}}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14.88px",
                      lineHeight: "24px",
                      color: "#05073C",
                      fontFamily: "sans-serif",
                    }}
                  >
                    when
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: 400,
                      lineHeight: "20px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      fontFamily: "sans-serif",
                      color: "gray",
                    }}
                  >
                    feb-05-2002
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "350px",
                //   height: "70px",
                  background: "white",
                  borderRadius: "20px",
                  paddingTop: "20px",
                  display: 'flex',

                  gap: 1,
                }}
              >
                <Typography
                  sx={{
                    height: "37px",
                    width: "37px",
                    background: "white",
                    border: 1,
                    borderColor: "#e3e3e3a8",
                    borderRadius: "3px",
                    lineHeight: "70px",
                    display:{lg: 'block' , sm :'none' , xs:'none'}
                  }}
                ></Typography>
                <Box sx={{display:{lg: 'block' , sm :'none' , xs:'none'}}}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14.88px",
                      lineHeight: "24px",
                      color: "#05073C",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Tour Type
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: 400,
                      lineHeight: "20px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      fontFamily: "sans-serif",
                      color: "gray",
                    }}
                  >
                    All tour
                  </Typography>
                </Box>
               
                <Button
                  sx={{
                    // width: "90px",
                    height: "42px",
                    background: "#EB662B",
                    color: "white",
                    fontFamily: "sans-serif",
                    borderRadius: "10px",
                    fontSize: "14px",
                  }}
                >
                  Search
                </Button>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default Main;
