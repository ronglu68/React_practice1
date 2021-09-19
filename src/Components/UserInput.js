import { useState } from "react";
// import {User } from '../Model/User';
import Card from "./UI/Card";
import classes from "./UserInput.module.css";
import Button from "./UI/Button";
import ErrorModal from "./UI/ErrorModal";

const UserInput = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if(name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).'
      });
      return ;
    }

    if (+age < 1) {
      setError ({
        title:  'Invalid age',
        message: 'pleae enter a valid age (> 0).'
      });
      return ;
    }
    console.log(name);
    console.log(age);
    // let user1 = new User(name, age);
    props.onAddUser({ name: name, age: age });
    setName("");
    setAge("");
  };

  const userNameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
    { error&& <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} /> }
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label className={classes.label} htmlFor="username">
          Username
        </label>
        <input
          id="username"
          type="text"
          value={name}
          onChange={userNameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          min="0"
          value={age}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
    </div>
  );
};

export default UserInput;
