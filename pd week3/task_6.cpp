#include <iostream>
using namespace std;
main (){
	int size;
	float cost,area,fpp,fps;
	cout<<"Enter the size of the fertilizer bag in pounds: ";
	cin>> size;
	cout<<"Enter the cost of the bag: $";
	cin>> cost;
	cout<<"Enter the area in square feet that can be covered by the bag: ";
	cin>> area;
	fpp= cost/size;
	fps=cost/area;
	cout<<"Cost of fertilizer per pound: $"<<fpp<<endl;
	cout<<"Cost of fertilizing per square foot: $"<<fps;
}