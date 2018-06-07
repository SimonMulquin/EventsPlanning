import styled from 'styled-components';

import Header from './Header/main';
import ViewContent from './ViewContent/main';
import ViewNavigation from './ViewNavigation/main';

export { Header, ViewContent, ViewNavigation };

export const Page = styled.div`
  display: block;
  position: relative;
  width: 100em;
  min-height: 100vh;
  padding-left: ${({ theme }) => theme.tools.left.width}em;
  padding-top: ${({ theme }) => theme.header.height};
  padding-right: ${({ theme }) => theme.tools.right.width}em;
`;

export const LeftTool = styled.div`
  display: inline-block;
  position: fixed;
  width: ${({theme}) => theme.tools.left.width}em;
  top: ${({theme}) => theme.header.height};
  left: 0;
  height: calc(100vh - ${({theme}) => theme.header.height});
  overflow: hidden;
  border-right: ${({ theme }) => theme.layout.border};
  vertical-align: top;
  background-color: rgba(0,0,0,.1);
`;

export const RightTool = styled.div`
  display: inline-block;
  position: fixed;
  width: ${({ theme }) => theme.tools.right.width}em;
  top: ${({ theme }) => theme.header.height};
  left: ${({ theme }) => theme.tools.left.width + theme.view.width}em;
  height: calc(100vh - ${({ theme }) => theme.header.height});
  overflow:hidden;
  border-left: ${({ theme }) => theme.layout.border};
  vertical-align: top;
`;

export const View = styled.div`
  display: inline-block;
  position: fixed;
  left: ${({ theme }) => theme.tools.left.width}em;
  width:  ${({ theme }) => theme.view.width}em;
  vertical-align: top;
`;