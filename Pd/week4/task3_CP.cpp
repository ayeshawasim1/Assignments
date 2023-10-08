#include <iostream>
using namespace std;

void company(string name, float price);

main()
{
    string name;
    float price;

    cout << "Enter the country name: ";
    cin >> name;
    cout << "Enter the ticket price in dollars:";
    cin >> price;

    company(name, price);
}

void company(string name, float price)
{
    float price_d, discount;
    if (name == "Pakistan")
    {
        price_d = price * 0.05;
        discount = price - price_d;
        cout << "Final ticket price after discount is:" << discount;
    }

    if (name == "Ireland")
    {
        price_d = price * 0.1;
        discount = price - price_d;
        cout << "Final ticket price after discount is:" << discount;
    }

    if (name == "India")
    {
        price_d = price * 0.2;
        discount = price - price_d;
        cout << "Final ticket price after discount:" << discount;
    }

    if (name == "England")
    {
        price_d = price * 0.3;
        discount = price - price_d;
        cout << "Final ticket price after discount is:" << discount;
    }

    if (name == "Canada")
    {
        price_d = price * 0.45;
        discount = price - price_d;
        cout << "Final ticket price after discount: $" << discount;
    }
}
