#include<iostream>
#include<cmath>
using namespace std;

main(){

int number1, number2;

cout<<"Enter the base number:";
cin>>number1;

cout<<"Enter the exponent number:";
cin>>number2;

cout<<number1 <<" raised to the power "<< number2 << " is " <<pow(number1 , number2);
}