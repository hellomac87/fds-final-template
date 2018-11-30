import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class HeaderView extends Component {
  render() {
    const { username, logout, history } = this.props;
    return (
      <div style={{ background: '#000', textAlign: 'center' }}>
        <div>
          <Link to={'/'} style={{ color: '#fff' }}>
            쇼핑몰
          </Link>
        </div>

        {username ? (
          <React.Fragment>
            <div style={{ color: '#fff' }}>{username}</div>
            <button
              onClick={() => {
                logout();
                history.push('/');
              }}
            >
              logout
            </button>
          </React.Fragment>
        ) : (
          <Link to={'/login'}>로그인</Link>
        )}
      </div>
    );
  }
}

export default HeaderView;
