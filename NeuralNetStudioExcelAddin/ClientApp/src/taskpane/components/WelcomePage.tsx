import { IStackTokens, PrimaryButton, Separator, Stack } from "office-ui-fabric-react";
import * as React from "react";
/* global console */

export const WelcomePage: React.FC = () => {
  const onSignIn = () => {
    console.log("onSignIn");
  };

  const onSignUp = () => {
    console.log("onSignUp");
  };

  const stackTokens: IStackTokens = { childrenGap: 10 };

  return (
    <div className="ms-welcome__main">
      <Stack tokens={stackTokens}>
        <div className="center">
          <h2 className="ms-font-xl ms-fontWeight-bold">Welcome to Advance in AI Neural Net Studio</h2>
        </div>
        <div className="ms-fontWeight-semibold">If you are already registered to use the API, sign in at:</div>
        <div className="ms-fontWeight-regular">Name: User Name </div>
        <div className="ms-fontWeight-regular">Organisation: Org Name </div>
        <PrimaryButton text="Sign In" onClick={onSignIn} />
        <Separator />
        <div className="ms-fontWeight-semibold">If you are not registered to use the API, sign up:</div>
        <PrimaryButton text="Sign Up" onClick={onSignUp} />
      </Stack>
    </div>
  );
};

//iconProps={{ iconName: "Signin" }}
