#include<iostream>
using namespace std;

void measurement(float inches);

main(){

float inches;
cout<<"Enter the value in inches:";
cin>>inches;

measurement(inches);
}
void measurement(float inches)
{
float foot;
foot=inches/12;

cout<<"The value in feet is:"<<foot; 



    
}