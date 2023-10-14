#include<iostream>
using namespace std;

string time(int hours, int firm_days, int workers);
main(){
    int hours ,firm_days, workers;
    
    cout << "Enter the needed hours: ";
    cin >> hours; 
    cout << "Enter the days that the firm has: ";
    cin >> firm_days;
    cout << "Enter the number of all workers: ";
    cin >> workers;

    string answer =  time(hours,firm_days,workers);
    cout<<answer;
    
}
string time(int hours, int firm_days, int workers){
    int total;
    string result;
    float training = 0.1*firm_days;
    float remaining_days = firm_days - training;
    
    float working_hours = remaining_days * 8 * workers;
    float overtime = 2*remaining_days*workers;
    float hours_left= working_hours+overtime;
  
    
    if(hours_left < hours){
        total = hours - hours_left;
        result = "Not enough time." + to_string(total) + " hours needed.";
          }

    if(hours_left>=hours){
        total = hours_left -hours;
        result = "Yes." + to_string(total) + " hours left.";
      
    }
    return result;
}