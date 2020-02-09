

var mes = prompt("Ingrese el número de mes", "Ingrese el numero");
//console.log("el numero de mes es: " + mes);

switch(mes) {
  
  case "12":
  case "1":
  case "2":
    window.alert("Es es invierno.");
    break;
 case "3":
 case "4":
 case "5": 
    window.alert("Es primavera.");
    break;
    
 case "6":
 case "7":
 case "8": 
    window.alert("Es verano.");
    break;
    
 case "9":
 case "10":
 case "11": 
    window.alert("Es otoño.");
    break;
 
  default:
    window.alert("No es un mes.");

}