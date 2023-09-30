
#include<iostream>
using namespace std;

void reverse(string x);	

main(){
	string x;
	
	cout<< "Enter 'true' or 'false': ";
	cin>> x;
	reverse(x);	
	
	

}
	
	void reverse(string x){
	
	if(x=="true"){
	cout<< "false";
	}
	if(x=="false"){
	cout<< "true";
	}
}
