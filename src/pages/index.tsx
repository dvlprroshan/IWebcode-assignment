// import types from react
import { FunctionComponent, ReactElement, useState } from "react";
// import component level styles
import style from "@/styles/Home.module.scss";
import MainComponent from "@/pages/components/Maincomponent";

// main home page compoent
const Home: FunctionComponent = (): ReactElement => {
  const [isRoiVisible, setRoiVisible] = useState(false);

  return (
    <div className={style.home}>
      {/* global style */}
      <style global jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap");
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html,
        body {
          overflow: hidden;
        }
        a {
          text-decoration: none;
        }
      `}</style>

      <button className={style.showBtn} onClick={() => setRoiVisible(true)}>
        Show Component
      </button>
      {isRoiVisible && <MainComponent closeFunc={setRoiVisible} />}
    </div>
  );
};
// exported home page component
export default Home;
