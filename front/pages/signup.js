import { useState, useCallback } from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { Form, Input, Checkbox, Button } from "antd";
import useInput from "../hooks/useInput";
import styled from "styled-components";

const ErrorMessage = styled.div`
  color: red;
`;

const Signup = () => {
  const [id, onChangeId] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, onChangePassword] = useInput("");

  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }

    console.log(id, password, nickname);
  }, []);

  const onChangeTerm = useCallback((e) => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  return (
    <AppLayout>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <Input name="user-id" value={id} onChange={onChangeId} required />
        </div>
        <div>
          <label htmlFor="user-nickname">닉네임</label>
          <Input
            name="user-nickname"
            value={nickname}
            onChange={onChangeNickname}
            required
          />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <Input
            name="user-password"
            type="password"
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호 확인</label>
          <Input
            name="user-password-check"
            type="password"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            required
          />
          {passwordError && (
            <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
          )}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
            제로초 말을 잘 들을 것을 동의합니다.
          </Checkbox>
          {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit">
            가입하기
          </Button>
        </div>
      </Form>
    </AppLayout>
  );
};

export default Signup;
