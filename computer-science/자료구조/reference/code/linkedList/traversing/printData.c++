#include<stdio.h>
#include<stdlib.h>

// exercise : create a single linked list
// and iterate it to print the node's data

struct node {
    int data;
    struct node *link;
};

struct node* createPointer() {
    struct node *ptr = (struct node*)malloc(sizeof(struct node));
    return ptr;
}

struct node* createNode(int _data) {
    struct node *ptr = (struct node*)malloc(sizeof(struct node));
    ptr->data = _data;
    ptr->link = NULL;
    return ptr;
}

void printNodeData(struct node *ptr) { // deliver head
    int count = 0;
    while (ptr->link != NULL) {
        ptr = ptr->link;
        count++;
        printf("%dth node data : %d \n", count, ptr->data);
    }
}

void connectNode(struct node* prev, struct node* next) {
    if(next != NULL) {
        // previous node points to next node
        prev->link = next;
    }
}

int main()
{
    // create a head for linked list
    struct node *head = createPointer();

    // create nodes
    struct node *first = createNode(1);
    struct node *second = createNode(2);
    struct node *third = createNode(3);

    // connect nodes
    connectNode(head, first);
    connectNode(first, second);
    connectNode(second, third);

    // print node data
    printNodeData(head); // expected result : 1, 2, 3 

    return 0;
}
