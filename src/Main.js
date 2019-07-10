import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './views/login';
import App from './views/app';
import Post from './views/post';
import { withRenderMessage } from './hoc';

import './scss/main.scss';

const LoginWithRenderMessage = withRenderMessage(Login, 'Login');
const AppWithRenderMessage = withRenderMessage(App, 'App');
const PostWithRenderMessage = withRenderMessage(Post, 'Post');

class Main extends Component {
  componentDidMount() {
    window.addEventListener('beforeunload', this.componentGracefulUnmount);
  }

  componentGracefulUnmount() {
    window.localStorage.removeItem('allPosts');
    window.removeEventListener('beforeunload', this.componentGracefulUnmount);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={LoginWithRenderMessage} />
          <Route path='/app' component={AppWithRenderMessage} />
          <Route path='/post/:id' component={PostWithRenderMessage} />
        </Switch>
      </Router >
    );
  }
}

export default Main;
