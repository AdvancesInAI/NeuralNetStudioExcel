import * as React from "react";
import { Spinner, SpinnerSize } from "@fluentui/react";

export interface ProgressProps {
  message: string;
}

export default class Progress extends React.Component<ProgressProps> {
  render() {
    const { message } = this.props;

    return (
      <div>
        <Spinner size={SpinnerSize.large} label={message} />
      </div>
    );
  }
}
