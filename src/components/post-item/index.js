import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CommentList from '../comment-list';
import { withRenderMessage } from '../../hoc';

const CommentListWithRenderMessage = withRenderMessage(CommentList, 'CommentList');

function PostItem(props) {
  const { post, link } = props;

  return (
    <div className="post-list__item">
      {
        link ? <h3><Link className="post-list__link" to={`/post/${post.id}`}>{post.title}</Link></h3>
          :
          <Fragment>
            <Link className="post-list__link" to='/app'>Back</Link>
            <h3>{post.title}</h3>
          </Fragment>
      }
      <p>By {post.user.username}</p>
      <p>{post.body}</p>
      <CommentListWithRenderMessage comments={post.comments} />
    </div>
  );
}

export default PostItem;

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  link: PropTypes.bool.isRequired
};
