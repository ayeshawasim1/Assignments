#include <iostream>
#include <cmath>
using namespace std;

main()
{
    float n1, n2, result;
    cout << "Enter the base number: ";
    cin >> n1;
    cout << "Enter the exponent: ";
    cin >> n2;
    result = pow(n1, n2);
    cout << n1 << " raised to the power " << n2 << " is: " << result;
}
