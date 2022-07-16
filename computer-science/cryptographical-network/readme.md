# Learning Cryptography and Network Security essentials

Internet is a public network where everyone can participate in, meaning there might be some of the hackers and attackers in the network. This is where the importance of security comes into play

<img src="reference/hacker-bogus-server.png" width=749 height=337 alt="bogus server in network" />

## CIA triad

> The CIA triad is a widely used information security model that can guide an organization's efforts and policies aimed at keeping its data secure.

> the initials stand for the three principles on which infosec rests:

1. Confidentiality: Only authorized users and processes should be able to access or modify data
1. Integrity: Data should be maintained in a correct state and nobody should be able to improperly modify it, either accidentally or maliciously
1. Availability: Authorized users should be able to access data whenever they need to do so

## OSI security architecture

OSI security architecture consists of following elements.

1. security attack : action that compromises the security of an individual or an organization.
1. security mechanism
1. security service

### Security attack

Types of security attacks are as follows.

1. Passive attack : attemps to steal and read information from the system. it does not affect system resources since its purpose is to secretly monitor the system.

<img src="reference/passive-attack-read-messages.png" width=704 height=418 alt="passive attack" />

1. Active attack : involves the data modification. unlike passive attack, this type of attack tries to manipulate the data stream between sender and receiver.

<img src="reference/active-attack-modify-messages.png" width=736 height=412 alt="active attack" />

### Security service

There are five types of security services, which is :

1. authentication : peer entity(confirms data is coming from approved routers in network) / data origin(receiver confirms data is coming from approved sender)
1. access control : decides who can access to a certain data
1. data confidentiality : ensure data is encrypted for privacy
1. data integrity : data is intact and not changed from initial state
1. nonrepudiation : security system should be able to confirm each sender and receiver did what they did so that they could not contradict.

### Security mechanism

There two types oof security mechanisms, which is :

1. specific security mechanism : encipherment with mathmatical algorithms, digital signature, access control, data integrity, traffic padding
1. pervasive security mechanism : trusted functionality, security label, event detection

## Reference

- [Neso academy : cryptography and network security](https://www.youtube.com/watch?v=JoeiLuFNBc4&list=PLBlnK6fEyqRgJU3EsOYDTW7m6SUmW6kII&index=1)
