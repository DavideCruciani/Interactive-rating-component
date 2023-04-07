import React, {useState} from 'react';
import Ratings from './components/Ratings';
import Thanks from './components/Thanks';

function App() {
  const [ShowThankYouPage, setShowThankYouPage] = useState(false)
  const [rating, setRating] = useState(null)

  return (
    <>
      {ShowThankYouPage ? (
        <Thanks rating={rating}/>
      ) : (
        <Ratings
        rating={rating}
        setRating={setRating}
        setShowThankYouPage={setShowThankYouPage}
        />
      )}
    </>
  );
}

export default App;
