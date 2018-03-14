//Greeter,js
import React, {Component} from 'react'
import config from './config.json';
import styles from './greeter.css';//导入

class Greeter extends Component{
  render() {
    return (
      <div className={styles.set}>
        {config.greetText}
      </div>
    );
  }
}

export default Greeter
