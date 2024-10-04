import React, { useEffect, useState } from "react";
import axios from "axios";

const OpenAPIList = () => {
  const API_URL = "https://66fa0d90afc569e13a9a42b4.mockapi.io/sample/user";

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(API_URL)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (data.length < 0) {
    return <h1>no data found</h1>;
  } else {
    return (
      <div className="mt-5">
        <table className="table table-striped" style={{fontSize: "0.8rem"}}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, i) => {
              return (
                <tr key={i + 1}>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>

                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default OpenAPIList;