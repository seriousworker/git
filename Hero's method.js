function intRac(n, guess) {
    let trying = 0;
  
    for (;;) {
      trying++;
      
      let guesBeg = Math.floor((guess + Math.floor(n / guess)) / 2);
      
      if (Math.abs(guess - Math.floor((guess + Math.floor(n / guess)) / 2)) < 1) break;
      
      guess = guesBeg;
      
      
      
    }
    
    return trying;
  }