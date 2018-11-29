import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Layout extends Component {
  render() {
    return (
      <div>
        <div style={{ background: '#000' }}>
          <Link to={'/'} style={{ color: '#fff' }}>
            쇼핑몰
          </Link>
        </div>
        {this.props.children}
        <div>저작권은 나에게 있습니다.</div>
      </div>
    );
  }
}

export default Layout;
