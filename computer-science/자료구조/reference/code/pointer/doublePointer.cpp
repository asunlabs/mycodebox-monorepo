#include <stdio.h>
#include <iostream>
#include <string.h>
using namespace std;

int main()
{
    int target = 3; 
    int *parentPoitner = &target;
    *parentPoitner = 5; 

    cout << parentPoitner;
    cout << "\n";
    cout << *parentPoitner;
    cout << "\n";

    int **childPointer = &parentPoitner;
    **childPointer = 10; 
    cout << target; // expected value : 10
}