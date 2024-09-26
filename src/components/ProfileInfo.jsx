import Tag from "./Tag";
import { useSelector } from "react-redux";

const ProfileInfo = () => {
  const profile = useSelector((state) => state.profiles.currentProfile);
  return (
    <div>
      <section className="flex flex-row justify-start items-start  lg:items-end mb-6">
        <img
          className="w-[6.5rem] h[6.5rem] border-8 rounded-2xl border-color-bg mr-8"
          src={profile.avatar_url}
          alt={profile.name}
        />
        <div className="flex flex-col lg:flex-row pt-10 gap-2">
          <Tag name={"Followers"} value={profile.followers} />
          <Tag name={"Following"} value={profile.following} />
          <Tag name={"Location"} value={profile.location} />
        </div>
      </section>
      <p className="text-large text-main-text">
        {profile.name || profile.login}
      </p>
      <p className="text-body text-main-text">{profile.bio}</p>
    </div>
  );
};

export default ProfileInfo;
