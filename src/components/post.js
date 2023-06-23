import React from "react";
import OwnerPostName from "./OwnerPostName";
function MyPost() {
  const myList = [
    {
      id: 1,
      username: "Mohammad",
      msgBody: "كيف الحال شباب ",
      imageURL:
        "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png",
    },
    {
      id: 2,
      username: "Ahmad",
      msgBody: "i feel that i am so happy ",
      imageURL:
        "https://www.pngmart.com/files/22/User-Avatar-Profile-Transparent-Background.png",
    },
    {
      id: 3,
      username: "Wessam",
      msgBody: "انا في مادبا",
      imageURL:
        "https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg?w=2000",
    },
  ];
  return (
    <div>
      <OwnerPostName
        id={myList[0].id}
        username={myList[0].username}
        msgBody={myList[0].msgBody}
        imageURL={myList[0].imageURL}
      />
      <OwnerPostName
        id={myList[1].id}
        username={myList[1].username}
        msgBody={myList[1].msgBody}
        imageURL={myList[1].imageURL}
      />
      <OwnerPostName
        id={myList[2].id}
        username={myList[2].username}
        msgBody={myList[2].msgBody}
        imageURL={myList[2].imageURL}
      />
    </div>
  );
}

export default MyPost;
