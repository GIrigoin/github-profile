import { useDispatch, useSelector } from "react-redux";
import {
  setSearchInput,
  setSearchResult,
  setCurrentProfile,
  setProfileRepos,
} from "../redux/profilesSlice";
import { getRepos } from "../utils/dataFetching";

//al clickear el boton: current=search result, search result = {} y el input = "". Ademas fetch profiles

const ResultProfile = () => {
  const dispatch = useDispatch();
  const searchResult = useSelector((state) => state.profiles.searchResult);

  const handleClick = async () => {
    try {
      dispatch(setCurrentProfile(searchResult));
      const repos = await getRepos(searchResult.login);
      dispatch(setProfileRepos(repos));
      dispatch(setSearchInput(""));
      dispatch(setSearchResult({}));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <button onClick={handleClick}>
      <img src={searchResult.avatar_url} alt={searchResult.name} />
      <section>
        <p>{searchResult.name}</p>
        <p>{searchResult.bio}</p>
      </section>
    </button>
  );
};

export default ResultProfile;
