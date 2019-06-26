function letterPosition(sentence) {
    const results = {};
    var splitSent = sentence.split('');
    for(let i = 0 ; i < splitSent.length ; i++){
      var keys = Object.keys(results);
      if(splitSent[i] !== keys){
      splitSent.push(results);
      }
    } return results 
  }
  
  letterPosition("sentence");