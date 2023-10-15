import React, { useState } from 'react';
import { Avatar, Typography } from "@material-tailwind/react";
import Rune from './Rune';
import { LikeIcon, ReplyIcon, ReportIcon } from './Icons';

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [likeCount, setLikeCount] = useState(post.likes || 0);
  const [commentCount, setCommentCount] = useState(post.replies ? post.replies : 0);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleCommentClick = () => {
    setShowCommentBox(!showCommentBox);
    setComments([]);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
      setCommentCount(commentCount + 1);
    }
  };

  return (
    <div className="border-t-[2px] hover:bg-gray-200 transition-colors duration-500 ease-out px-4 pt-3 pb-2">
      <div className="flex gap-1 items-center">
      <Avatar src={post.image} alt="avatar" size='sm' className={`${post.isAnonymous ? 'hidden' : 'block'}`}/>
          <Typography variant="paragraph">{post.isAnonymous ? '' : post.name}</Typography>
          <Typography variant="small" color="gray" className={`${post.isAnonymous ? 'font-bold text-md' : 'font-normal'}`}>
            @{post.isAnonymous ? 'Anonymous User' : post.username}
          </Typography>
      </div>
      <p className="text-gray-600 mt-2">{post.caption}</p>

      <div className="mt-4 flex justify-between">
        <div className='flex items-center group' onClick={handleLike}>
          <Rune
            Icon={<LikeIcon fill="group-hover:fill-red-500" />}
            color="group-hover:bg-rose-100"
          />
          <span className="group-hover:text-red-500">{likeCount}</span>
        </div>
        <div className="flex items-center group" onClick={handleCommentClick}>
        <Rune
            Icon={<ReplyIcon fill="group-hover:fill-red-500" />}
            color="group-hover:bg-rose-100"
          />
          <span className="group-hover:text-red-500">{commentCount}</span>
        </div>
        <div className="flex items-center group">
        <Rune
            Icon={<ReportIcon fill="group-hover:fill-red-500" />}
            color="group-hover:bg-rose-100"
          />
        </div>
      </div>

      {showCommentBox && (
        <div className="mt-4">
          <input
            type="text"
            className="border rounded-md p-2 w-full"
            placeholder="Add a comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
            onClick={handleAddComment}
          >
            Add Comment
          </button>
        </div>
      )}

      {comments.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Comments:</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index} className="mt-2">{comment}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Post;


