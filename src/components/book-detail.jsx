import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Button, Icon, message } from 'antd'
import styles from '../styles/detail.less'
import Connect from './connect';

const { Header, Footer, Content } = Layout;
const ButtonGroup = Button.Group;

message.config({
  top: 500,
  duration: 2,
});

class BookDetail extends React.Component {

  constructor(props) {
    super(props)
    this.data = {};
    this.flag = false; //是否进入阅读模式
    //路由传递的url:id
    this.props.getBookDetail(this.props.match.params.id);
  }

  /**
   * 追加更新
   */
  addBook = () => {
    this.props.addBook(this.data);
    message.info(`《${this.data.title}》加入书架`);
  }


  /**
   * 开始阅读
   * @return {[type]} [description]
   */
  beiginRead = () => {
    this.addBook();
    this.flag = true;
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    // this.data = nextProps.fetchBookItem;
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
            <ButtonGroup className={styles.footerGroup}>
              <Button type="primary" onClick={this.addBook}>
                <Icon type="plus" />追更新
              </Button>
              <Button type="primary" onClick={this.beiginRead}>
                开始阅读
              </Button>
            </ButtonGroup>
          </Footer>
        </Layout>
      </div>
    )
  }
}


export default Connect(BookDetail)
