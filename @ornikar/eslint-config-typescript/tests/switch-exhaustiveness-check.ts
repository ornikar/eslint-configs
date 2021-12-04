type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

const day = 'Monday' as Day;
let result = 0;

// Incorrect uses

// eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check, default-case
switch (day) {
  case 'Monday': {
    result = 1;
    break;
  }
}

// Correct uses

// eslint-disable-next-line default-case
switch (day) {
  case 'Monday': {
    result = 1;
    break;
  }
  case 'Tuesday': {
    result = 2;
    break;
  }
  case 'Wednesday': {
    result = 3;
    break;
  }
  case 'Thursday': {
    result = 4;
    break;
  }
  case 'Friday': {
    result = 5;
    break;
  }
  case 'Saturday': {
    result = 6;
    break;
  }
  case 'Sunday': {
    result = 7;
    break;
  }
}

console.log(result);
