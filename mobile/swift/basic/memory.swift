// most mobile devices have a limited memory resource
// strong vs weak memory
// strong : hold a weak memory
// weak : disappear when there is no strong pointing to weak one.
// by default variables in swift is strong 

class Child {
    weak var balloon = "ballon"
}

var jake = Child()