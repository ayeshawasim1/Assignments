#include <iostream>
using namespace std;
void fuel(float distance);
main()
{

    float distance;
    cout << "Enter the Distance : ";
    cin >> distance;
    fuel(distance);
}

void fuel(float distance)
{
    float requiredfuel = distance * 10;
    if (requiredfuel >= 100)
        ;
    {
        cout << "The Fuel needed is: " << requiredfuel << endl;
    }

    if (requiredfuel < 100)
        ;
    {
        cout << "The fuel needed is:100";
    }
}