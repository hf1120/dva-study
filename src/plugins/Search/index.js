import React from 'react';
import styles from './Search.less';

const Search = () => {
  return (
    <div id={styles.header}>
      <div className="headerWrap">
        <a>
          <em className="iconfont icon-fenlei" />
        </a>
        <div className="header-center">
          <span>
            <em className="iconfont icon-sousuo" />
          </span>
          <input value="青选择要输入的内容" />
        </div>
        <a>
          <em className="iconfont icon-xiaoxi" />
        </a>
      </div>
    </div>
  );
};

Search.propTypes = {};

export default Search;
