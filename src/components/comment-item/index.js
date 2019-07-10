import React from 'react';
import PropTypes from 'prop-types';

function CommentItem(props) {
  const { comment } = props;

  return (
    <div className="comment-list__item">
      <h6>[{comment.email}] {comment.name}</h6>
      <p>{comment.body}</p>
    </div>
  );
}

export default CommentItem;

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired
};
