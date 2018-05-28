import React from 'react';
import { Info } from 'luxon';

import { locale } from 'configs/intl';

import getCalendarDatas from 'tools/helpers/formats/calendarDatasHelper';

import { Calendar, CalendarHead, CalendarHeadElement, CalendarRange, CalendarRangeElement} from './style';

const { weekdays } = Info;

const MonthCalendar = ({title, targetedDate}) => {
  const calendarData = getCalendarDatas(targetedDate);

  const { start, end, weekLength } = calendarData;

  const buildRanges = (newRangeStart, array=[]) => {
    if (newRangeStart > end) {
      return array;
    } else {
      
      const createRange = (acc, dates = []) => {
        if (dates.length >= weekLength) {
          return dates;
        } else {
          return createRange(acc.plus({day: 1}), [...dates, acc] );
        };
      };
      
      const range = createRange(newRangeStart);

      return buildRanges(newRangeStart.plus({ days: weekLength }).startOf('day'), [...array, range]);
    };
  };

  const ranges = buildRanges( start.plus({ days: (start.startOf('week').weekday - start.weekday)}));

  return (
    <div>
      <h2>{title}</h2>
      <div>
        <div>
          <h3>{calendarData.month.label}</h3>
          <span>{calendarData.year}</span>
        </div>
        <div>
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
      </div>
    </div>
  );
};

export default MonthCalendar;