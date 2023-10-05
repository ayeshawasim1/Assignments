#include <iostream>
using namespace std;

void calculatePoolState(int V, int P1, int P2, float H);

main()
{
    int V, P1, P2;
    float H;
    cout << "Enter volume of the pool in liters: ";
    cin >> V;
    cout << "Enter flow rate of the first pipe per hour: ";
    cin >> P1;
    cout << "Enter flow rate of the second pipe per hour: ";
    cin >> P2;
    cout << "Enter hours that the worker is absent: ";
    cin >> H;
    calculatePoolState(V, P1, P2, H);
}

void calculatePoolState(int V, int P1, int P2, float H)
{
    float P = P1 + P2;
    float totalWaterFlow = P * H;
    if (totalWaterFlow >= V)
    {
        float overFlowWater = totalWaterFlow - V;
        cout << "For " << H << " hours, the pool overflows with " << overFlowWater << " liters.";
    }
    else
    {

        float poolPercentage = totalWaterFlow / V * 100;
        int pipe1Percentage = P1 / P * 100;
        int pipe2Percentage = P2 / P * 100;
        cout << "The pool is " << poolPercentage << "% full."
             << " Pipe 1: " << pipe1Percentage << "%."
             << " Pipe 2: " << pipe2Percentage << "%.";
    }
}
 