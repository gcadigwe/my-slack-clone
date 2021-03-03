import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__left">
          {/* avatar for logged in user */}
          <Avatar
            className="header__avatar"
            alt="Placeholder"
            src="display photo"
          />

          {/* time icon */}
          <AccessTimeIcon />
        </div>
        <div className="header__search">
          <SearchIcon />

          <input type="text" placeholder="Search" />
        </div>
        <div className="header__right">
          <HelpOutlineIcon />
        </div>
      </div>
    </>
  );
};

export default Header;
