import React, { useState, useEffect } from "react";
import "./Main.css";
import { Card } from "@material-ui/core";
import Food from "./Food";
import { useStateValue } from "./StateProvider";
import { Link, useParams } from "react-router-dom";
import { db } from "./firebase";

function Main() {
  const [{ basket }] = useStateValue();
  const { categoryId } = useParams();
  const [categoryName, setCategoryName] = useState("");
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    if (categoryId) {
      const unsubscribe = db
        .collection("categories")
        .doc(categoryId)
        .onSnapshot((snapshot) => setCategoryName(snapshot.data().name));

      db.collection("categories")
        .doc(categoryId)
        .collection("food")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setFoods(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          )
        );

      return () => {
        unsubscribe();
      };
    }
  }, [categoryId]);

  return (
    <Card className="main">
      <div className="main__header">
        <h2>{categoryName}</h2>
        <Link to="/checkout">
          {basket.length > 0 && (
            <p>
              Checkout <strong>{basket.length}</strong>
            </p>
          )}
        </Link> 
      </div>
      <div className="main__favorites">
        {foods.map(({ id, data }) => (
          <Food
            id={id}
            img={data.photo}
            name={data.name}
            description={data.description}
            price={data.price}
          />
        ))}
      </div>
    </Card>
  );
}

export default Main;
