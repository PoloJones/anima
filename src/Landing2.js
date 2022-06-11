import React from "react";
import styled from "styled-components";
export const Landing2 = ({}) => {
  const Text1Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <LandingRoot>
      <Landing>
        <Element1>
          <HomemadeTastes>
            {" "}
            Homemade
            <br />
            Tastes
          </HomemadeTastes>
          <Login1>
            <Text1 onClick={(e) => Text1Function(e, "Text1")}>Login</Text1>
          </Login1>
        </Element1>
        <SignUp1>
          <Text1 onClick={(e) => Text1Function(e, "Text2")}>SignUp</Text1>
        </SignUp1>
      </Landing>
    </LandingRoot>
  );
};
const LandingRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
const Landing = styled.div`
  background-color: #7b9e89;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  gap: 37px;
  align-items: center;
  padding: 238px 54px 335px 55px;
`;
const Element1 = styled.div`
  height: 721px;
  position: relative;
  min-width: 917px;
`;
const HomemadeTastes = styled.div`
  text-align: center;
  width: 917px;
  height: 721px;
  font-size: 158px;
  font-family: Libre Baskerville;
  color: #f0a202;
  position: absolute;
  white-space: pre-wrap;
`;
const Login1 = styled.div`
  width: 303px;
  height: 130px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 591px;
  left: 307px;
  border-radius: 10px;
`;
const SignUp1 = styled.div`
  width: 303px;
  height: 130px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
const Text1 = styled.button`
  text-align: center;
  width: 310px;
  height: 100px;
  display: flex;
  font-size: 88px;
  font-family: League Spartan;
  font-weight: 500;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 0px;
  border-width: 0px;
  background: none;
  box-sizing: content-box;
  cursor: pointer;
`;
