import "./ProfilePage.css";
import ProfileCard from "../../components/cards/profilecard/ProfileCard.jsx";

const ProfilePage = () => {
  return (
    <div className="flex items-center flex-col justify-center mt-5 gap-5">
      <ProfileCard profileType="user"></ProfileCard>
      <ProfileCard profileType="company"></ProfileCard>
    </div>
  );
};

export default ProfilePage;
