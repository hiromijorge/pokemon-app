/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Link } from "react-router-dom";

import * as style from "./style";
import images from "../../constants/index";
import Spacer from "../Spacer";

const Home = () => {
  const { homeLogo } = images;
  return (
    <div className="base" css={style.base}>
      <div className="container" css={style.container}>
        <div className="row" css={style.row}>
          <div className="col-2" css={style.col}>
            <h2 css={style.h2}>Welcome To Pokemon Website</h2>
            <Spacer>
              <p css={style.subTitle}>
                Let's explore the Pokemon world and catch all the Pokemon!
              </p>
            </Spacer>
            <Link to="/pokemonlist" css={style.button}>
              Explore Now &#8594;
            </Link>
          </div>
          <div className="col-2" css={style.col}>
            <img src={homeLogo.default} alt="" css={style.img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
