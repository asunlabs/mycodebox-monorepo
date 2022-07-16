// exercise : create a single linked list with three nodes
// and add a node at the beginning of it
// use double pointer to add a new node.
// refer this tutorial : https://www.youtube.com/watch?v=90zyJ1eVeUw&list=PLBlnK6fEyqRj9lld8sWIUNwlKfdUoPd1Y&index=44
// read this article : https://dev-notes.eu/2018/07/double-pointers-and-linked-list-in-c/

#include <corecrt_malloc.h>
#include <iostream>
#include <stdio.h>
#include <string.h>
using namespace std;

struct node {
    int data;
    struct node *link;
};

// using double point doesn't require a return value.
void prependNode(struct node **ptr, int _data) {
    // create and initialize a new node
    struct node *newNode = (struct node*)malloc(sizeof(struct node*));
    newNode->link = *ptr; // make a new node point to a where head points to(first node)
    // if the pointer used was a single pointer, it would point to data(link or number), not the node itself. 
    newNode->data = _data;

    printf("pointer is : %p\n", ptr);
    *ptr = newNode; // make head point to a new head
};


int main() {
    struct node *head = (struct node*)malloc(sizeof(struct node*));
    prependNode(&head, 1); // note that you should deliver the address of the head.
    prependNode(&head, 2);
    printf("%d\n", head->link->data); // expected value : 1 
    printf("%d\n", head->data); // expected value : 2
    return 0;
}