//with args:
function scuberGreetingForFeet(){
  let ride;
  let msg;
  if (ride<=400) {
    msg = 'This one is on me!';
  } else if (ride>2000 && ride <=2500) {
    msg = 'I will gladly take your thirty bucks.';
  } else {
    msg = 'No can do.';
  }
  return msg
}

function ternaryCheckCity() {
  let city;
  let msg;
  city === 'NYC' ? msg= 'Ok, sounds good.' : msg='No go.';
  return msg;
}

function switchOnCharmFromTip() {
  let tip;
  switch(tip){
    case 'generous':
    return 'Thank you so much.';
    break;

    case 'not as generous':
    return 'Thank you.';
    break;

    default:
    return 'Bye.';
    break;
  }
}


//without args
//with args:
  let ride;
function scuberGreetingForFeet1(){
  if (ride<=400) {
   return 'This one is on me!';
  } else if (ride>2000 && ride <=2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
 
}

let city;
function ternaryCheckCity1() {
  let msg;
  city === 'NYC' ? msg= 'Ok, sounds good.' : msg='No go.';
  return msg;
}


let city;
function ternaryCheckCity2() {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

let tip;
function switchOnCharmFromTip1() {
  switch(tip){
    case 'generous':
    return 'Thank you so much.';
    break;

    case 'not as generous':
    return 'Thank you.';
    break;

    default:
    return 'Bye.';
    break;
  }
}


