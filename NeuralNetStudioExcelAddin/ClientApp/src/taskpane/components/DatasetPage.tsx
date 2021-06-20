import { DefaultButton, Dropdown, IDropdownOption, PrimaryButton, Stack, TextField } from "@fluentui/react";
import * as React from "react";
/* global console */

export const DatasetPage: React.FC = () => {
  const onAnalyze = () => {
    console.log("onAnalyze");
  };

  const onCreateSolution = () => {
    console.log("onCreateSolution");
  };

  // const dropdownStyles: Partial<IDropdownStyles> = {
  //   dropdown: { width: 300 },
  // };

  const options: IDropdownOption[] = [
    { key: "apple", text: "Apple" },
    { key: "banana", text: "Banana" },
    { key: "grape", text: "Grape" },
    { key: "broccoli", text: "Broccoli" },
  ];

  return (
    <Stack tokens={{ childrenGap: 10 }}>
      <div className="center ms-font-xl ms-fontWeight-bold">Dataset</div>
      <TextField label="Name" />
      <Dropdown placeholder="List of Columns" label="Target Columns" options={options} />
      <div className="ms-fontWeight-semibold">Columns:</div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Data Type</th>
            <th>Missing Count</th>
            <th>Missing %</th>
            <th>Missing Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Store</td>
            <td>Integer</td>
            <td>?</td>
            <td>?</td>
            <td>Interpolate</td>
          </tr>
          <tr>
            <td>Store</td>
            <td>Integer</td>
            <td>?</td>
            <td>?</td>
            <td>Interpolate</td>
          </tr>
          <tr>
            <td>Store</td>
            <td>Integer</td>
            <td>?</td>
            <td>?</td>
            <td>Interpolate</td>
          </tr>
        </tbody>
      </table>
      <DefaultButton text="Analyze Dataset" onClick={onAnalyze} />
      <PrimaryButton text="Create Solution" onClick={onCreateSolution} />
    </Stack>
  );
};
