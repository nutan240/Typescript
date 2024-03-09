import { Box, Stack, Typography } from "@mui/material";
// import React from "react";

function FooterHead() {
  return (
    <Stack sx={{ width: "90%", margin: "auto"  , paddingBottom:3}}>
      <Typography
        sx={{
          fontFamily: "sans-serif",
          fontSize: "34px",
          fontWeight: 700,
          color: "#05073C",
          marginY: 3,
        }}
      >
        Travel Articles
      </Typography>
     
      <Box sx={{display:"flex" ,flexWrap:'wrap' , justifyContent:'space-between'}}>
        <Box>
        <Typography sx={{ fontSize: "15px",
          fontWeight: 500,
          fontFamily: "sans-serif",
          color: "#05073C",
          height: "100px", marginTop:3
          }}>Trips</Typography>
          <Box sx={{ display: "flex" }}>
          
            <Typography
              sx={{
                color: "#05073C",
                fontSize: "12px",
                fontWeight: 400,
                borderRight: 1,
                paddingRight: "8px",
              }}
            >
              April 06 2023
            </Typography>
            <Typography
              sx={{
                color: "#05073C",
                fontSize: "12px",
                fontWeight: 400,
                paddingLeft: "8px",
              }}
            >
              By Ali Tufan
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: "sans-serif",
              fontSize: "18px",
              fontWeight: 600,
              color: "#05073C",
              width: "350px",
            }}
          >
            Kenya vs Tanzania Safari: The Better African Safari Experience
          </Typography>
        </Box>
        <Box >
        <Typography sx={{ fontSize: "15px",
          fontWeight: 500,
          fontFamily: "sans-serif",
          color: "#05073C",
          height: "100px",marginTop:3
          }}>Trips</Typography>
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{
                color: "#05073C",
                fontSize: "12px",
                fontWeight: 400,
                borderRight: 1,
                paddingRight: "8px",
              }}
            >
              April 06 2023
            </Typography>
            <Typography
              sx={{
                color: "#05073C",
                fontSize: "12px",
                fontWeight: 400,
                paddingLeft: "8px",
              }}
            >
              By Ali Tufan
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: "sans-serif",
              fontSize: "18px",
              fontWeight: 600,
              color: "#05073C",
              width: "350px",
            }}
          >
            Kenya vs Tanzania Safari: The Better African Safari Experience
          </Typography>
        </Box>
        <Box>
        <Typography sx={{ fontSize: "15px",
          fontWeight: 500,
          fontFamily: "sans-serif",
          color: "#05073C",
          height: "100px",marginTop:3
          }}>Trips</Typography>
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{
                color: "#05073C",
                fontSize: "12px",
                fontWeight: 400,
                borderRight: 1,
                paddingRight: "8px",
              }}
            >
              April 06 2023
            </Typography>
            <Typography
              sx={{
                color: "#05073C",
                fontSize: "12px",
                fontWeight: 400,
                paddingLeft: "8px",
              }}
            >
              By Ali Tufan
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: "sans-serif",
              fontSize: "18px",
              fontWeight: 600,
              color: "#05073C",
              width: "350px",
            }}
          >
            Kenya vs Tanzania Safari: The Better African Safari Experience
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
}

export default FooterHead;
