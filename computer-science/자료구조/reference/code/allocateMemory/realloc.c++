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

    // memory reallocation
    ptr = (int*)realloc(ptr, (n+2)*sizeof(int));

    for (i=n; i<n+2; i++) {
        printf("Enter two more integers : "); 
        scanf_s("%d", ptr + i);
    }

    for (i=0; i<n+2; i++) { 
        printf("%d", *(ptr+i));
    }

    free(ptr); 
    ptr = NULL;
    
    return 0;
}