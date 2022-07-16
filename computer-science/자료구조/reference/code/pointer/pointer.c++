#include <stdio.h>
#include <stdlib.h>

int main() {
    int i, n;
    printf("How many integers?");
    scanf_s("%d", &n);

    int *ptr = (int*)malloc(n*sizeof(int));

    if (ptr == NULL) { 
        printf("Memory can't be allocated");
        exit(1); 
    }
    
    for (i=0; i<n; i++) {
        printf("Enter an integer : "); 
        scanf_s("%d", ptr + i);
    }

    for (i=0; i<n; i++) { 
        printf("%d", *(ptr+i));
    }

    free(ptr); 
    ptr = NULL;
    return 0;
}