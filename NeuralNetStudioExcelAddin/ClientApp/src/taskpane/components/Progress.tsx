import * as React from "react";
import { Spinner, SpinnerSize } from "office-ui-fabric-react";

export interface ProgressProps {
  message: string;
}

export default class Progress extends React.Component<ProgressProps> {
  render() {
    const { message } = this.props;

    return (
      <section className="ms-welcome__progress ms-u-fadeIn500">
        <Spinner size={SpinnerSize.large} label={message} />
      </section>
    );
  }
}
