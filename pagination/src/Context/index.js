import React, {createContext, useContext, useState, useEffect} from 'react';

const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
const context = createContext();

function AppProvider({children}){
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [currentPage, setCurrentPage] = useState([]);
    const [data, setData] = useState([]);
    
    // FETCH DATA
    async function fetchData() {
     setLoading(true);
     const response = await fetch(url);
     const data = await response.json();
     
     // set pagination
     const itemsPerPage = 9
     const pages = Math.ceil(data.length / itemsPerPage)
     
     const newData = Array.from({length: pages}, (_, index)=> {
        const start = index * itemsPerPage;
        const pagination = data.slice(start, start + itemsPerPage);
        return pagination;
     })
     setLoading(false);
     setData(newData);
    }

    useEffect(()=> {
        fetchData()
    }, [])
 
    // set current page
    useEffect(()=> {
      setCurrentPage(data[page])
    }, [loading, page])

    // change page 
    function changePage(index) {
     setPage(index)
    }

    // next page
    function nextPage() {
        if(page === data.length - 1) {
            setPage(0)
        } else{setPage(page + 1)}
    }
    // previous page
    function prevPage() {
        if(page === 0) {
            setPage(data.length - 1)
        } else {setPage(page - 1)}
    }
    const value = {data, currentPage, page, loading, changePage, nextPage, prevPage}
    return <context.Provider value={value}>
        {children}
    </context.Provider>
}

export default AppProvider;

export function useGlobalContext() {
    return useContext(context);
}