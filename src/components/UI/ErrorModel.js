import React, { Fragment } from "react";
import Button from "./Button";
import styles from "./ErrorModel.module.css";
import Card from "../UI/Card";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onOkay}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onOkay}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModel = (props) => {
  return (
    <Fragment>
      {/* <div className={styles.backdrop} onClick={props.onOkay}></div> */}
      {/* <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onOkay}>Okay</Button>
        </footer>
      </Card> */}
      {ReactDOM.createPortal(
        <Backdrop onOkay={props.onOkay} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onOkay={props.onOkay}
        ></ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ErrorModel;
