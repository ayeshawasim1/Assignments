#include <iostream>
using namespace std;
main()
{
	cout << "Enter the number of sides of the polygon: ";
	int n;
	cin >> n;
	float sum;
	sum = (n - 2) * 180;
	cout << "The sum of internal angles of a " << n << "-sided polygon is: " << sum << " degrees";
}