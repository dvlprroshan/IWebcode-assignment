import type { FunctionComponent, ReactElement } from "react";
import style from "@/styles/components/MainComponent.module.scss";
import { GrClose } from "react-icons/gr";
import { RiArrowUpSLine, RiCake2Fill } from "react-icons/ri";
import Switch from "react-switch";
import { useState } from "react";

type MainComponentProps = {
  closeFunc: Function;
};

const MainComponent: FunctionComponent<MainComponentProps> = ({
  closeFunc,
}: MainComponentProps): ReactElement => {
  const initialState = {
    isUsd: true,
    isApy: true,
    timeframeId: 0,
    selectTierId: 0,
    isDetailsHided: true,
  };
  const [comState, setComState] = useState(initialState);

  const handleClicked = {
    changeUsdCake(value: any) {
      setComState((prevState: any) => ({ ...prevState, isUsd: value }));
    },
    changeApy(value: any) {
      setComState((prevState: any) => ({ ...prevState, isApy: value }));
    },
  };
  return (
    <div className={style.root_com}>
      <div className={style.inner_con}>
        {/* title-bar */}
        <div className={style.m_title}>
          <h2 className={style.mi_title}>ROI Calculator</h2>
          <div className={style.mi_closebtn} onClick={() => closeFunc(false)}>
            <GrClose size={20} />
          </div>
        </div>
        {/* info-&-curreny-toggler */}
        <div className={style.curr_toggler}>
          <div className={style.ct_list}>
            <div className={style.ctl_icon}>
              <RiCake2Fill size={15} />
            </div>
            <div className={style.ctl_text}>CAKE</div>
          </div>
          <div className={style.ct_list}>
            <Switch
              onChange={handleClicked.changeUsdCake}
              checked={comState.isUsd}
              className={style.ct_switch}
              boxShadow="none"
              activeBoxShadow="none"
              uncheckedIcon={false}
              checkedIcon={false}
              onColor="#e3a54f"
              color="#f00"
              onHandleColor="#fff"
            />
            <div className={style.ctl_text}> USD</div>
          </div>
        </div>
        {/* first-input */}
        <div className={style.fi_input}>
          <input type="text" placeholder="0.000 USD" />
        </div>
        {/* suggestion in dollar */}
        <div className={style.sid}>{"~ CAKE 0.000"}</div>
        <div className={style.sid_main}>
          {["$1000", "$100"].map((e: any, i: number) => {
            return <div key={i}>{e}</div>;
          })}
        </div>
        {/* timeframe:title */}
        <h3 className={style.tf_title}>Timeframe</h3>
        {/* timeframe */}
        <div className={style.timeframe}>
          {["1 Days", "7 Days", "30 Days", "1 Year", "5 Years"].map(
            (item: any, index: number) => {
              return (
                <div
                  key={index}
                  className={
                    comState.timeframeId === index ? style.activeCircle : "d"
                  }
                  onClick={(e: any) => {
                    setComState((prevState: any) => ({
                      ...prevState,
                      timeframeId: index,
                    }));
                  }}
                >
                  {item}
                </div>
              );
            }
          )}
          <h3 className={style.tf_title}>Enable Accelerated APY</h3>
          <div
            className="cl_list"
            style={{
              background: "none",
              position: "absolute",
              right: "0",
              marginTop: "45px",
            }}
          >
            <Switch
              onChange={handleClicked.changeApy}
              checked={comState.isApy}
              className={style.ct_switch}
              boxShadow="none"
              activeBoxShadow="none"
              uncheckedIcon={false}
              checkedIcon={false}
              onColor="#e3a54f"
              color="#f00"
              onHandleColor="#fff"
            />
          </div>
        </div>
        {/* enableAPY:title-&-toggler */}
        {/* select tier  title*/}
        <div className={style.st_topdesc}>{"Select Tier"}</div>
        {/* select tier mode */}
        <div className={style.timeframe}>
          {["1 Days", "7 Days", "30 Days", "1 Year", "5 Years"].map(
            (item: any, index: number) => {
              return (
                <div
                  key={index}
                  className={
                    comState.selectTierId === index ? style.activeCircle : "d"
                  }
                  onClick={(e: any) => {
                    setComState((prevState: any) => ({
                      ...prevState,
                      selectTierId: index,
                    }));
                  }}
                >
                  {item}
                </div>
              );
            }
          )}
        </div>
        {/* current-rate : title */}
        {/* current rate input */}
        <div className={style.cr_topdesc}>ROI at Current Rates</div>
        <div className={style.fi_input}>
          <input type="text" placeholder="0.000 USD" />
        </div>
        {/* current rate info */}
        <div className={style.sid}>{"~ CAKE 0.000 + 0.000000 DON"}</div>
        {/* hide details info */}
        <div
          className={style.hd_toggler}
          onClick={(e: any) => {
            setComState((prevState: any) => ({
              ...prevState,
              isDetailsHided: !prevState.isDetailsHided,
            }));
          }}
        >
          Hide Details <RiArrowUpSLine />
        </div>
        {/* apy info : title*/}
        {comState.isDetailsHided && (
          <>
            <div className={style.apy_title}>
              <div className={style.apy_title_text}>APY</div>
              <div className={style.apy_title_per}>{"90.0%"}</div>
            </div>
            {/* apy info : list */}
            <div className={style.apy_list}>
              {[
                "Calulated based on current rates",
                "All figures are estimates provided for your convenience only, and means represent guranteed returns.",
              ].map((e: any, i: number) => {
                return <div key={i}>{e}</div>;
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MainComponent;
