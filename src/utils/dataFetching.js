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

export const getRepos = async (profile) => {
  const URL = `https://api.github.com/users/${profile}/repos?per_page=4`;

  try {
    //Necesito: name, description, html_url, forks, watchers, license(.spdx_id), updated_at
    const { data } = await axios(URL);
    let repos = [];
    if (data) {
      repos = data.map((repo) => {
        const {
          name,
          description,
          html_url,
          forks,
          watchers,
          updated_at,
          license,
        } = repo;
        const today = Date.now();
        const update = new Date(updated_at);
        const daysAfterLastUpdate = Math.floor(
          (today - update) / 1000 / 60 / 60 / 24
        );
        const output = {
          name,
          description,
          html_url,
          forks,
          watchers,
          daysAfterLastUpdate,
          license: license?.spdx_id || "",
        };
        return output;
      });
    }
    return repos;
  } catch (error) {
    console.log(error.message);
  }
};
