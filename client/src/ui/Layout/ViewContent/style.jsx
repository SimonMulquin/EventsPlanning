import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: calc(100vh - ${({ theme }) => theme.header.height} - ${({ theme }) =>  theme.view.navigation.height });
  overflow: auto;
  text-align: center;
`;