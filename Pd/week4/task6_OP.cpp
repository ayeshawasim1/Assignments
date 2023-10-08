#include<iostream>
#include<windows.h>
using namespace std;

void gotoxy (int x, int y);
void alphabet_H(int x, int y);
void alphabet_a(int x, int y);
void alphabet_s(int x, int y);
void alphabet_n(int x, int y);

int main(){

int x,y;
system("cls");
alphabet_H(50,30);

alphabet_a(50,31);

alphabet_s(50,32);

alphabet_s(50,33);

alphabet_a(50,34);

alphabet_n(50,35);
}

void alphabet_H(int x, int y){
gotoxy (x,y);
cout<<"H";
}
void alphabet_a(int x, int y){
    gotoxy (x,y);
    cout<<"a";
}


void alphabet_s(int x, int y){
    gotoxy (x,y);
    cout << "s" ; }

  void alphabet_n(int x, int y){
   gotoxy (x,y);
     cout<< "n";}

void gotoxy(int x, int y){
COORD coordinates;
	coordinates.X = x;
	coordinates.Y = y;
	SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coordinates);

}





