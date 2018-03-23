import 'whatwg-fetch'; //https://zhuanlan.zhihu.com/p/24329240
import {
  time2Str,
  url2Real,
  wordCount2Str
} from '../../util/index.js';


//通过搜索获取书列表
export const GET_BOOK_LIST = 'GET_BOOKLIST';

/**
 * 统一发送模板
 * @param  {[type]} data [description]
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
export const receiveBookList = (data, name) => {
  return {
    type: GET_BOOK_LIST,
    data,
    name
  }
}

/**
 * 通过搜索获取书列表
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
export const getBookList = (name) => {
  return dispatch => {
    fetch(`/api/book/fuzzy-search?query=${name}&start=0`)
      .then(function(res) {
        return res.json()
      })
      .then(data => {
        data.books.map((item) => { item.cover = url2Real(item.cover) })
        return data;
      })
      .then(data => dispatch(receiveBookList(data, name)))
      .catch(error => {
        console.log(error);
      })
  }
}
