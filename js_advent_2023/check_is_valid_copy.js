function checkIsValidCopy(original, copy) {
    let index = 0
    let allowedReplacement = ['#', '+', ':', '.', ' ']
    originalAux = original.toLowerCase()
    copyAux = copy.toLowerCase()
    console.log(`Checking ${original} to ${copy}`)
    console.log(`original aux : ${originalAux}`)
    console.log(`copy aux     : ${copyAux}`)
    for (;index<original.length;index++) {
      originalChar = originalAux.charAt(index)
      copyChar = copyAux.charAt(index)
      if(originalChar != copyChar) {
        if(originalChar == ' ') {
          return false
        }
        if(! allowedReplacement.includes(copyChar)) {
          return false
        }
      }
    }
    return true
  }