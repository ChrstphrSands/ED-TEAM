import React from 'react';
import './App.css';
import PostsGrid from "./components/PostsGrid";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostDetail from "./components/PostDetail";
import PostForm from "./components/PostForm";
import PostContextProvider from "./AppContext";
import Provider from 'react-redux/es/components/Provider';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <PostContextProvider>
        <div>
          <Router>
            <Switch>
              <Route path='/posts/:id' exact component={PostDetail} />
              <Route path='/' exact component={PostsGrid} />
              <Route path='/post' exact component={PostForm} />
              <Route component={() => (
                <div>
                  <h1>Error 404</h1>
                </div>
              )} />
            </Switch>
          </Router>
        </div>
      </PostContextProvider>
    </Provider>
  );
}

export default App;
