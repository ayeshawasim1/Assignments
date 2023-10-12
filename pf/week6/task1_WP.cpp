#include<iostream>
using namespace std;

string dress(string brand, float price);

int main(){

string brand;
float price;
cout<<"Enter the price of dress:";
cin>>price;

cout<<dress(brand,price);
return 0;
}

string dress(string brand, float price){
    if(price<1500.0 && brand =="MTJ"){
        return" Yes you can buy dress.";
        
    }
    return"Sorry you cannot buy this dress.";
}