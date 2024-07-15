//Check voting eligibility of a person
function votingEligibility() {
  
  checkVote(19);
  checkVote(17);

}

function checkVote(age) {
  if (age >= 18) {
    console.log(`Eligibile to vote. The age is ${age}`);
  } else {
    console.log(`Not eligible to vote. The age is ${age}`);
  }

}
