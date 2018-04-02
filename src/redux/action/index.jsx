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
 * 获取书籍详情
 * 通过id查询后返回结果集
 * @return {[type]} [description]
 */
export const getBookDetail = (id) => {
  return dispatch => {
    fetch(`/api/book/${id}`)
      .then(function(res) {
        return res.json()
      })
      .then(data => {
        data.cover = url2Real(data.cover);
        data.wordCount = wordCount2Str(data.wordCount);
        data.updated = time2Str(data.updated);
        return data;
      })
      .then(data => dispatch(receiveBookList(data)))
      .catch(error => {
        console.log(error);
      })
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

/**
 * 追加书，到封面列表
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
export const addBook = (data) => {
  let dataIntroduce = data;
  return dispatch =>{
    console.log(data._id)
    fetch(`/api/toc?view=summary&book=${data._id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log(error);
      })
  }
}


