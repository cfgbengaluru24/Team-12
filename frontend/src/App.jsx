import React, { createContext, useState } from "react";
import { Box, CssBaseline, ThemeProvider, Button, Modal, IconButton } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Navbar, SideBar } from "./scenes";
import { Outlet } from "react-router-dom";
import GoogleTranslate from "./components/GoogleTranslate"; // Adjust the path as necessary
import Chatbot from "./chatBot"; // Import your Chatbot component
import ChatIcon from '@mui/icons-material/Chat'; // Import the chat icon from Material-UI

export const ToggledContext = createContext(null);

function App() {
  const [theme, colorMode] = useMode();
  const [toggled, setToggled] = useState(false);
  const [open, setOpen] = useState(false); // State for controlling the modal
  const values = { toggled, setToggled };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToggledContext.Provider value={values}>
          <Box sx={{ display: "flex", height: "100vh", maxWidth: "100%" }}>
            <SideBar />
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                height: "100%",
                maxWidth: "100%",
              }}
            >
              <Navbar />
              <GoogleTranslate /> {/* Add this line */}
              <Box sx={{ overflowY: "auto", flex: 1, maxWidth: "100%" }}>
                <Outlet />
              </Box>
              <IconButton 
                onClick={handleOpen} 
                sx={{
                  position: 'fixed',
                  bottom: '20px',
                  right: '20px',
                  backgroundColor: theme.palette.primary.main,
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                  }
                }}
              >
                <ChatIcon />
              </IconButton>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="chatbot-modal-title"
                aria-describedby="chatbot-modal-description"
              >
                <Box 
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                  }}
                >
                  <Chatbot />
                </Box>
              </Modal>
            </Box>
          </Box>
        </ToggledContext.Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
