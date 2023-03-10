type Box = {
  l: number,
  w: number,
  h: number   
}

type Boxes = Box[]

function fitsInOneBox(boxes: Boxes): boolean {
  const sorted = boxes.sort((a,b) => a.l - b.l)
  const fits = sorted.every((box, i, array) => {
    if(i === array.length - 1) return true
    const values = Object.values(box)
    const nextValues = Object.values(array[i+1])
    const areMinor = values.every((item, i) => item < nextValues[i])
    return areMinor
  })
  return fits
}