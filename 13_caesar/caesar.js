const caesar = function(string,num) {
  var caesarString = ''; 
  for(var i = 0;i < string.length;i++){
    var check = string.charCodeAt(i);
    if(check >= 65 && check <= 90){
      if(num%26 + check > 90){//phanthuatruoc+phantang+phanmocmacdinh // phantang luon luon trong khoan [-25;25]
        caesarString = caesarString + String.fromCharCode(64 + ((num % 26) - (90 - string.charCodeAt(i)))); 
                    //thuc hien cong bat dau tu 64 sau do tru bu lai tu so 90 sau do thuc hien tang so luong
        continue;
      }
      if(num%26 + check < 65){   
        caesarString = caesarString + String.fromCharCode(91 + ((num % 26) + (string.charCodeAt(i) - 65))); 
        continue;
      }
        caesarString = caesarString + String.fromCharCode(string.charCodeAt(i) + (num % 26)); 
        continue;
        }
      if(check >= 97 && check <= 122){
        if(num%26 + check > 122){
            caesarString = caesarString + String.fromCharCode(96 + ((num % 26) - (122 - string.charCodeAt(i)))); 
            continue;
        }
        if(num % 26 + check < 97){
          caesarString = caesarString + String.fromCharCode(123 + ((num % 26) + (string.charCodeAt(i) - 97))); 
          continue;
        }
          caesarString = caesarString + String.fromCharCode(string.charCodeAt(i) + (num % 26)); 
          continue;
        }
      caesarString = caesarString + string.charAt(i);  
  }
  return caesarString;
};
    // Do not edit below this line
module.exports = caesar;

    //Mjqqt, Btwqi!