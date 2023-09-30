#include <iostream>
#include <windows.h>
using namespace std;
void gotoxy(int x,int y);

void moveH(int x,int y);
void moveA(int x,int y);
void moveS(int x,int y);
void moveN(int x,int y);



int main()
{
	int x , y ;
	system("cls");
	
	moveH(60,10);

	moveA(60,11);
	
	moveS(60,12);
	
	moveS(60,13);
	
	moveA(60,14);
	
	moveN(60,15);
	
}


void moveH(int x,int y){
	gotoxy(x,y);
	cout<<"H";
	
}

void moveA(int x,int y){
	gotoxy(x,y);
	cout<<"A";
	
}

void moveS(int x,int y){
	gotoxy(x,y);
	cout<<"S";
	
}

void moveN(int x,int y){
	gotoxy(x,y);
	cout<<"N";
	
}

void gotoxy(int x,int y)
{
	COORD coordinates;
	coordinates.X = x;
	coordinates.Y = y;
	SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coordinates);
}
