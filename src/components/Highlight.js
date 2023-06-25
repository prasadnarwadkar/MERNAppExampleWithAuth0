import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import { useState } from "react";

const registeredLanguages = {};
// Highlights children with syntax highlighting as per the language. 
// Uses useState() to declare a state.
const Highlight = (props) => {
  const [loaded, setLoaded] = useState(false);
  // useRef creates a reference to <code> element.
  // Whatever is done with the ref is done to the underlying element. 
  const codeNode = useRef(null);
  const { language, children } = props;

  useEffect(() => {
    // run this side effect if state loaded changes.
    if (language && !registeredLanguages[language]) {
      try {
        const newLanguage = require(`highlight.js/lib/languages/${language}`);
        hljs.registerLanguage(language, newLanguage);
        registeredLanguages[language] = true;

        setLoaded(true);
        highlight();
      } catch (e) {
        console.error(e);
        throw Error(`Cannot register the language ${language}`);
      }
    } else {
      setLoaded(true);
      highlight();
    }
  }, [loaded, language]);

  function highlight() {
    codeNode &&
      codeNode.current &&
      hljs.highlightBlock(codeNode.current);
  };


  if (!loaded) {
    return null;
  }

  return (
    <fieldset>
      <legend>{language}</legend>
      <pre className="rounded">
        <code ref={codeNode} className={language}>
          {children}
        </code>
      </pre>
    </fieldset>
  );
}


Highlight.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string,
};

Highlight.defaultProps = {
  language: "json",
};

export default Highlight;
