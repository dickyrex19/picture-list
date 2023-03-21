import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;

  const [userDetail, setUserDetail] = useState([]);
  const [imgData, setImgData] = useState([]);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [city, setCity] = useState();
  const [company, setCompany] = useState();
  const [imgUrl, setImgUrl] = useState();

  const getUserData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUserDetail(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getUserData();
  }, []);

  const getImage = () => {
    axios
      .get("/db/users-picture.json")
      .then((res) => {
        setImgData(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getImage();
  }, []);

  useEffect(() => {
    const filterUserById = userDetail.find((el) => el.id == id);
    const filterImgById = imgData.find((el) => el.id == id);
    if (filterUserById && filterImgById) {
      setName(filterUserById.name);
      setEmail(filterUserById.email);
      setCity(filterUserById.address.city);
      setCompany(filterUserById.company.name);
      setImgUrl(filterImgById.imgUrl);
    }
  }, [userDetail]);

  return (
    <>
      <h1 className="text-4xl text-center my-4 font-semibold">
        User Detail Page
      </h1>
      <div className="flex flex-col justify-center items-center">
        <img className="rounded-full mb-3" src={imgUrl} alt="user image" />
        <h1 className="text-xl font-semibold">Name: {name}</h1>
        <div>Email: {email}</div>
        <div>City: {city}</div>
        <div>Company: {company}</div>
      </div>
    </>
  );
}
