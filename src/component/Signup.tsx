import React, { useState } from "react";
import {
  Box,
  Grid,
  Stack,
  Typography,
  CircularProgress,
  TextField,
 
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, db, provider } from "../Firebase/Firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { addDoc, collection } from "firebase/firestore";
import Image1 from "../assets/loginimg.jpg";

import CustomButton from "./CustomButton";
import { makeStyles } from "mui-styles-hook";
import { FcGoogle, FcPhone } from "react-icons/fc";

interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phoneno: string;
  showPassword: boolean;
}

const useStyles = makeStyles(() => ({
    grid_container: {
        display: "flex",
        width: "100%",
        overflow: "auto",
        height: "100vh",
      },
      grid_container1: {
        background:
          "radial-gradient(263px at 100.2% 3%, rgb(12, 85, 141) 31.1%, rgb(205, 181, 93) 36.4%, rgb(244, 102, 90) 50.9%, rgb(199, 206, 187) 60.7%, rgb(249, 140, 69) 72.5%, rgb(12, 73, 116) 72.6%)",
        overflow: "auto",
        width: "100%",
        height: "100vh",
      },
    
      form_container11: {
        display: "flex",
    
        width: { lg: "30%", sm: "57%" },
    
        background: "white",
        borderTopLeftRadius: 9,
        borderTopRightRadius: 9,
        borderBottomLeftRadius: 9,
        borderBottomRightRadius: 9,
        padding: "48px",
        height: "auto",
        overflow: "auto",
        marginX: "auto",
        marginTop: "20px",
      },
      typography_para: {
        fontSize: "13px",
        fontStyle: "italic",
      },
      box_container1: {
        background: "#303f5ea3",
        width: "50%",
        display: { lg: "block", sm: "none", xs: "none" },
      },
      stack_side_container: {
        backgroundImage: ` url( ${Image1} )`,
        objectFit: "cover",
        position: "center",
        overflow: "auto",
        height: "500px",
        width: "100%",
        marginTop: "100px",
        borderTopRightRadius: 9,
        borderBottomRightRadius: 9,
      },
}));

const Signup: React.FC = () => {
  const classes = useStyles();
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const usersCollection = collection(db, "posts");
console.log(errorMsg)
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values: FormValues = {
      firstname: formData.get("firstname") as string,
      lastname: formData.get("lastname") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      phoneno: formData.get("phoneno") as string,
      showPassword: false, 
    };

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = userCredential.user;

      await addDoc(usersCollection, {
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
      });

      toast.success("Registration successful!");
      navigate("/");

      localStorage.setItem("user", JSON.stringify(user));
    } catch (error: any) {
      setErrorMsg(error.message);
      console.error("Error during registration:", error);
      toast.error("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handelgoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        if (user.email) {
          localStorage.setItem("email", user.email);
          navigate("/home");
        } else {
          console.error("User email is null.");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <Stack>
        <Grid sx={classes.grid_container}>
          <Grid sx={classes.grid_container1}>
            <Stack direction={"column"} sx={classes.form_container11}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  paddingBottom: "15px",
                  color: "rgb(37, 84, 112)",
                  fontStyle: "italic",
                }}
                className="heading"
                variant="h5"
              >
                Sign Up
              </Typography>

              <form onSubmit={handleSubmit}>
                <Stack
                  sx={{ width: "100%", fontSize: "19px" }}
                  direction={"column"}
                  spacing={1}
                >
                  <TextField
                    label={"Firstname"}
                    type={"text"}
                    name={"firstname"}
                   
                  />

                  <TextField
                    label={"Lastname"}
                    type={"text"}
                    name={"lastname"}
                    
                  />

                  <TextField
                    label={"Email"}
                    type={"email"}
                    name={"email"}
                  />

                  <TextField
                    label={"Password"}
                    type={"password"}
                    name={"password"}
                    
                  />

                  {loading ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    <CustomButton buttontype={"submit"} title={"sign up "} />
                  )}
                </Stack>
              </form>

              <Box
                sx={{
                  marginTop: "15px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  onClick={() => {
                    navigate("/phone");
                  }}
                  sx={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <FcPhone style={{ fontSize: "23px", paddingRight: "10px" }} />{" "}
                  signin with Phone No..
                </Typography>
                <Typography
                  onClick={handelgoogle}
                  sx={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <FcGoogle style={{ fontSize: "19px", paddingRight: "10px" }} />{" "}
                  signin with google
                </Typography>
              </Box>
              <Box sx={{ paddingTop: 3 }}>
                <NavLink
                  style={{
                    color: "darkblue",
                    paddingTop: 3,
                    textDecoration: "none",
                    fontSize: "18px",
                  }}
                  to={"/"}
                >
                  Already have an account? Sign in
                </NavLink>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
      <ToastContainer />
    </>
  );
};

export default Signup;
