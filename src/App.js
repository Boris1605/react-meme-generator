import './index.css';
import { useState } from 'react';
import { saveAs } from 'file-saver';

export default function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('aag');

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
    <div className="relative bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="bg-gray-700 rounded-lg p-6 shadow-md max-w-2xl w-full mt-8 mb-8 z-10">
        <h1 className="text-3xl font-bold underline mb-4 text-center text-gray-100">
          Meme Generator
        </h1>
        <div className="flex flex-col items-center my-4">
          <label htmlFor="topText" className="p-2 font-bold">
            Top text
          </label>
          <input
            className="p-2 border rounded-md border-blue-500"
            id="topText"
            placeholder="Top text"
            value={topText}
            onChange={(event) => setTopText(event.target.value)}
          />
        </div>

        <div className="flex flex-col items-center my-4">
          <label htmlFor="bottomText" className="p-2 font-bold">
            Bottom text
          </label>
          <input
            className="p-2 border rounded-md border-blue-500"
            id="bottomText"
            placeholder="Bottom text"
            value={bottomText}
            onChange={(event) => setBottomText(event.target.value)}
          />
        </div>

        <div className="flex flex-col items-center my-4">
          <label htmlFor="memeTemplate" className="p-2 font-bold">
            Meme template
          </label>
          <input
            className="p-2 border rounded-md border-blue-500"
            id="memeTemplate"
            placeholder="Template"
            value={memeTemplate}
            onChange={handleTemplateChange}
          />
        </div>

        <div className="p-4 max-w-xs mx-auto">
          {topText || bottomText ? (
            <img
              src={`https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}.jpg`}
              alt="Generated Meme"
              data-test-id="meme-image"
              className="rounded"
            />
          ) : (
            <img
              src="https://api.memegen.link/images/ds/small_file/high_quality.png"
              alt="Default Meme"
              data-test-id="meme-image"
              className="rounded"
            />
          )}
        </div>

        <div className="my-4 text-center">
          <button
            onClick={handleDownload}
            className="border bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
