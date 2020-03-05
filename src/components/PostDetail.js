import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { PostContext } from "../AppContext";
import PostForm from "./PostForm";

function PostDetail({match, history}) {
  const {isOpenDialog, setIsOpenDialog} = useContext(PostContext);

  const [post, setPost] = useState({});

  const getPost = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?id=${match.params.id}`)
      .then(response => {
        setPost(response.data[0]);
      })
  }

  const deletePost = () => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
      .then(response => {
        console.log(response);
        history.push('/');
      })
  }

  useEffect(() => {
    getPost();
  }, []);

  const handleClickEdit = () => {
    setIsOpenDialog(true);
  }

  const handleClickDelete = () => {
    deletePost();
  }

  return (
    <>
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div
          className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          {post ? (
            <>
              <div className="mb-8">
                <div
                  className="text-gray-900 font-bold text-xl mb-2">{post.title}
                </div>
                <p className="text-gray-700 text-base">{post.body}</p>
              </div>
              <div className="flex justify-between">
                <button
                  className="text-blue-300 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1"
                  type="button" onClick={handleClickDelete}>
                  Eliminar
                </button>
                <button
                  className="text-blue-300 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1"
                  type="button" onClick={handleClickEdit}>
                  Editar
                </button>
              </div>
            </>
          ) : (
            <h1>ERROR</h1>
          )
          }
        </div>
      </div>
      {isOpenDialog && (
        <PostForm data={post}/>
      )}
    </>

  )
}

export default PostDetail;
