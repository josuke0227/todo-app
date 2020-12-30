import React, { useContext } from "react";
import Checkbox from "./Checkbox";
import Icon from "./Icon";
import styled from "styled-components";
import SelectedContext from "../contexts/SelectedContext";
import EventHandlingContext from "../contexts/EventHandlingContext";

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4vh;
`;

const TodoTextWrapper = styled.div`
  text-decoration: ${(props) => props.isActive === false && "line-through"};
  font-weight: 500;
`;

export default function Todo({ todo }) {
  const selected = useContext(SelectedContext);
  const { handleDeleteIconClick, handleEditIconClick } = useContext(
    EventHandlingContext
  );

  return (
    <ItemWrapper id="todo-item">
      <Checkbox todo={todo} />
      <TodoTextWrapper isActive={todo.isActive} className="ml-mm">
        {todo.todo}
      </TodoTextWrapper>

      {selected === "completed" ? (
        <Icon
          todo={todo}
          onClickEvent={handleDeleteIconClick}
          type="delete_outline"
        />
      ) : (
        todo.isActive && (
          <Icon todo={todo} onClickEvent={handleEditIconClick} type="create" />
        )
      )}
    </ItemWrapper>
  );
}
