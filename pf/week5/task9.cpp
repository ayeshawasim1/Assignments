#include <iostream>
using namespace std;

void timeTravel(int hr, int min);

main()
{
    int hr, min;
    cout << "Enter Hours: ";
    cin >> hr;
    cout << "Enter Minutes: ";
    cin >> min;
    timeTravel(hr, min);
}

void timeTravel(int hr, int min)
{
    min += 15;
    if (min > 59)
    {
        hr ++;
        min -= 60;
    }
    if (hr > 23)
    {
        hr = 0;
    }
    cout<<hr<<":"<<min;
}
 