function calculateTime(deliveries) {
    ellapsedTimeSec = 0
    timeLimit = 7 * 3600
    deliveries.forEach(delivery => {
      time = delivery.split(":")
      ellapsedTimeSec += Number(time[2])
      ellapsedTimeSec += Number(time[1]) * 60
      ellapsedTimeSec += Number(time[0]) * 3600
    })
    console.log(`EllapsedTime: ${ellapsedTimeSec}  (seconds)`)
    console.log(`Remainig: ${ellapsedTimeSec - timeLimit} (seconds)`)
    let remaining = ellapsedTimeSec - timeLimit
    let remainingArr = []
    if(Math.abs(remaining/3600) < 10) {
      adjustment = remaining >= 0 ? "0" : "-0"
      console.log(`Adjustmen: ${adjustment}`)
      console.log(`Math_abs Math_floor ${remaining}/3600: ${Math.floor(Math.abs(remaining/3600))}`)
      remainingArr.push(adjustment.concat(Math.floor(Math.abs(remaining/3600))))
    } else {
      remainingArr.push(Math.floor(remaining/3600))
    }
    remaining = Math.abs(remaining%3600)
    remainingArr.push(remaining/60 > 10 ? Math.floor(remaining/60) :"0".concat(Math.floor(remaining/60)))
    remaining = remaining%60
    remainingArr.push(remaining > 10 ? remaining : "0".concat(remaining))
    
  
    return remainingArr.join(":")
  }