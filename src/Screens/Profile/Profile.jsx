import {useState, useEffect } from "react";
import UserProfile from "../../Components/UserProfile/UserProfile.jsx";


function Profile({profile}) {
  return (
   <div className="profile">
    <UserProfile myProfile={profile}/>

   </div>
  );
}

export default Profile;
