var x = "0123456789~!@#$%^&*()_+[]{},./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

 function getVal() {
  let characters = ""
    const length = parseInt(prompt("How long should your password be?"))
   
    const shouldUseNumbers = confirm("Should I use numbers?")
    if(shouldUseNumbers){
    characters += "0123456789"
    
    const shouldUseUpperCase = confirm("should I use Uppercase letters?")
    if(shouldUseUpperCase){
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
      const shouldUseLowerCase = confirm("should I use Lowercase letters?")
    if(shouldUseLowerCase){
      characters += "abcdefghijklmnopqrstuvwxyz"
    
      const shouldUseSymbolsCase = confirm("should I use Symbol letters?")
    if(shouldUseSymbolsCase){
      characters += "~!@#$%^&*()_+[]{},./"
    }
      }
        }
          }

  var password = '';
  for (let i = 0; i <=length; i++) {
    var c = Math.floor((Math.random()*x.length)+0);
    password+= x.charAt(c);
  }
  document.getElementById("pass").value = password;
}