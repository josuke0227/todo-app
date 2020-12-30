import React from "react";
import styled from "styled-components";

const StyledDeleteIcon = styled.i`
  margin-left: auto;
  margin-right: 1vw;
  color: #bdbdbd;
  cursor: pointer;
`;

export default function Icon({ todo, type, onClickEvent }) {
  return (
    <StyledDeleteIcon
      className="material-icons"
      onClick={() => onClickEvent(todo)}
    >
      {type}
    </StyledDeleteIcon>
  );
}
