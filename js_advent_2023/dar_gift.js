function drawGift(size, symbol) {
    if (size==1) return '#\n'
    // upper
    let result = " ".repeat(size-1) + "#".repeat(size) + "\n"
    console.log(size)
    for(let offset=size-2, design=0;offset>0;offset--, design++){
      let line = " ".repeat(offset)
      line = line + "#"
      line = line + symbol.repeat(size-2)
      line = line + "#"
      line = line + symbol.repeat(design)
      line = line + "#"
      line = line + "\n"
      result = result+line
    }
    result = result + "#".repeat(size) + symbol.repeat(size-2)+"#"+"\n"
    for(let design=size-3; design>=0;design--) {
      let line = "#"
      line = line + symbol.repeat(size-2)
      line = line + "#"
      line = line + symbol.repeat(design)
      line = line + "#"
      line = line + "\n"
      result = result+line
    }
    result = result + "#".repeat(size)+"\n"
    console.log(result)
    return result
  }