import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "./Header";
import { WelcomePage } from "./WelcomePage";
import Progress from "./Progress";
import { setFormState } from "../store/formStore";
import { Overlay } from "@fluentui/react";
import { AppScreen, IFormState } from "../store/appTypes";
import { RootState } from "../store/store";
import { DatasetPage } from "./DatasetPage";
import { CreateSolutionPage } from "./CreateSolutionPage";
import { SolutionPage } from "./SolutionPage";
import { SolutionRequestPage } from "./SolutionRequestPage";
// images references in the manifest
// import "../../../assets/icon-16.png";
// import "../../../assets/icon-32.png";
// import "../../../assets/icon-80.png";
/* global console */
// /* global console, Excel  */

export interface AppProps {
  isOfficeInitialized: boolean;
}

export const App: React.FC<AppProps> = (_prop: AppProps) => {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form) as IFormState;

  console.log(`init: ${formState.appScreen}: ${_prop.isOfficeInitialized}`);

  //load init data
  useEffect(() => {
    console.log("load init data");
    fetchInitData();
  }, []);

  //Check auth and load data
  const fetchInitData = async () => {
    const newFormState: IFormState = {
      isBusy: false,
      appScreen: "dataset",
      isInitCalled: true,
      authStatus: "NO",
      errorMessage: "",
      message: "",
    };

    dispatch(setFormState(newFormState));
    //dispatch(setCreateSolutionForm());

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

  const getScreenBytext = (screen: AppScreen) => {
    if (!formState.isInitCalled) {
      return null;
    }

    if (screen == "welcome") return <WelcomePage></WelcomePage>;
    if (screen == "auth") return <WelcomePage></WelcomePage>;
    if (screen == "dataset") return <DatasetPage></DatasetPage>;
    if (screen == "createSolution") return <CreateSolutionPage></CreateSolutionPage>;
    if (screen == "solution") return <SolutionPage></SolutionPage>;
    if (screen == "solutionRequest") return <SolutionRequestPage></SolutionRequestPage>;

    return null;
  };

  const screen = getScreenBytext(formState.appScreen);

  return (
    <div>
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
              top: "40%",
            }}
          >
            <Progress message="Please wait..." />
          </div>
        </Overlay>
      )}
    </div>
  );
};
