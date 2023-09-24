#include <iostream>
using namespace std;
main (){
	
	
	int number,sum,num1,num2,num3,num4,num5,num6,num7,num8,num9;
	
	cout<<"Enter a 4-digit number: ";
	cin>> number;

	num1= number/1000;
	num2= number%1000;
	num3= num2/(100);
	num4= number%100;
	num5= num4/10;
	num6= number%10;
	num7= num6/1;
	
	
	
	cout<< "Sum of the individual digits: "<< num1+num3+num5+num7 << endl;

	
}