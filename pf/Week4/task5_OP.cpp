#include <iostream>
using namespace std;

void vote(int age);

main()
{
    int age;
    cout << "Enter your age:";
    cin >> age;

    vote(age);
}

void vote(int age)
{
    if (age >= 18)
    {
        cout << "You can vote now!!";
    }

    if (age <= 18)
    {
        cout << "Sorry you are not eligible to Vote :)";
    }
}
