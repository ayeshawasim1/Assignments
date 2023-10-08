#include <iostream>
using namespace std;

void flowerShop(int redRose, int whiteRose, int tulip);

main()
{
    int redRose, whiteRose, tulip;
    cout << "Red Rose: ";
    cin >> redRose;
    cout << "White Rose: ";
    cin >> whiteRose;
    cout << "Tulips: ";
    cin >> tulip;
    flowerShop(redRose, whiteRose, tulip);

}

void flowerShop(int Red_Rose, int white_Rose, int Tulip)
{
    float red, white, tulip;
    float total, value, discount;
    red = Red_Rose*2.00;
    white = white_Rose*4.10;
    tulip = Tulip*2.50;

    total = red+white+tulip;
    value = total*0.2;
    discount = total - value;

    cout << "Enter the Original Price:" << total << endl;

    if (total>200)
    {
        cout << "Price after Discount is:" << discount;
    }
    else
    {
        cout << "No discount applied.";
    }
    
}
