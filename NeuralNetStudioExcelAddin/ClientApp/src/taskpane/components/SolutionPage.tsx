import { DefaultButton, ActionButton, CommandButton, PrimaryButton, Stack, Checkbox, ColorClassNames } from "@fluentui/react";
import { TextField } from "@fluentui/react/lib/TextField";
import * as React from "react";
import { showNotification } from "../../neural_net_studio/utils"
import { getTheme } from '@fluentui/react';
/* global console */

export const SolutionPage: React.FC = () => {
  const name = "Daily Sales";
  const solutionUuid = "990f9beb-39e5-4198-925e-0e39cd1d2e31";
  const modelUuid = "53a4a591-2e60-4e13-96c4-f69fd5f1cd84";
  const accuracy = 97.4;
  const selectedRange = "";  

  const onUpdateSolution = () => {
    // send new actuals to server, add them to dataset, rebuild solution
  }

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
          let rowIndex = row.rowIndex+sampleIndex;
          let predictionColumnIndex = row.columnIndex+row.columnCount-1;
          predictionColumnIndex = 8
          const predictionCell = sheet.getRangeByIndexes(rowIndex, predictionColumnIndex, 1, 1);
          
          let confidenceColumnIndex = 9;
          const confidenceCell = sheet.getRangeByIndexes(rowIndex, confidenceColumnIndex, 1, 1);
          let [values, confidences] = getPredictedValue(rowIndex); 
          predictionCell.values = values;
          confidenceCell.values = confidences;
          
          predictionCell.format.autofitColumns();
          
        }
    
        await context.sync();
      });
  };

  // Open Dialog example https://docs.microsoft.com/en-us/learn/modules/office-add-ins-excel/7-exercise-dialogs
  const showFeatureImportances = () => {
    console.log("showFeatureImportances");
    Office.context.ui.displayDialogAsync(
      'https://localhost:3000/feature-importances.html',
      {height: 45, width: 35},
    
      // TODO2: Add callback parameter.
    );    
  };

  function togglePreProccessedDataSheetVisibility(ev?: React.FormEvent<HTMLElement | HTMLInputElement>, isChecked?: boolean){
    Excel.run(async (context) => {
      // const sheet = context.workbook.worksheets.getItem("Sheet1");
      var sheet = context.workbook.worksheets.getItem("PreProcessedData");
      sheet.load("visibility");
      await context.sync();

      if(isChecked == true)
      {
        sheet.visibility = "Visible";   
      }
      else
      {
        sheet.visibility = "Hidden"
      }
      // let columnImportance: [string, number];
      // columnImportance = ["G", 4];

      await context.sync();
    });
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

        let columnImportances = [["E", 10], ["B", 8, "Week"], ["G", 7]]
        // columnImportances = [["G", 7]]
        
        for (var columnImportance of columnImportances) {          
          let columnAddress = `${columnImportance[0]}:${columnImportance[0]}`;
          const column = sheet.getRange(columnAddress);
          let commentAddress = `'${sheet.name}'!${columnImportance[0]}1`;
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

  const solutionIdSet = (e, value) => {
    let accuracyElement = document.getElementById('model-accuracy');
    accuracyElement.nodeValue = accuracy.toString();
  };

  return (
    <Stack tokens={{ childrenGap: 10 }}>
      <div className="center ms-font-xl ms-fontWeight-bold ms-font-xxl">Solution</div>
      <div className="ms-font-xl ms-fontWeight-semibold">Name: {name}</div>
      <div className="ms-font-xl ms-fontWeight-semibold" id='model-accuracy'>Accuracy: {accuracy} %</div>
      <TextField label="Solution ID:" value={solutionUuid} />
      {/* <div className="ms-Grid" dir="ltr">
        <span className="ms-grid-row"> 
          <span className="ms-grid-col ms-md6 ms-mdPull6">
            <DefaultButton text="Change Solution" onClick={showFeatureImportances} />
            </span>
          <span className="ms-grid-col ms-md6 ms-mdPush6">
            <DefaultButton text="Change Model" onClick={showFeatureImportances} />
            </span>
          </span>
      </div> */}
      {/* <TextField label="Model UUID:" value={modelUuid} /> */}
      {/* <PrimaryButton text="Change Model" onClick={onChangeModel} /> */}
      <br></br>
      <Checkbox className="ms-font-xl" label="Show Most Important Columns" onChange={toggleFeatureImportance} />
      <PrimaryButton className="ms-font-l" text="View Column Importances" onClick={showFeatureImportances} />    
      <br></br>  
      <Checkbox className="ms-font-xl" label="Show PreProcessedData" onChange={togglePreProccessedDataSheetVisibility} />
      {/* <TextField label="Predict Data" value={selectedRange} /> */}
      {/* <ChoiceGroup selectedKey={selectedKey} options={options} onChange={onChange} label="Predict data:" /> */}
      {/* <Dropdown placeholder="Choose worksheets" label="List of worksheets" options={sheetOptions} /> */}
      <br></br>
      <PrimaryButton className="ms-font-l" text="Predict" onClick={onPredict} />
      <br></br>
      <br></br>
      <DefaultButton className={[
        ColorClassNames.greenBackground,
    ColorClassNames.blackBorder,
    ColorClassNames.greenDarkBackgroundHover,
    ColorClassNames.greenDarkBorderHover,
    ColorClassNames.white,
    ColorClassNames.whiteHover,
    "ms-font-l"
  ].join(" ")} text="Update Solution" onClick={onUpdateSolution} />
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
  // column.format.font.color = "white";
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

function getPredictedValue(rowIndex: number): [any, any] {
  let value = [[ Math.floor(Math.random() * (5100 - 4500 + 1)) + 4500]];
  let confidence = [[Math.floor(Math.random() * (97 - 90 + 1)) + 90]];
  switch(rowIndex+1)
  {
    case 7:{
      value = [[3726]];
      confidence = [[93]];
      break;
    case 8:{
      value = [[4189]];
      confidence = [[94]];
      break;
    case 9:{
      value = [[4892]];
      confidence = [[92]];
      break;
    case 10:{
      value = [[4726]];
      confidence = [[93]];
      break;
    case 11:{
      value = [[5147]];
      confidence = [[92]];
      break;
    }
  case 12:{
    value = [[4892]];
    confidence = [[90]];
    break;
  }
    case 13:{
      value = [[5242]];
      confidence = [[95]];
      break;
    }
    case 14:{
      value = [[5586]];
      confidence = [[94]];
      break;
    }
    case 15:{
      value = [[5629]];
      confidence = [[92]];
      break;
    }
    case 16:{
      value = [[]];
      confidence = [[98]];
      break;
    case 17:{
      value = [[5147]];
      confidence = [[92]];
      break;
    }
    case 18:{
      value = [[0]];
      confidence = [[99]];
      break;
    } 
    case 19:{
      value = [[4527]];
      confidence = [[92]];
      break;
    }
    case 20:{
      value = [[5186]];
      confidence = [[97]];
      break;
    }
    case 21:{
      value = [[4057]];
      confidence = [[92]];
      break;
    }
    case 22:{
      value = [[4186]];
      confidence = [[97]];
      break;
    }
    case 23:{
      value = [[4057]];
      confidence = [[92]];
      break;
    }
    case 24:{
      value = [[3979]];
      confidence = [[91]];
      break;
    }
    case 25:{
      value = [[0]];
      confidence = [[93]];
      break;
    }
    case 26:{
      value = [[4735]];
      confidence = [[99]];
      break;
    }
    case 27:{
      value = [[5147]];
      confidence = [[92]];
      break;
    }
    case 28:{
      value = [[3542]];
      confidence = [[90]];
      break;
    }
    case 29:{ //30
      value = [[5087]];
      confidence = [[97]];
      break;
    }
    case 30:{ //31
      value = [[5502]];
      confidence = [[92]];
      break;
    }
    case 31:{
      value = [[5793]];
      confidence = [[91]];
      break;
    }
    // default: {
    //   let rand_val = Math.floor(Math.random() * (5100 - 4500 + 1)) + 4500;
    //   value = [[rand_val]];
    //   let rand_confidence = Math.floor(Math.random() * (97 - 90 + 1)) + 90;
    //   confidence = [[rand_confidence]]
    // }
  }
  return [value, confidence]
}



