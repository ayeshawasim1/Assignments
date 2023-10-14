#include<iostream>
#include<cmath>
using namespace std;
float tree(float base, float angle);

main(){

float base, angle;

cout<<"Enter the horizontal distance from your position to the base of the tree:";
cin>>base;

cout<<"Enter the angle of elevation:";
cin>>angle;

tree(base, angle);
}

float tree(float base, float angle){
float height , result;

result= height=base* (tan(angle/57.2958));
cout<<"the height of tree is:"<<result;
}










