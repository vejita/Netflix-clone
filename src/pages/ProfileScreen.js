import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Nav from "../components/Nav";
import { selectUser } from "../features/counter/userSlice";
// import { auth } from "../firebase";
import "./css/profileScreen.css";
function ProfileScreen() {
  const history = useHistory();
  const user = useSelector(selectUser);
  return (
    <div className="ProfileScreen">
      <Nav />
      <div className="ProfileScreen__body">
        <h1>Edit Profile</h1>
        <div className="ProfileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="ProfileScreen__details">
            <h2>test@netflixClone.io</h2>
            <div className="ProfileScreen__Planes">
              <button
                className="ProfileScreen__singOut"
                onClick={() => history.push("/")}
              >
                Sing Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
