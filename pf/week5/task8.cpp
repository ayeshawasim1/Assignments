#include <iostream>
using namespace std;

void OddishOrEvenish(int num);

main()
{
  int num;
  cout << "Enter a five-digit number: ";
  cin >> num;
  OddishOrEvenish(num);
}

void OddishOrEvenish(int num)
{
  int sum = 0;
  sum = sum + num % 10;
  num = num / 10;

  if (sum % 2 == 1)
  {
    cout << "Oddish";
  }
  else if (sum % 2 == 0)
  {
    cout << "Evenish";
  }
}