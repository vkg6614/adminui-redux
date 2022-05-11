import React, { useState } from "react";
import "./Form.css";
import { useDispatch } from "react-redux";
import { addListAction } from "../../redux/actions/actions";
const Form = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const onChangeFormHandle = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
      id: new Date().getTime().toString(),
    });
  };
  const addTodoHandleClicOnSubmit = (e) => {
    e.preventDefault();
    dispatch(addListAction(formData));
  };

  return (
    <form className="form" onSubmit={addTodoHandleClicOnSubmit}>
      <input
        value={formData.name}
        onChange={onChangeFormHandle}
        type="text"
        name="name"
        placeholder="enter name"
      />
      <br />
      <input
        name="email"
        value={formData.email}
        onChange={onChangeFormHandle}
        type="email"
        placeholder="enter email"
      />
      <br />
      <input
        name="role"
        value={formData.role}
        onChange={onChangeFormHandle}
        type="text"
        placeholder="enter role"
      />
      <br />
      <input type="submit" value="SUBMIT" />
    </form>
  );
};

export default Form;
