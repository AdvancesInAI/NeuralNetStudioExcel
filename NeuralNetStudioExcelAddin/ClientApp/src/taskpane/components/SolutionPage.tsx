import { ChoiceGroup, Dropdown, IChoiceGroupOption, IDropdownOption, PrimaryButton, Stack } from "@fluentui/react";
import * as React from "react";
/* global console */

export const SolutionPage: React.FC = () => {
  const name = "Rossman stores";
  const accuracy = 97.4;
  const [selectedKey, setSelectedKey] = React.useState<string | undefined>("B");

  const onChange = React.useCallback((_ev: React.SyntheticEvent<HTMLElement>, option: IChoiceGroupOption) => {
    setSelectedKey(option.key);
  }, []);

  const onPredict = () => {
    console.log("onPredict");
  };

  const options: IChoiceGroupOption[] = [
    { key: "workbook", text: "Workbook" },
    { key: "worksheet", text: "Worksheet" },
    { key: "range", text: "Selected range" },
  ];

  const sheetOptions: IDropdownOption[] = [
    { key: "apple", text: "Apple" },
    { key: "banana", text: "Banana" },
    { key: "grape", text: "Grape" },
    { key: "broccoli", text: "Broccoli" },
  ];

  return (
    <Stack tokens={{ childrenGap: 10 }}>
      <div className="center ms-font-xl ms-fontWeight-bold">Solution</div>
      <div className="ms-fontWeight-semibold">Name: {name}</div>
      <div className="ms-fontWeight-semibold">Accuracy: {accuracy}%</div>
      <ChoiceGroup selectedKey={selectedKey} options={options} onChange={onChange} label="Predict data:" />
      <Dropdown placeholder="Choose worksheets" label="List of worksheets" options={sheetOptions} />
      <PrimaryButton text="Predict" onClick={onPredict} />
    </Stack>
  );
};
