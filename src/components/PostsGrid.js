import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import PostCard from './PostCard';
import { PostContext } from "../AppContext";
import PostForm from "./PostForm";

import reducer from '../store/reducers';

import * as Actions from '../store/actions';

import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import withReducer from '../store/withReducer';

function PostsGrid() {
  const { updateRequests } = useContext(PostContext);
  const { isOpenDialog, setIsOpenDialog } = useContext(PostContext);
  // const [posts, setPosts] = useState([]);

  const dispatch = useDispatch();
  const posts = useSelector(({ postsData }) => postsData.posts.posts)

  const getPosts = () => {
    dispatch(Actions.getPosts())
  }

  useEffect(() => {
    getPosts();
  }, [])

  const handleClickCreatePost = () => {
    setIsOpenDialog(true);
  }

  return (
    <>
      <div className="flex justify-center">
        <button
          className="text-blue-300 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1"
          type="button" onClick={handleClickCreatePost}>
          Crear post
        </button>
      </div>

      {posts.map(post => (
        <PostCard key={post.id} post={post} />)
      )}

      {isOpenDialog && (
        <PostForm data={null} />
      )}

    </>
  )
}

export default withReducer('postsData', reducer)(PostsGrid)
