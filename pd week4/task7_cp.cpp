#include<iostream>
using namespace std;

void flowerShop(float redRose, float whiteRose,float tulip);	

main(){
	float redRose, whiteRose, tulip;
	cout<< "Red Rose: ";
	cin>> redRose;
	cout<< "White Rose: ";
	cin>> whiteRose;	
	cout<< "Tulips: ";
	cin>> tulip;	
	
	flowerShop(redRose, whiteRose, tulip);	
	
	
	}
	
	void flowerShop(float redRose, float whiteRose,float tulip){
	float discount,price;	
	price = (redRose*2.00)+(whiteRose*4.10)+(tulip*2.50);
	discount= price-(0.2*price);

	cout<< "Original Price: $"<< price<< endl;

	if(price>200){
	cout<< "Price after Discount: $"<< discount;
	}
	if(price<=200) {
	
	cout<< "No discount applied."; 
	}

	}
	
