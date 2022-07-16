#include <stdio.h>
#include <stdlib.h>
#include <string>

struct oneChar
{
    char cha;
    int num;
};

void createJake(char* cha, int* num) {
    printf("Enter one character and number : ");
    scanf("%c %d", cha, num);
}

int main() {
    struct oneChar oneCha;
    createJake(&oneCha.cha, &oneCha.num);
    printf("cha : %c, num :%d", oneCha.cha, oneCha.num);

    return 0;
}