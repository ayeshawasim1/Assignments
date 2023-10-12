#include<iostream>
using namespace std;

int parity(int num);

main(){

int num;
int result;

cout<<"Enter the number 1:";
cin>>num;

parity(num);
result=parity(num);
cout<<result;
}

int parity(int num){

    int num1 = num / 100;

    int num2 = num % 100;

    int num3 = num2 / 10;

    int num4 = num2 % 10;

    int sum = num1 + num3 + num4;
    
    if ((num % 2) == 0)
    {
        if ((sum % 2) == 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    if ((num % 2) != 0)
    {
        if ((sum % 2) != 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}







