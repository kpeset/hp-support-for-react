import { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

export default function CharacterDetails() {
  const { id } = useParams();
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get(`https://hp-api.onrender.com/api/character/${id}`)
      .then((response) => {
        setData(response.data[0]);
      });
  }, [id]);

  console.log(data);

  return (
    data && (
      <div>
        <p>{data.name}</p>
        <img src={data.image} alt={data.name} />
      </div>
    )
  );
}
