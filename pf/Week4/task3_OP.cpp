#include<iostream>
using namespace std;

void howmanystickers(int n);

main(){
int n;
cout<<"Enter the value of stickers: ";
cin>>n;
 
 howmanystickers(n);

}

void howmanystickers(int n){

int stickers=n*n*6;
cout<<"number of stickers needed:"<<stickers;


}