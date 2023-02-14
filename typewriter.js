
const typeWriter = (sentence, interval) => {

  let timer = 0;
  for (let i = 0 ; i < sentence.length ; i++) {
    setTimeout(() => {
    process.stdout.write(sentence[i]);
    if(i === sentence.length-1){
      console.log();
    }
  }, timer) 
  timer+= interval;
  }
}

typeWriter("hello there from lighthouse labs",50);



