function produceDrivingRange(range) {
  return function withinDrivingRange(value1, value2) {
    let first_value = parseInt(value1.substring(0, value1.length - 2))
    let second_value = parseInt(value2.substring(0, value2.length - 2))
    let final_value = range - Math.abs(first_value - second_value)
    if (final_value >= 0) {
      return `within range by ${final_value}`
    }
    else {
      return `${Math.abs(final_value)} blocks out of range`
    }
  }
}

function produceTipCalculator(range) {
  return function tippingValue(value) {
    return range * value
  }
}

function createDriver() {
  let DriverId = 0

  return class {
    constructor(name, manufacturePrice){
      this.name = name
      this.id = ++ItemId;
    }
}


unction createItem(){
  let ItemId = 0
  // return the class
  return class {
    constructor(name, manufacturePrice){
      this.name = name
      this.manufacturePrice = manufacturePrice
      this.id = ++ItemId;
    }

    retailPrice(marketMultiplier){
      return marketMultiplier * this.manufacturePrice;
    }
  }
}
