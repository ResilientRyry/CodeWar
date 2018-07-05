function tickets(peopleInLine){
  var a25 = 0,a50 = 0;
  for(var i = 0;i<peopleInLine.length;i++){
    if(peopleInLine[i] == 25){
      a25 += 1;
    }
    if(peopleInLine[i] == 50){
      a25 -= 1; a50 += 1;
    }
    if(peopleInLine[i] == 100){
      if(a50 == 0 && a25 >= 3){
        a25 -= 3;
      }else{
        a25 -= 1; a50 -= 1;
      }
    }
    if(a25 < 0 || a50 < 0){
       return 'NO';
    }
  }
  return 'YES';
}
//The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

//Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

//Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

//Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.
