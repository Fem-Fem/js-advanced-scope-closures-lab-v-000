

function produceDrivingRange(range) {
  return function withinDrivingRange(value1, value2) {
    let first_value = parseInt(value1.substring(0, value1.length - 2))
    let second_value = parseInt(value2.substring(0, value2.length - 2))
    let final_value = range - Math.abs(first_value - second_value))
    if (final_value >= 0) {
      return final_value + 1
    }
    else {
      return final_value
    }
  }
}
//
//
// Instructions
//
// In the lab that follows, practice using closures to construct functions that have reference to variables that the execution scope does not.
//
// Create the following functions:
//
// produceDrivingRange() - Returns a function that then calculates whether a given trip is within range. For example, produceDrivingRange(10) returns a function that will return false if the trip is over 10 blocks distance and true if the distance is within range. So produceDrivingRange returns a function that we can then use to calculate if a trip is too large for a driver. We recommend referencing the test/indexTest.js for more details.
// produceTipCalculator() - Returns a function that then calculates a tip. For example, produceTipCalculator(.10) returns a function that calculates ten percent tip on a fare. produceTipCalculator(.20) returns a function that calculates twenty percent tip on a fare.
// createDriver is a function that returns a Driver class. The class has reference to a driverId that is incremented each time a new driver is created. The rest of the code base does not have access to driverId.
//
// The functions should make use of closures to achieve the specified goals.
