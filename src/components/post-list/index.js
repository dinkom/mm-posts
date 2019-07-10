import React from 'react';
import PropTypes from 'prop-types';

import PostItem from '../post-item';
import { withRenderMessage } from '../../hoc';

import '../../scss/post-list.scss';

const PostItemWithRenderMessage = withRenderMessage(PostItem, 'PostItem');

function PostList(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="post-list">
            {props.posts.map(p => <PostItemWithRenderMessage key={p.id} post={p} link={true} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostList;

PostList.propTypes = {
  posts: PropTypes.array.isRequired
};

