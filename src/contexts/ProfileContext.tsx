import { useState, createContext, ReactNode } from "react";

type ProfileType = {
  username: string;
  image: string;
};

type ProfileContextType = {
  profileData: ProfileType | undefined;
  changeProfileData: (data: ProfileType) => void;
};

type ProfileContextProviderProps = {
  children: ReactNode;
};

export const ProfileContext = createContext({} as ProfileContextType);

export const ProfileContextProvider = (props: ProfileContextProviderProps) => {
  const [profileData, setProfileData] = useState<ProfileType>();

  const changeProfileData = ({ username, image }: ProfileType) => {
    setProfileData({
      username,
      image,
    });
  };

  return (
    <ProfileContext.Provider value={{ profileData, changeProfileData }}>
      {props.children}
    </ProfileContext.Provider>
  );
};
