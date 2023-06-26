import Axios from "axios";
import { useEffect, useContext, useState } from "react";
import { Context } from "../../context/Context";
import { apiDomain } from "../../utils/utilsDomain";
import Card from "../cards/Card";

const Cards = () => {
  const { user } = useContext(Context);
  const [cards, setCards] = useState([]);

  const getCards = async () => {
    try {
      const res = await Axios.get(`${apiDomain}/listings`, {
        headers: { Authorization: `${user.token}` },
      });
      setCards(res.data);
    } catch (error) {
      console.log("Error fetching cards:", error);
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <>
      {cards.map((house) => (
        <Card key={house.id} house={house} />
      ))}
    </>
  );
};

export default Cards;
