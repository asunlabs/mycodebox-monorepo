#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main(int argc, char *argv[])
{
    printf("This is exec2.c : %d\n", "PID of exec2 :", getpid());
    return 0;
}