import React, { useContext, useRef, useEffect } from 'react'
import { AppContext } from '../context'


function SearchForm() {
    const { setSearchTerm } = useContext
        (AppContext)
    const searchValue = useRef('')

    useEffect(() => {
        searchValue.current.focus()
    }, [])

    const searchCocktail = () => {
        setSearchTerm(searchValue.current.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <section className="section">
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">search your favourite cocktail</label>
                    <input type="text" name="cocktail-name" id="name" ref={searchValue} onChange={searchCocktail} />
                </div>
            </form>
        </section>
    )
}

export default SearchForm