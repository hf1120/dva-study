import React, { PureComponent } from 'react';
import styles from './Home.less';

export default class Home extends PureComponent {
  render() {
    return (
      <div id="home" className={styles.home}>这是home</div>
    )
  }
}