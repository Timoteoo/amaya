import { FormEvent, useState, useContext } from "react";

import { ProfileContext } from "../contexts/ProfileContext";

import { Navbar } from "../components/Navbar";

import "../styles/home.scss";

export const Home = () => {
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");

  const { changeProfileData } = useContext(ProfileContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!username || !image || username.trim() === "" || image.trim() === "")
      return;

    changeProfileData({
      username,
      image,
    });
  };

  return (
    <div>
      <Navbar />
      <main id="home">
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
