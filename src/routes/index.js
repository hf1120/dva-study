/**
 * -----------------------------------------------
 * @描述：底部导航
 * -----------------------------------------------
 */
import React, { PureComponent } from 'react';
import { TabBar } from 'antd-mobile';
import Home from './Home';
import MyCenter from './MyCenter';
import IndexPage from './IndexPage';
import styles from './index.less';

class Index extends PureComponent {
  constructor() {
    super();
    this.state = {
      selectedTab: 'redTab',
    };
  }

  renderContent = pageText => {
    let currentDom;
    switch (pageText) {
      case 'homeTab':
        currentDom = <Home />;
        break;
      case 'myCenterTab':
        currentDom = <MyCenter />;
        break;
      case 'Koubei':
        currentDom = <IndexPage />;
        break;
      default:
        currentDom = <Home />;
    }
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        {currentDom}
      </div>
    );
  };

  render() {
    const { selectedTab } = this.state;
    return (
      <div id={styles.footer}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          prerenderingSiblingsNumber={0}
          hidden={false}
        >
          <TabBar.Item
            title="Life"
            key="Life"
            icon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background:
                    'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background:
                    'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat',
                }}
              />
            }
            selected={selectedTab === 'homeTab'}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'homeTab',
              });
            }}
            data-seed="logId"
          >
            {this.renderContent('homeTab')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background:
                    'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat',
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background:
                    'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat',
                }}
              />
            }
            title="Koubei"
            key="Koubei"
            badge="new"
            selected={selectedTab === 'Koubei'}
            onPress={() => {
              this.setState({
                selectedTab: 'Koubei',
              });
            }}
            data-seed="logId1"
          >
            {this.renderContent('Koubei')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background:
                    'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat',
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background:
                    'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat',
                }}
              />
            }
            title="Friend"
            key="Friend"
            dot
            selected={selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            {this.renderContent('Friend')}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{
              uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
            }}
            title="My"
            key="my"
            selected={selectedTab === 'myCenterTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'myCenterTab',
              });
            }}
          >
            {this.renderContent('myCenterTab')}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default Index;
