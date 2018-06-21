import styled from 'styled-components';

  export const Container = styled.div`
  display: block;
  position: relative;
  color: ${({ theme }) => theme.secondaryColor};
  height: auto;
  padding-bottom: 1em;
`;

export const Calendar = styled.div`
  display: inline-block;
  position: relative;
  width: ${({ theme }) => theme.view.calendar.width};
  border: ${({ theme }) => theme.view.calendar.border};
`;

export const CalendarHead = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: auto;
`;

export const CalendarRange = styled(CalendarHead) `
  max-height: ${props => props.theme.view.calendar.width / (props.number + 1) }em;
`;

export const CalendarHeadElement = styled.div`
  display: inline-block;
  position: relative;
  width: ${props => props.theme.view.calendar.width / props.number }em;
  border: ${({ theme }) => theme.view.calendar.border};
`;

export const CalendarRangeElement = styled(CalendarHeadElement)`
  min-height: ${props => props.theme.view.calendar.width / (props.number + 1) }em;
  text-align: right;
  padding: 6px;
`;