import { useEffect, useState } from 'react';
import './App.css';
import { FaQuoteLeft, FaTwitter } from 'react-icons/fa'

const API = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

function App() {
  const [quote, setQuote] = useState({
    quotes: [{
      quote: "",
      author: ""
    }]
  })
  const [index, setIndex] = useState(0)


  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setQuote(data))
  }, [])


  const getIndex = () => {
    setIndex(Math.floor(Math.random() * quote.quotes.length))
  }

  const tweet = `https://twitter.com/intent/tweet?text=${quote.quotes[index].quote} - ${quote.quotes[index].author}`

  return (
    <div className="App h-screen flex items-center justify-center">
      <div id="quote-box" className="bg-white p-7 rounded-lg w-[500px]">
        <p id="text" className="text-[26px] font-semibold mb-5"><FaQuoteLeft className='inline mr-3 mb-2' />{quote.quotes[index].quote}
        </p>
        <cite id="author" className="flex justify-end">- {quote.quotes[index].author}
        </cite>
        <div className="flex justify-between mt-5">
          <a href={tweet} id="tweet-quote"><button className="bg-[#0fbcf9] rounded-md p-3   text-white text-xl"><FaTwitter /></button></a>
          <button id="new-quote" className="bg-[#0fbcf9] rounded-md p-3 text-white" onClick={getIndex}>New Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
