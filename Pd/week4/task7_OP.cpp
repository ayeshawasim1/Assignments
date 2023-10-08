#include<iostream>
#include<windows.h>
using namespace std;

void gotoxy(int x, int y);
void maze();
void player(int x , int y);
int main(){

int x=10;
int y=2;
system("cls");
maze();
while (true){
player(x,y);
y=y+1;
if (y==10){
    y=2;
}}
}
void player(int x , int y){
gotoxy(x,y);
cout<<"Patrol";
Sleep(100);
gotoxy(x,y);
cout<<"    ";
}

void maze(){





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
    


















    



