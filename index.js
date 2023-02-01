// code your solution here

function saturdayFun(activity){
    console.log('This Saturday, I want to roller-skate!')
    if (activity === undefined){
      return 'This Saturday, I want to roller-skate!'
    } else{
      return `This Saturday, I want to ${activity}!`
    }
  }


const mondayWork = function(funThing){
    if (funThing === undefined){
        return 'This Monday, I will go to the office.'
      } else{
        return `This Monday, I will ${funThing}.`
      }
}


  function wrapAdjective(flair = "*") {
    return function (adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }


  "Hello, student! It's a fine day to learn JavaScript";

  
  wrapAdjective("%")("a dedicated programmer"); 
  //=> "You are %a dedicated programmer%!"
