import { useState } from 'react';

export default function App() {
  // define useState for text boxes
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('doge');
  const [memeUrl, setMemeUrl] = useState('');

  // Function to generate meme URL based on current state values
  const generateMeme = () => {
    const apiUrl = `https://memegen.link/${memeTemplate}/${topText}/${bottomText}.jpg`;
    setMemeUrl(apiUrl);
  };

  // Event handler for changing meme template
  const handleTemplateChange = (event) => {
    setMemeTemplate(event.target.value);
    generateMeme();
  };

  // Event handler for downloading the generated meme
  const handleDownload = () => {
    // Create a download link and trigger the download
    const link = document.createElement('a');
    link.href = memeUrl;
    link.download = 'meme.jpg';
    link.click();
  };

  return (
    <>
      <h1>Meme Generator</h1>
      <div>
        <label htmlFor="topText">Top text</label>
        <br />
        <input
          id="topText"
          value={topText}
          onChange={(event) => setTopText(event.target.value)}
        />
        <br />
        <hr />
        <label htmlFor="bottomText">Bottom Text</label>
        <br />
        <input
          id="bottomText"
          value={bottomText}
          onChange={(event) => setBottomText(event.target.value)}
        />
        <br />
        <hr />
        <label htmlFor="memeTemplate">Meme Template</label>
        <br />
        <input
          id="memeTemplate"
          value={memeTemplate}
          onChange={handleTemplateChange}
        />
        <hr />
        <br />
        <br />
        <img
          src={`https://memegen.link/${memeTemplate}/${topText}/${bottomText}.jpg`}
          alt="Generated Meme"
          data-test-id="meme-image"
        />
      </div>
      <div>
        <button onClick={handleDownload}>Download</button>
      </div>
    </>
  );
}
