import { connected } from "process";
import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Notification from "./components/Notification";
const getElapsedTime = (dateTime: string) => {
  let currentTime = new Date();
  let givenTime = new Date(dateTime);
  let elapsed = currentTime.getTime() - givenTime.getTime();

  let elapsedSeconds = Math.floor(elapsed / 1000);
  let elapsedMinutes = Math.floor(elapsed / (1000 * 60));
  let elapsedHours = Math.floor(elapsed / (1000 * 60 * 60));
  let elapsedDays = Math.floor(elapsed / (1000 * 60 * 60 * 24));
  console.log(elapsedMinutes, elapsedHours, elapsedDays);
  if (elapsedSeconds <= 60) {
    return `Just now`;
  } else if (elapsedMinutes < 60) {
    return `${elapsedMinutes} minutes ago`;
  } else if (elapsedHours < 24) {
    return `${elapsedHours} hours ago`;
  } else {
    return `${elapsedDays} days ago`;
  }
};

const usersList = [
  {
    Author: "Mark Webber",
    description: "reacted to your recent post",
    link: "My first tournament today!",
    linkSrc: "https://github.com/",
    createdAt: getElapsedTime(new Date().toString()),
    profileImgSrc: "avatar-mark-webber.webp",
    checked: "true",
  },
  {
    Author: "Angela Gray",
    description: "followed you",
    createdAt: getElapsedTime("2023-02-12T02:30:00"),
    profileImgSrc: "avatar-angela-gray.webp",
    checked: "true",
  },
  {
    Author: "Jacob Thompson",
    description: "has joined  your",
    link: "Chess Club",
    linkSrc: "https://github.com/",
    createdAt: getElapsedTime("2023-02-11T02:30:00"),
    profileImgSrc: "avatar-jacob-thompson.webp",
    checked: "true",
  },
  {
    Author: "Rizky Hasanuddin ",
    description: "sent you a private message",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    createdAt: getElapsedTime("2023-02-10T02:30:00"),
    profileImgSrc: "avatar-rizky-hasanuddin.webp",
    checked: "false",
  },
  {
    Author: "Kimberly Smith",
    description: "commented your picture",
    picture: "image-chess.webp",
    createdAt: getElapsedTime("2023-02-09T02:30:00"),
    profileImgSrc: "avatar-kimberly-smith.webp",
    checked: "false",
  },
  {
    Author: "Nathan Peterson",
    description: "reacted to your recent post ",
    link: "5 end-game strategies to increase your win rate",
    linkSrc: "https://github.com/",
    createdAt: getElapsedTime("2023-02-04T02:30:00"),
    profileImgSrc: "avatar-nathan-peterson.webp",
    checked: "false",
  },
  {
    Author: "Anna Kim",
    description: "left the group  ",
    link: "Chess Club",
    linkSrc: "https://github.com/",
    createdAt: getElapsedTime("2023-02-01T02:10:00"),
    profileImgSrc: "avatar-anna-kim.webp",
    checked: "false",
  },
];

function App() {
  const [users, setUsers] = useState(usersList);

  const [notificationChecked, setNotificationChecked] = useState<Number>(0);
  useEffect(() => {
    setNotificationChecked(
      users.filter((item) => JSON.parse(item.checked) === true).length
    );
  }, [notificationChecked]);
  return (
    <div
      className="App"
      style={{
        display: "grid",
        placeContent: "center",
        alignContent: "center",
      }}
    >
      <div
        className="wrapper"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h2 className={"Header"}>
            Notifications{" "}
            <span className="notification-number">
              {notificationChecked.toString()}
            </span>
          </h2>
          <a
            style={{ fontWeight: "500", alignSelf: "flex-start" }}
            onClick={() => {
              const updatedUsers = users.map((user) => ({
                ...user,
                checked: "false",
              }));
              setUsers(updatedUsers);
            }}
          >
            Mark all as read
          </a>
        </div>

        {users.map((user) => (
          <Notification user={user} />
        ))}
      </div>
      <div className="attribution">
        Challenge by&nbsp;
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">&nbsp;Görkem Karamolla</a>.
      </div>
    </div>
  );
}

export default App;
