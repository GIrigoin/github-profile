import { useSelector } from "react-redux";
import RepoCard from "./RepoCard";

const ReposBox = () => {
  const repos = useSelector((state) => state.profiles.profileRepos);
  return (
    <div>
      {repos &&
        repos.map((repo, index) => <RepoCard key={index} repo={repo} />)}
    </div>
  );
};

export default ReposBox;
