#include<iostream>
using namespace std;

void calculatePayableAmount ( string day, int amount );

main()
{
	string day;
	int amount;
	cout << "Enter the day of purchase: ";
	cin >> day;
	cout << "Enter the total purchase amount: $";
	cin >> amount;
	calculatePayableAmount (  day,  amount );

}

void calculatePayableAmount ( string day, int amount )
{
	int discount, a;
	a = amount * 0.1;
	discount = amount - a;

if ( day == "Sunday" )
	{
		cout << "Payable Amount: $" << discount;
	}
if ( day != "Sunday" )
	{
		cout << "Payable Amount: $" << amount;
	}

}
