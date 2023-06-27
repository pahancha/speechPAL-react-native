import React, { createContext, useState } from 'react';

export const TranscribedTextContext = createContext({
  transcribedText: '',
  setTranscribedText: () => {},
});

export const TranscribedTextProvider = ({ children }) => {
  const [transcribedText, setTranscribedText] = useState([]);

  return (
    <TranscribedTextContext.Provider value={{ transcribedText, setTranscribedText }}>
      {children}
    </TranscribedTextContext.Provider>
  );
};
