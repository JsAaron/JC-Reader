import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Icon } from 'antd'
import styles from '../styles/detail.less'

const { Header, Footer, Content } = Layout;

class Detail extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Layout>
          <Header className={styles.header}>
            <Link to="/search"><Icon type="left"/>返回</Link>
            <span>书籍详情</span>
          </Header>
          <Content>
            <div className={styles.introduce}>
              <div></div>
              <div></div>
            </div>
            <div>介绍</div>
          </Content>
          <Footer className={styles.footer}>
            <Link to="/search">+追更新</Link>
            <Link to="/search">开始阅读</Link>
          </Footer>
        </Layout>
      </div>
    )
  }
}


export default Detail
