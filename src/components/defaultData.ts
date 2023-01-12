import moment from 'moment'

interface expsTypes {
  type: string
  expression: string
}

interface secondsStateTypes {
  cronEvery: number
  incrementStart: number
  incrementIncrement: number
  rangeStart: number
  rangeEnd: number
  specificSpecific: number[] | number
}

interface minutesStateTypes {
  cronEvery: number
  incrementStart: number
  incrementIncrement: number
  rangeStart: number
  rangeEnd: number
  specificSpecific: number[] | number
}

interface hoursStateTypes {
  cronEvery: number
  incrementStart: number
  incrementIncrement: number
  rangeStart: number
  rangeEnd: number
  specificSpecific: number[] | number
}

interface dayStateTypes {
  cronEvery: number
  incrementStart: number
  incrementIncrement: number
  specificSpecific: number[] | number
  cronDaysBeforeEomMinus: number
  cronDaysNearestWeekday: number
  cronLastSpecificDomDay: number
}

interface weekStateTypes {
  incrementStart: number
  incrementIncrement: number
  specificSpecific: string[] | string
  cronNthDayDay: number
  cronNthDayNth: number
}

interface monthStateTypes {
  cronEvery: number
  incrementStart: number
  incrementIncrement: number
  rangeStart: number
  rangeEnd: number
  specificSpecific: number[] | number
}

interface yearStateTypes {
  cronEvery: number
  incrementStart: number
  incrementIncrement: number
  rangeStart: number
  rangeEnd: number
  specificSpecific: number[] | number
}

interface cronDefaultTypes {
  exps: expsTypes[]
  second: secondsStateTypes
  minute: minutesStateTypes
  hour: hoursStateTypes
  day: dayStateTypes
  week: weekStateTypes
  month: monthStateTypes
  year: yearStateTypes
}

const cronDefaultData: cronDefaultTypes = {
  exps: [
    { type: 'second', expression: '' },
    { type: 'minute', expression: '' },
    { type: 'hour', expression: '' },
    { type: 'day', expression: '' },
    { type: 'month', expression: '' },
    { type: 'Week', expression: '' },
    { type: 'year', expression: '' }
  ],
  second: {
    cronEvery: 1,
    incrementStart: 3,
    incrementIncrement: 5,
    rangeStart: 1,
    rangeEnd: 0,
    specificSpecific: []
  },
  minute: {
    cronEvery: 1,
    incrementStart: 3,
    incrementIncrement: 5,
    rangeStart: 1,
    rangeEnd: 0,
    specificSpecific: []
  },
  hour: {
    cronEvery: 1,
    incrementStart: 3,
    incrementIncrement: 5,
    rangeStart: 0,
    rangeEnd: 0,
    specificSpecific: []
  },
  day: {
    cronEvery: 1,
    incrementStart: 1,
    incrementIncrement: 1,
    specificSpecific: [],
    cronDaysBeforeEomMinus: 1,
    cronDaysNearestWeekday: 1,
    cronLastSpecificDomDay: 1
  },
  week: {
    incrementStart: 1,
    incrementIncrement: 1,
    specificSpecific: [],
    cronNthDayDay: 1,
    cronNthDayNth: 1
  },
  month: {
    cronEvery: 1,
    incrementStart: 3,
    incrementIncrement: 5,
    rangeStart: 1,
    rangeEnd: 1,
    specificSpecific: []
  },
  year: {
    cronEvery: 1,
    incrementStart: moment().year(),
    incrementIncrement: 1,
    rangeStart: moment().year(),
    rangeEnd: moment().add(3, 'year').year(),
    specificSpecific: []
  }
  // output: {
  //   second: '',
  //   minute: '',
  //   hour: '',
  //   day: '',
  //   month: '',
  //   Week: '',
  //   year: ''
  // }
}

export default cronDefaultData
