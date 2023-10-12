#include <iostream>
using namespace std;

float discount(string day, string month, float amount);

main(){

string day, month;
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
    string sunday,october;
    float final_price;
if(day=="sunday" && month=="october"){
final_price=amount-(amount*10/100);
cout<<"final price after discount is:"<<final_price;
}

if(day=="sunday" && month!= "october"){
    final_price=amount-(amount*5/100);
}
return final_price;
}
