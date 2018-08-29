import React, { PureComponent } from 'react';
import styles from './Index.less';

export default class IndexPage extends PureComponent {
  componentDidMount() {
    const a = 1121;
    if (a) {
      // console.log(a);
    }
  }

  render() {
    return <div className={styles.center}>1</div>;
  }
}
