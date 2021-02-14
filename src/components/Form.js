import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 80%;
  height: 50px;
  border-radius: 12px;
  border: 1px solid #bdbdbd;
  padding: 1rem;

  :focus {
    outline: none;
  }
`;

const StyledButton = styled.button`
  width: 16%;
  margin-left: 4%;
  border-radius: 12px;
  background-color: ${(props) =>
    !props.editing ? "var(--btn-primary)" : "#3fb618"};
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 1rem;
`;

export default function Form({
  onInputChange,
  todo,
  handleAdd,
  selected,
  editing,
}) {
  return (
    selected !== "completed" && (
      <div id="input" className="mt-2">
        <form onSubmit={handleAdd}>
          <div>
            <StyledInput
              type="text"
              placeholder="add details"
              onChange={onInputChange}
              value={todo}
            />

            <StyledButton editing={editing}>
              {!editing ? "Add" : "Done"}
            </StyledButton>
          </div>
        </form>
      </div>
    )
  );
}
