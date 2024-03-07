import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Firebase/Firebase";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress, 
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Swal from "sweetalert2";

interface SwalOptions {
  icon: "success" | "error" | "warning" | "info" | "question";
  title?: string;
  text?: string;
  zIndex?: string | number;
}

function ForgotPassword({ closeEvent }: { closeEvent: () => void }) {
  const history = useNavigate();
  const [loading, setLoading] = useState(false); // Manage loading state

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true

    const target = e.target as typeof e.target & {
      email: { value: string };
    };

    const emailVal = target.email.value;

    sendPasswordResetEmail(auth, emailVal)
      .then(() => {
        closeEvent();

        const options: SwalOptions = {
          icon: "success",
          title: "Reset Email Sent",
          text: "Check your email for password reset instructions.",
          zIndex: 9999,
        };
        Swal.fire(options);
        setTimeout(() => {
          history("/");
        }, 2000);
      })
      .catch((err: { message: string }) => {
        closeEvent();

        const options: SwalOptions = {
          icon: "error",
          title: "Error",
          text: err.message,
          zIndex: 9999,
        };
        Swal.fire(options);
      })
      .finally(() => {
        setLoading(false); // Reset loading state
      });
  };

  return (
    <>
      <Box sx={{ background: "white", height: "250px", padding: "4px" }}>
        <Typography
          sx={{
            marginBottom: "25px",
            color: "rgb(3 22 65 / 70%)",
            fontStyle: "italic",
            fontWeight: "bold",
            marginTop: "20px",
          }}
          variant="h5"
          align="left"
        >
          Forgot Password
        </Typography>
        <IconButton
          sx={{ position: "absolute", top: 0, right: "0" }}
          onClick={closeEvent}
        >
          <CloseIcon />
        </IconButton>

        <form onSubmit={(e) => handleSubmit(e)}>
          <Stack direction={"column"} sx={{ marginBottom: "26px" }}>
            <TextField
              sx={{ marginBottom: "26px" }}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />

            <Button
              sx={{
                marginTop: "14px",
                background:
                  "radial-gradient(circle at 74.2% 50.9%,  rgb(3 22 65 / 70%)  5.2%, rgb(14, 72, 222) 75.3%)",
              }}
              type="submit"
              variant="contained"
              disabled={loading} // Disable button when loading
            >
              {loading ? ( // Show CircularProgress if loading, otherwise show button text
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Send Reset Email"
              )}
            </Button>
          </Stack>
        </form>
      </Box>
    </>
  );
}
export default ForgotPassword;
