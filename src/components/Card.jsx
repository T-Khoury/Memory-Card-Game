export default function Card({ id, gif, handleCardClick }) {
    return (
        <div
        className="card"
        onClick={() => handleCardClick(id)}
        id={id}
        >
            <img
            src={gif}
            />
        </div>
    )

}