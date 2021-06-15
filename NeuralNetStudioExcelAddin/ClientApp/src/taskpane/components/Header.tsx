import { ContextualMenu, IconButton, MessageBar, MessageBarType } from "office-ui-fabric-react";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IFormState } from "../store/appTypes";
import { resetMessages, setHomeForm } from "../store/formStore";
import { RootState } from "../store/store";
/* global console, document */

export const Header: React.FC = () => {
  const linkRef = React.useRef(null);
  const [showContextualMenu, setShowContextualMenu] = React.useState(false);
  const onShowContextualMenu = () => setShowContextualMenu(true);
  const onHideContextualMenu = () => setShowContextualMenu(false);

  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form) as IFormState;

  // const onGoHome = e => {
  //   e.preventDefault();
  //   console.log("onGoHome");
  //   dispatch(setHomeForm());
  // };

  const onLogOut = () => {
    // clearAppID();
    dispatch(setHomeForm());
  };

  const onHelp = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "https://help.com";
    downloadLink.target = "_blank";
    document.body.appendChild(downloadLink);

    downloadLink.click();
  };

  const onResetMessage = () => {
    console.log("onResetMessage");
    dispatch(resetMessages());
  };

  const menuItems = [
    {
      key: "help",
      text: "Help",
      iconProps: { iconName: "Help" },
      onClick: onHelp,
    },
    {
      key: "logOut",
      text: "Log Out",
      iconProps: { iconName: "SignOut" },
      onClick: onLogOut,
    },
  ];

  return (
    <div className="header">
      <div ref={linkRef} className="top-left">
        <IconButton
          iconProps={{ iconName: "CollapseMenu" }}
          onClick={onShowContextualMenu}
          style={{ paddingLeft: 0, borderLeftWidth: 0 }}
        ></IconButton>
        <ContextualMenu
          items={menuItems}
          hidden={!showContextualMenu}
          target={linkRef}
          onItemClick={onHideContextualMenu}
          onDismiss={onHideContextualMenu}
          coverTarget={false}
        />
      </div>
      {/* <div className="header-text">{_prop.message}</div> */}
      {/* <a href="#" onClick={onGoHome}>
        <img className="header-image" src={_prop.logo} alt={_prop.title} title={_prop.title} />
      </a> */}
      {formState.message?.length > 0 && (
        <div className="width-100">
          <MessageBar
            messageBarType={MessageBarType.info}
            isMultiline={false}
            onDismiss={onResetMessage}
            dismissButtonAriaLabel="Close"
            truncated={true}
            className="width-100"
          >
            {formState.message}
          </MessageBar>
        </div>
      )}
      {formState.errorMessage?.length > 0 && (
        <div className="width-100">
          <MessageBar
            messageBarType={MessageBarType.error}
            isMultiline={false}
            onDismiss={onResetMessage}
            dismissButtonAriaLabel="Close"
            truncated={true}
            className="width-100"
          >
            {formState.errorMessage}
          </MessageBar>
        </div>
      )}
    </div>
  );
};
