import styled from 'styled-components';

import Header from './Header/main';
import ViewContent from './ViewContent/main';
import ViewNavigation from './ViewNavigation/main';

export { Header, ViewContent, ViewNavigation };

export const Page = styled.div`
  display: block;
  position: relative;
  width: 100%;
  min-height: 100vh;
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
`;

export const RightTool = styled.div`
  display: inline-block;
  position: fixed;
  width: ${({ theme }) => theme.tools.right.width}em;
  top: ${({ theme }) => theme.header.height};
  right: 0;
  height: calc(100vh - ${({ theme }) => theme.header.height});
  overflow:hidden;
  border-left: ${({ theme }) => theme.layout.border};
  vertical-align: top;
`;

export const View = styled.div`
  display: inline-block;
  position: fixed;
  width: ${({ theme }) => theme.view.width}em;
  top: ${({ theme }) => theme.header.height};
  vertical-align: top;left: ${({ theme }) => theme.tools.left.width}em;
  height: calc(100vh - ${({ theme }) => theme.header.height});
  overflow: hidden;
`;