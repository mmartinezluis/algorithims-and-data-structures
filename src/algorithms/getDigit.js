function getDigit(num, i) {
    return Math.floor(num/(Math.pow(10,i)) % 10)
  }