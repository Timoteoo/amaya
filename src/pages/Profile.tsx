import { useContext } from "react";
import { ProfileContext } from "../contexts/ProfileContext";

import { Navbar } from "../components/Navbar";

import "../styles/profile.scss";

export const Profile = () => {
  const { profileData } = useContext(ProfileContext);

  return (
    <div>
      <Navbar />
      <main id="profile">
        <img src={profileData?.image} alt="Profile" />
        <h2>{profileData?.username}</h2>
      </main>
    </div>
  );
};
