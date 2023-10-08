#include <iostream>
using namespace std;
void IsEqual(int x, int y);	

main(){
	int x,y;
	cout<<"Enter the first number: ";
	cin>> x;
	cout<<"Enter the second number: ";
	cin>> y;
	IsEqual(x,y);
	
	
	

}
	void IsEqual(int x, int y){
	
	if(x==y){
	cout<< "true";
	}
	if(x!=y){
	cout<< "false";
	}

}