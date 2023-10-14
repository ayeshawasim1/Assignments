#include<iostream>
using namespace std;

string time_travel(int hours, int minute);

main(){

int hours, minute;
string result;

cout<<"Enter the number of hours:";
cin>>hours;

cout<<"Enter the number of minutes:";
cin>>minute;

result=time_travel(hours,minute);
cout<<result;
}

string time_travel(int hours, int minute){

{
    int mins = minute + 15;
    if(mins>=60){
        hours = hours +1;
        mins = mins-60;
        
    }
   
    string result = to_string(hours) + ":" + to_string(mins);

    return result;}










}