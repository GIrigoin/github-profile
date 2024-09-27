import licenseIcon from "../assets/Chield_alt.svg";
import forksIcon from "../assets/Nesting.svg";
import watchersIcon from "../assets/Star.svg";

const RepoCard = ({ repo }) => {
  const handleClick = () => {
    window.open(repo.html_url, "_blank");
  };
  return (
    <button
      onClick={handleClick}
      className="bg-gradient-to-r from-repo-from to-repo-to rounded-2xl p-5 flex flex-col items-start justify-between"
    >
      <h2 className="text-title text-main-text font-medium">{repo.name}</h2>
      <p className="my-4 text-body text-main-text text-start">
        {repo.description}
      </p>
      <div className="flex flex-row justify-between items-center">
        {repo.license && (
          <div className="flex flex-row justify-start mr-4">
            <img src={licenseIcon} alt="license" />{" "}
            <span className="text-body text-main-text">{repo.license}</span>
          </div>
        )}
        <div className="flex flex-row justify-start mr-4">
          <img src={forksIcon} alt="forks" />{" "}
          <span className="text-body text-main-text">{repo.forks}</span>
        </div>
        <div className="flex flex-row justify-start mr-4">
          <img src={watchersIcon} alt="watchers" />{" "}
          <span className="text-body text-main-text">{repo.watchers}</span>
        </div>
        <div>
          <p className="text-small text-main-text">
            updated <span>{repo.daysAfterLastUpdate}</span> days ago
          </p>
        </div>
      </div>
    </button>
  );
};

export default RepoCard;
