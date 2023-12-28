import { useEffect, useState } from "react";
import Card from "./Card";
import '../App.css'

function randomInts(quantity, max){
    const set = new Set()
    while(set.size < quantity) {
      set.add(Math.floor(Math.random() * max))
    }
    return Array.from(set)
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

function Board({ gameOver, setGameOver, searchTerm, score, setScore }) {
    
    const [gifURLs, setGifURLs] = useState([]);
    const [cardCount, setCardCount] = useState(8);

    console.log('yep')
    
    useEffect(() => {
        let arrayOfNums = randomInts(cardCount, 50);
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=aAZ4Mfd2mWjhWaEYYFAJcAyLE6H9aZgH&q=${searchTerm}`, {mode: 'cors'})
            .then((response) => response.json())
            .then((response) => {
                let urls = arrayOfNums.map((num) => {

                    return { id:num, url:response.data[num].images.original.url, clicked: false}
                    
                })
                        
                setGifURLs(urls);
                
            })
    }, [cardCount, searchTerm])

    function scoreHandler(result = 0) {

        if (result !== 0) {
            if (score.currentScore === score.highScore) {
                setScore({currentScore: score.currentScore + 1, highScore: score.highScore + 1})
            } else {
                setScore({
                    ...score,
                    currentScore: score.currentScore + 1
                })
            }
        } else {
            setScore({
                ...score,
                currentScore: 0
            })
        }
    }

    function handleCardClick(cardID) {
        const nextURLs = [...gifURLs];

        const thisCard = nextURLs.find(({ id }) => id === cardID);
        if (thisCard.clicked) {
            /*setGameOver(true)*/
            scoreHandler();
            nextURLs.forEach((url) => url.clicked = false)
        } else {
            thisCard.clicked = true;
            scoreHandler(1);
        }
        shuffleArray(nextURLs);
        setGifURLs(nextURLs);
        getCards();
        console.log(gifURLs);
    }
    


    /*function returnCards() {
        const cards = gifURLs.map(url => 
            <Card
            key={url.id}
            gif={url.url}
            className="card"
            />
        )
        return cards
    } */

    function getCards() {
        const cards = gifURLs.map(url => 
            <Card
                key={url.id}
                id={url.id}
                gif={url.url}
                className="card"
                handleCardClick={handleCardClick}
            />
        )
        return cards
    }
    


    
    

    return (
        <>
            {gifURLs.length > 0
            ? <div className="cards">
                {getCards()}
            </div>
            : <p>Loading..</p>
            }
            
        </>
    
    )

}

export default Board