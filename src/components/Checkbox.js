import React, { useContext } from "react";
import EventHandlingContext from "../contexts/EventHandlingContext";

export default function Checkbox({ todo }) {
  const { handleCheckBoxChange } = useContext(EventHandlingContext);

  return (
    <input
      checked={!todo.isActive}
      type="checkbox"
      style={{ width: "18px", height: "18px" }}
      onChange={() => handleCheckBoxChange(todo)}
    />
  );
}
