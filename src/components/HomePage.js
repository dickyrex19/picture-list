import React, { useState, useEffect } from "react";
import CardUser from "./CardUser";
import axios from "axios";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {user.map((el, i) => (
          <div
            className="px-5"
            key={i}
            onClick={() => {
              router.push(`/detail/${el.id}`);
            }}
          >
            <CardUser id={el.id} name={el.name} />
          </div>
        ))}
      </div>
    </>
  );
}
