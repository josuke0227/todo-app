import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../css/app.css";
import { filterTodoBySelector } from "../util/filterTodoBySelector.js";
import Selector from "./Selector";
import Form from "./Form";
import Table from "./Table";
import SelectedContext from "../contexts/SelectedContext";
import EventHandlingContext from "../contexts/EventHandlingContext";
import Footer from "./Footer";

const Container = styled.div`
  margin: 0 5vw;

  @media (min-width: 1000px) {
    margin: 0 25vw;
  }
`;

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [selected, setSelected] = useState("all");
  const [editing, setEditing] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (!data) return;
    setTodos(data);
  }, []);

  useEffect(() => {
    const data = [...todos];
    localStorage.setItem("todos", JSON.stringify(data));
  }, [todos]);

  function handleCheckBoxChange(todo) {
    const currentTodos = [...todos];
    const index = currentTodos.indexOf(todo);
    currentTodos[index].isActive = !currentTodos[index].isActive;
    setTodos(currentTodos);
  }

  function handleDeleteIconClick(todo) {
    let currentTodos = [...todos];
    if (todo !== undefined) {
      const index = currentTodos.indexOf(todo);
      currentTodos.splice(index, 1);
      setTodos(currentTodos);
      return;
    }

    currentTodos = [];
    setTodos(currentTodos);
  }

  function handleSelectorClick(e) {
    setSelected(e.target.id);
  }

  function onInputChange(e) {
    setTodo(e.target.value);
  }

  function handleAdd(e) {
    e.preventDefault();
    if (!todo && !editing) return;

    let currentTodos = [...todos];

    if (editing) {
      if (!todo) {
        setEditing("");
        return;
      }

      const index = currentTodos.indexOf(editing);
      currentTodos[index].todo = todo;
      setTodos(currentTodos);
      setTodo("");
      setEditing("");
      return;
    }

    const newTodo = {
      id: currentTodos.length + 1,
      todo,
      isActive: true,
    };
    currentTodos.push(newTodo);
    setTodos(currentTodos);
    setTodo("");
  }

  function handleEditIconClick(todo) {
    const currentTodos = [...todos];
    const index = currentTodos.indexOf(todo);
    const value = currentTodos[index].todo;
    setEditing(todo);
    setTodo(value);
  }

  return (
    <EventHandlingContext.Provider
      value={{
        handleCheckBoxChange,
        handleDeleteIconClick,
        handleEditIconClick,
      }}
    >
      <SelectedContext.Provider value={selected}>
        <Container id="container">
          <h1
            className="mt-2"
            style={{ fontWeight: "500", textAlign: "center" }}
          >
            #todo
          </h1>
          <Selector handleSelectorClick={handleSelectorClick} />
          <Form
            onInputChange={onInputChange}
            todo={todo}
            handleAdd={handleAdd}
            selected={selected}
            editing={editing}
          />
          <Table
            selected={selected}
            todos={filterTodoBySelector(todos, selected)}
            handleCheckBoxChange={handleCheckBoxChange}
            handleDeleteIconClick={handleDeleteIconClick}
          />
          <Footer />
        </Container>
      </SelectedContext.Provider>
    </EventHandlingContext.Provider>
  );
}
