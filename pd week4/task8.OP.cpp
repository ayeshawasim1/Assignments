#include <iostream>
#include <windows.h>
using namespace std;
void gotoxy(int x,int y);
void calculateAggregate(string name, float MatricMarks, float InterMarks, float EcatMarks);
void compareMarks(string nameStd1, float ecatMarksStd1, string nameStd2, float ecatMarksStd2);
void menu(int x,int y);

int main()
{
	int x,y,choice;
	system("cls");
	menu(x,y);
	cout << "Enter your choice (1 or 2): ";
        cin >> choice;

	if(choice==1){
	string name;
        float MatricMarks, InterMarks, EcatMarks;

        cout << "Enter Your name: ";
        cin >> name;

        cout << "Enter Matric marks: ";
        cin >> MatricMarks;

        cout << "Enter Inter marks: ";
        cin >> InterMarks;

        cout << "Enter Ecat marks: ";
        cin >> EcatMarks;

	calculateAggregate(name,MatricMarks,InterMarks,EcatMarks);
	}

	if(choice==2){
	string nameStd1,nameStd2;
	float ecatMarksStd1, ecatMarksStd2;

	cout << "Enter name of first Student: ";
        cin >> nameStd1;

        cout << "Enter Ecat marks of first Student: ";
        cin >> ecatMarksStd1;

        cout << "Enter name of second Student: ";
        cin >> nameStd2;

        cout << "Enter Ecat marks of second Student: ";
        cin >> ecatMarksStd2;

        compareMarks(nameStd1, ecatMarksStd1, nameStd2, ecatMarksStd2);



	}
	
}


	void menu(int x,int y){
	gotoxy(70,2);
	cout<< "University Admission Management System" <<endl;
	gotoxy(70,3);
   	cout<< "______________________________________" << endl;
	gotoxy(80,5);
        cout<< "1. Calculate Aggreate"<< endl; 
	gotoxy(80,6);
        cout<< "2. Compare Marks" << endl;

	gotoxy(70,8);
       	cout<< "_______________________________________" << endl;
	
	}

	void calculateAggregate(string name, float MatricMarks, float InterMarks, float EcatMarks){

	
	float aggregate = (0.3*(MatricMarks/1100*100))+(0.3*(InterMarks/550*100))+(0.4*(EcatMarks/400*100));
	cout<< "Aggregate score for "<< name<< " in UET is: "<<aggregate <<"%";
}


	void compareMarks(string nameStd1, float ecatMarksStd1, string nameStd2, float ecatMarksStd2){

        if (ecatMarksStd1 > ecatMarksStd2) {
        cout << nameStd1 << " has higher marks in ECAT." << endl;
        }
	if (ecatMarksStd2 > ecatMarksStd1) {
        cout << nameStd2 << " has higher marks in ECAT." << endl;
        } 
	if (ecatMarksStd2 == ecatMarksStd1){
        cout << "Both students have same marks." << endl;
        }
	


	}
	void gotoxy(int x,int y)
	{
	COORD coordinates;
	coordinates.X = x;
	coordinates.Y = y;
	SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coordinates);
	}
