import {getAllCategories} from "../api";
import {useState, useEffect} from "react";
import {useLocation, useHistory} from "react-router-dom";
import {Preloader} from "../conponents/Preloader";
import {CategoriList} from "../conponents/CategoriList";
import {Search} from "../conponents/Search";

function Home() {
    const [catalog, setCatalog] = useState([])
    const [filteredCatalog, setFilteredCatalog] = useState([])
    const {pathname, search} = useLocation()
    const {push} = useHistory()
    const handleSearch = (str='chick') => {
        setFilteredCatalog(
            catalog.filter(item => item.strCategory
                .toLowerCase().includes(str.toLowerCase()))
        )
        push({pathname, search: `?search=${str}`})
    }
    useEffect(() => {
        getAllCategories()
            .then(data => {
                setCatalog(data.categories)
                setFilteredCatalog(search ?
                    data.categories
                        .filter(item => item.strCategory
                            .toLowerCase()
                            .includes(search.split('=')[1].toLowerCase())) : data.categories
                );
            });
    }, [search]);

    return <>
        <Search cb={handleSearch}/>
        {!catalog.length ? <Preloader/> : (<CategoriList catalog={filteredCatalog}/>)}
    </>
}

export {Home}