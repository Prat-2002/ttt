import React, { useState, useEffect } from 'react';
import './profile.css'; 
import data from './data.json' 

const Profile = () => {
    const [profileData, setProfileData] = useState({});

    useEffect(() => {
        
        setProfileData(data);
      }, []);

  return (
    <div className="profile">
     
      <div className="background-image" style={{ backgroundImage: `url(${profileData.backgroundImage})` }}
      >
      </div>
        
      
      <div className="profile-info">
        
        <img src={profileData.profileImage} alt="Profile" className="profile-image" />

        
        <div className="name">
          <h2>{profileData.name}</h2>
          <span>@{profileData.username}</span>
        </div>

        
        <div className="follow-stats">
          <p>Following: {profileData.following}</p>
          <p>Followers: {profileData.followers}</p>
        </div>

        
        <div className="description">
          <p>
            {profileData.description}
          </p>
          <a href={profileData.instagramLink}>INSTAGRAM</a>
        </div>

        
        <div className="engagement">
          <div className="engagement-item">
            <span>{profileData.likes}</span>
            <img src={profileData.LImage}  alt="Likes" />
          </div>
          <div className="engagement-item">
            <span>{profileData.views}</span>
            <img src={profileData.VImage} alt="Views" />
          </div>
          <div className="engagement-item">
            <span>{profileData.heart}</span>
            <img src={profileData.HImage} alt="Hearts" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
