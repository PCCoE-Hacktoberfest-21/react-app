import { React, useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { Card, Avatar } from "antd";
import "antd/dist/antd.css";
import "../styles/Home.css";
import PreLoader from "../components/PreLoader";
import InfiniteScroll from "react-infinite-scroll-component";

const { Meta } = Card;

const Home = (props) => {
  const [isLoading, setisLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [renders, setRenders] = useState(0);
  const [default_users, setDefault_users] = useState([]);
  let rule;

  const getUsers = () => {
    axios.get("https://randomuser.me/api/?results=30&nat=us").then(
      (response) => {
        setDefault_users(response.data.results);
        setUsers(response.data.results);
        setisLoading(false);
      },
      (error) => {
        if (renders === 0) {
          setRenders(renders + 1)
          console.log(error);
          setisLoading(false);
        }
      }
    );
  };

  const getmoreUsers = () => {
    setisLoading(true)
    axios.get("https://randomuser.me/api/?results=30&nat=us").then(
      (response) => {
        setDefault_users(prevdata => [...prevdata, ...response.data.results]);
        setUsers(prevdata => [...prevdata, ...response.data.results]);
        setisLoading(false);
      },
      (error) => {
        console.log(error);
        setisLoading(false);
      }
    );
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
    document.title = "Random-Users-Home";
    getUsers();
  }, []);

  console.log(users)

  const FilterRules = (value) => {
    if (rule === "male" && value.gender === "male") {
      return value;
    } else if (rule === "female" && value.gender === "female") {
      return value;
    }
  };

  return (
    <>
      <div className="home">
        <select
          id="Filter-rules"
          onChange={(e) => {
            rule = e.target.value;

            if (rule === "null") {
              if (renders === 1) {
                setRenders(0);
                setUsers(default_users);
              } else if (renders === 0) {
                if (rule === "ascending") {
                  setUsers(users.slice().sort((a, b) => a.dob.age - b.dob.age));
                } else if (rule === "descending") {
                  setUsers(users.slice().sort((a, b) => b.dob.age - a.dob.age));
                } else {
                  setUsers(users.filter(FilterRules));
                }
              } else {
                if (rule === "ascending") {
                  setUsers(
                    default_users.slice().sort((a, b) => a.dob.age - b.dob.age)
                  );
                } else if (rule === "descending") {
                  setUsers(
                    default_users.slice().sort((a, b) => b.dob.age - a.dob.age)
                  );
                } else {
                  setUsers(default_users.filter(FilterRules));
                }
              }
            }
          }}
        >
          <option value="null">No-rules</option>
          <option value="male">Only male</option>
          <option value="female">Only female</option>
          <option value="ascending">Age-ascending</option>
          <option value="descending">Age-descending</option>
        </select>

        <InfiniteScroll
          dataLength={default_users.length}
          next={getmoreUsers}
          hasMore={true}
          loader={<></>}
        >
          <div className="user-cards-section">
            {isLoading ? <PreLoader /> :
              users.map((user, index) => (
                <div key={index}>
                  <Card
                    className="user-card"
                    hoverable
                    style={{ height: "230px" }}
                    data-aos="fade-up"
                  >
                    <Meta
                      className="user-card-info"
                      avatar={<Avatar size={70} src={user.picture.medium} />}
                      title={user.name.first + " " + user.name.last}
                      description={
                        <div>
                          <h5>I live in {user.location.city}</h5>
                          <h5>I am {user.dob.age} years old</h5>
                          <h5>Contact me {user.phone}</h5>
                        </div>
                      }
                    />
                    <br />
                  </Card>
                </div>
              ))}
          </div>
        </InfiniteScroll>

      </div>
    </>
  );
};

export default Home;
