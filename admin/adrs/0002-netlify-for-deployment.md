# React Use of Netlify for Deployment

## Status
Accepted

## Context
We need to host a demo of our bigfoot, littlefoot, and tinyfoot pages that will allow the user to use and interact with the different footnotes. We need deployment to be done quickly and cannot spend money on deployment.

## Decision
We will use Netlify to deploy the web applications that implement the footnotes because it allows us to deploy our pages for free and with little difficulty. Our team had issues using GitHub Pages for deployment, and so we instead pivoted to Netlify. 

## Consequences
### Positive
- The deployment process is relatively simple and quick
- Netlify has good performance and reduced overhead
- The free option for Netlify fits within our pricing constraints

### Negative
- Restrictions on what features can be used and how many build minutes are permitted with the free Netlify plan limit the development of these applications and their deployment in the long run 

### Risks
- The current deployment is dependent on Netlify and its upkeep. It the service stops being provided or begins to require payment, we will need to find a new deployment solution 

## Related Decisions
None

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
