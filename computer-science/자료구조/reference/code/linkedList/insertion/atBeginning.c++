// exercise : create a single linked list with three nodes
// and add a node at the beginning of it
// be cautious when updating head 

#include <corecrt_malloc.h>
#include <iostream>
#include <string.h>
using namespace std;

struct node {
    int data;
    struct node *link;
};

struct node* createNode(struct node *prev) {
    struct node *newNode= (struct node*)malloc(sizeof(struct node)); // create a new node
    newNode->link = NULL; // new node pointer initialization
    prev->link = newNode; // connect the node with previous node
    return newNode;
}

int main() {

     // create a linked list
    struct node *head = (struct node*)malloc(sizeof(struct node)); // make the head point to first node
    struct node *cursor = createNode(head); // make head point to first node
    cursor->data = 1; 
    struct node *second = createNode(cursor);
    second->data = 2; 
    struct node *third = createNode(second);
    third->data = 3;

    cout<< cursor->data; 
    cout<< second->data; 
    cout<< third->data; 

    // make a target node point to first node
    struct node *target = (struct node*)malloc(sizeof(struct node));
    target->link = cursor;
    target->data = 999;

    // move head to target
    head->link = target;

    // check if head is moved
    cout << "Expected result is 999";
    cout << "\n";
    cout << head->link->data; // expected result : 999

    return 0;
}