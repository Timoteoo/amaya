import { Navbar } from "../components/Navbar";

import "../styles/home.scss";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <main id="home">
        <div className="title">
          <h1>Create Profile</h1>
          <div className="big-bar"></div>
        </div>
        <p>Set your profile name and image!</p>

        <form autoComplete="off">
          <div className="input-wraper">
            <div className="input-area">
              <input type="text" id="username" required />
              <label htmlFor="username">Username</label>
            </div>
          </div>

          <div className="input-wraper">
            <div className="input-area">
              <input type="text" id="image" required />
              <label htmlFor="image">Image (URL)</label>
            </div>
          </div>

          <button>Create</button>
        </form>
      </main>
    </div>
  );
};
