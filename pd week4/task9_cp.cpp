#include<iostream>
using namespace std;

void tpChecker(int people, int TP);

main(){
	int people,TP;
	cout<< "Number of people in the household: ";
	cin>> people;
	cout<< "Number of rolls of TP: ";
	cin>> TP;	
	
	tpChecker(people, TP);	
	
	
	}
	
	void tpChecker(int people, int TP){
	int sheets = (TP*500);
	int usagePerDay = 57*people;
	int days = (sheets/usagePerDay);

	if(days<14){
	
	cout<< "Your TP will only last " <<days<< " days, buy more!";
	}
	if(days>=14){
	
	cout<< "Your TP will last " <<days<< " days, no need to panic!";
	}
	
	}
