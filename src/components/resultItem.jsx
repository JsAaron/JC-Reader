import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/resultBookItem.less';

const ResultBookItem = function(props) {

  function handleImageErrored(){
    console.log(123)
  }

  return (
    <div className={styles.box}>
      <img src={props.data.cover} onError={handleImageErrored}/>
      <p>
        <span>{props.data.title}</span><br/>
        <span>{props.data.latelyFollower}人在追 | {props.data.retentionRatio}%读者留存 | {props.data.author}著</span>
      </p>
    </div>
  )
}

export default ResultBookItem
