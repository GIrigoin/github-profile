import Tag from "./Tag";
import { useSelector } from "react-redux";

const ProfileInfo = () => {
  const profile = useSelector((state) => state.profiles.currentProfile);
  return (
    <div>
      <section>
        <img src={profile.avatar_url} alt={profile.name} />
        <Tag name={"Followers"} value={profile.followers} />
        <Tag name={"Following"} value={profile.following} />
        <Tag name={"Location"} value={profile.location} />
      </section>
      <p>{profile.name}</p>
      <p>{profile.bio}</p>
    </div>
  );
};

export default ProfileInfo;
