import React from 'react';
import { DateTime, Info } from 'luxon';

const locale = 'fr';

const dt = {
  local: (args) => DateTime.local(args).setLocale(locale)
};

const { months, weekdays } = Info;

console.log(weekdays);

const getCalendarDatas = (date) => ({
  year: date.year,
  month: months('long', {locale: locale})[date.month - 1],
});

const MonthCalendar = ({title}) => {
  const calendarData = getCalendarDatas(dt.local());
  console.log(calendarData);
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <div>
          <h3>{calendarData.month}</h3>
          <span>{calendarData.year}</span>
        </div>
      </div>
    </div>
  );
};

export default MonthCalendar;