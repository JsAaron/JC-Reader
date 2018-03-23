import {connect} from 'react-redux';
import * as action from '../redux/action/index'

/**
 * 注入action
 * @param  {[type]} component [description]
 * @return {[type]}           [description]
 */
const Inject = (component) => {
  const mapStateToProps = (state) => {
    let {
      fetchBookList,
      fetchBookItem,
      bookList
    } = state
    return {
      fetchBookList,
      fetchBookItem,
      bookList
    }
  }

  return connect(
    mapStateToProps,
    action
    )(component)
}

export default Inject;
