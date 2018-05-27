import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  height: ${({ theme }) => theme.header.height};
  background-color: ${({ theme }) => theme.header.colour};
  border-bottom: 1px solid black;
`;

export const Title = styled.h1`
  display: inline-block;
  position: relative;
  width: ${({theme}) => theme.tools.left.width};
  line-height: ${({ theme }) => theme.header.height};
  text-align: center;
`;

export const Repo = styled.a`
  font-size: 20px;    
  color: #fff;
`;