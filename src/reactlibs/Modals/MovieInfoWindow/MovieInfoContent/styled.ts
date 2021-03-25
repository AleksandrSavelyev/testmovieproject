import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 500px;
  width: 800px;
  border: 2px solid black;
  display: flex;
`;

export const LeftContainer = styled.div`
  border: 2px solid black;
  width: 30%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RightContainer = styled.div`
  border: 1px solid black;
  height: auto;
  width: 70%;
`;

export const DivContainer = styled.div`
  height: 50%;
  width: 90%;
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

DivContainer.avatar = styled.div`
  border: 1px solid black;
  height: 40%;
  width: 100%;
`;

DivContainer.name = styled.div`
  border: 1px solid black;
  height: 30%;
  width: 100%;
`;

Wrapper.LeftContainer = LeftContainer;
Wrapper.RightContainer = RightContainer;
LeftContainer.DivContainer = DivContainer;

