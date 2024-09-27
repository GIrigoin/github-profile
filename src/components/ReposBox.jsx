import { useSelector } from "react-redux";
import RepoCard from "./RepoCard";

const ReposBox = () => {
  const repos = useSelector((state) => state.profiles.profileRepos);
  const profile = useSelector((state) => state.profiles.currentProfile);
  const handleClick = () => {
    window.open(
      `https://github.com/${profile.login}?tab=repositories`,
      "_blank"
    );
  };
  return (
    <div>
      <div className="flex flex-col lg:grid gap-7 lg:grid-cols-2 lg:grid-rows-2">
        {repos &&
          repos.map((repo, index) => <RepoCard key={index} repo={repo} />)}
      </div>
      <div className="flex flex-col items-center mt-12 pb-12">
        <button onClick={handleClick}>View all repositories</button>
      </div>
    </div>
  );
};

export default ReposBox;
