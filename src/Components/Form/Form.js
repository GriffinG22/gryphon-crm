import { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredOrg, setEnteredOrg] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const orgChangeHandler = (e) => {
    setEnteredOrg(e.target.value);
  };

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const phoneChangeHandler = (e) => {
    setEnteredPhone(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form-submit");
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input_fields">
        <div className="form_field">
          <label>Name</label>
          <input
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
          ></input>
        </div>

        <div className="form_field">
          <label>Organization</label>
          <input
            type="text"
            value={enteredOrg}
            onChange={orgChangeHandler}
          ></input>
        </div>

        <div className="form_field">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>

        <div className="form_field">
          <label>Phone #</label>
          <input
            type="text"
            value={enteredPhone}
            onChange={phoneChangeHandler}
          ></input>
        </div>

        <div className="form_field">
          <label>Email</label>
          <input
            type="text"
            value={enteredEmail}
            onChange={emailChangeHandler}
          ></input>
        </div>
      </div>

      <div className="form_actions">
        <button>Cancel</button>
        <button type="submit">Add Contact</button>
      </div>
    </form>
  );
};

export default Form;
