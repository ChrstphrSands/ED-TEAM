import React, { createContext, useState } from 'react'

export const PostContext = createContext({});

const PostContextProvider = ({ children }) => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const updateRequests = (method) => {
    const data = localStorage.getItem(method);
    if (data === null) {
      localStorage.setItem(method, '1');
    } else {
      let requests = Number.parseInt(data);
      requests++;
      localStorage.setItem(method, `${requests}`);
    }
  }

  return (
    <PostContext.Provider
      value={{
        isOpenDialog,
        setIsOpenDialog,
        updateRequests
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
