/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { useState } from "react";
import Container from "../Global/Container";
import Logo from "./NavbarLogo";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";
import {
  Collapse,
  FormControl,
  InputLabel,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";

// import Button from "../Global/Button/Button";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const [signup, setSignUp] = useState("");
  const navigate = useNavigate();
  const handleRegister = () => {
    setOpen(!open);
    navigate("/signup");
  };


  const handleLogin = () => {
    setOpen(!open);
  };

  return (
    <nav css={styles}>
      <Container>
        <Logo />
        <Menu openMenu={openMenu} />

        <List
          sx={{ width: "10%", maxWidth: 360, bgcolor: "black", color: "white" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleRegister}>
            <ListItemText primary="Register" />
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="User" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Trainer" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        <List
          sx={{ width: "10%", maxWidth: 360, bgcolor: "black", color: "white" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleLogin}>
            <ListItemText primary="Login" />
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="User" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Trainer" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        {/* <Button onClick={clickHandler}>Register</Button>
        <Button
          onClick={() => {
            navigate("/login");
          }}
        >
          Log in
        </Button> */}
        <i
          onClick={() => setOpenMenu(!openMenu)}
          id="burgerMenu"
          className={
            openMenu ? "fas fa-times fa-lg" : "fas fa-align-right fa-lg"
          }
        ></i>
      </Container>
    </nav>
  );
};

const styles = css`
  width: 100%;
  height:100px
  position: absolute;
  top: 0;
  z-index: 10;
  padding: 40px 0;
  background-color: black;
  .container {
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      cursor: pointer;
    }
    #burgerMenu {
      cursor: pointer;
      display: none;
      color: #fff;
    }
  }
  @media (max-width: 1200px) {
    .container {
      max-width: 1200px;
      button {
        display: none;
      }
      #burgerMenu {
        display: block;
      }
    }
  }
`;

export default Navbar;
