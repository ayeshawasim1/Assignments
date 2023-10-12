#include <iostream>
using namespace std;

string title(float age, string gender);

main(){
   float age;
   string gender;
    string ans;
cout << "Enter your gender:";
cin >> gender;

cout<<"Enter your age:";
cin>>age;

ans=title(age,gender);
cout<<"your title is:"<<ans;
}

//function to print the name of a person according to his/her age and gender.

string title(float age, string gender){
    string result;

if(gender=="male" && age>16){
    result="Mr.";
    if(gender=="male" && age<16){

        cout<<"Master.";}
        if(gender=="female" && age>16){
            result="Ms.";
        }
        if(gender=="female" && age<16){
            result="Miss.";
        }
        return result;
}










}