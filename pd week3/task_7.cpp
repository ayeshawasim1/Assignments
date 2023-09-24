#include <iostream>
using namespace std;
main (){
	string movie_name;
	float Adult_ticket_price;
	float Child_ticket_price;
	float adult_sold;
	float child_sold;
	float percentage,total_amount,donation,remaining;
	cout<<"Enter the movie name: ";
	cin>> movie_name;
	cout<<"Enter the adult ticket price: $";
	cin>> Adult_ticket_price;
	cout<<"Enter the child ticket price: $";
	cin>> Child_ticket_price;
	
	cout<< "Enter the number of adult tickets sold: ";
	cin>> adult_sold;
	cout<< "Enter the number of child tickets sold: ";
	cin>> child_sold;
	cout<< "Enter the percentage of the amount to be donated to charity: ";
	cin>> percentage;
	
	total_amount= (Adult_ticket_price*adult_sold)+(Child_ticket_price*child_sold);
	donation= (0.1)*total_amount;
	remaining =total_amount-donation;
	cout<<endl;
	cout<< "Movie: "<<movie_name <<endl;
	cout<< "Total amount generated from ticket sales: $"<<total_amount<<endl;
	cout<< "Donation to charity ("<<percentage<<"%): $"<<donation<<endl;
	cout<< "Remaining amount after donation: $"<<remaining<<endl;
}