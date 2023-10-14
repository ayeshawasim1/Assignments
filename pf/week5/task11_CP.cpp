#include<iostream>
using namespace std;

string pool(int volume, int flowrateP1, int flowrateP2, float absentHours );

main(){

int flowrateP1, flowrateP2, volume;
float absentHours; 

cout<<"Enter the flow rate of wwater through pipe1: ";
cin>>flowrateP1;
cout<<"Enter the flow rate of water through pipe2: ";
cin>>flowrateP2;
cout<<"Enter the volume of pool: ";
cin>>volume;
cout<<"Enter the absent hours: ";
cin>>absentHours;
string result= pool(volume, flowrateP1, flowrateP2, absentHours);
cout<<result;

pool(volume , flowrateP1, flowrateP2, absentHours);}

string pool(int volume, int flowrateP1, int flowrateP2, float absentHours ){ 
int waterthroughp1, waterthroughp2, waterperc,totalwaterinpool, poolfull,waterthroughp1perc,waterthroughp2perc, overflow;
string final;
    waterthroughp1= flowrateP1*absentHours;
    waterthroughp2= flowrateP2*absentHours;
    totalwaterinpool = (waterthroughp1+waterthroughp2);
    waterthroughp1perc= (waterthroughp1/totalwaterinpool)*100;
     waterthroughp2perc= (waterthroughp2/totalwaterinpool)*100;
     waterperc=(totalwaterinpool/volume)*100;

    overflow=poolfull-volume;

    if(poolfull>volume){
    cout<<"for" << absentHours <<","<<"the pool overflows with"<<overflow<<"litres.";
    }
    if(poolfull<=volume){
     final= "The pool is " + to_string(waterperc) + "% full. Pipe 1: " + to_string(waterthroughp1perc) + "%. Pipe 2: "+ to_string(waterthroughp2perc) + "%." ;
    return final;
    }


}