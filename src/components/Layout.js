import React, { Component } from 'react';
import Header from '../containers/Header';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{ margin: '0 auto', width: 500 }}>
          {this.props.children}
        </div>

        <div>저작권은 나에게 있습니다.</div>
      </div>
    );
  }
}

export default Layout;
