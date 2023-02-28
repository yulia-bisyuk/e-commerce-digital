import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;

  @media screen and (min-width: 480px) {
    width: 480px;
    margin-right: auto;
    margin-left: auto;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;
