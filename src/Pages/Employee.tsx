import { Stack, Typography } from "@mui/material";
import { makeStyles } from "mui-styles-hook";
import { useEffect, useState } from "react";
import { auth, db } from "../Firebase/Firebase";
import { collection } from "firebase/firestore";



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
  
function Employee() {
    const [userData, setUserData] = useState<null | UserData>(null);
    console.log(setUserData)
    const classes = useStyles();
    const [userPostsCollection, setUserPostsCollection] = useState<null | any>(
        null
      );
      console.log(userPostsCollection)

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


  return (
    <>
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
    </>
  )
}

export default Employee