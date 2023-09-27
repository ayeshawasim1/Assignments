#include <iostream>
using namespace std;
void fuel(){
    float distance, fuel;
    cout<< "Enter the value of distance";
    cin>> distance;
    fuel=distance*10;
    cout << "The fuel is:"<< fuel;

}
main(){
    fuel();
}