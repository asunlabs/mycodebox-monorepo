#include<stdio.h>

struct point
{
    int x;
    int y;
};

void printArrayElement(struct point arr[]) {
    int i;
    for (i=0; i<2; i++) {
        printf("%d %d\n", arr[i].x, arr[i].y);
    }
}

int main()
{
    struct point arr[2] = {{1,2}, {3,4}};
    printArrayElement(arr);
    return 0;
}
