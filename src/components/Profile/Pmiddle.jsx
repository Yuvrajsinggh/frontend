import React, { useState } from 'react';
import EditProfileModal from './EditProfileModal';
import Post from '../Feed/Post';
import { Link } from 'react-router-dom';
import { Avatar } from "@material-tailwind/react";



const Profile = ({posts}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showAnonymousPosts, setShowAnonymousPosts] = useState(false);


  const handleEditClick = () => {
    setIsEditing(true);
  };

  const toggleAnonymousPosts = () => {
    setShowAnonymousPosts(!showAnonymousPosts);
  };

  const handleCloseModal = () => {
    setIsEditing(false);
  };

  const user = {
    image:
      'https://images.unsplash.com/photo-1652437225670-f7969e367375?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1NXx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    username: 'YourUsername',
    displayName: 'Your Display Name',
    anonymusName: 'AnonymousUsername',
    followers: 1000, // Replace with actual follower count
    following: 500, // Replace with actual following count
  };

  // Filter posts based on the showAnonymousPosts state
  const filteredPosts = showAnonymousPosts
    ? posts.filter((posts) => posts.isAnonymous)
    : posts.filter((posts) => !posts.isAnonymous);

  return (
    <div className="rounded shadow-lg w-full h-full bg-white/10 border-black border-l-[0.5px]">
      <div className="p-4">
      <div className="flex justify-between items-center">
        <Avatar src={user.image} alt="avatar" size='xxl'/>
        
        <button
          onClick={handleEditClick}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Edit Profile
        </button>
      </div>
      <div className="mt-4">
      <h1 className="text-2xl font-semibold">{user.displayName}</h1>
        <p className="text-gray-600">@{user.username}</p>
        <p className="text-gray-600">@{user.anonymusName}</p>
      </div>
      <div className="mt-6">
        <div className="flex">
          <div className="mr-6">
            <Link to="/followers">
                <p className="font-semibold">{user.followers}</p>
                Followers
            </Link>
          </div>
          <div>
            <Link to="/following">
                <p className="font-semibold">{user.following}</p>
                Following
            </Link>
          </div>
        </div>
      </div>
      </div>
      <div className="mt-6">
        <div className="flex items-center mb-4">
          <ul className="flex w-full justify-around">
            <li className='hover:border-b-2 border-black' 
              onClick={() => toggleAnonymousPosts(true)}
            >
              Anonymous Posts
            </li>
            <li className='hover:border-b-2 border-black'
              onClick={() => toggleAnonymousPosts(false)}
            >
              Normal Posts
            </li>
          </ul>
        </div>
        <ul>
          {filteredPosts.map((post) => (
            <li key={post.id}>
              <Post post={post} />
            </li>
          ))}
        </ul>
      </div>
      {isEditing && <EditProfileModal onClose={handleCloseModal} />}
    </div>
  );
};

export default Profile;
