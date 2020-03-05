import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function PostCard({post}) {

  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div
        className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">{post.title}
          </div>
          <p className="text-gray-700 text-base">{post.body}</p>
        </div>
        <div className="flex justify-end">
          <Link to={`/posts/${post.id}`}>
            <button
              className="text-blue-300 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1"
              type="button">
              Ver
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PostCard;

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string
  })
}
