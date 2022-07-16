// exercise : create a single linked list
// and add a node at the end of it with time complexity O(1)
#include <corecrt_malloc.h>
#include <stdio.h>
#include <stdlib.h>

struct node {
    int data;
    struct node *link;
};

void initNodeData(struct node *ptr, int _data) {
    ptr->data = _data;
}

// take a previous node as argument
 struct node* addNodeAtEnd(struct node *ptr) { 
    struct node *newNode = (struct node*)malloc(sizeof(struct node));
    ptr->link = newNode; // previous node points to a newly created node
    return newNode;
}

int main() {
    struct node *head = (struct node*)malloc(sizeof(struct node));
    struct node *first = addNodeAtEnd(head); // init head in linked list
    initNodeData(first, 1);

    struct node *second = addNodeAtEnd(first);
    initNodeData(second, 2);

    // check if the nodes are added in the linked list
    printf("second node data is : %d", head->link->link->data); // expected result : 2

    return 0;
}