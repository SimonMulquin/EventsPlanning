import styled from 'styled-components';

import Header from './Header/main';
import ViewContent from './ViewContent/main';

export { Header, ViewContent };

export const Page = styled.div`
  display: block;
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

export const LeftTool = styled.div`
  display: inline-block;
  position: fixed;
  width: ${({theme}) => theme.tools.left.width};
  top: ${({theme}) => theme.header.height};
  left: 0;
  height: calc(100vh - ${({theme}) => theme.header.height});
  overflow-y: auto;
  overflow-x: hidden;
  border-right: 1px solid black;
`;

export const RightTool = styled.div`
  display: inline-block;
  position: fixed;
  width: ${({ theme }) => theme.tools.right.width};
  top: ${({ theme }) => theme.header.height};
  right: 0;
  height: calc(100vh - ${({ theme }) => theme.header.height});
  overflow-y: auto;
  overflow-x: hidden;
  border-left: 1px solid black;
`;

export const View = styled.div`
  display: inline-block;
  position: fixed;
  width: ${({ theme }) => theme.view.width};
  top: ${({ theme }) => theme.header.height};
  left: ${({ theme }) => theme.tools.left.width};
  height: calc(100vh - ${({ theme }) => theme.header.height});
  overflow: hidden;
`;

export const ViewNavigation =styled.ul`
  display: block;
  position: relative;
  height: ${({theme}) => theme.view.navigation.height};
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;
  border-bottom: 1px solid black;
`;