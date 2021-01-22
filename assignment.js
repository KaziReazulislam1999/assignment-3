// kilometerToMeter convater
function kilometerToMeter(kilometer) {
  var meter = kilometer * 1000;
  if (kilometer < 0) {
    return "Invalid";
  } else {
    return meter;
  }
}
console.log(kilometerToMeter(2));

// budgetCalculator calculator
function budgetCalculator(num1, num2, num3) {
  var numberOfWactcBuy = 50 * num1;
  var numberOfMobileBuy = 100 * num2;
  var numberOfLaptopBuy = 500 * num3;

  var totalProductPrice =
    numberOfWactcBuy + numberOfMobileBuy + numberOfLaptopBuy;
  if (num1 < 0 || num2 < 0 || num3 < 0) {
    return "Invalid";
  } else {
    return totalProductPrice;
  }
}
var result = budgetCalculator(2, 1, 1);
console.log(result);

// hotelCost counting
function hotelCost(staytime) {
  var price = 0;
  if (staytime < 0) {
    return "Invalid";
  } else if (staytime <= 10) {
    price = staytime * 100;
  } else if (staytime <= 20) {
    var first10Days = 10 * 100;
    var remainingDays = staytime - 10;
    var second10Days = remainingDays * 80;
    price = first10Days + second10Days;
  } else {
    var first10Days = 10 * 100;
    var second10Days = 10 * 80;
    var remainingDays = staytime - 20;
    var third10Days = remainingDays * 50;
    price = first10Days + second10Days + third10Days;
  }
  return price;
}
var result = hotelCost(21);
console.log(result);

// megaFriend find
var friendsName = [
  "Johny",
  "Mony",
  "Lon",
  "Koma",
  "Reazul",
  "Md Reazul Islam",
  "Kader Mirza KM",
  "Shobhan gazi",
  "Mishkan",
];
var maxLength = [];

function megaFriend(friendsName) {
  var nameLength = 0;
  for (var i = 0; i < friendsName.length; i++) {
    if (nameLength < friendsName[i].length) {
      nameLength = friendsName[i].length;
    }
  }
  for (var i = 0; i < friendsName.length; i++) {
    if (friendsName[i].length == nameLength) {
      maxLength.push(friendsName[i]);
    }
  }
  if (maxLength.length == 1) {
    return maxLength[0];
  } else {
    return maxLength;
  }
}
var maxCharacterName = megaFriend(friendsName);
console.log(maxCharacterName);
