import React from "react";
import Card from "./Card";
import Button from "./Button";
import Classes from "./ErrorModal.modale.css";
const ErrorModal = (props) => {
  return (
    <Card ClassName={Classes.modal}>
      <header className={Classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={Classes.content}>
        <p> {props.message}</p>
      </div>
      <footer className={Classes.actions}>
        <Button>Okay</Button>
      </footer>
    </Card>
  );
};
export default ErrorModal;
