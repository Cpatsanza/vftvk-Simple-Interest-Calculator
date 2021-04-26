
function compute()
{
//code will compute the interest amount to be earned
     if(validateForm()){
       return;
     }
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value
var years = document.getElementById("years").value
var amount = principal*years*rate/100;
var year = new Date().getFullYear()+parseInt(years);
showResult(principal,rate,amount,year);
}
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function showResult(principal,rate,amount,year)
{
//code will show the input and output the result as per input criteria
document.getElementById("result").innerHTML="If you deposit <span class=\"highlight\">"+principal+"</span>,\<br\>at an interest rate of <span class=\"highlight\">"+rate+"%</span>\<br\>You will receive an amount of <span class=\"highlight\"> "+amount+"</span>,\<br\>in the year <span class=\"highlight\"> "+year+"</span>\<br\>";
}

function validateForm() 
{
    // code validates input on form
  var principal = document.getElementById("principal").value;

  if (principal <= 0 || principal.value=="") {
    alert("Enter a positive number");
    principal.focus();
    return false;
  }
//if all is well return true.
    return true;
}