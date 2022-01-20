
function writeCards(friendNames, event) {
    let bestFriendNames = []
    for (let i = 0; i < friendNames.length; i++){
        console.log (`Thank you, ${friendNames[i]}, for the wonderful ${event} gift!`);
        bestFriendNames.push(`Thank you, ${friendNames[i]}, for the wonderful ${event} gift!`); 
        debugger;

    }
  return bestFriendNames;
}
writeCards(friendNames); 

function countDown (i) {

    while (i>=0){
        console.log(i);
        i--
    }
}