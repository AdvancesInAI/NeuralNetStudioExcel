import {
  DefaultButton,
  DirectionalHint,
  Dropdown,
  IDropdownStyles,
  IDropdownOption,
  PrimaryButton,
  Stack,
  TextField,
  Callout,
  Link,
} from "@fluentui/react";
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

  const modelTypes: IDropdownOption[] = [
    { key: "Regression", text: "Regression (Predict a numeric value)"}
    { key: "Clustering", text: "Segment (Discover groupings of records)"}
    { key: "Classification", text: "Classification (Put record in a category)"}
  ]

  const worksheetColumns: IDropdownOption[] = [
    { key: "Store", text: "Store" },
    { key: "DayOfWeek", text: "DayOfWeek" },
    { key: "Date", text: "Date" },
    { key: "Customers", text: "Customers" },
    { key: "Open", text: "Open" },
    { key: "Promo", text: "Promo" },
    { key: "StateHoliday", text: "StateHoliday" },
    { key: "SchoolHoliday", text: "SchoolHoliday" },
    { key: "Sales", text: "Sales" },
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

  let datasetExists = false;
  if(datasetExists == false)
  {
    Office.context.ui.displayDialogAsync(
      'https://localhost:3000/dataset-instructions.html',
      {height: 65, width: 45},
    
      // TODO2: Add callback parameter. 
    );
  }

  return (
    <Stack tokens={{ childrenGap: 10 }}>
      <div className="center ms-font-xl ms-fontWeight-bold">Dataset</div>
      <TextField label="Name" value="Rossmann" id="dataset-name" />
      <Dropdown label="Type of Question to Answer" options={modelTypes} defaultSelectedKey="Regression" id="model-type" />
      <Dropdown placeholder="Select a column" label="Column to Predict" options={worksheetColumns} id="predict-column" />
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
      {/* <Callout directionalHintFixed={true}
        className="ms-CalloutExample-callout"
        ariaLabelledBy={"callout-label-1"}
        ariaDescribedBy={"callout-description-1"}
        role={"alertdialog"}
        gapSpace={0}
        target={"#predict-column"}
        directionalHint={DirectionalHint.bottomLeftEdge}
        // directionalHintFixed: {true}
        // onDismiss={this._onCalloutDismiss}
        setInitialFocus={true}
      >
        <div className="ms-CalloutExample-header">
          <p className="ms-CalloutExample-title" id={"callout-label-1"}>
            All of your favorite people
          </p>
        </div>
        <div className="ms-CalloutExample-inner">
          <div className="ms-CalloutExample-content">
            <p className="ms-CalloutExample-subText" id={"callout-description-1"}>
              Message body is optional. If help documentation is available, consider adding a link to learn more at the
              bottom.
            </p>
          </div>
          <div className="ms-CalloutExample-actions">
            <Link className="ms-CalloutExample-link" href="http://microsoft.com">
              Go to microsoft
            </Link>
          </div>
        </div>
      </Callout> */}
    </Stack>
  );
};
