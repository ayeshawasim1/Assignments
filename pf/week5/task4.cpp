 #include <iostream>
#include <cmath>
using namespace std;

void h(float dist, float angle);

main()
{
    float dist, angle;
    cout << "Enter the distance from the base of the tree (in feet): ";
    cin >> dist;
    cout << "Enter the angle of elevation (in degrees): ";
    cin >> angle;
    h(dist, angle);
}

void h(float dist, float angle)
{
    float height;
    float x= angle*3.1415926535897932384626433832/180;
    height = tan(x) * dist;
    cout<<"The height of the tree is: "<<height<<" feet";
}
 