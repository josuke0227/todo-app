import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 80%;
  height: -webkit-fill-available;
  border-radius: 12px;
  border: 1px solid #bdbdbd;
  padding-left: 1vw;

  :focus {
    outline: none;
  }
`;

const StyledButton = styled.button`
  width: 16%;
  margin-left: 4%;
  height: -webkit-fill-available;
  border-radius: 12px;
  background-color: ${(props) =>
    !props.editing ? "var(--btn-primary)" : "#3fb618"};
  color: #fff;
  border: none;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  height: 7vh;
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
      <InputWrapper id="input" className="mt-2">
        <form onSubmit={handleAdd} style={{ height: "6vh" }}>
          <StyledInput
            type="text"
            placeholder="add details"
            onChange={onInputChange}
            value={todo}
          />
          <StyledButton editing={editing}>
            {!editing ? "Add" : "Done"}
          </StyledButton>
        </form>
      </InputWrapper>
    )
  );
}
