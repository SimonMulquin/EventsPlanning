import { DateTime } from 'luxon';

import { locale } from 'configs/intl';

const targetedDate = DateTime.local().setLocale(locale);

export default [
  {
    component: 'MonthCalendar',
    withProps: {
      title: 'Calendrier personnel',
      targetedDate,
    }
  },
  { 
    component: 'MonthCalendar',
    withProps: {
      title: 'Calendrier asbl',
      targetedDate,
    }
  }
]