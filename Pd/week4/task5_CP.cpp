#include <iostream>
using namespace std;

void board_game ( int a , int b );

main()
{
    int a, b;
    cout << "Enter your position: ";
    cin >> a;
    cout << "Enter your friend's position: ";
    cin >> b;
    board_game ( a , b );
}

void board_game ( int a , int b )
{
    if ( b-a <= 6 && b-a >=1 )
    {
        cout << "true";
    }
    else
    {
        cout << "false";
    }   

}