#include<iostream>
using namespace std;

void add(int number1, int number2);

main(){
int number1,number2;
char op;

cout<<"Enter Number1:";
cin>>number1;

cout<<"Enter the number2 :";
cin>>number2;

cout<<"enter the operation:";
cin>>op;

if(op=='+')
{

add(number1,number2);
}

}
void add(int number1,int number2)
{

    cout<<"sum :"<<number1+number2;

}







