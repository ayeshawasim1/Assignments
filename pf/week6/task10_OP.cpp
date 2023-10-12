#include<iostream>
using namespace std;

bool same(int number1, int number2, int number3);

main(){

int number1, number2, number3;

cout<<"Enter the fisrt number:";
cin>>number1;

cout<<"Enter the second number:";
cin>>number2;

cout<<"Enter the third number:";
cin>>number3;

same(number1, number2, number3);
}

bool same (int num1 , int num2 , int num3){
    if((num1==num2) && (num2 == num3)){
            cout<<"true";}
            else{return false;}
}