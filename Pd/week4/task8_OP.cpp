#include<iostream>
#include<windows.h>
using namespace std;

void menu();
void calculateAggregate(string name, float MatricMarks, float InterMarks, float EcatMarks);
void gotoxy(int x, int y);
void compareMarks(string nameStd1, float ecatMarksStd1, string nameStd2, float ecatMarksStd2);

main(){
string name, nameStd1, nameStd2;
float MatricMarks, InterMarks, ecatMarksStd2, ecatMarksStd1 , EcatMarks;
menu();
string select;
cout<<"1. calculate Aggregate"<<endl;
cout<<"2. compare marks"<<endl;
cout<<"select 1 or 2:"<<endl;
cin>>select;
if (select == "calculate aggregate")
{ calculateAggregate(name, MatricMarks, InterMarks, EcatMarks);
}

else if (select =="compare marks"){

compareMarks(nameStd1,ecatMarksStd1, nameStd2,ecatMarksStd2);
}
}

void menu(){
system("cls");
gotoxy(50,7);
cout<<"--------------------------------------"<<endl;
gotoxy(50,8);
cout<<"University Admission Management System"<<endl;
gotoxy(50,9);
cout<<"                  UAMS                "<<endl;
gotoxy(50,10);
cout<<"--------------------------------------"<<endl;
}

void calculateAggregate(string name, float MatricMarks, float InterMarks, float EcatMarks){
cout<<"Enter your name:"<<endl;
cin>>name;
cout<<"Enter your Matric Marks: "<<endl;
cin >> MatricMarks ;
cout <<"Enter your Inter Marks :<<endl "; 
cin >> InterMarks; 
cout <<"Enter your Ecat marks:"<<endl;
cin>>EcatMarks;
float aggregate;
aggregate = (((MatricMarks / 1100) * 0.3) + ((InterMarks / 550) * 0.3) + ((EcatMarks / 400) * 0.4)) * 100;
cout << "your agregate is:";
}

void compareMarks(string nameStd1, float ecatMarksStd1, string nameStd2, float ecatMarksStd2){
    cout<<"enter the name of first student:"<<endl;
    cin>>nameStd1;
    cout<<"enter the Ecatscore of first student:"<<endl;
    cin>>ecatMarksStd1;
    cout<<"enter the name of second student:"<<endl;
    cin>>nameStd2;
    cout<<"enter the Ecatscore of second student:"<<endl;
    cin>>ecatMarksStd2;
    if (ecatMarksStd1>ecatMarksStd2){
        cout<<nameStd1<<" has roll_1";
        cout<<nameStd2<<" has roll_2";}
    if (ecatMarksStd2>ecatMarksStd1){
        cout<<nameStd2<<" has roll_1";
        cout<<nameStd1<<" has roll_2" ; }
       }

   void gotoxy(int x,int y)
	{
	COORD coordinates;
	coordinates.X = x;
	coordinates.Y = y;
	SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coordinates);
	}
