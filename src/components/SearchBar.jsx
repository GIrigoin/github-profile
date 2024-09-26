import ResultProfile from "./ResultProfile";
import { useDispatch, useSelector } from "react-redux";
import { setSearchInput, setSearchResult } from "../redux/profilesSlice";
import { getProfile } from "../utils/dataFetching";
import { useDebouncedCallback } from "use-debounce";
import searchIcon from "../assets/Search.svg";

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
    <div className="h-[12.5rem] mb-2 pt-4 flex flex-col items-center">
      <div className="static w-fit h-fit">
        <img className="relative left-4 top-10" src={searchIcon} alt="search" />
        <input
          type="search"
          name=""
          id=""
          value={searchInput}
          onChange={debounced}
          className="w-[30rem] h-14 bg-color-bg rounded-xl pl-12 pr-4 border-none active:border-search-border active:border-4 active:border-solid "
        />
      </div>
      <ResultProfile />
    </div>
  );
};

export default SearchBar;
