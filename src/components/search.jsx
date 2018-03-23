import React from 'react';
import { Layout, Icon, Input, Spin, Tag, List, Avatar, AutoComplete } from 'antd';
import { Link } from 'react-router-dom';
import styles from '../styles/search.less';
import randomcolor from 'randomcolor';
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
      bookList: this.props.fetchBookList.books, //书籍列表
      dataSource: [],
      searchHot: ['斗罗大陆', '完美世界', '斗破苍穹', '绝世武神', '永夜君王', '武动乾坤', '凡人修仙传', '天龙八部', '龙王传说', '大主宰'],
      searchHistory: ['斗罗大陆', '完美世界', '斗破苍穹']
    }
    console.log(this.state.bookList)
    this.tagColorArr = this.state.searchHot.map(item => randomcolor({ luminosity: 'dark' }))
  }

  handleSearch = (value) => {
    this.props.getBookList(value);
    // this.setState({
    //   dataSource: !value ? [] : [
    //     value,
    //     value + value,
    //     value + value + value,
    //   ],
    // });
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
                          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                          title={<a href="https://ant.design">{item}</a>}
                        />
                        <Icon type="close" />
                      </List.Item>
                    )}
                  />
            </div>
          </Content>
      </div>
    )
  }
}

export default Inject(Search)
