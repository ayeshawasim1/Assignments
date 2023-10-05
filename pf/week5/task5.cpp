#include <iostream>
#include <cmath>
using namespace std;

void disc(float determinant, float a, float b);

main()
{
    float a, b, c, determinant;
    cout << "Enter the value of a: ";
    cin >> a;
    cout << "Enter the value of b: ";
    cin >> b;
    cout << "Enter the value of c: ";
    cin >> c;
    determinant = b * b - 4 * a * c;
    disc(determinant, a, b);
}

void disc(float determinant, float a, float b)
{
    if (determinant > 0)
    {
        float root1, root2;
        root1 = (-b + sqrt(determinant)) / (2 * a);
        root2 = (-b - sqrt(determinant)) / (2 * a);
        cout << "Solutions: x = " << root1 << " and x = " << root2;
    }
    else if (determinant == 0)
    {
        float root1;
        root1 = (-b) / (2 * a);
        cout << "Solution: x = " << root1;
    }
    else if (determinant < 0)
    {
        float root1, root2;
        root1 = (-b) / (2 * a);
        root2 = (sqrt(-determinant)) / (2 * a);
        cout << "Complex Solutions: x = " << root1 << " + " << root2 << "i and x = " << root1 << " - " << root2 << "i";
    }
}
