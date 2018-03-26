import React from 'react';
import { Layout, Icon, Input, Spin, Tag, List, Avatar, AutoComplete } from 'antd';
import { Link } from 'react-router-dom';
import styles from '../styles/search.less';
import randomcolor from 'randomcolor';
import ResultItems from './resultItem'
import Inject from './inject';

const { Header, Content } = Layout

function onSelect(value) {
  console.log('onSelect', value);
}

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: false, //搜索状态
      searchValue: this.props.fetchBookList.name, //搜索关键字
      bookList: this.props.fetchBookList.books, //书籍列表
      dataSource: [],
      searchHot: ['斗罗大陆', '完美世界', '斗破苍穹', '绝世武神', '永夜君王', '武动乾坤', '凡人修仙传', '天龙八部', '龙王传说', '大主宰'],
      searchHistory: ['斗罗大陆', '完美世界', '斗破苍穹']
    }
    this.flag = this.state.searchValue.length ? false : true;
    this.tagColorArr = this.state.searchHot.map(item => randomcolor({ luminosity: 'dark' }))

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(value) {
    this.flag = false;
    this.props.getBookList(value);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      bookList: newProps.fetchBookList.books
    })
  }

  render() {
    const { dataSource } = this.state;
    return (
      <div className="page" ref="search">
          <Header className={styles.header}>
            <Icon type="search" className={styles.pre}/>
            <AutoComplete
              dataSource={dataSource}
              style={{ width: 330 }}
              onSelect={onSelect}
              onSearch={this.handleSearch}
              placeholder="请输入书名或者作者名"
            />
            <Link to="/" className={styles.cancel}>取消</Link>
          </Header>
          <Content className={styles.content}>
          {
            this.flag ?
             (
              <div className={styles.tagBox}>
              <h1>大家都在搜</h1>
              <div className={styles.tags}>
                 {
                    this.state.searchHot.map((item, index) =>
                      <Tag className={styles.tag} color={this.tagColorArr[index]} key={index}>{item}</Tag>
                    )
                  }
              </div>
              <h1>搜索历史</h1>
                 <List
                    itemLayout="horizontal"
                    dataSource={this.state.searchHistory}
                    renderItem={item => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={<Avatar shape="circle"  icon="user" style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}/>}
                          title={<a href="https://ant.design">{item}</a>}
                        />
                        <Icon type="close" />
                      </List.Item>
                    )}
                  />
               </div>
              )
             :
            (
              this.props.fetchBookList.books.length !== 0 ?
              this.props.fetchBookList.books.map((item, index) => {
                return <ResultItems data={item} key={index}/>
              })
              : (<div className={styles.noResult}>没有找到搜索结果</div>)
            )



          }

          </Content>
      </div>
    )
  }
}

export default Inject(Search)
