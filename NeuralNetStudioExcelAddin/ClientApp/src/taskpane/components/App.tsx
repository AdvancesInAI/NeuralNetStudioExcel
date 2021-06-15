import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "./Header";
import { WelcomePage } from "./WelcomePage";
import Progress from "./Progress";
import { setAuthAndHomeForm } from "../store/formStore";
import { Fabric, Overlay } from "office-ui-fabric-react";
import { AppScreen, IFormState } from "../store/appTypes";
import { RootState } from "../store/store";
// images references in the manifest
// import "../../../assets/icon-16.png";
// import "../../../assets/icon-32.png";
// import "../../../assets/icon-80.png";
/* global console */
// /* global console, Excel  */
// /* global console, Excel  */

export interface AppProps {
  title: string;
  isOfficeInitialized: boolean;
}

export const App: React.FC<AppProps> = (_prop: AppProps) => {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form) as IFormState;

  console.log("init");

  //load init data
  useEffect(() => {
    console.log("load init data");
    fetchInitData();
  }, []);

  //Check auth and load data
  const fetchInitData = async () => {
    dispatch(setAuthAndHomeForm());

    // const api = "/api/load/";
    // try {
    //   const response = await fetch(api);
    //   const dataText = await response.json();
    //   if (response.status === 200) {
    //     dispatch(setInitAndHomeForm());
    //   } else {
    //     if (dataText) console.log(dataText);
    //     dispatch(setErrorMessage("SERVER ERROR"));
    //   }
    // } catch (error) {
    //   console.log("catch fetchInitData");
    //   if (error) console.log(error);
    //   dispatch(setErrorMessage("SERVER ERROR"));
    // }
  };

  if (!_prop.isOfficeInitialized) {
    return <Progress message="Please sideload your addin to see app body." />;
  }

  const getScreenBytext = (screen: AppScreen) => {
    if (!formState.isInitCalled) {
      return null;
    }

    if (screen == "home") {
      return <WelcomePage></WelcomePage>;
    } else if (screen == "auth") {
      return <WelcomePage></WelcomePage>;
    }

    return null;
  };

  const screen = getScreenBytext(formState.appScreen);

  return (
    <Fabric>
      <div className="sidebar top">
        <Header />
      </div>
      <div className="sidebar content">{screen}</div>
      {formState.isBusy && (
        <Overlay>
          <div
            style={{
              verticalAlign: "middle",
              display: "inline-block",
              height: "100%",
              width: "100%",
              position: "absolute",
              top: "20%",
            }}
          >
            <Progress message="Please wait..." />
          </div>
        </Overlay>
      )}
    </Fabric>
  );
};
