/**
 * 搜索书籍
 * @param  {Object} state  [description]
 * @param  {Object} action [description]
 * @return {[type]}        [description]
 */
export const fetchBookList = (state = { books: [], name: '' }, action = {}) => {
    switch (action.type) {
      case 'GET_BOOKLIST':
        const {
          data: { books },
          name
        } = action
        return { books, name };
      default:
        return state;
    }
}


