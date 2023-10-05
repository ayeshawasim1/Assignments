#include <iostream>
#include <cmath>
using namespace std;

string checkAlphabetCase(char alphabet);

main()
{
    char alphabet;
    cout << "Enter a character (A/a): ";
    cin >> alphabet;
    checkAlphabetCase(alphabet);
    string result = checkAlphabetCase(alphabet);
    cout << result;
}

string checkAlphabetCase(char alphabet)
{
    if (alphabet == 'A')
    {
        return "You have entered Capital A";
    }
    else if (alphabet == 'a')
    {
        return "You have entered small a";
    }
}
 