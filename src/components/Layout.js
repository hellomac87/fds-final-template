import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Layout extends Component {
  render() {
    return (
      <div>
        <div style={{ background: '#000', textAlign: 'center' }}>
          <Link to={'/'} style={{ color: '#fff' }}>
            쇼핑몰
          </Link>
        </div>
        <div style={{ margin: '0 auto', width: 500 }}>
          {this.props.children}
        </div>

        <div>저작권은 나에게 있습니다.</div>
      </div>
    );
  }
}

export default Layout;
