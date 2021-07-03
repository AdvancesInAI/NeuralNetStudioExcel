import { PrimaryButton, Stack, Checkbox, Link } from "@fluentui/react";
import { TextField } from "@fluentui/react/lib/TextField";
import * as React from "react";
import { showNotification } from "../../neural_net_studio/utils"
import { getTheme } from '@fluentui/react';
/* global console */

export const SolutionPage: React.FC = () => {
  const name = "Rossman Stores";
  const solutionUuid = "567";
  const modelUuid = "890";
  const accuracy = 97.4;
  const selectedRange = "";  
  const [choice, setChoice] = React.useState<string | undefined>(undefined);

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
        
        for (let sampleIndex = 0; sampleIndex < row.rowCount; sampleIndex++) { 
          let rowIndex = row.rowIndex+row.rowCount-1+sampleIndex;
          let predictionColumnIndex = row.columnIndex+row.columnCount-1;
          predictionColumnIndex = 9
          const predictionCell = sheet.getRangeByIndexes(rowIndex, predictionColumnIndex, 1, 1);
          predictionCell.values = [[5]];
          predictionCell.format.autofitColumns();
          
          let confidenceColumnIndex = 10;
          const confidenceCell = sheet.getRangeByIndexes(rowIndex, confidenceColumnIndex, 1, 1);
          confidenceCell.values = [[93]];
        }
    
        await context.sync();
      });
  };

  const onChangeModel = () => {
    console.log("onChangeModel");
  };

//   const toggleFeatureImportance = () => {
function toggleFeatureImportance(ev?: React.FormEvent<HTMLElement | HTMLInputElement>, isChecked?: boolean){
      Excel.run(async (context) => {
        // const sheet = context.workbook.worksheets.getItem("Sheet1");
        var sheet = context.workbook.worksheets.getActiveWorksheet();
        sheet.load("name");
        await context.sync();

        let comments = context.workbook.comments;     
        
        // let columnImportance: [string, number];
        // columnImportance = ["G", 4];

        let columnImportances = [["F", 10], ["C", 8, "Week"], ["H", 7]]
        
        for (const columnImportance of columnImportances as const) {          
          let columnAddress = `${columnImportance[0]}:${columnImportance[0]}`;
          const column = sheet.getRange(columnAddress);
          let commentAddress = `${sheet.name}!${columnImportance[0]}1`;
          let featureImportance = columnImportance[1];
          let featureImportanceNote = null;
          if(columnImportance.length>2)
          {
            featureImportanceNote = columnImportance[2];
          }
          if(isChecked == true)
          {
            format_fi_column(column, comments, commentAddress, featureImportance, featureImportanceNote)
          }
          else
          {
            clear_column_formating(column, comments, commentAddress)
          }
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
let theme = getTheme();
let columnColors = {
  10: theme.palette.red,
  9: theme.palette.orangeLight,
  8: theme.palette.yellowLight,
  7: theme.palette.greenLight,
  6: theme.palette.blueLight,
  5: theme.palette.purpleLight,
}

function format_fi_column(column: Excel.Range, comments: Excel.CommentCollection, commentAddress: string, featureImportance: any, featureImportanceNote?: string) {
  let columnColor = columnColors[featureImportance];
  column.format.fill.color = columnColor;  
  column.format.font.color = "white";
  let commentText = `Feature Importance: ${featureImportance}`;
  if (featureImportanceNote != null) {
    commentText = `Feature Importance: ${featureImportance} (${featureImportanceNote})`;
  }
  comments.add(commentAddress, commentText);
}

function clear_column_formating(column: Excel.Range, comments: Excel.CommentCollection, commentAddress: string) {
  column.format.fill.clear();
  column.format.font.color = "black";
  comments.getItemByCell(commentAddress).delete();
}

