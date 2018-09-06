import React from 'react';
import { Carousel } from 'antd-mobile';
import styles from './Carousel.less';

/**
 * 轮播图高度由图片高度决定
 *styl 继承的样式
 */
const CarouselStand = props => {
  const { list, styl } = props;
  const initList = ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'];
  const lists = list || initList;

  return (
    <div id={styles.carousel} style={{ ...styl }}>
      <Carousel
        autoplay
        infinite
        height="350px"
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={index => console.log('slide to', index)}
      >
        {lists.map(val => (
          <a
            key={val}
            href="https://www.baidu.com/"
            style={{ display: 'inline-block', width: '100%' }}
          >
            <img
              src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
              alt=""
              style={{ width: '100%', verticalAlign: 'top', height: '280px' }}
              onLoad={() => {
                window.dispatchEvent(new Event('resize'));
              }}
            />
          </a>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselStand;
