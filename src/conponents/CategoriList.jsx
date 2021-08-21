import {CategoriItem} from "./CategoriItem";

function CategoriList({catalog = []}) {

    return (
        <div className='list'>
            {catalog.map(el => (
                <CategoriItem key={el.idCategory} {...el}/>
            ))}
        </div>
    )
}

export {CategoriList}