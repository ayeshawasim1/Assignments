#include<iostream>
using namespace std;

string even_odd(int number);

main(){
int number;
cout<<"Enter a five digit Number: ";
cin>>number;

even_odd(number);
}

string even_odd(int number){
    int digit1, digit2, digit3, digit4, digit5;
    digit1 = number/10000;
    digit2 = (number%10000)/1000;
    digit3 = ((number%10000)%1000)/100;
    digit4 = (((number%10000)%1000)%100)/10;
    digit5 = ((((number%10000)%1000)%100)%10); 
    if((((digit1 + digit2 + digit3 + digit4 + digit5))%2) == 0){
        cout<<"Evenish";
    }
    if(!((((digit1 + digit2 + digit3 + digit4 + digit5))%2) == 0)){
        cout<<"Oddish";
    }}