function Discriminator(num1,num2,num3)
{
  let D =  Number(Math.pow(num2,2)- 4*num1*num3);
  return D;
}
function Equation (D, num1,num2)
{
   if(D==0)
   {
          let x1= Number((-(num2)+Math.sqrt(D))/2*num1);
          document.write('x='+x1 +'<br>');
   }
   if(D<=0)
   {
          document.write('The result will be in complex values, have not yet figured how to count that,even with the usage of the external library for complex numbers.');
   }
    if(D>=0)
    {
        let x1= Number((-(num2)+Math.sqrt(D))/2*num1);
          let x2 = Number((-(num2)-Math.sqrt(D))/2*num1);
          document.write('x_1='+x1 +'<br>' + 'x_2='+x2+'<br>');
    }
    // else{alert('You entered wrong values!');}
}
let a,b,c,disc;
var Flag=0;
do 
{
     a=prompt('Enter value A=');
     b=prompt('Enter value B=');
     c=prompt('Enter value C=');
     disc=Discriminator(a,b,c);
    if(isNaN(a)|| a==0)
    {
        alert('PLease do only Numerical inputs for Values A B C and dont make A value equal to Zero');
    }
    else    if(isNaN(b))
    {
        alert('PLease do only Numerical inputs for Values A B C');
    }
    else    if(isNaN(c))
    {
        alert('PLease do only Numerical inputs for Values A B C');
    }
    else{Flag=1}
}
while(Flag==0);
document.write('Discriminator ='+disc);
if(disc>=0)
{
document.write('<p class="js-text">Here is the result of Quadratic equation</p>');
document.write('<br>');
}

document.write(Equation(disc,a,b));
