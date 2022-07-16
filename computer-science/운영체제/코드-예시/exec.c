#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main(int argc, char *argv[])
{
    printf("PID of exec.c : %d\n", getpid());
    char *args[] = { "Hello", "Jake", NULL };
    execv("./exec2", args); // jump to exec2.c and execute it
    printf("Back to exec.c");
    return 0;
}