import "./ProfilePage.css";
import ProfileCard from "../../components/cards/profilecard/ProfileCard.jsx";

const ProfilePage = () => {
  return (
    <div className="flex xl:flex-col sm:max-xl:items-center flex-col items-center mt-5">
      <ProfileCard profileType="user"></ProfileCard>
      <ProfileCard profileType="company"></ProfileCard>
    </div>
  );
};

export default ProfilePage;
