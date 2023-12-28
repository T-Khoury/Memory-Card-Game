
export default function Scoreboard({ score }) {
    return (
        <>
            <div className="score">
                <p>{`High Score: ${score.highScore}`}</p>
                <p>{`Current Score: ${score.currentScore}`}</p>
            </div>
        </>
    )
}