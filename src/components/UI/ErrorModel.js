import React from "react";
import Button from "./Button";
import styles from "./ErrorModel.module.css";
import Card from "../UI/Card";
const ErrorModel = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onOkay}></div>
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
    </div>
  );
};

export default ErrorModel;
