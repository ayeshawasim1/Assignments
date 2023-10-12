#include<iostream>
using namespace std;

char grade( float marks);

main(){

float marks;

cout<<"Enter your marks:";
cin>>marks;

grade(marks);

}

char grade(float marks){

if(marks<50){
    cout<<"F GRADE.";
}
if(marks>50 && marks<=60){
    cout<<"E GRADE.";
}
if (marks>61 && marks<=70){
    cout<<"D GRADE.";
}
if (marks>70 && marks<=80){
    cout<<"C GRADE.";
}
if(marks>80 && marks<=85){
    cout<<"B GRADE.";
}
if(marks>85){
    cout<<"A GRADE.";
} 
}