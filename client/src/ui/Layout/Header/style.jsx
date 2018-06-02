import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  height: ${({ theme }) => theme.header.height};
  background-color: ${({ theme }) => theme.header.color};
  border-bottom: ${({ theme }) => theme.layout.border};
`;

export const Title = styled.h1`
  display: inline-block;
  position: relative;
  width: ${({theme}) => theme.tools.left.width}em;
  line-height: ${({ theme }) => theme.header.height};
  text-align: center;
`;

export const Repo = styled.a`
  font-size: 20px;    
  color: #fff;
`;