import { useState } from 'react';
import styled from 'styled-components';

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleClick = () => {
    setIsLoggedIn(prevState => !prevState);
  };

  return (
    <LoginContainer>
      <LoginBtn type='button' onClick={handleClick}>
        {isLoggedIn ? '로그아웃' : '로그인'}
      </LoginBtn>
      <LoginGreet>{isLoggedIn ? '환영합니다!' : '로그인 해주세요!'}</LoginGreet>
    </LoginContainer>
  );
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
