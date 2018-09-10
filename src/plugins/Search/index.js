/**
 * -----------------------------------------------
 * @描述：首页搜索栏
 * -----------------------------------------------
 */
import React from 'react';
import styles from './Search.less';

const Search = porps => {
  const { styl } = porps;
  return (
    <div id={styles.header} style={{ ...styl }}>
      <div className="headerWrap">
        <a>
          <em className="iconfont icon-fenlei" />
        </a>
        <div className="header-center">
          <span>
            <em className="iconfont icon-sousuo" />
          </span>
          <input defaultValue="请选择要输入的内容" />
        </div>
        <a>
          <em className="iconfont icon-xiaoxi" />
        </a>
      </div>
    </div>
  );
};

export default Search;
