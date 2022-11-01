# HTTP Communication

Communication using HTTP/HTTPS via apis like fetch, axios etc. It can be synchronous or asynchronous.

## Pros

Easier to design
Easy to debug
Easy to maintain

## Cons

Theres tight coupling between services especially if communication is synchronous
Services must agree on an api call structure and content of the calls
Hard to scale

## Use cases

Serial processing applications
Homogeneous applications ie applications that utilize a single stack

# Event Driven Communication

Communication takes place through events each service emits. For instance service A emits an event and service B listens for the event. A message broker is needed here for instance AWS SNS however the services dont need to agree on the structure or content of messages

## Pros

Communication is asynchronous
Eliminates coupling between the services completely
The services dont need to agree on the structure or content of messages
Easy to scale

## Cons

Complicated to design compared to HTTP and requires alot of expertise.
Hard to debug
Hard to maintain
Expensive to maintain

## Uses cases

Heterogeneous systems ie systems that utilize multiple stacks
Parallel processing
