import { connect } from 'react-redux';
import EditBookComponent from './edit-book.component';

import { bookSet, asyncEditBookSet, bookSetErrors } from '../../actions/book-actions';

const mapStateToProps = (state) => {
  return {
    title: state.book.title,
    id: state.book.id,
    userId: state.book.userId,
    sendingData: state.book.sendingData,
    errors: state.book.errors,
    edited: state.book.edited,
    cover: state.book.cover
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    EditBook(bookData) {
      dispatch(asyncEditBookSet(bookData));
    },

    clearErrors() {
      dispatch(bookSetErrors({}));
      dispatch(bookSetEdited(false));
    }
  }
}

const EditBookContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (EditBookComponent);

export default EditBookContainer;