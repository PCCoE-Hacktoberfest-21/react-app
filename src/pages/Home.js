import { React, useState, useEffect } from "react";
import axios from "axios";
import { Card, Avatar } from "antd";
import "antd/dist/antd.css";
import "../styles/Home.css";

const { Meta } = Card;

const Home = () => {

  const [users, setUsers] = useState([]);
  const [renders, setRenders] = useState(0)
  const [default_users, setDefault_users] = useState([])
  let rule

  const getUsers = () => {
    axios.get("https://randomuser.me/api/?results=30&nat=us").then(
      (response) => {
        setDefault_users(response.data.results)
        setUsers(response.data.results);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    getUsers();
  }, []);

  const FilterRules = value => {

    if (rule === "male" && value.gender === "male") {
      return value
    }

    else if (rule === "female" && value.gender === "female") {
      return value
    }

  }

  return (
    <div className="home">
      <select id="Filter-rules" onChange={e => {
        rule = e.target.value

        if (rule === "null") {
          setUsers(default_users)
        }

        else {

          setRenders(renders + 1)
          
          if (renders === 1) {
            if (rule === "ascending") {
              setUsers(users.slice().sort((a, b) => a.dob.age - b.dob.age))
            }

            else if (rule === "descending") {
              setUsers(users.slice().sort((a, b) => b.dob.age - a.dob.age))
            }

            else {
              setUsers(users.filter(FilterRules))
            }

          }
          else {
            if (rule === "ascending") {
              setUsers(default_users.slice().sort((a, b) => a.dob.age - b.dob.age))
            }

            else if (rule === "descending") {
              setUsers(default_users.slice().sort((a, b) => b.dob.age - a.dob.age))
            }

            else {
              setUsers(default_users.filter(FilterRules))
            }

          }
        }
      }}>
        <option value="null">No-rules</option>
        <option value="male">Only male</option>
        <option value="female">Only female</option>
        <option value="ascending">Age-ascending</option>
        <option value="descending">Age-descending</option>
      </select>
      <div className="user-cards-section">
        {users.map((user, index) => (
          <div key={index}>
            <Card className="user-card" hoverable style={{ height: "230px" }}>
              <Meta
                className="user-card-info"
                avatar={<Avatar size={70} src={user.picture.medium} />}
                title={user.name.first + " " + user.name.last}
                description={<div><h5>I live in {user.location.city}</h5><h5>I am {user.dob.age} years old</h5><h5>Contact me {user.phone}</h5></div>}
              />
              <br />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
