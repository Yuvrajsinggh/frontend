import React, { useState } from 'react';

const CreatePostPopup = ({ isOpen, onClose, onCreatePost }) => {
  const [postText, setPostText] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false)
  

  const handleCreatePost = () => {
    // Call the onCreatePost callback function with the postText
    onCreatePost(postText);

    // Clear the postText input
    setPostText('');

    // Close the popup
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity ${
        isOpen ? 'opacity-100 backdrop-blur-md' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-white rounded-lg p-6 shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4">Create a New Post</h2>
        <textarea
          className="w-full h-32 border rounded-md p-2 mb-4"
          placeholder="Write your post here..."
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        ></textarea>

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="anonymousCheckbox"
            className="mr-2"
            checked={isAnonymous}
            onChange={() => setIsAnonymous(!isAnonymous)}
          />
          <label htmlFor="anonymousCheckbox">Post Anonymously</label>
        </div>

        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            onClick={handleCreatePost}
          >
            Post
          </button>
          <button
            className="bg-gray-300 text-gray-600 px-4 py-2 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostPopup;
