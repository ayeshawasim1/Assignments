#include<iostream>
#include<cmath>
using namespace std;

string pyramid(float length, float width, float height, string unit);

main(){

float length, width, height;
string result,unit;

cout<<"Enter thhe length:";
cin>>length;
cout<<"Enter the width:";
cin>>width;
cout<<"Enter the height:";
cin>>height;
cout<<"Enter the unit of measurement:";
cin>>unit;

result=pyramid(length,width,height, unit);
cout << "The volume of the pyramid is: " << result ;
}
string pyramid(float length, float width, float height, string unit){
string final_unit;

if(unit=="centimeter"){
    length=length*100;
    width=width*100;
    height=height*100;
    final_unit=final_unit+ "centimeter";
   
}
if(unit=="meter"){
  float  volume=length*width*height/3;
    final_unit=final_unit+"meter";}
    
if(unit=="millimeter"){
    length=length*pow(10,-3);
        width=width*pow(10,-3);
        height=height*pow(10,-3);
        final_unit=final_unit + "millimeter";}
   

if(unit=="kilometer"){
    length=length/1000;
    width=width/1000;
    height=height/1000;
    final_unit=final_unit+ "kilometer";}
        float volume= (length*width*height)/3;
    
    string start="The volume of the pyramid is: ";
  string  result= start + to_string(volume) + " " + final_unit;
    return result;
}




