import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { Header } from "../../components";
import { tokens } from "../../theme";
import GoogleTranslate from "../../components/GoogleTranslate";
import { useTheme } from '@mui/material/styles';

const AdminUpload = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [msg, setMsg] = useState('');

  // Helper function to send file to backend
  const uploadFile = (url, file) => {
    const formData = new FormData();
    formData.append('file', file);

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        setMsg(data.message || data.error);
        // console.log('File successfully uploaded:', data);
      })
      .catch(error => {
        console.error('Error uploading file:', error);
      });
  };

  // File upload handlers
  const handleBaselineUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Baseline CSV uploaded:", file);
      uploadFile('http://127.0.0.1:8000/api/import_baseline', file); // Replace with your actual endpoint
    }
  };

  const handleEndlineUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Endline CSV uploaded:", file);
      uploadFile('http://127.0.0.1:8000/api/import_endline', file); // Replace with your actual endpoint
    }
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="ADMIN UPLOAD" subtitle="Upload Baseline and Endline Data" />
      </Box>
      <GoogleTranslate />
      <Box mt="40px" display="flex" justifyContent="center" alignItems="center" gap={2}>
        <Button
          variant="contained"
          component="label"
          sx={{ backgroundColor: colors.primary[600], '&:hover': { backgroundColor: colors.primary[700] }, padding: '10px 20px', fontSize: '16px', borderRadius: '8px' }}
        >
          Upload Baseline CSV
          <input
            type="file"
            accept=".csv"
            hidden
            onChange={handleBaselineUpload}
          />
        </Button>
        <Button
          variant="contained"
          component="label"
          sx={{ backgroundColor: colors.primary[600], '&:hover': { backgroundColor: colors.primary[700] }, padding: '10px 20px', fontSize: '16px', borderRadius: '8px' }}
        >
          Upload Endline CSV
          <input
            type="file"
            accept=".csv"
            hidden
            onChange={handleEndlineUpload}
          />
        </Button>
      </Box>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <h2 style={{color: "white"}}>{msg}</h2>
      </div>
    </Box>
  );
};

export default AdminUpload;
