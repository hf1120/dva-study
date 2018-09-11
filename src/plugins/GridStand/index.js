/**
 * -----------------------------------------------
 * @描述：九宫格
 * -----------------------------------------------
 */
import React from 'react';
import { Grid } from 'antd-mobile';

const GridStand = props => {
  const { styl } = props;
  const data = Array.from(new Array(8)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
  }));

  return (
    <div id="Grid" style={{ ...styl }}>
      <Grid data={data} activeStyle={false} />
    </div>
  );
};

export default GridStand;
