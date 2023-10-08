#include<iostream>
using namespace std;


void discount(float price, string day){

float price;
string day;
if (day=='sunday'){
price=price-(0.1*price)
}
cout<<"The final price is:"<<price;
}

main(){

float price;
string day;
cout<<"Enter the price of product: ";
cin>>price;

cout<<"Enter the day:";
cin>>day;
discount(price,day);

}