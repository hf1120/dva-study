/**
 * -----------------------------------------------
 * @描述：ListView中的separator组件
 * -----------------------------------------------
 */
import React from 'react';

const SeparatorFun = ({ sectionID, rowID }) => {
  return (
    <div
      key={`${sectionID}-${rowID}`}
      style={{
        backgroundColor: 'red',
        height: 8,
        borderTop: '1px solid #ECECED',
        borderBottom: '1px solid #ECECED',
      }}
    />
  );
};

export default SeparatorFun;
