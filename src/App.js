import { useState } from 'react';
import { saveAs } from 'file-saver';

export default function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('doge');

  const handleTemplateChange = (event) => {
    setMemeTemplate(event.target.value);
  };

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
          placeholder="Top text"
          value={topText}
          onChange={(event) => setTopText(event.target.value)}
        />
        <br />
        <label htmlFor="bottomText">Bottom text</label>
        <br />
        <input
          id="bottomText"
          placeholder="Bottom text"
          value={bottomText}
          onChange={(event) => setBottomText(event.target.value)}
        />
        <br />
        <label htmlFor="memeTemplate">Meme template</label>
        <br />
        <input
          id="memeTemplate"
          placeholder="Template"
          value={memeTemplate}
          onChange={handleTemplateChange}
        />
        <br />
        <br />
      </div>
      <div>
        {topText || bottomText ? (
          <img
            src={`https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}.jpg`}
            alt="Generated Meme"
            data-test-id="meme-image"
          />
        ) : (
          <img
            src="https://api.memegen.link/images/ds/small_file/high_quality.png"
            alt="Default Meme"
            data-test-id="meme-image"
          />
        )}
      </div>
      <div>
        <button onClick={handleDownload}>Download</button>
      </div>
    </>
  );
}
