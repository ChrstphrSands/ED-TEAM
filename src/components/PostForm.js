import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { PostContext } from "../AppContext";

function PostForm({data}) {

  const {isOpenDialog, setIsOpenDialog, updateRequests} = useContext(PostContext);

  const [post, setPost] = useState({
    title: '',
    body: '',
    userId: 5
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setPost({...post, [name]: value})
  }

  const handleClickSave = () => {
    data !== null ? updatePost() : savePost()
  }

  useEffect(() => {
    if (data !== null) {
      setPost(data);
    }
  }, []);

  const savePost = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      post
    }).then(response => {
      if (response.status === 201) {
        setIsOpenDialog(false)
        updateRequests('POST')
      }
    }).catch(err => {
      console.log(err.response)
    })
  }

  const updatePost = () => {
    axios.put(`https://jsonplaceholder.typicode.com/posts/${data.id}`, {
      post
    }).then(response => {
      if (response.status === 201) {
        setIsOpenDialog(false);
        updateRequests('PUT')
      }
      })
  }

  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-sm">
          <div
            className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div
              className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
              <h5 className="text-3xl font-semibold">
                {data === null ? 'Crear Post' : 'Editar Post'}
              </h5>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setIsOpenDialog(false)}
              >
                    <span
                      className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <div
                className="relative flex w-full flex-wrap items-stretch mb-8">
                <input type="text" placeholder="Title"
                       name='title'
                       value={post.title}
                       onChange={handleChange}
                       className="px-2 py-1 placeholder-gray-400 mb-8 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
                <input type="text" placeholder="Body"
                       onChange={handleChange}
                       name='body'
                       value={post.body}
                       className="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
              </div>
            </div>
            <div
              className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                type="button"
                style={{transition: "all .15s ease"}}
                onClick={() => setIsOpenDialog(false)}
              >
                Cerrar
              </button>
              <button
                className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                style={{transition: "all .15s ease"}}
                onClick={handleClickSave}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default PostForm;
