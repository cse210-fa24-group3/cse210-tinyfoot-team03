# bigfoot_team_03
### CSE 210 F24: Group Warm-up Exercise: Fun with Footnotes
<div style="text-align: right"> Team 3 </div>

# bigfoot.js Code Review

## 1. Architecture Overview
> - Overview of the major components and their interactions.
> - How the architecture supports the purpose of the package.
> - Any strengths or weaknesses identified in the design.

- Major components of bigfoot.js include:
    - Replaces standard footnote links with buttons for improved accessibility
    - Shows footnote content when the buttton is clicked. 
    - Ensures the footnotes are repositioned and resized to remian visible and aesthetically pleasing. 
- The architecture follows a clean separation of concerns, dividing responsibilities across event handling, and use cases. Enhances user experience by ensuring responsiveness across various devices and inproving accessibility.
- The core functionality is built around customizable settings, which allow users to control the activation, dismissal, and appearance of footnotes.
- Components like buttonHover, createPopover, escapeKeypress, popoverStates, removePopovers, touchClick are well-encapsulated, promoting reusability and maintainability.
- bigfoot.js required JQuery dependency which limits its compatibility with modern frameworks. 

## 2. Design Decisions
> - Key patterns used (e.g., MVC, Singleton, etc.).
> - Discussion of modularity and separation of concerns.
> - How decisions align with JavaScript best practices.
> - Key Patterns: The library follows a factory-style pattern, creating an instance of littlefoot that manages footnote interactions. This pattern simplifies extensibility and customization.

- Modularity: Each responsibility, such as DOM manipulation, event handling, and settings management, is neatly divided into its own module. This ensures separation of concerns and makes the library easy to extend or modify.
- Best Practices: The code adheres to modern JavaScript practices, leveraging ES6+ features like destructuring and default parameters.

## 3. Code Organization and Quality
> - Code readability and maintainability.
> - Use of language features, async programming, etc.
> - How easy it is to add features or debug the system.
> - Tests: Coverage, usefulness, and ease of running.
> - Code Pattern

- There is an absence of code comments and documentation on various functionalities present in bigfoot. This lack of comments significantly hindered readability and maintainability of the code. 
- Without comments on logic of the code as well as purpose of specific functions, it was difficult to understand what were the various functionalities that were used and their purpose. This resulted in difficulty in debugging the code initially.  
- Code Pattern: Inside the dist directory there are css,scss and js files for the plugin. CSS uses class labels for identifying the html element. Js file is named as bigfoot.js which has multiple functions initialized to perform multiple operations such as hover, touchClick.


## 4. Repository Organization and Quality
> - Structure of the repository and directory organization.
> - **Documentation quality** (setup instructions, comments).
> - Build tools, testing framework, and any CI/CD pipelines.

- The repository is well-structured, with clearly defined directories for dist/.
-  Documentation: The documentation in README.md is very vague and not clear. Deatils about installation, functionality and usage is not mentioned Additional examples could be provided for advanced use cases.
- CI/CD: There are no clear signs of continuous integration setup in the repository, which could improve the automation of tests and releases.

## 5. Tooling and Challenges
> - Setup process and any difficulties faced.
> - Tooling quality (package managers, linter, formatter).
> - Build and testing experience.

- The setup process wasn't the best. The documentation was vague, without specific instructions on the setup. Developers might face a slight learning curve.
- Tooling Quality: The quality of the tooling leaves room for improvement. While basic functionality is supported, there is a noticeable lack of robustness in the tools provided.
- Challenges: The library could benefit from more detailed testing coverage, especially for edge cases involving different footnote markup structures.

## 6. Usage Decision
> - Would I use **bigfoot.js** in future projects?
> - Final recommendation on using the package.

- **Would I use bigfoot.js?** 
Yes, bigfoot.js is a good library or plugin to have for enhancing footnotes. It provides flexibility, ease of use, and good modularity for customization.

- **If not, why?** 
Any reluctance would come from minor issues such as limited test coverage and the lack of CI integration. To mitigate these, the following actions could be taken: 
	1.	Expand Test Coverage: Add more unit and integration tests to ensure all edge cases are covered. Effort: 2–3 days.
	2.	Set Up CI: Implement a simple CI pipeline using GitHub Actions or CircleCI to automate testing and releases. Effort: 1–2 days.

## Final Recommendation
- bigfoot.js is a solid, well-designed library with minimal issues. I would recommend it for use in projects that require enhanced footnote functionality. The effort to address minor shortcomings is minimal, making it a good fit for most use cases.


---
## Improvements
  
  ### 1. Documentation could be better
    - Instead of the provided code snippets, it would be helpful to explain with full code to understand how to integrate littlefoot into the existing code.

  ### 2. Hover for Footnote: 
        Original Design: Footnotes were activated by clicking.
        Updated Design: Changed footnote popover to hover and disable on unhover.
        Rationale: Hover interactions provide quicker access to information without additional clicks, enhancing usability. Unhover functionality will close the popover to allow the user to view other parts of the web page.

<table>
    <tr>
        <td> <img src="img/hover_original.gif" width="250" height="250"/> </td>
        <td> <img src="img/hover_updated.gif" width="250" height="250"/> </td>
    </tr> 
    <tr>
        <td>Before</td>
        <td>After</td>
    </tr>
</table>

### 3. Background and Button UI change for Popover
        Original Design: The footnotes bottons were rectangle in shape and simple in design. 
        Updated Design: The footnote buttons have been updated to a smaller, oval shape with a background color that enhances the UI.
        Rationale: The new design introduces a more modern and visually appealing button shape, moving from a traditional rectangular form to a sleek oval. This change not only reduces the button size but also makes the interface more approachable and user-friendly. The addition of background color improves visual contrast, making the buttons stand out more clearly against the rest of the interface

<table>
    <tr>
        <td> <img src="img/button_original.png" width="600" height="300"/> </td>
        <td> <img src="img/button_updated.png" width="600" height="300"/> </td>
    </tr> 
    <tr>
        <td>Before</td>
        <td>After</td>
    </tr>
</table>

### 4. CSS Changes
- Added a custom HTML file to demonstrate the footnotes functionality.
- Created CSS files for custom styling such as font, pop-up of the littlefoot footnote, hover and click opening of the footnote.
     
---