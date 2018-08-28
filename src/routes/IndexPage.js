import React, { PureComponent } from 'react';

export default class IndexPage extends PureComponent {
  componentDidMount() {
    const a = 1;
    if (a) {
      console.log(a);
    }
  }

  render() {
    return (
      <div>1</div>
    );
  }
}
