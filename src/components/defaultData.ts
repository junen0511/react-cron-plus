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

interface cronDefaultTypes {
  exps: expsTypes[]
  second: secondsStateTypes
  minute: minutesStateTypes
  hour: hoursStateTypes
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
  }
  // day: {
  //   cronEvery: 1,
  //   incrementStart: '1',
  //   incrementIncrement: '1',
  //   rangeStart: undefined,
  //   rangeEnd: undefined,
  //   specificSpecific: [],
  //   cronLastSpecificDomDay: 1,
  //   cronDaysBeforeEomMinus: '',
  //   cronDaysNearestWeekday: ''
  // },
  // week: {
  //   cronEvery: 1,
  //   incrementStart: '1',
  //   incrementIncrement: '1',
  //   specificSpecific: [],
  //   cronNthDayDay: 1,
  //   cronNthDayNth: '1'
  // },
  // month: {
  //   cronEvery: 1,
  //   incrementStart: '3',
  //   incrementIncrement: '5',
  //   rangeStart: undefined,
  //   rangeEnd: undefined,
  //   specificSpecific: []
  // },
  // year: {
  //   cronEvery: 1,
  //   incrementStart: '2017',
  //   incrementIncrement: '1',
  //   rangeStart: undefined,
  //   rangeEnd: undefined,
  //   specificSpecific: []
  // },
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
