#include<iostream>
using namespace std;

void discount(string name, float price);	

main(){
	string name;
	float price;
	cout<< "Enter the country's name: ";
	cin>> name;
	cout<< "Enter the ticket price in dollars: $";
	cin>> price;
	discount(name, price);
	
	
	

}
	void discount(string name, float price){
	float discount;

	if(name=="Pakistan"){
	discount= price-(0.05*price);
	}

	if(name=="Ireland"){
	discount= price-(0.1*price);
	}

	if(name=="India"){
	discount= price-(0.2*price);
	}
	
	if(name=="England"){
	discount= price-(0.3*price);
	}

	if(name=="Canada"){
	discount= price-(0.45*price);
	}
	cout<< "Final ticket price after discount: $"<<discount<<endl;
}
