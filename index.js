// Code your solution here
const findMatching = (driversNamesArrays, nameString) => driversNamesArrays.filter(driver => {
  return driver.toLowerCase() === nameString.toLowerCase() })

  const fuzzyMatch = (driverNames, shortString) => driverNames.filter(driver => driver.startsWith(shortString));

const matchName = (driverObj, stringToCheck) => driverObj.filter(driver => driver.name === stringToCheck);