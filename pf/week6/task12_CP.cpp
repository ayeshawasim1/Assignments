#include<iostream>
using namespace std;

float income(string screening, int row_no, int coloumn_no);

main(){

string screening;
int row_no , coloumn_no;

cout<<"Enter the screening type:";
cin>>screening;

cout<<"Enter the no of rows:";
cin>>row_no;

cout<<"Enter the no of columns";
cin>>coloumn_no;

income(screening,row_no,coloumn_no);
}

float income(string screening, int row_no, int coloumn_no){

    float amount;
    if(screening=="premiere"){
    amount=12 * row_no *coloumn_no;  
    cout<<"answer:"<<amount;     
    }

    if (screening=="normal"){
        amount = 7.50*row_no*coloumn_no ;
        cout<<"answer:"<<amount;
    }
    
    if(screening=="discount"){
        amount=5* row_no* coloumn_no;
        cout<<"answer:"<<amount;
    }
 
}