#include <iostream>
#include <windows.h>
using namespace std;
void gotoxy(int x,int y);

void moveName(int x,int y);

int main()
{
	int x =76, y = 22;
	system("cls");
	
	moveName(x,y);
}


void moveName(int x,int y){
	gotoxy(x,y);
	cout<<"AYESHA WASIM";
	
}

void gotoxy(int x,int y)
{
	COORD coordinates;
	coordinates.X = x;
	coordinates.Y = y;
	SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coordinates);
}
