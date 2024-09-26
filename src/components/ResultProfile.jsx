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
    <button
      onClick={handleClick}
      className={`mt-2 w-[30rem] bg-tag rounded-xl p-2  flex-row items-center justify-start gap-2 ${
        searchResult.login ? "flex" : "hidden"
      }`}
    >
      <img
        className="w-[4.5rem] h-[4.5rem] rounded-xl"
        src={searchResult.avatar_url}
        alt={searchResult.name}
      />
      <section className="flex flex-col items-start ">
        <p className="text-body">{searchResult.name}</p>
        <p className="text-small text-secondary-text font-semibold">
          {searchResult.bio}
        </p>
      </section>
    </button>
  );
};

export default ResultProfile;
