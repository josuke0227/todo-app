import React from "react";
import styled from "styled-components";
import SelectorLabel from "./SelectorLabel";

const SelectBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  border-bottom: 1px solid #bdbdbd;
  cursor: pointer;
`;

const selectorContents = [
  { id: "all", label: "ALL" },
  { id: "active", label: "Active" },
  { id: "completed", label: "Completed" },
];

export default function Selector({ handleSelectorClick, selected }) {
  return (
    <SelectBar id="selector" className="mt-2">
      {selectorContents.map((c, index) => {
        return (
          <SelectorLabel
            key={index}
            index={index}
            content={c}
            handleSelectorClick={handleSelectorClick}
          />
        );
      })}
    </SelectBar>
  );
}
