import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
import Wrapper from "../Helpers/Wrapper";

/**
 * Whole componet uses the state when new value is entered in the input box.
 * We store/update value in state each time the key is pressed for input.
 * This is redundunt and we can use ref instead of state when we are only reading the value.
 *
 * Using state is clean but long. While ref is shorter code.
 * States are better when we are resetting the values in input once the form is submitted.
 * Using ref on the other hand, resetting values is tricky as we are directly
 * manipulating the dom. it is not a good practice but for smaller input reset it is okay.
 */
// const AddUser = (props) => {
//   const [enteredUsername, setEnteredUsername] = useState("");
//   const [enteredUserAge, setEnteredUserAge] = useState("");
//   const [error, setError] = useState();
//   const addUserHander = (event) => {
//     event.preventDefault();
//     if (
//       enteredUsername.trim().length === 0 ||
//       enteredUserAge.trim().length === 0
//     ) {
//       setError({
//         title: "Invalid input",
//         message: "Please enter a valid name and age (non-empty values)",
//       });
//       return;
//     }

//     if (+enteredUserAge < 1) {
//       setError({
//         title: "Invalid age",
//         message: "Please enter a valid age (greater than zero)",
//       });
//       return;
//     }
//     console.log(enteredUsername, enteredUserAge);
//     props.onAddUser(enteredUsername, enteredUserAge);
//     setEnteredUsername("");
//     setEnteredUserAge("");
//   };

//   const usernameChangeHandler = (event) => {
//     setEnteredUsername(event.target.value);
//   };

//   const ageChangeHandler = (event) => {
//     setEnteredUserAge(event.target.value);
//   };

//   const errorHandler = () => {
//     setError(null);
//   };

//   return (
//     <Wrapper>
//       {error && (
//         <ErrorModel
//           title={error.title}
//           message={error.message}
//           onOkay={errorHandler}
//         ></ErrorModel>
//       )}
//       <Card className={classes.input}>
//         <form onSubmit={addUserHander}>
//           <label htmlFor="username">UserName</label>
//           <input
//             id="username"
//             type="text"
//             value={enteredUsername}
//             onChange={usernameChangeHandler}
//           />
//           <label htmlFor="age">Age (Years)</label>
//           <input
//             id="age"
//             type="number"
//             value={enteredUserAge}
//             onChange={ageChangeHandler}
//           />
//           <Button type="submit">Add User</Button>
//         </form>
//       </Card>
//     </Wrapper>
//   );
// };

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState();
  const addUserHander = (event) => {
    event.preventDefault();
    const nameInput = nameInputRef.current.value;
    const ageInput = ageInputRef.current.value;
    // console.log(nameInputRef);
    if (nameInput.trim().length === 0 || ageInput.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }

    if (+ageInput < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (greater than zero)",
      });
      return;
    }

    props.onAddUser(nameInput, ageInput);
    // setEnteredUsername("");
    // setEnteredUserAge("");

    /**Do not manipulate dom with ref.
     * But here we are just resetting value.
     */
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredUserAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onOkay={errorHandler}
        ></ErrorModel>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHander}>
          <label htmlFor="username">UserName</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
