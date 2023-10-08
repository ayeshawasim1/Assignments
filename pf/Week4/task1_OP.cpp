#include<iostream>
using namespace std;

void truefalse(int num1, int num2){
if(num1==num2){
    cout<<"true";
}
if(num1!=num2){
    cout<<"false";
}
}
main(){

int num1,num2;
cout<<"Enter the first number: ";
 cin>>num1;

 cout<<"Enter the second number:";
 cin>>num2;
 truefalse(num1,num2);

}