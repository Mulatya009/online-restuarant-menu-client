import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { Card } from "@material-ui/core";
import SidebarRow from "./SidebarRow";
import { db } from "./firebase";

function Sidebar() {
  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("categories").onSnapshot((snapshot) =>
      setCategories(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Card className="sidebar">
      <aside>
        <h3 className="sidebar__title">Categories</h3>
        <div className="sidebar__buttons">
          {Categories.map(({ id, data }) => (
            <SidebarRow key={id} id={id} name={data.name} />
          ))}
        </div>
      </aside>
    </Card>
  );
}

export default Sidebar;
