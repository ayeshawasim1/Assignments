#include <iostream>
#include <cmath>
using namespace std;

float quadratic_equation(float a, float b, float c);
main()
{

    float a, b, c,result;

    cout << "Enter the value of a: ";
    cin >> a;

    cout << "Enter the value of b: ";
    cin >> b;

    cout << "Enter the value of c:";
    cin >> c;

    quadratic_equation(a, b, c);
}

float quadratic_equation(float a, float b, float c)
{
    float root1, root3, root2;
    float determinant;
    determinant = (pow(b, 2)) - (4 * a * c);

    if (determinant > 0)
    {
        root1 = -b + sqrt(determinant) / 2 * a;

        root2 = -b - sqrt(determinant) / 2 * a;
        cout << "solutions: x=" << root1 << "and x=" << root2;
    }

    if (determinant == 0)
    {
        root1 = -b/(2*a);
        root2=root1;
        cout << "solution is " << root1;
    }

    if (determinant < 0)
    {
        root1 = -b / 2 * a;
        root2 = -b / 2 * a;
        root3 = (sqrt(-(determinant))) / (2 * a);

  cout << "Complex Solutions: x = " << root1 << " + " << root3 << "i and x = " << root2 << " - " << root3 << "i";
    }
}