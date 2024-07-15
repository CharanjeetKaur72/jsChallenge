/* assign a grade base on a score, assuming score is from 0 - 100
SCORE      GRADE
81 - 100     A
61 - 80      B
41 - 60      C
33 - 40      D
< 33         F    
*/

function assignGrade() {

  checkScore(88);
  checkScore(30);
  checkScore(65);
  checkScore(34);
  checkScore(20);

}

function checkScore(score) {

  let grade = "";
  
  switch(score) {
    case > 80 : 
      grade = 'A';
      break;
  
    case > 60 : 
      grade = 'B';
      break;
  
    case > 40: 
        grade = 'C';
        break;

    case >= 33 : 
      grade = 'D';
      break;
    
    case < 33:
      grade = 'F';
      break;

    default: 
      console.log("Invalid score");
      break;
  }

  console.log(`The score is ${score} and grade is ${grade}`);

}
