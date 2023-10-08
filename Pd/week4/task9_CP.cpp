#include <iostream>
using namespace std;

void covid(int people, int tp);

main()
{
    int people;
    int tp;

    cout << "Number of people in the household: ";
    cin >> people;
    cout << "Number of rolls of TP: ";
    cin >> tp;
    covid(people, tp);
}

void covid(int people, int tp)
{
    int person, time, tissues;

    person = people * 57;
    tissues = tp * 500;
    time = tissues / person;

    if (time <= 10)
    {
        cout << "Your TP will only last " << time << " days, buy more!";
    }

    else
    {
        cout << "Your TP will last " << time << " days, no need to panic!";
    }
}
