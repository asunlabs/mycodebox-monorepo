#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *link;
};

int main() {
    // initialize linked list head and set a first node.
    
    struct node *head = (struct node*)malloc(sizeof(struct node));
    head->data = 1; 
    head->link = NULL;

    // create a second node and connect with head
    struct node *current = (struct node*)malloc(sizeof(struct node));
    current->data = 2; 
    current->link = NULL;
    head->link = current;

    // create a third node with second pointer
    current = (struct node*)malloc(sizeof(struct node)); // type cast is not mandatory
    current->data = 3;
    current->link = NULL; // currently only three nodes.

    // return the current point to second node, 
    // connecting second node with third node.
    head->link->link = current;
    return 0;
}