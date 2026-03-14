import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import bot from "./assets/bot.png";
import people from "./assets/people.png";

function App() {
  const chatData = [
    { message: "Hi! How are you", sender: "user", id: crypto.randomUUID() },
    { message: "Fine! How are you", sender: "bot", id: crypto.randomUUID() },
    {
      message: "I have a question for you",
      sender: "user",
      id: crypto.randomUUID(),
    },
    { message: "Sure! i can answer", sender: "bot", id: crypto.randomUUID() },
  ];

  const [chat, setChat] = useState(chatData);

  function addOne() {
    return setChat([
      ...chat,
      { message: "Lets Begin!", sender: "user", id: crypto.randomUUID() },
    ]);
  }

  function SearchBar() {
    return (
      <>
        <input type="text"></input>
      </>
    );
  }

  function Comp() {
    return chat.map((item) => {
      if (item.sender == "user") {
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={people}
              alt="bot"
              height={50}
              style={{ marginRight: "8px" }}
            />
            <p style={{ margin: 0 }}>{item.message}</p>
          </div>
        );
      } else {
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ margin: 0, marginRight: "8px" }}>{item.message}</p>
            <img src={bot} alt="bot" height={50} />
          </div>
        );
      }
    });
  }

  function Landing() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("http://localhost:8080/api/landing")
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error(error));
    }, []);

    return (
      <div>
        <h2>Landing List</h2>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <>
      {/* <SearchBar />
      <button onClick={addOne}>Send</button>
      <Comp /> */}
      <Landing></Landing>
    </>
  );
}

export default App;
