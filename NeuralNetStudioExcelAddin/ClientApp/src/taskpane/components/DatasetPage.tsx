import { DefaultButton, Dropdown, IDropdownStyles, IDropdownOption, PrimaryButton, Stack, TextField } from "@fluentui/react";
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

  const worksheetColumns: IDropdownOption[] = [
    { key: "Store", text: "Store" },
    { key: "DayOfWeek", text: "DayOfWeek" },
    { key: "Date", text: "Date" },
    { key: "Customers", text: "Customers" },
    { key: "Open", text: "Open" },
    { key: "Promo", text: "Promo" },
    { key: "StateHoliday", text: "StateHoliday" },
    { key: "SchoolHoliday", text: "SchoolHoliday" },
    { key: "Sales", text: "Sales" }
  ];

  const missingActions: IDropdownOption[] = [
    { key: "Interpolate", text: "Interpolate" },
    { key: "Delete", text: "Delete" },
    { key: "Constant", text: "Constant" },
  ];


  const dateTypes: IDropdownOption[] = [
    { key: "Boolean", text: "Boolean" },
    { key: "Integer", text: "Integer" },
    { key: "Float", text: "Float" },
    { key: "String", text: "String" },
    { key: "Date", text: "Date" },
    { key: "Categorical", text: "Categorical" },
  ];

  const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: 300 },
  };

  return (
    <Stack tokens={{ childrenGap: 10 }}>
      <div className="center ms-font-xl ms-fontWeight-bold">Dataset</div>
      <TextField label="Name" value="Rossmann" />
      <Dropdown placeholder="Sales" label="Target Column" options={worksheetColumns} defaultSelectedKey="Sales" />
      <Dropdown
        placeholder="Columns to exclude"
        label="Excluded Columns"
        defaultSelectedKeys={["Customers"]}
        multiSelect
        options={worksheetColumns}
        styles={dropdownStyles}
      />
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
            <Dropdown options={dateTypes} defaultSelectedKey="Categorical" />
            <td className="center">?</td>
            <td className="center">?</td>
            <Dropdown options={missingActions} defaultSelectedKey="Interpolate" />
          </tr>
          <tr>
            <td>DayOfWeek</td>
            <Dropdown options={dateTypes} defaultSelectedKey="Categorical" />
            <td className="center">?</td>
            <td className="center">?</td>
            <Dropdown options={missingActions} defaultSelectedKey="Interpolate" />
          </tr>
          <tr>
            <td>Date</td>
            <Dropdown options={dateTypes} defaultSelectedKey="Date" />
            <td className="center">?</td>
            <td className="center">?</td>
            <Dropdown options={missingActions} defaultSelectedKey="Interpolate" />
          </tr>
          <tr>
            <td>Customers</td>
            <Dropdown options={dateTypes} defaultSelectedKey="Integer" />
            <td className="center">?</td>
            <td className="center">?</td>
            <Dropdown options={missingActions} defaultSelectedKey="Interpolate" />
          </tr>
          <tr>
            <td>Store</td>
            <Dropdown options={dateTypes} defaultSelectedKey="Float" />
            <td className="center">?</td>
            <td className="center">?</td>
            <Dropdown options={missingActions} defaultSelectedKey="Interpolate" />
          </tr>
          <tr>
            <td>Open</td>
            <Dropdown options={dateTypes} defaultSelectedKey="Boolean" />
            <td className="center">?</td>
            <td className="center">?</td>
            <Dropdown options={missingActions} defaultSelectedKey="Interpolate" />
          </tr>
          <tr>
            <td>Promo</td>
            <Dropdown options={dateTypes} defaultSelectedKey="Boolean" />
            <td className="center">?</td>
            <td className="center">?</td>
            <Dropdown options={missingActions} defaultSelectedKey="Interpolate" />
          </tr>
          <tr>
            <td>StateHoliday</td>
            <Dropdown options={dateTypes} defaultSelectedKey="Boolean" />
            <td className="center">?</td>
            <td className="center">?</td>
            <Dropdown options={missingActions} defaultSelectedKey="Interpolate" />
          </tr>
          <tr>
            <td>SchoolHoliday</td>
            <Dropdown options={dateTypes} defaultSelectedKey="Boolean" />
            <td className="center">?</td>
            <td className="center">?</td>
            <Dropdown options={missingActions} defaultSelectedKey="Interpolate" />
          </tr>
          <tr>
            <td>Sales</td>
            <Dropdown options={dateTypes} defaultSelectedKey="Float" />
            <td className="center">?</td>
            <td className="center">?</td>
            <Dropdown options={missingActions} defaultSelectedKey="Interpolate" />
          </tr>
        </tbody>
      </table>
      <DefaultButton text="Analyze Dataset" onClick={onAnalyze} />
      <PrimaryButton text="Create Solution" onClick={onCreateSolution} />
    </Stack>
  );
};
