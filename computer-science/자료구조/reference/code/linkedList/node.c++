// import standard input/output
#include <stdio.h>

// imported for malloc
#include <stdlib.h>

// create a node struct for linked list.
// linked list node consists of data and link.
struct node {
    int data;
    struct node *link;
};

int main() {
    struct node *head = NULL;

    // head stores an address of the node, which provides a way to 
    // approach to node.
    // malloc returns a void pointer. type casting is not required in c programming 
    // but still a good practice.
    head = (struct node *)malloc(sizeof(struct node));
    head->data = 45; 
    head->link = NULL; // currently only one node.

    printf("%d", head->data);
    return 0;
}
