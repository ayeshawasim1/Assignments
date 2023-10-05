#include <iostream>
#include <cmath>
using namespace std;

void IsSymmetrical(int number);

main()
{
    int number;
    cout << "Enter a three-digit number: ";
    cin >> number;
    IsSymmetrical(number);
}

void IsSymmetrical(int number)
{
    int a, b;
    a = number % 10;
    b = number / 100;

    if (a == b)
    {
        cout << "The number is symmetrical.";
    }
    else
    {
        cout << "The number is not symmetrical.";
    }
}
 