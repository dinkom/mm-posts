import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';

import Loader from '../../components/loader';
import PostList from '../../components/post-list';
import Search from '../../components/search';
import { withRenderMessage } from '../../hoc';

import DataService from '../../services/DataService';

const LoaderWithRenderMessage = withRenderMessage(Loader, 'Loader');
const PostListWithRenderMessage = withRenderMessage(PostList, 'PostList');
const SearchWithRenderMessage = withRenderMessage(Search, 'Search');

class App extends Component {
  constructor() {
    super();

    this.state = {
      auth: window.mmState || {},
      posts: [],
      emptySearch: false
    };

    this.dataService = new DataService();
  }

  componentDidMount() {
    const { auth } = this.state;

    if (!auth.authenticated) {
      return;
    }

    this.dataService.getData('posts', auth.auth_token)
      .then(() => {
        this.dataService.getData('comments', auth.auth_token)
          .then(() => {
            this.dataService.getData('users', auth.auth_token)
              .then(() => {
                const allData = this.dataService.getConnectedData();
                this.setState({
                  posts: allData
                });
              });
          })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  searchPostsByUser = (username) => {
    const allPosts = this.dataService.getConnectedData();

    if (!username) {
      this.setState({
        posts: allPosts,
        emptySearch: false
      });
    } else {
      const filteredPosts = allPosts.filter(p => p.user.username.startsWith(username));
      this.setState({
        posts: filteredPosts,
        emptySearch: filteredPosts.length === 0
      });
    }
  }

  renderRedirect() {
    const { auth } = this.state;

    if (!auth.authenticated) {
      return <Redirect to="/" />;
    }

    return '';
  }

  renderContent() {
    const { posts, emptySearch } = this.state;

    if (emptySearch) {
      return (
        <Fragment>
          <SearchWithRenderMessage searchPostsByUser={this.searchPostsByUser} />
          <p className="alert alert-warning">No posts found.</p>
        </Fragment>
      );
    }

    if (!posts || !posts.length) {
      return <LoaderWithRenderMessage />
    }

    return (
      <Fragment>
        <SearchWithRenderMessage searchPostsByUser={this.searchPostsByUser} />
        <PostListWithRenderMessage posts={posts} />
      </Fragment>
    );
  }

  render() {
    return (
      <div className="app">
        {this.renderRedirect()}
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
