#include <iostream>
using namespace std;

void challan ( int speed );

main()
{
    int speed;
    cout << "Speed: ";
    cin >> speed;
    challan ( speed );
}

void challan ( int speed )
{
    if ( speed > 100 )
    {
        cout << "Halt... YOU WILL BE CHALLENGED!!!";
    }

    if ( speed <= 100 )
    {
        cout << "Perfect! You're going good.";
    }
}