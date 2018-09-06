import React from 'react';
import { Grid, Button } from 'antd-mobile';

const GridStand = props => {
  const { styl } = props;
  const data = Array.from(new Array(8)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
  }));

  return (
    <div id="Grid" style={{ ...styl }}>
      <Grid data={data} activeStyle={false} />
      <Button
        icon={
          <img
            src="https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/soutu/img/camera_new_5606e8f.png"
            alt=""
          />
        }
      >
        with custom icon
      </Button>
    </div>
  );
};

export default GridStand;
