#include<iostream>
using namespace std;

#include<iostream>
using namespace std;

float tax(char code, float price);
main(){
    float price;
    char code;
    cout << "Enter the vehicle type code: ";
    cin >> code; 
    cout << "Enter the price of the vehicle: $";
    cin >> price;
    float answer = tax(code,  price);
    cout<< "The final price of a vehicle of type "<<code<< " after adding the tax is $"<< to_string(answer)<< ".";
}
float tax(char code, float price){
    float taxrate;
    if(code=='M'){
        taxrate = 0.06;
    }
    if(code=='E'){
        taxrate = 0.08;
    }
    if(code=='V'){
        taxrate = 0.12;
    }
    if(code=='S'){
        taxrate = 0.1;
    }
    if(code=='T'){
        taxrate = 0.15;
    }
    float TaxAmount = price*taxrate;
   
    float FinalPrice = (TaxAmount+price);
    
    return FinalPrice;
    
}
    
