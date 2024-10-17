import React from 'react';

const Footnote = ({ id, content }) => {
  return (
    <sup className="footnote-ref">
      {id}
      <span className="footnote-content">{content}</span>
    </sup>
  );
};

const FootnoteList = ({ footnotes }) => {
  return (
    <div className="footnotes">
      <h2>Footnotes</h2>
      <ol>
        {footnotes.map((footnote, index) => (
          <li key={index} id={`fn${index + 1}`}>
            {footnote}
          </li>
        ))}
      </ol>
    </div>
  );
};

const InteractiveFootnotes = () => {
  const footnotes = [
    "This is the content of the first footnote.",
    "And here's the content of the second footnote."
  ];

  return (
    <div className="interactive-footnotes">
      <style jsx>{`
        .footnote-ref {
          cursor: pointer;
          color: #0000EE;
          text-decoration: none;
          position: relative;
        }
        .footnote-content {
          display: none;
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          background-color: #f9f9f9;
          border: 1px solid #ddd;
          padding: 10px;
          border-radius: 4px;
          width: 200px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
        .footnote-ref:hover .footnote-content {
          display: block;
        }
      `}</style>

      <h3>Interactive Footnotes Example</h3>
      <p>
        This is an example of interactive footnotes
        <Footnote id={1} content={footnotes[0]} />. 
        Hover over the footnote number to see its content.
        Here's another sentence with a footnote
        <Footnote id={2} content={footnotes[1]} />.
      
        This feature allows users to read footnotes without scrolling to the bottom of the page, providing a smoother reading experience.

With various customization options,  allows developers to adjust the appearance and behavior of footnotes, catering to both desktop and mobile users.

        </p>
      {/* <FootnoteList footnotes={footnotes} /> */}
    </div>
  );
};

export default InteractiveFootnotes;