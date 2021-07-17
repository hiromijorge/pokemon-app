/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { jsx } from "@emotion/react";

import * as style from "./style";
import images from "../../constants/index";

const Navbar = () => {
  const [flag, setFlag] = useState(0);
  const onBtnMenuClick = () => {
    if (flag === 0) {
      setFlag(1);
    } else {
      setFlag(0);
    }
  };

  const { homeIcon, menuIcon } = images;
  return (
    <div className="container" css={style.container}>
      <div className="navbar" css={style.navbar}>
        <img src={homeIcon.default} alt="Pokemon Logo" css={style.homeLogo} />
        <nav
          css={flag === 0 ? style.navigationLinkOff : style.navigationLinkOn}
          data-testid="navbar"
        >
          <div className="links">
            <Link
              css={flag === 0 ? style.linkOff : style.linkOn}
              to="/"
              data-testid="home-link"
            >
              Home
            </Link>
            <Link
              css={flag === 0 ? style.linkOff : style.linkOn}
              to="/pokemonlist"
              data-testid="pokemonlist-link"
            >
              Pokemon List
            </Link>
          </div>
        </nav>
        <img
          src={menuIcon.default}
          alt="Menu Icon"
          onClick={onBtnMenuClick}
          css={style.menuIcon}
        />
      </div>
    </div>
  );
};

export default Navbar;
