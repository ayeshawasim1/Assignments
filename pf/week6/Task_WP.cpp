#include<iostream>
using namespace std;

float passorfail(float marks);

main() {
	float marks;
	cout << "Enter your marks:";
	cin >> marks;

	passorfail(marks);
}

float passorfail(float marks) {

	if (marks == 50) {
		cout << "You are passed !";
}
}
	else
	(marks <= 50) {
	cout << "You are failed !";
}

return passorfail;
