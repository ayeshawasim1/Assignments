#include<iostream>
#include<windows.h>
using namespace std;

void gotoxy(int x, int y);
void name(int x, int y);

main(){

int x=7;
int y=5 ;
system ("cls");
name (x,y);

}
void name(int x, int y)
{
gotoxy (x,y);
cout<<"AYESHA WASIM";
}

void gotoxy(int x, int y){
COORD coordinates;
	coordinates.X = x;
	coordinates.Y = y;
	SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coordinates);

}