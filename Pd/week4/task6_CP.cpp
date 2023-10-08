#include <iostream>
using namespace std;

void longest_Time ( int hour, int min );

main()
{
    int hour, min;

    cout << "Enter the number of hours: ";
    cin >> hour;
    cout << "Enter the number of minutes: ";
    cin >> min;
    longest_Time ( hour, min );
}

void longest_Time ( int hour, int min )
{
    int hours;
    hours = hour * 60;

    if ( hours > min)
    {
        cout << hour;
    }
    else
    {
        cout << min;
    }
}