#include<iostream>
using namespace std;

float perimeter(char letter, float number);

main() {

	char letter;
	float number;

	cout << "Enter the shape: ";
	cin >> letter;

	cout << "Enter the value: ";
	cin >> number;

	cout << perimeter( letter,  number);

}

float perimeter(char letter, float number) {
	float result;

	if (letter == 's') {
		result = 4 * number;
	}
	if (letter == 'c') {
		result = 6.28 * number;
	}
	if (letter == 'h') {
		result = 6 * number;
	}
	if (letter == 't') {
		result = 3 * number;
	}


	cout << "The perimeter is: " << result;
	return result;

}
