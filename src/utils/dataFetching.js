import axios from "axios";

export const getProfile = async (profileName) => {
  const URL = "api.github.com/users/";
  try {
    const { data } = await axios(`${URL}${profileName}`);
    const { login, name, followers, following, location, bio } = data;
    return { login, name, followers, following, location, bio };
  } catch (error) {
    return;
  }
};
