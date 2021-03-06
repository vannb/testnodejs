export const minus = (result) => {
  try{
    return result.sma50 - result.sma7;
  }catch(e){
    return null;
  }
}

export const inRange40 = (result) => {
  try {
    return ((Math.abs(result.sma50 - result.sma7) - 40) <= 0);
  } catch(e){
    return null;
  }
}

export const inRange2 = (result) => {
  try {
    return ((Math.abs(result.sma50 - result.sma7) - 2) <= 0);
  } catch(e) {
    return null;
  }
}

export const inRange3 = (result) => {
  try {
    return ((Math.abs(result.sma50 - result.sma7) - 3) <= 0);
  } catch(e) {
    return null;
  }
}
