import styled, { createGlobalStyle } from 'styled-components';
import { StyledComponentBase } from 'styled-components/ts3.6';

interface ITypes extends StyledComponentBase<any, any> {
    Wrapper?: any,
    FilmsInfo?: any,
    CarouselWrapper?: any,
    FilmsCardsWrapper?: any,
}

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: darkslategrey ;
  }
`

export const Wrapper: ITypes = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin:20px;
`;

export const WrapperPanel: ITypes = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c2dde4;
  border-radius: 10px;
`;

export const PanelDiv: ITypes = styled.div`
  width: 95%;
  height: 70%;
`;

export const CarouselDiv: ITypes = styled.div`
  width: 90%;
  height: 90%;
`;

export const WrapperCarousel: ITypes = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperButton: ITypes = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;