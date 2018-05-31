import { DateTime } from 'luxon';

import { locale } from 'configs/intl';

const targetedDate = DateTime.local().setLocale(locale);

export default [
  {
    component: 'MonthCalendar',
    title: 'Calendrier personnel',
    state: {
      targetedDate,
    }
  },
  { 
    component: 'MonthCalendar',
    title: 'Calendrier asbl',
    state: {
      targetedDate,
    }
  },
  {
    component: 'ViewsManager',
    title: 'Organiser',
    state: {
      
    }
  }
]