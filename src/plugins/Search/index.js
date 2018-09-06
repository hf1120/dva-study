import React from 'react';
import styles from './Search.less';

const Search = () => {
  return (
    <div id={styles.header}>
      <div className="headerWrap">
        <a className="headerLeft">
          <em className="iconfont icon-fenlei" />
        </a>
        <div className="header-center">
          <span className="icon-search">
            <em className="iconfont icon-sousuo" />
          </span>
          <input className="header-search" placeholder="青选择要输入的内容" />
        </div>
        <a className="header-right">
          <em className="iconfont icon-xiaoxi" />
        </a>
      </div>
    </div>
  );
};

Search.propTypes = {};

export default Search;
