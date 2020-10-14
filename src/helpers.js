function numToHex(rgb) { 
  let hex = Number(rgb).toString(16)
  if (hex.length < 2) {
    hex = '0' + hex
  }
  return hex
}

export function rgbToHex(r,g,b) {   
  const red = numToHex(r)
  const green = numToHex(g)
  const blue = numToHex(b)
  return '#' + red + green + blue
}