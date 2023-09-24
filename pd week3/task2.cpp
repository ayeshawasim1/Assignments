#include <iostream>
using namespace std;
main (){
	cout<< "Number of Minutes: ";
	int m,s,tf,fps;
	cin>> m;
	cout<< "Frames per Second: ";
	cin>> fps;
	s=m*60;
	tf=s*fps;
	cout<<"Total Number of Frames: "<< tf;



}