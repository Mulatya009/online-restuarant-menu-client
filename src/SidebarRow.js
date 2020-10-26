import React from "react";
import "./SidebarRow.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { Link } from "react-router-dom";

function SidebarRow({ id, selected, name }) {
  return (
    <Link to={`/category/${id}`}>
      <div className={`sidebarRow__button ${selected && "selected"}`}>
        <FiberManualRecordIcon />
        <p> {name}</p>
      </div>
    </Link>
  );
}

export default SidebarRow;
