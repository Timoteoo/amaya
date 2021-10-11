import { FormEvent, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import { ProfileContext } from "../contexts/ProfileContext";

import { Navbar } from "../components/Navbar";

import "react-toastify/dist/ReactToastify.css";
import "../styles/home.scss";

export const Home = () => {
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  const history = useHistory();

  const { changeProfileData } = useContext(ProfileContext);

  const notifyError = (msg: string) => {
    toast.error(msg, {
      position: "top-right",
      autoClose: 3000,
      icon: "🛑",
      theme: "light",
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (username.trim() === "" || image.trim() === "")
      return notifyError("Please provide all the values");

    changeProfileData({
      username,
      image,
    });

    history.push("/profile");
  };

  return (
    <div>
      <Navbar />
      <main id="home">
        <ToastContainer />
        <div className="title">
          <h1>Create Profile</h1>
          <div className="big-bar"></div>
        </div>
        <p>Set your profile name and image!</p>

        <form autoComplete="off" onSubmit={e => handleSubmit(e)}>
          <div className="input-wraper">
            <div className="input-area">
              <input
                type="text"
                id="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
              />
              <label htmlFor="username">Username</label>
            </div>
          </div>

          <div className="input-wraper">
            <div className="input-area">
              <input
                type="text"
                id="image"
                value={image}
                onChange={e => setImage(e.target.value)}
                required
              />
              <label htmlFor="image">Image (URL)</label>
            </div>
          </div>

          <button>Create</button>
        </form>
      </main>
    </div>
  );
};
