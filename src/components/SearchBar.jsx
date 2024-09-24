import ResultProfile from "./ResultProfile";
import { useDispatch, useSelector } from "react-redux";
import { setSearchInput, setSearchResult } from "../redux/profilesSlice";
import { getProfile } from "../utils/dataFetching";
import { useDebouncedCallback } from "use-debounce";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchInput = useSelector((state) => state.profiles.searchInput);
  const searchResult = useSelector((state) => state.profiles.searchResult);

  const handleSearchChange = async (event) => {
    try {
      dispatch(setSearchInput(event.target.value));
      const profile = await getProfile(event.target.value);
      if (profile) dispatch(setSearchResult(profile));
      else dispatch(setSearchResult({}));
    } catch (error) {
      console.log(error.message);
    }
  };
  const debounced = useDebouncedCallback(handleSearchChange, 300);

  return (
    <div>
      <input
        type="search"
        name=""
        id=""
        value={searchInput}
        onChange={debounced}
      />
      <ResultProfile
        name={searchResult.name}
        image={searchResult.avatar_url}
        bio={searchResult.bio}
      />
    </div>
  );
};

export default SearchBar;
