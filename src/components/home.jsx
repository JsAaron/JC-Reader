import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Icon } from 'antd'
import styles from '../styles/home.less'

const { Header, Footer, Content } = Layout;

class Home extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="page" ref="main">
        <Layout>
          <Header className={styles.header}>
            <Link to="/profile" className="styles.back"><Icon type="profile" className={styles.profile} /></Link>
            <span className={styles.title}>JC追书神器</span>
            <Link to="/search"><Icon type="search" className={styles.search} /></Link>
          </Header>
        </Layout>
      </div>
    )
  }
}


export default Home
