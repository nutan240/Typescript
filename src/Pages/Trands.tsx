import { Stack, Typography, Box } from "@mui/material";
import Image from "../IMG/card1.jpg";
import Image1 from "../IMG/card2.jpg";
import Image2 from "../IMG/card3.jpg";
import Image3 from "../IMG/card4.jpg";
import Image4 from "../IMG/card5.jpg";
import Image5 from "../IMG/card6.jpg";
import Image6 from "../IMG/card7.jpg";
import Image7 from "../IMG/card8.jpg";
import { NavLink } from "react-router-dom";

function Trands() {
  return (
    <>
      <Stack>
      <Box sx={{ fontSize: "20px", textDecoration: "none" }}>
          <NavLink style={{ textDecoration: "none" }} to={"/home"}>
            Go back
          </NavLink>
        </Box>

        <Box sx={{ width: "90%", margin: "auto", paddingY: 2 }}>
          <Typography
            sx={{
              fontFamily: "sans-serif",
              fontSize: "34px",
              fontWeight: 700,
              color: "#05073C",
            }}
          >
            Find Popular Tours
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "space-evenly",
            }}
          >
            <Box
              sx={{
                width: "300px",
                height: "388.31px",
                border: 2,
                borderColor: "#E7E6E6",
                borderRadius: "12px",
                textAlign: "center",
                padding: 0.3,
              }}
            >
              <Typography
                sx={{
                  backgroundImage: `url(${Image})`,
                  height: "198.56px",
                  width: "278px",
                  margin: "auto",
                  transition: "background-size 1.3s ease-in-out",
                  "&:hover": {
                    backgroundSize: "110%",
                  },
                }}
              />
              <Typography
                sx={{
                  color: "#717171",
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  paddingLeft: "30px",
                  float: "left",
                  paddingY: 1,
                }}
              >
                Paris, France
              </Typography>
              <Typography
                sx={{
                  fontFamily: "sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#05073C",
                  width: "249px",
                  margin: "auto",
                  paddingY: 1,
                }}
              >
                Centipede Tour - Guided Arizona Desert Tour by ATV
              </Typography>
              <Typography sx={{ color: "#05073C", paddingBottom: "3px" }}>
                4.8 (243)
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingX: 3,
                  borderTop: "1px solid #E7E6E6",
                  width: "258px",
                  margin: "auto",
                  paddingTop: "5px",
                  color: "#05073C",
                }}
              >
                <Typography sx={{ float: "left" }}>4 days</Typography>
                <Typography>From $189.25</Typography>
              </Box>
            </Box>

            <Box
              sx={{
                width: "300px",
                height: "388.31px",
                border: 2,
                borderColor: "#E7E6E6",
                borderRadius: "12px",
                textAlign: "center",
                padding: 0.3,
              }}
            >
              <Typography
                sx={{
                  backgroundImage: `url(${Image1})`,
                  height: "198.56px",
                  width: "278px",
                  margin: "auto",
                  transition: "background-size 1.3s ease-in-out",
                  "&:hover": {
                    backgroundSize: "110%",
                  },
                }}
              />
              <Typography
                sx={{
                  color: "#717171",
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  paddingLeft: "30px",
                  float: "left",
                  paddingY: 1,
                }}
              >
                New York , USA
              </Typography>
              <Typography
                sx={{
                  fontFamily: "sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#05073C",
                  width: "249px",
                  margin: "auto",
                  paddingY: 1,
                }}
              >
                Molokini and Turtle Town Snorkeling Adventure Aboard
              </Typography>
              <Typography sx={{ color: "#05073C", paddingBottom: "3px" }}>
                4.8 (243)
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingX: 3,
                  borderTop: "1px solid #E7E6E6",
                  width: "258px",
                  margin: "auto",
                  paddingTop: "5px",
                  color: "#05073C",
                }}
              >
                <Typography sx={{ float: "left" }}>4 days</Typography>
                <Typography>From $225</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "300px",
                height: "388.31px",
                border: 2,
                borderColor: "#E7E6E6",
                borderRadius: "12px",
                textAlign: "center",
                padding: 0.3,
              }}
            >
              <Typography
                sx={{
                  backgroundImage: `url(${Image2})`,
                  height: "198.56px",
                  width: "278px",
                  margin: "auto",
                  transition: "background-size 1.3s ease-in-out",
                  "&:hover": {
                    backgroundSize: "110%",
                  },
                }}
              />
              <Typography
                sx={{
                  color: "#717171",
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  paddingLeft: "30px",
                  float: "left",
                  paddingY: 1,
                }}
              >
                London, UK
              </Typography>
              <Typography
                sx={{
                  fontFamily: "sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#05073C",
                  width: "249px",
                  margin: "auto",
                  paddingY: 1,
                }}
              >
                Westminster Walking Tour & Westminster Abbey Entry
              </Typography>
              <Typography sx={{ color: "#05073C", paddingBottom: "3px" }}>
                4.8 (243)
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingX: 3,
                  borderTop: "1px solid #E7E6E6",
                  width: "258px",
                  margin: "auto",
                  paddingTop: "5px",
                }}
              >
                <Typography sx={{ float: "left" }}>4 days</Typography>
                <Typography>From $943</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "300px",
                height: "388.31px",
                border: 2,
                borderColor: "#E7E6E6",
                borderRadius: "12px",
                textAlign: "center",
                padding: 0.3,
              }}
            >
              <Typography
                sx={{
                  backgroundImage: `url(${Image3})`,
                  height: "198.56px",
                  width: "278px",
                  margin: "auto",
                  transition: "background-size 1.3s ease-in-out",
                  "&:hover": {
                    backgroundSize: "110%",
                  },
                }}
              />
              <Typography
                sx={{
                  color: "#717171",
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  paddingLeft: "30px",
                  float: "left",
                  paddingY: 1,
                }}
              >
                Paris, France
              </Typography>
              <Typography
                sx={{
                  fontFamily: "sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#05073C",
                  width: "249px",
                  margin: "auto",
                  paddingY: 1,
                }}
              >
                Centipede Tour - Guided Arizona Desert Tour by ATV
              </Typography>
              <Typography sx={{ color: "#05073C", paddingBottom: "3px" }}>
                4.8 (243)
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingX: 3,
                  borderTop: "1px solid #E7E6E6",
                  width: "258px",
                  margin: "auto",
                  paddingTop: "5px",
                }}
              >
                <Typography sx={{ float: "left" }}>4 days</Typography>
                <Typography>From $189.25</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "300px",
                height: "388.31px",
                border: 2,
                borderColor: "#E7E6E6",
                borderRadius: "12px",
                textAlign: "center",
                padding: 0.3,
              }}
            >
              <Typography
                sx={{
                  backgroundImage: `url(${Image4})`,
                  height: "198.56px",
                  width: "278px",
                  margin: "auto",
                  transition: "background-size 1.3s ease-in-out",
                  "&:hover": {
                    backgroundSize: "110%",
                  },
                }}
              />
              <Typography
                sx={{
                  color: "#717171",
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  paddingLeft: "30px",
                  float: "left",
                  paddingY: 1,
                }}
              >
                Paris, France
              </Typography>
              <Typography
                sx={{
                  fontFamily: "sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#05073C",
                  width: "249px",
                  margin: "auto",
                  paddingY: 1,
                }}
              >
                Space Center Houston Admission Ticket
              </Typography>
              <Typography sx={{ color: "#05073C", paddingBottom: "3px" }}>
                4.8 (243)
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingX: 3,
                  borderTop: "1px solid #E7E6E6",
                  width: "258px",
                  margin: "auto",
                  paddingTop: "5px",
                }}
              >
                <Typography sx={{ float: "left" }}>4 days</Typography>
                <Typography>From $189.25</Typography>
              </Box>
            </Box>

            <Box
              sx={{
                width: "300px",
                height: "388.31px",
                border: 2,
                borderColor: "#E7E6E6",
                borderRadius: "12px",
                textAlign: "center",
                padding: 0.3,
              }}
            >
              <Typography
                sx={{
                  backgroundImage: `url(${Image5})`,
                  height: "198.56px",
                  width: "278px",
                  margin: "auto",
                  transition: "background-size 1.3s ease-in-out",
                  "&:hover": {
                    backgroundSize: "110%",
                  },
                }}
              />
              <Typography
                sx={{
                  color: "#717171",
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  paddingLeft: "30px",
                  float: "left",
                  paddingY: 1,
                }}
              >
                Paris, France
              </Typography>
              <Typography
                sx={{
                  fontFamily: "sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#05073C",
                  width: "249px",
                  margin: "auto",
                  paddingY: 1,
                }}
              >
                Space Center Houston Admission Ticket
              </Typography>
              <Typography sx={{ color: "#05073C", paddingBottom: "3px" }}>
                4.8 (243)
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingX: 3,
                  borderTop: "1px solid #E7E6E6",
                  width: "258px",
                  margin: "auto",
                  paddingTop: "5px",
                }}
              >
                <Typography sx={{ float: "left" }}>4 days</Typography>
                <Typography>From $189.25</Typography>
              </Box>
            </Box>

            <Box
              sx={{
                width: "300px",
                height: "388.31px",
                border: 2,
                borderColor: "#E7E6E6",
                borderRadius: "12px",
                textAlign: "center",
                padding: 0.3,
              }}
            >
              <Typography
                sx={{
                  backgroundImage: `url(${Image6})`,
                  height: "198.56px",
                  width: "278px",
                  margin: "auto",
                  transition: "background-size 1.3s ease-in-out",
                  "&:hover": {
                    backgroundSize: "110%",
                  },
                }}
              />
              <Typography
                sx={{
                  color: "#717171",
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  paddingLeft: "30px",
                  float: "left",
                  paddingY: 1,
                }}
              >
                London, UK
              </Typography>
              <Typography
                sx={{
                  fontFamily: "sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#05073C",
                  width: "249px",
                  margin: "auto",
                  paddingY: 1,
                }}
              >
                History and Hauntings of Salem Guided Walking Tour
              </Typography>
              <Typography sx={{ color: "#05073C", paddingBottom: "3px" }}>
                4.8 (243)
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingX: 3,
                  borderTop: "1px solid #E7E6E6",
                  width: "258px",
                  margin: "auto",
                  paddingTop: "5px",
                }}
              >
                <Typography sx={{ float: "left" }}>4 days</Typography>
                <Typography>From $189.25</Typography>
              </Box>
            </Box>

            <Box
              sx={{
                width: "300px",
                height: "388.31px",
                border: 2,
                borderColor: "#E7E6E6",
                borderRadius: "12px",
                textAlign: "center",
                padding: 0.3,
              }}
            >
              <Typography
                sx={{
                  backgroundImage: `url(${Image7})`,
                  height: "198.56px",
                  width: "278px",
                  margin: "auto",
                  transition: "background-size 1.3s ease-in-out",
                  "&:hover": {
                    backgroundSize: "110%",
                  },
                }}
              />
              <Typography
                sx={{
                  color: "#717171",
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  paddingLeft: "30px",
                  float: "left",
                  paddingY: 1,
                }}
              >
                New York, USA
              </Typography>
              <Typography
                sx={{
                  fontFamily: "sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#05073C",
                  width: "249px",
                  margin: "auto",
                  paddingY: 1,
                }}
              >
                Copy Mauna Kea Summit Sunset and Stars Free Astro Photos Hilo
                Kona Waikoloa Pick Up
              </Typography>
              <Typography sx={{ color: "#05073C", paddingBottom: "3px" }}>
                4.8 (243)
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingX: 3,
                  borderTop: "1px solid #E7E6E6",
                  width: "258px",
                  margin: "auto",
                  paddingTop: "5px",
                }}
              >
                <Typography sx={{ float: "left" }}>4 days</Typography>
                <Typography>From $189.25</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Stack>
    </>
  );
}

export default Trands;
