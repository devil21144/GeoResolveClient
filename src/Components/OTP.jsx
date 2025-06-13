import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import axios from "axios";
const OTP = () => {
  const [otp, setOtp] = useState();
  const [err, setError] = useState();
  const [success, setSuccess] = useState();
  const [errMessage, setErrorMessage] = useState();
  const handleSubmit = async () => {
    const username = window.sessionStorage.getItem("username");
    try {
      const results = await axios.post("https://georesolveserver.onrender.com/otp", {
        otp,
        username,
      });
      setError("false");
      setSuccess(true);
    } catch (err) {
      const message =
        err.response?.data?.message || err.message || "Internal Server Error";
      setError("true");
      setErrorMessage(message);
      setSuccess(false);
    }
  };
  return (
    <div className="h-dvh w-dvw flex items-center justify-center">
      <div
        id="subDiv"
        className="h-1/2 w-1/2 border border-indigo-600 flex  flex-col items-center justify-evenly"
      >
        <h1>OTP Verification</h1>
        <TextField
          inputProps={{ type: "number" }}
          value={otp}
          label="OTP"
          required
        />
        {err && <Alert severity="error">{errMessage}</Alert>}
        {success && <Alert severity="success">Registration Successful</Alert>}
        <Button variant="contained" color="secondary" onClick={handleSubmit}>
          Verify
        </Button>
      </div>
    </div>
  );
};

export default OTP;
