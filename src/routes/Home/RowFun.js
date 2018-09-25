/**
 * -----------------------------------------------
 * @描述：ListView中的row组件
 * -----------------------------------------------
 */
import React from 'react';

/* const RowFun = ({ rowID, data }) => {
  let index = data.length - 1;
  if (index < 0) {
    index = data.length - 1;
  }
  const obj = data[index - 1];
  return (
    <div key={rowID} style={{ padding: '0 15px' }}>
      <div
        style={{
          lineHeight: '50px',
          color: '#888',
          fontSize: 18,
          borderBottom: '1px solid black',
        }}
      >
        {obj.title}
      </div>
      <div style={{ display: 'flex', padding: '15px 0' }}>
        <img style={{ height: '64px', marginRight: '15px' }} src={obj.img} alt="" />
        <div style={{ lineHeight: 1 }}>
          <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.des}</div>
          <div>
            <span style={{ fontSize: '30px', color: '#FF6E27' }}>{rowID}</span>¥
          </div>
        </div>
      </div>
    </div>
  );
}; */

const RowFun = ({ rowData, data }) => {
  const arr = rowData.length >= 1 ? rowData : data;
  return arr.map(item => {
    return (
      <li key={item.id}>
        <a>
          <div>
            <img src={item.img} alt="赵丽颖" />
          </div>
          <p className="product-text">{item.des}</p>
          <span className="product-price">
            <i>¥</i>
            {item.price}
          </span>
        </a>
      </li>
    );
  });
};

export default RowFun;
