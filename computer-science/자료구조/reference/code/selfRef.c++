#include <stdio.h>

struct Number
{
    int num;
    // self referencial type is useful for data structure like linked list
    struct English *ptr;
};

struct English
{
    char letter;
};

int main()
{
    // create struct instances
    struct Number num;
    struct English eng;

    // initialization
    num.num = 1; 
    num.ptr = NULL;
    eng.letter = 'a';
    num.ptr = &eng;

    // approach English letter with Number pointer
    printf("letter is : %c", num.ptr->letter); 

    return 0;
}
