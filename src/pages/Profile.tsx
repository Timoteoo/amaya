import { Navbar } from "../components/Navbar";

import "../styles/profile.scss";

export const Profile = () => {
  return (
    <div>
      <Navbar />
      <main id="profile">
        <img
          src="https://cdn.discordapp.com/avatars/882750293937389629/b89de856d0c70f0310b1edf29d03aaab.webp?size=80"
          alt="Profile image"
        />
        <h2>Lure</h2>
      </main>
    </div>
  );
};
