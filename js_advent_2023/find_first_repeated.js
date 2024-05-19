function findFirstRepeated(gifts) {
    let target = 0;
    let match = [];
    let distance = [];
    let index = 0;
    while(index < gifts.length) {
      target = gifts[index];
      for(let search=index+1; search < gifts.length; search++){
        if(target==gifts[search]){
          console.log("Match " + target);
          match = match.concat(target);
          console.log("Distance " + (search-index));
          distance = distance.concat(search-index);
          break;
        }
      }
      index++;
    }
    if (match.length == 1) {
        return match[0];
    }
    if(match.length != 0) {
      index = 0;
      let min = distance[index];
      console.log("min dist: " + min);
      for(let search=index+1; search < distance.length ; search++){
        if (min > distance[search]) {
          min = distance[search];
          index = search;
        }
      }
      return match[index];
    }
    return -1;
  }
  
  function findFirstRepeated(gifts) {
    let temp = [];
    let repetead = -1;
    gifts.forEach(gift => {
      console.log("Check: " + gift);
      if(temp.includes(gift) && repetead == -1) {
        console.log("Found");
        repetead = gift;
      }
      temp = temp.concat(gift);
    });
    return repetead;
  }