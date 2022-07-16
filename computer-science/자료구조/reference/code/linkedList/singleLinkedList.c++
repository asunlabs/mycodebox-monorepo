#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *link;
};

int main()
{
    struct node *head = (struct node*)malloc(sizeof(struct node));
    struct node *current = (struct node*)malloc(sizeof(struct node));

    // initialize head
    head->data = 30; 
    head->link = NULL;

    current->data = 31; 
    current->link = NULL; // currently only two nodes

    // connect a first node to second one
    head->link = current;
    
    // print first&second node data with head pointer
    printf("first : %d, second : %d", head->data, head->link->data);
    return 0;
}
