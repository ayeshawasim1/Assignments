#include<iostream>
using namespace std;

string alphabet_case(char alphabet);
 int main() {
char alphabet;

cout<<"Enter the alphabet:";
cin>>alphabet;

alphabet_case(alphabet);
 } 

 string alphabet_case(char alphabet){

    if(alphabet=='A'){
        cout<<"You have entered capital A";}

    if (alphabet=='a')
    {
        cout<<"You have entered small a"; 
    }
        

 }