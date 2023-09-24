#include <iostream>
using namespace std;
main()
{

	float veg, fruit, total, veg_rps, fruit_rps;
	int kg_of_veg, kg_of_fruit;

	cout << "Enter vegetable price per kilogram (in coins): ";
	cin >> veg;
	veg_rps = (1 / 1.94) * veg;

	cout << "Enter fruit price per kilogram (in coins): ";
	cin >> fruit;
	fruit_rps = (1 / 1.94) * fruit;

	cout << "Enter total kilograms of vegetables: ";
	cin >> kg_of_veg;

	cout << "Enter total kilograms of fruits: ";
	cin >> kg_of_fruit;

	total = (veg_rps * kg_of_veg) + (fruit_rps * kg_of_fruit);

	cout << "Total earnings in Rupees (Rps): " << total << endl;
}