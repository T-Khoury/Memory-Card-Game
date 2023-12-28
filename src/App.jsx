import { useState } from 'react';
import Board from './components/Board.jsx'
import Scoreboard from './components/Scoreboard.jsx'
import SearchBar from './components/SearchBar.jsx'

export default function App() {
    const [gameOver, setGameOver] = useState(false);
    const [searchTerm, setSearchTerm] = useState('cat');
    const [score, setScore] = useState({currentScore: 0, highScore: 0});

    return (
        <>
            <div className="top-container">
                <SearchBar
                    setSearchTerm={setSearchTerm}
                />
                <Scoreboard
                    score={score}
                />
            </div>
            <Board 
                gameOver={gameOver}
                setGameOver={setGameOver}
                searchTerm={searchTerm}
                score={score}
                setScore={setScore}
            />
        </>
    )
}