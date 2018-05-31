import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Info } from 'luxon';

import { addToTargetedDate } from 'api/redux';

import { locale } from 'configs/intl';

import getCalendarDatas from 'tools/helpers/formats/calendarDatasHelper';

import { Calendar, CalendarHead, CalendarHeadElement, CalendarRange, CalendarRangeElement} from './style';

const { weekdays } = Info;

const MonthCalendar = ({viewTitle, targetedDate, targetedDateAdd}) => {
  const calendarData = getCalendarDatas(targetedDate);
  const { start, end, weekLength } = calendarData;

  //week days iterator
  const createRange = (acc, dates = []) => dates.length >= weekLength ? dates : 
  createRange(acc.plus({ day: 1 }), [...dates, acc]);

  //weeks iterator
  const buildRanges = (newRangeStart, array=[]) => newRangeStart > end  ? array :  
  buildRanges(newRangeStart.plus({ days: weekLength }).startOf('day'), [...array, createRange(newRangeStart)]);

  //make a calendar
  const ranges = buildRanges( start.plus({ days: (start.startOf('week').weekday - start.weekday)}));

  return (
    <div>
      <h2>{viewTitle}</h2>
      <div>
        <button onClick={() => targetedDateAdd({months: -1})} >-</button>
        <strong>{calendarData.month}</strong>
        <button onClick={() => targetedDateAdd({months: 1})} >+</button>
      </div>
      <div>
        <button onClick={() => targetedDateAdd({ years: -1 })} >-</button>
        <strong>{calendarData.year}</strong>
        <button onClick={() => targetedDateAdd({ years: 1 })} >+</button>
      </div>
      <Calendar>
        <CalendarHead>
          {weekdays('long', { locale }).map(label => 
            <CalendarHeadElement number={ weekLength }>{label}</CalendarHeadElement>
          )}
          {ranges.map((range, index) => (
            <CalendarRange key={index}>
              {range.map((date, i) => (
                <CalendarRangeElement key={i} number={ weekLength }>
                  {date.day}
                </CalendarRangeElement>
              ))}
            </CalendarRange>
          ))}
        </CalendarHead>
      </Calendar>
    </div>
  );
};

export default withRouter(connect(null, (dispatch, ownProps) => ({
  targetedDateAdd: payload => dispatch(addToTargetedDate({...payload, index: parseInt(ownProps.match.params.viewContent)}))
}))(MonthCalendar));