#include<iostream>
using namespace std;

void result(int marks)
{
if(marks>=50)
{
    cout<<"Pass!";
}
if(marks<50){
    cout<< "Fail :( ";

}


}

main(){

int marks;
cout<<"Enter your marks:";
cin>>marks;

result(marks);
}



