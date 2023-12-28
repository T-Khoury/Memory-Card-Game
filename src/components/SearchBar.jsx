

export default function SearchBar({ setSearchTerm }) {

    function handleSearchTerm() {

    }
    return (
        <>
            <form onSubmit={e => {
                e.preventDefault();
                setSearchTerm(e.target[0].value)
                e.target.reset();

            }}>
                <input
                type="text"
                placeholder="Search.."
                />
                <button>Search</button>
            </form>
        </>
    )
}