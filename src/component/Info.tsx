import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InfoIcon from "@mui/icons-material/Info";
type Anchor = "menu";
import Image from "../IMG/logo-1.jpg";
import { Stack, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
function Info() {
  const [state, setState] = React.useState({
    menu: false,
    left: false,
    bottom: false,
    right: false,
  });
  const navigate = useNavigate();
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: anchor === "menu" || anchor === "bottom" ? "auto" : 250,
        bgcolor: "#EB662B",
        color: "white",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      
      <Divider />
      <List>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: "center",
              pl: 3.7,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: 4,
                justifyContent: "center",
              }}
            >
              <InfoIcon />
            </ListItemIcon>
            <ListItemText onClick={() => navigate("/about")} primary="ABOUT" />
          </ListItemButton>
        </ListItem>
        
        <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: "center",
                pl: 3.7,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 4,
                  justifyContent: "center",
                }}
              >
                <HomeIcon />
              </ListItemIcon>
              <ListItemText
                sx={{ width: "100px" }}
                onClick={()=>{navigate('/home')}}
                primary="HOME"
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: "center",
                pl: 3.7,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 4,
                  justifyContent: "center",
                }}
              >
                <InfoIcon />
              </ListItemIcon>
              <ListItemText
                onClick={() => navigate("/setting")}
                primary="SETTINGS"
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: "center",
                pl: 3.7,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 4,
                  justifyContent: "center",
                }}
              >
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText
                onClick={() => navigate("/trands")}
                primary="POPULAR TRANDS "
              />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <Box
      sx={{ display: "flex", width: "100%", paddingY: "7px", overflow: "auto" }}
    >
      <Stack
        direction={"row"}
        sx={{
          display: "flex",
          width: "80%",
          justifyContent: "space-between",

          marginX: "auto",
        }}
      >
        <Typography
          sx={{
            backgroundImage: ` url( ${Image} )`,
            backgroundRepeat: "no-repeat",
            height: "32px",
            width: { lg: "167px", sm: "310px", xs: "310px" },
            menu: "6.06px",
          }}
        ></Typography>
        <Typography
          sx={{
            width: { lg: "350px", sm: "300px", xs: "260px" },

            left: "197px",
            display: { lg: "block", sm: "block", xs: "none" },
            justifyContent: "center",
            lineHeight: "43px",
            fontSize: { lg: "14px", sm: "10px ", xs: "10px" },
          }}
        >
          Search destinations or activities
        </Typography>
        <Box
          sx={{
            width: "480.5px",
            menu: "22px",
            left: "711.5px",
            alignContent: "center",
            alignItems: "center",
            paddingX: "30px",
            display: { lg: "flex", sm: "none", sx: "none" },
            justifyContent: "space-between",
            ":hover": {
              color: "#EB662B",
            },
          }}
        >
          <Typography
            sx={{
              color: "#05073C",
              width: "149.61px",
              ":hover": {
                color: "#EB662B",
              },
              menu: "0.94px",
            }}
          >
            Destinations
          </Typography>

          <Typography
            sx={{
              width: "127.45px",
              height: "42.13",
              menu: "0.94px",
              ":hover": {
                color: "#EB662B",
              },
              color: "#05073C",
            }}
          >
            Activities
          </Typography>
          <Typography
            sx={{
              width: "91.86px",
              height: "42.13",
              menu: "0.94px",
              ":hover": {
                color: "#EB662B",
              },
              color: "#05073C",
            }}
          >
            USD
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 430,
              lineHeight: "28px",
              letterSpacing: "0em",
              textAlign: "left",
              fontFamily: "sans-serif",
              ":hover": {
                color: "#EB662B",
              },
            }}
          >
            Sign up
          </Typography>
        </Box>
        <Button
          sx={{
            background: "#EB662B",
            width: { lg: "83.31px ", sm: "90px", xs: "100px" },
            borderRadius: "200px",
            color: "white",
            marginLeft: "20px",
            ":hover": {
              background: "#d06637",
            },
          }}
        >
          Log in
        </Button>
      </Stack>
      <Box sx={{ color: "white" }}>
        {(["menu"] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <SwipeableDrawer
              // anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
}

export default Info;
