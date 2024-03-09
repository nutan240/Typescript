import React, { useState, useEffect } from "react";
import {
  Stack,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../Firebase/Firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "../IMG/card1.jpg";
import { makeStyles } from "mui-styles-hook";
import CustomButton from "../component/CustomButton";

interface UserData {
  firstname: string;
  lastname: string;
  email: string;
  phoneno: string;
}

const useStyles = makeStyles(() => ({
  container: {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "auto",
    height: "100vh",
    width: "100%",
    position: "relative",
  },
  container2: {
    width: { lg: "30%", sm: "60%", xs: "auto" },
    margin: "auto",
    boxShadow: 3,
    padding: 5,
    height: "auto",
    background: "white",
    borderRadius: 4,
  },
  typography: {
    fontWeight: "bold",
    paddingBottom: "15px",
  },
  typographypara: {
    fontSize: "13px",
    fontStyle: "italic",
  },
}));

function Empregistrationdashboard() {
  const classes = useStyles();
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const [userPostsCollection, setUserPostsCollection] = useState<null | any>(
    null
  );
  const [userData, setUserData] = useState<null | UserData>(null);
console.log(errorMsg)
  useEffect(() => {
    const fetchUserPostsCollection = async () => {
      try {
        const currentUser = auth.currentUser;

        if (currentUser) {
          const userId = currentUser.uid;
          const userPostsCol = collection(db, `posts/${userId}/post`);
          setUserPostsCollection(userPostsCol);
        } else {
          console.error("No current user found.");
        }
      } catch (error) {
        console.error("Error fetching user posts collection:", error);
      }
    };

    fetchUserPostsCollection();
  }, []);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setErrorMsg("");
  
    try {
      const formData = new FormData(event.currentTarget);
      const values: UserData = {
        firstname: formData.get('firstname') as string,
        lastname: formData.get('lastname') as string,
        email: formData.get('email') as string,
        phoneno: formData.get('phoneno') as string,
      };
  
      if (userPostsCollection) {
        await addDoc(userPostsCollection, {
          firstname: values.firstname,
          lastname: values.lastname,
          phoneno: values.phoneno,
          email: values.email,
        });
  
        setUserData(values); 
        toast.success("Registration successful!");
      } else {
        console.error("User posts collection not initialized");
      }
    } catch (error: any) {
      setErrorMsg(error.message);
      console.error(error.message);
    }
  };

  return (
    <>
      <Stack sx={classes.container}>
        <Stack
          direction={"column"}
          sx={classes.container2}
          className="form_container"
        >
          <Typography sx={classes.typography} variant="h5">
            Fill Details
          </Typography>

          <form onSubmit={handleSubmit}>
            <Stack
              sx={{ width: "100%", fontSize: "19px" }}
              direction={"column"}
              spacing={1}
            >
              <TextField
                label="Firstname"
                variant="outlined"
                name="firstname"
                fullWidth
              />
              <TextField
                label="Lastname"
                variant="outlined"
                name="lastname"
                fullWidth
              />
              <TextField
                label="Email"
                variant="outlined"
                name="email"
                fullWidth
              />
              <TextField
                label="Phone No."
                variant="outlined"
                name="phoneno"
                fullWidth
              />

              <CustomButton buttontype="submit" title="Add Employee " />
             <Button onClick={()=>navigate('/home')}>cancel</Button>
            </Stack>
          </form>
        </Stack>
      </Stack>

      {userData && (
        <Stack sx={classes.container}>
          <Stack
            direction={"column"}
            sx={classes.container2}
            className="user_data_container"
          >
            <Typography sx={classes.typography} variant="h5">
              User Data
            </Typography>
            <Typography variant="body1">
              Firstname: {userData.firstname}
            </Typography>
            <Typography variant="body1">
              Lastname: {userData.lastname}
            </Typography>
            <Typography variant="body1">Email: {userData.email}</Typography>
            <Typography variant="body1">
              Phone No.: {userData.phoneno}
            </Typography>
          </Stack>
        </Stack>
      )}

      <ToastContainer />
    </>
  );
}

export default Empregistrationdashboard;
