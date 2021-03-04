import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { useStateValue } from "../StateProvider/StateProvider";

const Header = () => {
  const [{ user }] = useStateValue();
  return (
    <>
      <div className="header">
        <div className="header__left">
          {/* avatar for logged in user */}
          <Avatar
            className="header__avatar"
            alt={user?.displayName}
            src={user?.photoURL}
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
