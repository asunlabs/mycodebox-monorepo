#include <stdio.h>
#include <stdlib.h>

struct point
{
    int x;
    int y;
};

// function myFunc returns a pointer
struct point* myFunc(int a, int b) {
    // malloc allocates memory in heap. Memories allocated
    // in heap are intact even after function executes unlike those of stack.
    // malloc(sizeof(struct point));
    // type casting to struct point* as malloc returns a void pointer
    struct point *ptr = (struct point*)malloc(sizeof(struct point));
    ptr->x = a; 
    ptr->y = b;
    return ptr;
}

void print(struct point *ptr) {
    printf("%d, %d\n", ptr->x, ptr->y);
}

int main()
{
    struct point *ptr1, *ptr2;
    ptr1 = myFunc(3,4);
    ptr2 = myFunc(5,6);

    print(ptr1);
    print(ptr2);

    free(ptr1);
    free(ptr2);

    ptr1 = NULL;
    ptr2 = NULL;

    return 0;
}