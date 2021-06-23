import { IChoiceGroupOption, IDropdownOption, PrimaryButton, Stack } from "@fluentui/react";
import * as React from "react";
/* global console */

export const SolutionRequestPage: React.FC = () => {
    const name = "jksdvsd89vsljk";
    const accuracy = "hdhdsf98sd98sd";
    //const [selectedKey, setSelectedKey] = React.useState<string | undefined>("B");

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
            <div className="center ms-font-xl ms-fontWeight-bold">Solution Request</div>
            <div className="ms-fontWeight-semibold">Solution Request Uuid: {name}</div>
            <div className="ms-fontWeight-semibold">Solution Uuid: {accuracy}%</div>
            <PrimaryButton text="Create Solution" onClick={onPredict} />
        </Stack>
    );
};
