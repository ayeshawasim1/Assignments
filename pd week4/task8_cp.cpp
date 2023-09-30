#include<iostream>
using namespace std;

void pet(int holidays);

main(){
	int holidays;
	cout<< "Holidays: ";
	cin>> holidays;	
	
	pet(holidays);	
	
	
	}
	
	void pet(int holidays){
	int working_days, game_time, difference,hours,minutes;
	
	working_days = 365-holidays;
	game_time = (working_days*63) + (holidays*127);
	
	
	if(game_time>30000){
	cout<< "Tom will run away"<< endl;
	difference = game_time-30000;
	hours = difference/60;
	minutes = difference-(hours*60);

	cout<< hours << " hours and " << minutes << " minutes for play";
	}
	if(game_time<=30000){
	difference = 30000 - game_time;
	hours = difference/60;
	minutes = difference-(hours*60);

	cout<< "Tom sleeps well" <<endl;
	cout<< hours << " hours and " << minutes << " minutes less for play";
	}
	
	}
