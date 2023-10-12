#include<iostream>
using namespace std;

string check_speed(float speed);

main(){

float speed;
cout<<"Enter the Speed of a car in km/h: "; 
cin>>speed; 

check_speed(speed);
}

string check_speed(float speed){

if(speed>10 && speed<=50){
    cout<<"AVERAGE";
}
if(speed<=10){
    cout<< "SLOW";
} 
if(speed>50 && speed<=150){
    cout << "FAST" ;
}
if(speed>150 && speed<=1000){
    cout<<"ULTRA FAST";}
    if (speed>1000){
        cout<<"EXTREMELY FAST";
    }
    
    }

