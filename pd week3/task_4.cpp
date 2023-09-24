#include <iostream>
using namespace std;
main (){
	cout<< "Enter Imposter Count: ";
	float i,p;
	cin>> i;
	cout<< "Enter Player Count: ";
	cin>> p;
	float chance=100*(i/p);
	
	cout<< "Chance of being an imposter: "<< chance<<"%";



}