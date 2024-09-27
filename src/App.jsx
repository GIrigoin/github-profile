import { useEffect } from "react";
import ProfileInfo from "./components/ProfileInfo";
import SearchBar from "./components/SearchBar";
import { useDispatch } from "react-redux";
import { setCurrentProfile, setProfileRepos } from "./redux/profilesSlice";
import { getProfile, getRepos } from "./utils/dataFetching";
import ReposBox from "./components/ReposBox";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const initialize = async () => {
      try {
        const profile = await getProfile("github");
        const repos = await getRepos("github");
        dispatch(setCurrentProfile(profile));
        dispatch(setProfileRepos(repos));
      } catch (error) {
        console.log(error.message);
      }
    };
    initialize();
  }, []);
  return (
    <div className="w-screen min-h-screen flex flex-col items-center bg-tag">
      <div className="text-main-text bg-color-bg max-w-7xl h-full bg-app-bg bg-no-repeat bg-[length:1280px_240px] bg-top px-[4.5rem] xl:px-[9.5rem]">
        <SearchBar />
        <ProfileInfo />
        <ReposBox />
      </div>
    </div>
  );
}

export default App;
