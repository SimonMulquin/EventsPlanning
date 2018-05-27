import React from 'react';
import { DateTime, Info } from 'luxon';

import { Calendar, CalendarHead, CalendarHeadElement, CalendarRange, CalendarRangeElement} from './style';

const locale = 'fr';

const dt = DateTime.local().setLocale(locale);

const { months, weekdays } = Info;

const getCalendarDatas = (date) => ({
  year: date.year,
  month: {
    index: date.month,
    label: months('long', {locale})[date.month - 1]
  },
  weekLength: weekdays('long', { locale }).length,
  start: date.startOf('month'),
  end: date.endOf('month'),
});

const MonthCalendar = ({title, targetedISOdate}) => {
  const calendarData = getCalendarDatas(targetedISOdate != null ? dt.fromISO(targetedISOdate) : dt);

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