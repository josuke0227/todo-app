import React, { useContext } from "react";
import styled from "styled-components";
import SelectedContext from "../contexts/SelectedContext";

const SelectorWrapper = styled.div`
  padding-bottom: 2vh;
  flex: 1;
  text-align: center;
  border-bottom: ${(props) =>
    props.id === props.selected && "5px solid var(--btn-primary)"};
`;

export default function SelectorLabel({ index, content, handleSelectorClick }) {
  const selected = useContext(SelectedContext);

  return (
    <SelectorWrapper
      key={index}
      id={content.id}
      selected={selected}
      onClick={handleSelectorClick}
    >
      {content.label}
    </SelectorWrapper>
  );
}
