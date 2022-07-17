function setName(value) {
    var $session = $jsapi.context().session;
    $session.name = value;
}

// Генерируем четырёxзначное с неповторяющися цифрами
function generateInitialNumber() {
  var digits = [0,1,2,3,4,5,6,7,8,9];
  for (var i = digits.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    var t = digits[i];
    digits[i] = digits[j];
    digits[j] = t
  }
  
  // Число не может начинаться с нуля
  if(digits[0] == 0){
      return generateInitialNumber();
  }
  var inititialNumber = 1000*digits[0]+100*digits[1]+10*digits[2]+digits[3];
  $jsapi.context().session.initialNumber = inititialNumber;
}