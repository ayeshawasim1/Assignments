#include<iostream>
using namespace std;

void calculator(float number1, float number2, char op)
{

if (op =='+'){
float sum=number1+number2;
cout<<"sum is:"<<sum;  }

if (op=='-'){
float subtraction=number1-number2;
cout<<"subtraction is : "<<subtraction;  }

if (op=='*')
{float multiplication=number1*number2;
cout<<"multiplication is: "<<multiplication;}

if (op=='\\')
{float division=number1/number2;
cout<<"division is :" <<division;}

}

main(){

float number1,number2;
char op;
cout<<"Enter the first Number:";
cin>>number1;

cout<<"Enter the second number:";
cin>>number2;
cout<<" Enter operator(+,-,* or /):";
cin>>op;

calculator(number1,number2,op);

}


