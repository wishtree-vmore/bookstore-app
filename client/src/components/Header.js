import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { NavLink } from "react-router-dom";
// import "../components/Book/book.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [value, setvalue] = useState('');
  const history = useNavigate();

  useEffect(() => {
    console.log("Location", window.location.pathname);

    switch(window.location.pathname){
      case '/addbook': 
        setvalue(0);
        break;
      case '/allbooks':
        setvalue(1);
        break;
      case '/about':
        setvalue(2);
        break;
      default: 
        setvalue('');
        break;
    }

  }, [window.location.pathname]);

  return (
    <div>
      <AppBar className="header" position="sticky">
        <Toolbar>
          <Typography>
            <LibraryBooksIcon />
          </Typography>

          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, value) => setvalue(value)}
          >
            {/* <Tab LinkComponent={NavLink} to="/home" label="Home" /> */} 
            <Tab LinkComponent={NavLink} to="/addbook" label="Add Book" />
            <Tab LinkComponent={NavLink} to="/allbooks" label="Books" />
            <Tab LinkComponent={NavLink} to="/about" label="About Us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

/**
 * Toolbar - structures everything in proper manner
 * Appbar - used for header, navigation, actions, screen titles
 * Typography - used to standardize the text
 * Tab - used to render single components/url differently
 * LinkComponent - help us to add link components
 */
