import axios from "axios";

export const getProfile = async (profileName) => {
  const URL = "https://api.github.com/users/";
  try {
    const { data } = await axios(`${URL}${profileName}`);
    const { login, name, followers, following, location, bio, avatar_url } =
      data;
    return { login, name, followers, following, location, bio, avatar_url };
  } catch (error) {
    return;
  }
};
