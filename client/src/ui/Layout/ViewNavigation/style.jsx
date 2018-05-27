import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.ul`
  display: block;
  position: relative;
  height: ${({ theme }) => theme.view.navigation.height};
  width: 100%;
  padding: 0 0 0 3px;
  overflow-y: hidden;
  overflow-x: auto;
  border-bottom: 1px solid black;
`;

export const Option = styled.li`
  display: inline-block;
  position: relative;
  width: auto;
  height: ${({ theme }) => theme.view.navigation.height};
  padding: 6px 3px 0 3px;
`;

export const SLink = styled(Link)`
  display: inline-block;
  position: relative;
  height: 100%;
  width: auto;
  background-color: ${props => props.active ? props.theme.view.navigation.option.activeBackground : 'yellow'};
  border-radius: 0 8px 0 0;
  color:  ${props => props.active ? props.theme.view.navigation.option.activeColor : 'black'};
  padding: 8px;
  border-top: solid black 1px;
  border-right: solid black 1px;
  border-left: solid black 1px;
`;