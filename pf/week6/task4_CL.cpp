#include<iostream>
using namespace std;

 float Findgreatest(float number1,float number2,float number3);

 main(){
float number1,number2,number3;

cout<<"Enter the number1:";
cin>>number1;

cout<<"Enter the number2:";
cin>>number2;

cout<<"Enter the number3:";
cin>>number3;

cout<<Findgreatest(number1, number2, number3);
 }

 float Findgreatest(float number1,float number2,float number3){

if (number1>number2 && number1>number3)
{cout<<"the greatest is number1.";
}
if (number2>number1 && number2>number3)
{cout<<"the greatest is number2.";
}
if (number3>number1 && number3>number2)
{cout<<"The greatest is number3.";
}

 }
