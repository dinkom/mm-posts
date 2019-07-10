import React from 'react';
import PropTypes from 'prop-types';

import CommentItem from '../comment-item';
import { withRenderMessage } from '../../hoc';

import '../../scss/comment-list.scss';

const CommentItemWithRenderMessage = withRenderMessage(CommentItem, 'CommentItem');

function CommentList(props) {
  return (
    <div className='comment-list'>
      {props.comments.map(c => <CommentItemWithRenderMessage key={c.id} comment={c} />)}
    </div>
  );
}

export default CommentList;

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
};
