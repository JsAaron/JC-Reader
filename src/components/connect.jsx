import { connect } from 'react-redux';
import * as action from '../redux/action/index'

/**
 * 注入action
 * @param  {[type]} component [description]
 * @return {[type]}           [description]
 */
const Connect = (component) => {
  const mapStateToProps = (state) => {
    let {
      fetchBookList
    } = state
    return {
      fetchBookList
    }
  }

  return connect(
    mapStateToProps,
    action
  )(component)
}

export default Connect;
