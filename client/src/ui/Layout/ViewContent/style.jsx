import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: calc(100vh - ${({ theme }) => theme.header.height + theme.view.navigation.height});
  overflow-x: hidden;
  overflow-y: auto;
  text-align: center;
`;