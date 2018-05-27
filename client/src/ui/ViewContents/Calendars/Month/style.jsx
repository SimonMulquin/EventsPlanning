import styled from 'styled-components';

export const Calendar = styled.div`
  display: inline-block;
  position: relative;
  width: ${({ theme }) => theme.view.calendar.width};
  border: solid black 1px;
`;

export const CalendarHead = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: auto;
`;

export const CalendarRange = styled(CalendarHead) `
  max-height: 80px;
`;

export const CalendarHeadElement = styled.div`
  display: inline-block;
  position: relative;
  width: ${props => props.theme.view.calendar.width / props.number }em;
  border: solid black 1px;
`;

export const CalendarRangeElement = styled(CalendarHeadElement)`
  min-height: 80px;
  text-align: right;
`;