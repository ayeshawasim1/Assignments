#include <iostream>
#include <cmath>
using namespace std;

void english(int num);

main()
{
    int num;
    cout << "Enter a number (1-99): ";
    cin >> num;
    english(num);
}
void english(int num)
{
    int n = num;
    if (num >= 11 && num <= 19)
    {
        if (num == 11)
        {
            cout << "Eleven";
        }
        if (num == 12)
        {
            cout << "Twelve";
        }
        if (num == 13)
        {
            cout << "Thirteen";
        }
        if (num == 14)
        {
            cout << "Fourteen";
        }
        if (num == 15)
        {
            cout << "Fifteen";
        }
        if (num == 16)
        {
            cout << "Sixteen";
        }
        if (num == 17)
        {
            cout << "Seventeen";
        }
        if (num == 18)
        {
            cout << "Eighteen";
        }
        if (num == 19)
        {
            cout << "Nineteen";
        }
    }
    if (num >= 1 && num <= 99 && !((num >= 11 && num <= 19)))
    {
        num = num - num % 10;
        if (num == 20)
        {
            cout << "Twenty";
        }
        if (num == 30)
        {
            cout << "Thirty";
        }
        if (num == 40)
        {
            cout << "Forty";
        }
        if (num == 50)
        {
            cout << "Fifty";
        }
        if (num == 60)
        {
            cout << "Sixty";
        }
        if (num == 70)
        {
            cout << "Seventy";
        }
        if (num == 80)
        {
            cout << "Eighty";
        }
        if (num == 90)
        {
            cout << "Ninety";
        }
        num = n;
        num = num % 10;
        if (num == 1)
        {
            cout << "One";
        }
        if (num == 2)
        {
            cout << "Two";
        }
        if (num == 3)
        {
            cout << "Three";
        }
        if (num == 4)
        {
            cout << "Four";
        }
        if (num == 5)
        {
            cout << "Five";
        }
        if (num == 6)
        {
            cout << "Six";
        }
        if (num == 7)
        {
            cout << "Seven";
        }
        if (num == 8)
        {
            cout << "Eight";
        }
        if (num == 9)
        {
            cout << "Nine";
        }
        if (num == 10)
        {
            cout << "Ten";
        }
    }
}
 