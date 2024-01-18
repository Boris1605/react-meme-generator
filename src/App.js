import { useState } from 'react';
import { saveAs } from 'file-saver';

export default function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('');

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
          className="topText"
          placeholder="Top Text"
          value={topText}
          onChange={(event) => setTopText(event.target.value)}
        />
        <br />
        <label htmlFor="bottomText">Bottom Text</label>
        <br />
        <input
          className="bottomText"
          placeholder="Bottom Text"
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
        {topText || bottomText ? (
          <img
            src={`https://memegen.link/${memeTemplate}/${topText}/${bottomText}.jpg`}
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
