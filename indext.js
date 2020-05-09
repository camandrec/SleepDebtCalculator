const getSleepHours = day => {
  switch (day) {
    case 'Monday':
      return 8;
      break;
    case 'Tuesday':
      return 8;
      break;
    case 'Wednesday':
      return 8;
      break;
    case 'Thursday':
      return 8;
      break;
    case 'Friday':
      return 8;
      break;
    case 'Saturday':
      return 8;
      break;
    case 'Sunday':
      return 8;
      break;
  }
}

//console.log(getSleepHours('Monday'))

const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

//console.log(getActualSleepHours())

const getIdealSleepHours = (a) => {
  const idealHours = a;
  return idealHours * 7;
}

//console.log(getIdealSleepHours())

const calculateSleepDebt = () => {
  actualSleepHours = getActualSleepHours();
  idealSleepHours = getIdealSleepHours(10);
  if (actualSleepHours === idealSleepHours){
    return console.log('You got the perfect amount of sleep.')
  }
  else if (actualSleepHours > idealSleepHours){
    return console.log(`You got more sleep than needed. To be exact, ${actualSleepHours-idealSleepHours} hour(s) more`)
  }
  else {
    return console.log(`You should get some rest. To be exact, ${idealSleepHours-actualSleepHours} hour(s) more`)
  };
}

calculateSleepDebt()