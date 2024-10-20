# CI/CD Pipeline for React App

## Status
Accepted

## Context
We developed tinyfoot using React and want to test the application when new code is pushed to the tinyfoot GitHub repository. This can be done through a pipeline to automate and streamline the process. The CI/CD Testing was set up to do this, but deployment must be done quickly to fit within our timeline. 

## Decision
We decided to implement the CI/CD test, but the test was consistently failing in the pipeline and is now depreciated.

## Consequences
### Positive
- Automatically esting the repository will help prevent buggy code

### Negative
- Delayed deployment timeline
- When not functioning properly and consistently in the pipeline, the test no longer provides useful insight

## Related Decisions
ADR 0001: React for Tinyfoot Implementation

## Date
2024-10-17

## Authors
- Sneha Pujari
- Aryan Dokania
- Amy Munson
- Venu Chaudhari
- Andrew Choi
- Krithika Iyer
- Keqian Wang
