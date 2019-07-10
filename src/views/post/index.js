import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';

import Loader from '../../components/loader';
import PostItem from '../../components/post-item';
import { withRenderMessage } from '../../hoc';

import DataService from '../../services/DataService';

const LoaderWithRenderMessage = withRenderMessage(Loader, 'Loader');
const PostItemWithRenderMessage = withRenderMessage(PostItem, 'PostItem');

class Post extends Component {
  constructor() {
    super();

    this.state = {
      auth: window.mmState || {},
      post: null,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { auth } = this.state;

    if (!auth.authenticated) {
      return;
    }

    const dataService = new DataService();

    dataService.getData('post', auth.auth_token, { postId: match.params.id })
      .then((rawPost) => {
        const post = dataService.getConnectedPostData(rawPost.id);
        this.setState({
          post
        });
      })
  }

  renderRedirect() {
    const { auth } = this.state;

    if (!auth.authenticated) {
      return <Redirect to="/" />;
    }

    return '';
  }

  renderContent() {
    const { post } = this.state;

    if (!post) {
      return <LoaderWithRenderMessage />
    }

    return <PostItemWithRenderMessage post={post} link={false} />
  }

  render() {
    return (
      <Fragment>
        {this.renderRedirect()}
        {this.renderContent()}
      </Fragment>
    );
  }
}

export default Post;
