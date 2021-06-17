import { DefaultButton, PrimaryButton, Separator, Stack } from "@fluentui/react";
import * as React from "react";
/* global console */

export const WelcomePage: React.FC = () => {
  const onSignIn = () => {
    console.log("onSignIn");
  };

  const onSignUp = () => {
    console.log("onSignUp");
  };

  return (
    <Stack tokens={{ childrenGap: 10 }}>
      <div className="center ms-font-xl ms-fontWeight-bold">Welcome to Advance in AI Neural Net Studio</div>
      <div className="ms-fontWeight-semibold">If you are already registered to use the API, sign in at:</div>
      <div className="ms-fontWeight-regular">Name: User Name </div>
      <div className="ms-fontWeight-regular">Organisation: Org Name </div>
      <DefaultButton text="Sign In" onClick={onSignIn} />
      <Separator />
      <div className="ms-fontWeight-semibold">If you are not registered to use the API, sign up:</div>
      <PrimaryButton text="Sign Up" onClick={onSignUp} />
    </Stack>
  );
};
