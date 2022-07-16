#include <stdio.h>

struct point { 
    int x;
    int y;
};

void print(struct point *ptr) {
    // ptr and arrow operator(->) approaches to 
    // properties of struct point.
    printf("%d %d\n", ptr -> x, ptr -> y);
}

int main()
{
    struct point p1 = { 23, 45 };
    struct point p2 = { 98, 76 };

    print(&p1);
    print(&p2);
    return 0;
}
