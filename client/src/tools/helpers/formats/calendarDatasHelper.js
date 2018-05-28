import { Info } from 'luxon';

import { locale } from 'configs/intl';

const { months, weekdays } = Info;

export default  (date, viewType = 'month') => (
  /**
   * Takes a date and a viewType (month by default)
   * Returns an object to help building calendars
   */
  {
    year: date.year,
    month: {
      index: date.month,
      label: months('long', { locale })[date.month - 1]
    },
    weekLength: weekdays('long', { locale }).length,
    start: date.startOf(viewType),
    end: date.endOf(viewType),
  }
);
