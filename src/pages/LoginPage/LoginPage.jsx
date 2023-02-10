import PageTemplate from '../../template/PageTemplate';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    loginRequest();
  };

  const loginRequest = async () => {
    try {
      const API_URL = 'https://openmarket.weniv.co.kr/';
      const response = await axios.post(`${API_URL}accounts/login/`, {
        username: username,
        password: password,
        login_type: 'BUYER',
      });
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (e) {
      console.error(e);
      alert('아이디와 비밀번호가 일치하지 않습니다.');
    }
  };

  // const loginRequest = async () => {
  //   try {
  //     const response = await AxiosInstance.post("accounts/login/", {
  //       username: username,
  //       password: password,
  //       login_type: "BUYER",
  //     });

  //     if (response.data.token) {
  //       setCookies("refreshToken", `JWT ${response.data.token}`, {
  //         path: "/",
  //         sameSite: "strict",
  //       });
  //       successLogin();
  //     }
  //   } catch {
  //     console.error("Error");
  //     alert("아이디와 비밀번호가 일치하지 않습니다.");
  //   }
  // };

  return (
    <PageTemplate>
      <article className="mx-auto my-10 flex w-[350px] flex-col rounded-lg  ">
        <h2 className="my-10 font-logo text-xl">LOGIN</h2>
        <form className="flex flex-col px-5 " onSubmit={handleSubmit}>
          <input
            className="mb-4 rounded-lg border border-gray-300  p-2.5 text-gray-900 "
            id="username"
            name="username"
            placeholder="아이디"
            value={username}
            onChange={handleChangeUsername}
            type="text"
            required
          />
          <input
            className="mb-4 rounded-lg border border-gray-300  p-2.5 text-gray-900 "
            id="password"
            name="password"
            placeholder="비밀번호"
            value={password}
            onChange={handleChangePassword}
            required
            type="password"
          />
          <button className="m-10 rounded-lg border border-gray-600 p-3">
            로그인
          </button>
        </form>
      </article>
    </PageTemplate>
  );
};

export default LoginPage;
