#include<iostream>
using namespace std;

void bonus(int a, int b);	

main(){
	int a,b;
	cout<< "Enter your position: ";
	cin>> a;
	cout<< "Enter your friend's position: ";
	cin>> b;	;
	
	bonus(a,b);	
	
	
	

}
	
	void bonus(int a, int b){	
	int difference= b-a;

	if(difference<=6){
	cout<< "true";
	}

	
	if(difference>6){
	cout<< "false";
	}
}
