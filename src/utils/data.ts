export const levels: any = {
  'BEGINNER': 10000,
  'TRAINEE': 100000,
  'JUNIOR': 2000000,
  'MID_LEVEL': 5000000,
  'level_6': 10000000,
  'level_7': 50000000,
  'level_8': 100000000,
}

export function formatNumberWithSpaces(number: number) {
  let formattedNumber = number.toString()

  const parts = formattedNumber.split(".")
  const integerPart = parts[0];
  const decimalPart = parts[1] || ""

  const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, " ")

  return decimalPart ? `${formattedIntegerPart}.${decimalPart}` : formattedIntegerPart
}