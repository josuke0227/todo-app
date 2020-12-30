import React from "react";
import DeleteAllButton from "./DeleteAllButton";
import Todo from "./Todo";
import styled from "styled-components";

const TableWrapper = styled.div`
  height: 60vh;
  overflow: scroll;
`;

export default function Table({ todos }) {
  return (
    <TableWrapper id="table" className="mt-2" style={{ height: "60vh" }}>
      {todos.map((todo, index) => {
        return <Todo todo={todo} index={index} key={index} />;
      })}
      <DeleteAllButton />
    </TableWrapper>
  );
}
