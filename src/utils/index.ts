// '*'
const resolveStar = (expressionValue: any, cronEvery = 1) => {
  return { ...expressionValue, cronEvery };
};

// '/'
const resolveSlash = (
  expressionValue: any,
  expression: string,
  cronEvery = 2,
) => {
  const [incrementStart, incrementIncrement] = expression.split('/');
  return {
    ...expressionValue,
    incrementStart: Number(incrementStart),
    incrementIncrement: Number(incrementIncrement),
    cronEvery,
  };
};

// ','
const resolveComma = (
  expressionValue: any,
  expression: string,
  cronEvery = 3,
) => {
  const specificSpecificStrs = expression.split(',');
  return {
    ...expressionValue,
    specificSpecific: specificSpecificStrs.map((item: string) => {
      if (Number.isNaN(Number(item))) {
        return item;
      }
      return Number(item);
    }),
    cronEvery,
  };
};

// '-'
const resolveLine = (
  expressionValue: any,
  expression: string,
  cronEvery = 4,
) => {
  let [rangeStart, rangeEnd] = expression.split('-');
  return {
    ...expressionValue,
    rangeStart: Number(rangeStart),
    rangeEnd: Number(rangeEnd),
    cronEvery,
  };
};

// '#'
const resolvePound = (expressionValue: any, expression: string) => {
  const [cronNthDayDay, cronNthDayNth] = expression.split('#');
  return {
    ...expressionValue,
    cronNthDayDay: Number(cronNthDayDay),
    cronNthDayNth: Number(cronNthDayNth),
  };
};

export const cronExpressionParser = (
  expressionValue: any,
  expression: string,
) => {
  if (expression === '*') {
    return resolveStar(expressionValue);
  } else if (expression.indexOf('/') >= 0) {
    return resolveSlash(expressionValue, expression);
  } else if (expression.indexOf('-') >= 0) {
    return resolveLine(expressionValue, expression);
  } else if (expression.indexOf('#') >= 0) {
    return resolvePound(expressionValue, expression);
  } else {
    return resolveComma(expressionValue, expression);
  }
};

// Day parser
export const dayExpressionParser = (
  expressionValue: any,
  expression: string,
) => {
  if (expression === 'L') {
    return { ...expressionValue, cronEvery: 4 };
  } else if (expression === 'LW') {
    return { ...expressionValue, cronEvery: 5 };
  } else if (/^L-\d+/.test(expression)) {
    const cronDaysBeforeEomMinus = Number(expression.split('L-')[1]);
    return { ...expressionValue, cronEvery: 6, cronDaysBeforeEomMinus };
  } else if (/^\d+W/.test(expression)) {
    const cronDaysNearestWeekday = Number(expression.split('W')[0]);
    return { ...expressionValue, cronEvery: 7, cronDaysNearestWeekday };
  } else if (/^\d+L/.test(expression)) {
    const cronLastSpecificDomDay = Number(expression.split('L')[0]);
    return { ...expressionValue, cronEvery: 8, cronLastSpecificDomDay };
  } else {
    return cronExpressionParser(expressionValue, expression);
  }
};
