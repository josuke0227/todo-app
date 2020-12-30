import React, { useContext } from "react";
import styled from "styled-components";
import SelectedContext from "../contexts/SelectedContext";
import EventHandlingContext from "../contexts/EventHandlingContext";

const StyledDeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  color: #fff;
  background-color: var(--btn-danger);
  border: none;
  border-radius: 4px;
  height: 7vh;
  width: 10vw;
  margin-top: 5vh;
  cursor: pointer;
`;

export default function DeleteAllButton() {
  const selected = useContext(SelectedContext);
  const { handleDeleteIconClick } = useContext(EventHandlingContext);

  return (
    selected === "completed" && (
      <StyledDeleteButton onClick={() => handleDeleteIconClick()}>
        <i className="material-icons" style={{ fontSize: "18px" }}>
          delete_outline
        </i>
        <span>Delete all</span>
      </StyledDeleteButton>
    )
  );
}
