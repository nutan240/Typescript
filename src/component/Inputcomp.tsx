import { useState, ChangeEvent, FocusEvent } from "react";
import { TextField } from "@mui/material";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

interface Props {
  label: string;
  type: string;
  inputname: string;
  inputvalue: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: FocusEvent<HTMLInputElement>) => void;
}

function Inputcomp({
  label,
  type,
  inputname,
  inputvalue,
  handleChange,
  handleBlur,
}: Props) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <TextField
        sx={{ background: 'white' }}
        fullWidth
        variant="filled"
        label={label}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        name={inputname}
        value={inputvalue}
        onChange={handleChange}
        onBlur={handleBlur}
        InputProps={{
          endAdornment:
            type === "password" ? (
              <div
                style={{ cursor: "pointer" }}
                onClick={handleTogglePasswordVisibility}
              >
                {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
              </div>
            ) : null,
        }}
      />
    </>
  );
}

export default Inputcomp;
