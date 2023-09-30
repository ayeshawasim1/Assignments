#include <iostream>
#include <windows.h>
using namespace std;
void gotoxy(int x,int y);
void printmaze();
void movePlayer(int x,int y);
int main()
{
	int x = 10, y = 2;
	system("cls");
	printmaze();
	while(true){

	movePlayer(x,y);
	y=y+1;

	if(y==10){
	y=2;
	}

	}
	
}


void movePlayer(int x,int y){
	gotoxy(x,y);
	cout<<"Patrol";
	Sleep(100);
	gotoxy(x,y);
	cout<<"      ";
}
void printmaze(){

	cout<< "###########################" <<endl;
	cout<< "#                         #" <<endl;
	cout<< "#                         #" <<endl;
	cout<< "#                         #" <<endl;
	cout<< "#                         #" <<endl;
	cout<< "#                         #" <<endl;
	cout<< "#                         #" <<endl;
	cout<< "#                         #" <<endl;
	cout<< "#                         #" <<endl;
	cout<< "#                         #" <<endl;
	cout<< "#                         #" <<endl;
	cout<< "###########################" <<endl;

}
void gotoxy(int x,int y)
{
	COORD coordinates;
	coordinates.X = x;
	coordinates.Y = y;
	SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coordinates);
}
