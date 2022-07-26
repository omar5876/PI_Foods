import s from '../css/Pagination.module.css'

const Pagination = ({recipesPerPage, totalRecipes, actualPage, setActualPage}) => {
    let numberOfPages = []
    for(let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++){
        numberOfPages.push(i)
    }
    return(
        <div className={s.paginationContainer}>
            {actualPage > 1 && <div>Prev</div>}
            {numberOfPages.length && numberOfPages.map(p => {
                return (
                    <div>
                        <a onClick={() => setActualPage(p)}>{p}</a>
                    </div>
                )
            })}

            {actualPage < numberOfPages.length && <div>Next</div>}
        </div>
    )
}

export default Pagination