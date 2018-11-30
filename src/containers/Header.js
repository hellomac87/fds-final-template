import React from 'react';
import HeaderView from '../components/HeaderView';
import { UserConsumer } from '../contexts/UserContext';

// 강제로 상태를 초기화 하고 싶은 순간에 다른 키를 넣어주면 된다.

function Header(props) {
  return (
    <UserConsumer>
      {value => <HeaderView key={value.username} {...value} />}
    </UserConsumer>
  );
}

export default Header;
