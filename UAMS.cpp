#include<iostream>
using namespace std;

void printMenu();
void calculateAggregate(string name,float matricMarks,float interMarks,float ecatMarks);
void compareMarks(string nameStd1,int ecatMarksStd1,string nameStd2,int ecatMarksStd2);
main(){
	printMenu();
	int choice;
	cout<<"Enter your choice: ";
	cin>>choice;
	if(choice==1)
	{string name;
	cout<<"Enter your name: ";
	cin>>name;
	float matricMarks;
	cout<<"Enter your matric marks: ";
	cin>>matricMarks;
	float interMarks;
	cout<<"Enter you intermediate marks: ";
	cin>>interMarks;
	float ecatMarks;
	cout<<"Enter your ecat marks: ";
	cin>>ecatMarks;
	calculateAggregate(name,matricMarks,interMarks,ecatMarks);}
	if(choice==2)
	{string nameStd1;
	cout<<"Enter the name of first student: ";
	cin>>nameStd1;
	int ecatMarksStd1;
	cout<<"Enter the ecat marks of first student: ";
	cin>>ecatMarksStd1;
	string nameStd2;
	cout<<"Enter the name of second student: ";
	cin>>nameStd2;
	int ecatMarksStd2;
	cout<<"Enter the ecat marks of second student: ";
	cin>>ecatMarksStd2;
	compareMarks(nameStd1,ecatMarksStd1,nameStd2,ecatMarksStd2);}
}
void printMenu()
{
	cout<<"          University Admission Management System       "<<endl;
	cout<<"         ________________________________________      "<<endl;
	cout<<"                                                       "<<endl;
	cout<<"               1- Calculate The Aggregate              "<<endl;
	cout<<"               2- Compare Marks                        "<<endl;
	cout<<"         ________________________________________      "<<endl;
}
void calculateAggregate(string name,float matricMarks,float interMarks,float ecatMarks)
{

	float aggregate;
	aggregate=(matricMarks*30/1100)+(interMarks*30/550)+(ecatMarks*40/400);
	cout<<"Your aggregate is "<<aggregate<<"%";
}
void compareMarks(string nameStd1,int ecatMarksStd1,string nameStd2,int ecatMarksStd2)
{
	
	if(ecatMarksStd2>ecatMarksStd1)
	{cout<<nameStd2<<" has higher number in ECAT than "<<nameStd1;}

	if(ecatMarksStd2<ecatMarksStd1)
	{cout<<nameStd1<<" has higher number in ECAT than "<<nameStd2;}
}
	
