#include <stdio.h>

// struct is call by value
struct point
{
    int x;
    int y;
};

// no return
void editWithPointer(struct point *ptr) {
    // increase x by 1, y by 5
    ptr->x++;
    ptr->y+=5;
}

// return struct point type 
struct point editWithoutPointer(struct point p) {
    // increase x by 1, y by 5
    p.x++; 
    p.y += 5;
    return p;
}

void printStruct(struct point p) {
    printf("x: %d, y: %d", p.x, p.y);
}

int main(int argc, char const *argv[])
{
    struct point p1 = { 0, 0 };

    editWithPointer(&p1); // x: 1, y :5
    p1 = editWithoutPointer(p1); // x: 2, y: 10

    printStruct(p1); // x : 2, y: 10
    return 0;
}
