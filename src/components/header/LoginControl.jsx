import React from 'react';
import styled from 'styled-components';

class LoginControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLoggedIn: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ isLoggedIn }) => ({
      isLoggedIn: !isLoggedIn
    }));
  }

  render() {
    const { isLoggedIn } = this.state;

    return (
      <LoginContainer>
        <LoginBtn type='button' onClick={this.handleClick}>
          {isLoggedIn ? '로그아웃' : '로그인'}
        </LoginBtn>
        <LoginGreet>
          {isLoggedIn ? '환영합니다!' : '로그인 해주세요!'}
        </LoginGreet>
      </LoginContainer>
    );
  }
}

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const LoginBtn = styled.button`
  width: 70px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 30px;
  border: none;
  margin-right: 6px;
`;

const LoginGreet = styled.div`
  color: white;
`;

export default LoginControl;
