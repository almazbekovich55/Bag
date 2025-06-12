import axios from "axios";
import React, { useState } from "react";
import "./Admin.scss";
import { toast, Slide } from "react-toastify";

const Admin = () => {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function addProduct() {
    if (!name || !url || !price) {
      toast.error("🦄 Wow so easy!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    } else {
      const newData = {
        url,
        name,
        price,
      };

      axios.post(
        `https://api-crud.elcho.dev/api/v1/04a12-8a24f-d5d9f/bag`,
        newData
      );
      setName("");
      setUrl("");
      setPrice("");
      toast.success("🦄 Wow so easy!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }
  }

  return (
    <section id="admin">
      <div className="contaoiner">
        <div className="admin">
          <h1>Admin</h1>
          <input
            type="text"
            placeholder="Url"
            onChange={(e) => setUrl(e.target.value)}
            value={url}
          />
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          <button onClick={() => addProduct()}>Add</button>
        </div>
      </div>
    </section>
  );
};

export default Admin;
