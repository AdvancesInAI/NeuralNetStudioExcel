import { PrimaryButton, Stack, TextField } from "@fluentui/react";
import * as React from "react";
/* global console */

export const SolutionRequestPage: React.FC = () => {
  const requestUuid = "jksdvsd89vsljk";
  //   const solutionUuid = "hdhdsf98sd98sd";
  //const [selectedKey, setSelectedKey] = React.useState<string | undefined>("B");

  const onCreate = () => {
    console.log("onCreate");
  };

  return (
    <Stack tokens={{ childrenGap: 10 }}>
      <div className="center ms-font-xl ms-fontWeight-bold">Solution Request</div>
      <div className="ms-fontWeight-semibold">Solution Request Uuid: {requestUuid}</div>
      <TextField label="Solution Uuid:" placeholder="Fill in when email is received" />
      <PrimaryButton text="Create Solution" onClick={onCreate} />
    </Stack>
  );
};
