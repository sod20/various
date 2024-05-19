function adjustLights(lights) {
    greenLight = '🟢'
    redLight = '🔴'
    order = lights[0] == greenLight ? 1 : -1
    adjustments=0
    lights.forEach(light => {
      if (order == 1) {
        if (light != greenLight)
          adjustments++
      } else if (order == -1) {
        if (light != redLight) 
          adjustments++
      }
      order = order * -1
    })
    return adjustments
  }