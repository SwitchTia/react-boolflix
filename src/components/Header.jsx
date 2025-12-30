import "./Header.css"

function Header ({ searchQuery, setSearchQuery,}) {

    return(
        <header className="header">
            <div className="header-content">
                <div className="logo">BOOLFLIX</div>

                <div className="search-bar">
                    <input 
                        type="text" 
                        placeholder="Searching for something?"
                        />

                    <button>Search</button>
                </div>
                
            </div>
        </header>
    )
}

export default Header