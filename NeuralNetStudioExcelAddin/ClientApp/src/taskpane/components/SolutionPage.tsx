import { PrimaryButton, Stack, Checkbox } from "@fluentui/react";
import { TextField } from "@fluentui/react/lib/TextField";
import * as React from "react";
import { showNotification } from "../../neural_net_studio/utils"
/* global console */

export const SolutionPage: React.FC = () => {
  const name = "Rossman Stores";
  const solutionUuid = "567";
  const modelUuid = "890";
  const accuracy = 97.4;
  const selectedRange = "";
  // const [selectedKey, setSelectedKey] = React.useState<string | undefined>("B");

  // const onChange = React.useCallback((_ev: React.SyntheticEvent<HTMLElement>, option: IChoiceGroupOption) => {
  //   setSelectedKey(option.key);
  // }, []);

//   function displaySelectedCells() {
//     Office.context.document.getSelectedDataAsync(
//         Office.CoercionType.Text,
//         null,
//         function (result) {
//             if (result.status === Office.AsyncResultStatus.Succeeded) {
//                 showNotification('The selected text is:', '"' + result.value + '"');
//             } else {
//                 showNotification('Error', result.error.message);
//             }
//         });
// }

// function onPredict() {
//   Excel.run(function (context) {

//       // TODO1: Queue table creation logic here.

//       // TODO2: Queue commands to populate the table with data.

//       // TODO3: Queue commands to format the table.

//       return context.sync();
//   })
//   .catch(function (error) {
//       console.log("Error: " + error);
//       if (error instanceof OfficeExtension.Error) {
//           console.log("Debug info: " + JSON.stringify(error.debugInfo));
//       }
//   });
// }

  const onPredict = () => {
    console.log("onPredict");
    Excel.run(async (context) => {
        // context.workbook.worksheets.getItemOrNullObject("Sample").delete();
        const sheet = context.workbook.worksheets.getActiveWorksheet();
        const row = context.workbook.getSelectedRange();
        row.load("rowIndex");
        row.load("columnIndex");
        row.load("rowCount");
        row.load("columnCount");
        await context.sync();
        const cell = sheet.getRangeByIndexes(row.rowIndex+row.rowCount-1, row.columnIndex+row.columnCount-1, 1, 1);
        // const cell = sheet.getRangeByIndexes(10, 12, 1, 1);
        cell.values = [[5]];
        cell.format.autofitColumns();
    
        await context.sync();
      });
  };

  const onChangeModel = () => {
    console.log("onChangeModel");
  };

//   const toggleFeatureImportance = () => {
function toggleFeatureImportance(ev?: React.FormEvent<HTMLElement | HTMLInputElement>, isChecked?: boolean){
      Excel.run(async (context) => {
        const sheet = context.workbook.worksheets.getItem("Sheet1");
        const column = sheet.getRange("G:G");        
        let commentAddress = "Sheet1!G1";
        if(isChecked == true)
        {
            column.format.fill.color = "7799ff";
            column.format.font.color = "white";

            let comments = context.workbook.comments;
            let comment = comments.add(commentAddress, "Feature Importance: 4");
        }
        else
        {
            // column.format.fill.pattern = null;
            column.format.fill.clear();
            column.format.font.color = "black";

            let comments = context.workbook.comments;
            comments.getItemByCell(commentAddress).delete();
        }
            await context.sync();
        });
  };

  return (
    <Stack tokens={{ childrenGap: 10 }}>
      <div className="center ms-font-xl ms-fontWeight-bold">Solution</div>
      <div className=" ms-font-l ms-fontWeight-semibold">Name: {name}</div>
      <div className=" ms-font-l ms-fontWeight-semibold">Accuracy: {accuracy}%</div>
      <TextField label="Solution UUID:" value={solutionUuid} />
      <TextField label="Model UUID:" value={modelUuid} />
      <PrimaryButton text="Change Model" onClick={onChangeModel} />
      <Checkbox className="ms-font-l" label="Show Feature Importance" onChange={toggleFeatureImportance} />
      <TextField label="Predict Data" value={selectedRange} />
      {/* <ChoiceGroup selectedKey={selectedKey} options={options} onChange={onChange} label="Predict data:" /> */}
      {/* <Dropdown placeholder="Choose worksheets" label="List of worksheets" options={sheetOptions} /> */}
      <PrimaryButton text="Predict" onClick={onPredict} />
    </Stack>
  );
};
