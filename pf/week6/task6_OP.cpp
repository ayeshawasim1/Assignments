#include<iostream>
using namespace std;

float discount(string day, string month, float amount);

main(){

string day,month;
float amount;

cout<<"Enter the day of purchase:";
cin>>day;

cout<<"Enter the month of purchase:";
cin>>month;

cout<<"Enter the total amount paid for the product:";
cin>>amount;

discount(day,month,amount);
}

float discount(string day, string month, float amount){
if (month=="october" || day=="sunday")
{ float final_price ; 
  final_price=amount-(amount*10/100);
  cout<<"The final price is:"<<final_price; 

  return final_price;
}
}










