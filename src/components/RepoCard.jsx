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
      className="bg-gradient-to-r from-repo-from to-repo-to rounded-2xl"
    >
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div>
        {repo.license && (
          <div>
            <img src={licenseIcon} alt="license" /> <span>{repo.license}</span>
          </div>
        )}
        <div>
          <img src={forksIcon} alt="forks" /> <span>{repo.forks}</span>
        </div>
        <div>
          <img src={watchersIcon} alt="watchers" /> <span>{repo.watchers}</span>
        </div>
        <div>
          <p>
            updated <span>{repo.daysAfterLastUpdate}</span> days ago
          </p>
        </div>
      </div>
    </button>
  );
};

export default RepoCard;
