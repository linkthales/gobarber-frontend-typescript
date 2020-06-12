import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  > header {
    display: flex;
    align-items: center;

    background: #28262e;
    height: 144px;

    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;

      svg {
        height: 24px;
        width: 24px;
        color: #999591;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin: -176px auto 0;

  form {
    display: flex;
    flex-direction: column;

    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
    }

    a {
      display: block;
      margin-top: 24px;
      text-decoration: none;
      color: #f4ede8;
      transition: color 200ms;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
`;

export const AvatarInput = styled.div`
  align-self: center;

  position: relative;
  margin-bottom: 32px;

  img {
    height: 186px;
    width: 186px;
    border-radius: 50%;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    right: 0;
    bottom: 0;
    background: #ff9000;
    height: 48px;
    width: 48px;
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.2s;

    input {
      display: none;
    }

    svg {
      height: 20px;
      width: 20px;
      color: #312e38;
    }

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;
