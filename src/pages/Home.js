import { React, useState, useEffect } from "react";
import axios from "axios";
import { Card, Avatar } from "antd";
import "antd/dist/antd.css";
import "../styles/Home.css";

const { Meta } = Card;

const Home = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios.get("https://randomuser.me/api/?results=30&nat=us").then(
      (response) => {
        var result = response.data;
        console.log(result);
        setUsers(result.results);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="user-cards-section">
        {users.map((user, index) => (
          <>
            <Card className="user-card">
              <Meta
                className="user-card-info"
                avatar={<Avatar size={72} src={user.picture.medium} />}
                title={user.name.first + " " + user.name.last}
                description={"I live in " + user.location.city}
              />
            </Card>
          </>
        ))}
      </div>
    </>
  );
};

export default Home;
