import React, { useState, useEffect } from 'react';
import jsonData from './data.json';
import './body.css'

const ProfileContent2 = () => {
  const [profileData, setProfileData] = useState({});

  useEffect(() => {

    setProfileData(jsonData.profileContent2);
  }, []);

  const handleLike = () => {
    
    console.log('Liked!');
  };

  return (
    <div className="profile-content2">
      <div className="heading-wrapper">
        <h3>{profileData.heading}</h3>
        <button onClick={handleLike}>Like</button>
      </div>
      <p>{profileData.content}</p>
      <div className="metadata">
        <span>{profileData.date} ago  </span>
        <span>Views: {profileData.views}</span>
      </div>
    </div>
  );
};

export default ProfileContent2;
