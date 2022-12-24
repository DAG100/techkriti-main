// import React from "react";
import "./sidenav.css";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import './styles.css';
import LogoutIcon from "@mui/icons-material/Logout";
// import {useAuth} from './AuthContext'
import React, { useState, useEffect } from "react";
import logo from "./CA_light.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import UpdateRoundedIcon from "@mui/icons-material/UpdateRounded";
import { Tab } from "@mui/material";
import { Container } from "@mui/system";
// import Stack from "@mui/material";
import "./sidenav.css";
import { TabPanelUnstyled } from "@mui/base";
import Slides from "../slides.js";

const Sidenav = (props) => {
// 	return (
// 		<div>
// 			{props.children}
// 		</div>
// 	);

 return (
    <div>
      <Grid
        container
        bgcolor={"black"}
        color={"white"}
        columnGap={0}
        spacing={0}
        className="topGrid"
      >
        <Grid
          item
          md={0.5}
          sx={{ minWidth: 91 }}
        className="corners"
        >
          <img src="img/techkriti.svg" height={"45px"}></img>
        </Grid>
        <Divider color={"white"} orientation="vertical" flexItem></Divider>
        <Grid item md>
          <ul className="horlist">
            <li><a href="#">jghrug</a></li>
            <li><a className="mylink" href="#">jghrug</a></li>
            <li><a className="mylink" href="#">jghrug</a></li>
            <li><a className="mylink" href="#">jghrug</a></li>
          </ul>
          
          </Grid>
        <Divider color={"white"} orientation="vertical" flexItem></Divider>
        <Grid item md={0.5} sx={{ minWidth: 87 }} className="corners">
          <img src="images/menuBar.png" height={"16px"}></img>
        </Grid>
      </Grid>
      <Divider></Divider>
      <Grid
        container
        bgcolor={"black"}
        color={"white"}
        columnGap={0}
        spacing={0}
        
      >
        <Grid item md={0.5} sx={{ minWidth: 91 }} style={{height:"calc(100vh - 129px)",display:"flex",flexDirection:"column",alignItems:"center"}}>
          <br />
          <a href="#"><img src="images/facebook.png" height={"20px"} width={"11px"}></img></a>
          <br></br>
          <a href="#"><img src="images/twitter.png" height={"17.94px"}></img></a>
          <br></br>
          <a href="#"><img src="images/youtube.png" height={"24px"}></img></a>
          <br></br>
          <a href="#"><img src="images/linkedin.png" height={"24px"}></img></a>
          <br></br>
          <a href="#"><img src="images/instagram.png" height={"20px"}></img></a>
        </Grid>
        <Divider color={"white"} orientation="vertical" flexItem></Divider>
        <Grid item md>
        </Grid>
        <Divider color={"white"} orientation="vertical" flexItem></Divider>
        <Grid item md={0.5} sx={{ minWidth: 87 }} style={{display:"flex",flexDirection:"column"}}>
          <img src="img/techkriti.svg" height={"45px"}></img>
        </Grid>
      </Grid>
      <Divider/>
      <Grid
        container
        bgcolor={"black"}
        color={"white"}
        columnGap={0}
        spacing={0}
        style={{position:"absolute",bottom:"0"}}
      >
        <Grid item md={0.5} sx={{ minWidth: 91,flexDirection:"column" }} className="corners"  >
        <img src="images/Vector 5.png" height={"8px"}></img>
        <img src="images/Vector 4.png" height={"8px"}></img>
        <img src="images/Vector 3.png" height={"8px"}></img>
        </Grid>
        <Divider color={"white"} orientation="vertical" flexItem></Divider>
        <Grid item md>
        <ul className="horlist1">
            <li><a className="mylink" href="http://google.com">jghrug</a></li>
            <li><a className="mylink" href="#">jghrug</a></li>
            <li><a className="mylink" href="#">jghrug</a></li>
            <li><a className="mylink" href="#">jghrug</a></li>
          </ul>
        </Grid>
        <Divider color={"white"} orientation="vertical" flexItem></Divider>
        <Grid item md={0.5} sx={{ height: 66, minWidth: 87 }} className="corners">
          <img src="img/techkriti.svg" height={"45px"}></img>
        </Grid>
        <Divider></Divider>
      </Grid>
    </div>
  );
};

export default Sidenav;

