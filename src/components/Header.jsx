import "./Header.css";

function Header ({ searchQuery, setSearchQuery, handleSearch }) {

    function handleKeyPress (event) {
        if(event.key === "Enter"){
            handleSearch();
        }
    }

    return(
        <header className="header">
            <div className="header-content">
                <div className="logo">BOOLFLIX</div>

                <div className="search-bar">
                    <input 
                        type="text" 
                        placeholder="Searching for something?"
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                        onClick={handleKeyPress}
                        />

                    <button onClick={handleSearch}>Search</button>
                </div>
                
            </div>
        </header>
    )
}

export default Header;