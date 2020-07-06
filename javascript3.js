<html>
<head>
	<script>
		
		function d(val){
			document.getElementById('result').value+=val;
		}
		function solve(){
			var value1= document.getElementById('result').value;
			let res = eval(value1);
			document.getElementById('result').value=res;	
		}
		functioncleard(){
		document.getElementById('result').value="";
		}


function val(){
  let N = document.getElementById("Name").value;
  let P = document.getElementById("Phone").value;
  let E = document.getElementById("Email").value;
  let alertmsg = document.getElementById("Alertmessage");
  var text;

  if(N.length == 0){
    alert("Please enter the Name");
    return false;
  }
   if(!isNaN(N[0])){
    alert("This field should not start with number");
    return false;
  }
   if(!isNaN(N)){
    alert("Only alphabets are entered");
    return false;
  }
  if(N.length <=2){
    alert("Enter alphabets atleast 2");
    return false;
  }
  if(E.length == 0){
    alert("Please fill this field ");
    return false;
  }
  if(!(E.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))){
        alert('invalid email')
        return false;
    }
  if(P.length == 0){
    alert("Please fill this field");
    return false;
  }
  if(isNaN(P) || P.length != 10){
    alert("Invalid phone number");
    return false;
  }
alert("info if valid");
	return true
}


function palindrome(){
let restr="";
let str=document.gretElementById("str").value;
let i=str.length;
for(let j=i;j>=0;j--)
{
	restr=restr+str.charAt(j);
}
if(str== restr)
{
	alert(str+" is a palindrome");
}
else
{
	alert(str+"is not a palindrome");
}
}


function anagrams() { 
        let stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
        let stringB = stringB.replace(/[^\w]/g, '').toLowerCase()
    
        if (stringA.length !== stringB.length) {
            return false
        }

        let arrB = stringB.split("")

        for (let char of stringA ){ 
            if (!arrB.includes(char)) {
                return false
                break;
            } else {
                arrB.splice(arrB.indexOf(char), 1)
            }
        }

        return true
}


function servive(){
  let doc = document.getElementById("samp");
 let samp;
  let array = [0,1,2];
  let a = array[Math.floor(Math.random() * array.length)];
  let b = array[Math.floor(Math.random() * array.length)];
  document.getElementById("inp1").value = a;
  document.getElementById("inp2").value = b;
    if(a==1){
      result="Human Survives";
    }
    else{
      result="Nuclear Bomb Survives";
    }
  }
  else if(a==1){
    if(b==0){
      result="Human Survives";
    }
    else if(b==1){
      result="Tie";
    }
    else{
      result="Cockroach Survives";
    }
  }
else if(a==0){
    if(b==0){
      result="Tie";
    }
  else{
    if(Num2==0){
      result="Nuclear Bomb Survives";
    }
    else if(Num2==1){
      result="Cockroach Survives";
    }
    else{
      result="Tie";
    }
  }
  doc.innerHTML=samp;
}