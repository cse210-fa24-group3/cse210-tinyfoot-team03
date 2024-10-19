# React for Tinyfoot Implementation

## Status
Accepted

## Context
Our team aims to develop a web application that implements tinyfoot, which makes significant changes to bigfoot/littlefoot footnotes. To do this, we need a JavaScript framework that can support the different components of littlefoot and bigfoot that will not be too difficult for our team to learn quickly. Bigfoot is done in Javascript, but Littlefoot is originally implemented with TypeScript instead of JavaScript.

## Decision
We will use React to develop Tinyfoot, ultimately making changes to Littlefoot and Bigfoot footnotes, as it allows for modularity and several team members have already worked with this library.

## Consequences
### Positive
- Faster development due to the team being more familiar with React
- Supports modularity
- Allows the team to focus on JavaScript instead of both JS and TS for the original bigfoot and littlefoot
- Simpler to learn for those on the team who aren’t familiar with either TypeScript or React

### Negative
- The original littlefoot repository relying on TypeScript may lead to integration issues and take time when converting it to JavaScript
- Possible issues with types as is customary of JS. 

## Related Decisions
None

## Date
2024-10-16

## Authors
- Sneha Pujari
- Aryan Dokania
- Amy Munson
- Venu Chaudhari
- Andrew Choi
- Krithika Iyer
- Keqian Wang
