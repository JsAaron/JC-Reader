import React from 'react';
import { Layout, Icon, Input, Spin, Tag, List, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import styles from '../styles/search.less';
import randomcolor from 'randomcolor';

const { Header, Content } = Layout


class Search extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      searchHot: ['斗罗大陆', '完美世界', '斗破苍穹', '绝世武神', '永夜君王', '武动乾坤', '凡人修仙传', '天龙八部', '龙王传说', '大主宰'],
      searchHistory: ['斗罗大陆', '完美世界', '斗破苍穹']
    }
    this.tagColorArr = this.state.searchHot.map(item => randomcolor({ luminosity: 'dark' }))
  }


  render() {
    return (
      <div className="page" ref="search">
          <Header className={styles.header}>
            <Icon type="search" className={styles.pre}/>
            <Input
              placeholder="请输入书名或者作者名"
              className={styles.searchInput}
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

export default Search
