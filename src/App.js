import { useState } from 'react';
import { saveAs } from 'file-saver';

export default function App() {
  // define useState for text boxes
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('doge');

  // Event handler for changing meme template
  const handleTemplateChange = (event) => {
    setMemeTemplate(event.target.value);
  };

  // Event handler for downloading the generated meme
  const handleDownload = () => {
    saveAs(
      `https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}.jpg`,
      'meme.jpg',
    );
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
        <label htmlFor="bottomText">Bottom Text</label>
        <br />
        <input
          id="bottomText"
          value={bottomText}
          onChange={(event) => setBottomText(event.target.value)}
        />
        <br />
        <label htmlFor="memeTemplate">Meme Template</label>
        <br />
        <input
          id="memeTemplate"
          value={memeTemplate}
          onChange={handleTemplateChange}
        />
        <br />
        <br />
      </div>
      <div>
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
