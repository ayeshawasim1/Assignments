#include <iostream>
using namespace std;

void pet(int holidays);

main()
{
    int holidays;

    cout << "Holidays are: ";
    cin >> holidays;
    pet(holidays);
}

void pet(int holidays)
{
    int workday, gtime, norm, g_hour, g_min;

    workday = 365 - holidays;
    gtime = workday * 63 + holidays * 127;
    norm = 30000 - gtime;
    g_hour = norm / 60;
    g_min = norm - (g_hour * 60);

    if (norm >= 0)
    {
        cout << "Tom sleeps well" << endl;
        cout << g_hour << " hours and " << g_min << " mintes less for play";
    }
    else
    {
        g_hour = g_hour * -1;
        g_min = g_min * -1;
        cout << "Tom will run away" << endl;
        cout << g_hour << " hours and " << g_min << " minutes for play";
    }
}
