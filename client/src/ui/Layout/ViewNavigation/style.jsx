import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: block;
  position: relative;
  height: auto;
  max-height: ${({ theme }) => theme.view.navigation.height};
  width: 100%;
  overflow: hidden;
  border-bottom: ${({ theme }) => theme.layout.border};
`;

export const Nav = styled.ul`
  display: inline-block;
  position: relative;
  height: auto;
  width: calc(100% - ${({ theme }) => theme.view.navigation.height});
  padding: 0 ${({ theme }) => theme.view.navigation.height};
  overflow-y: auto;
  white-space: nowrap;
  vertical-align: top;
`;

export const OverNav = styled.div`
  display: ${props => props.hidden ? 'hidden' : 'inline-block'};
  position: absolute;
  z-index: 9000;
  height: ${({ theme }) => theme.view.navigation.height};
  width: ${({ theme }) => theme.view.navigation.height};
  background-color: rgba(0,0,0,.1);
  top: 0;
  ${props => props.left ? `
    left: ${props.theme.view.navigation.height};
  ` : `
    right: 0;
  `}
`;

export const Option = styled.li`
  display: inline-block;
  position: relative;
  width: auto;
  height: ${({ theme }) => theme.view.navigation.height};
  padding: 0;
`;

export const SLink = styled(Link)`
  display: inline-block;
  position: relative;
  height: 85%;
  line-height: 85%;
  width: auto;
  background-color: ${props => props.active ? props.theme.view.navigation.option.activeBackground :  props.theme.view.navigation.option.background};
  color:  ${props => props.theme.view.navigation.option.activeColor };
  padding: 0;
  vertical-align: bottom;
  top: 15%;
  border-top: ${({ theme }) => theme.layout.border};
  border-right: ${({ theme }) => theme.layout.border};
  border-left: ${({ theme }) => theme.layout.border};
  padding: 10px;
  margin-left: 3px;
`;

export const Delete = styled.button`
  display: inline-block;
  position: relative;
  background-color: ${({theme}) => theme.error};
  color: #fff;
  vertical-align: bottom;
  top: 15%;
  border: 0;
  outline: none;
  box-shadow: none;
  height: 85%;
  line-height: 85%;
  width: ${({ theme }) => theme.view.navigation.height};
  padding: 0;
  border-radius: 0 8px 0 0;
  overflow: hidden;
  margin-right: 8px;
  cursor: pointer;
  border-top: ${({ theme }) => theme.layout.border};
  border-right: ${({ theme }) => theme.layout.border};
`;

export const Menu = styled(Link)`
  display: inline-block;
  position: relative;
  background-color: ${({ theme }) => theme.valid};
  color: #fff;
  vertical-align: top;
  border: 0;
  outline: none;
  box-shadow: none;
  height: ${({ theme }) => theme.view.navigation.height};
  line-height: ${({ theme }) => theme.view.navigation.height};
  width: ${({ theme }) => theme.view.navigation.height};
  overflow: hidden;
  text-align: center;
  font-size: 1.4em;
  font-size: bold;
  border-right: ${({ theme }) => theme.layout.border};
`;