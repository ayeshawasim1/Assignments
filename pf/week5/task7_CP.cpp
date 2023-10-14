#include<iostream>
using namespace std;

bool true_false(int number);

main(){

int number;
cout<<"Enter a three digit Number: ";
cin>>number;

true_false(number);
}

bool true_false(int number){
int a;
int b;

a=number%10;
b=number/100;

if(a==b){
    cout<<"Is symmetrical";
}
else 
{cout<<"not symmetrical";}

} 