import React from "react"
import SingleItem from "./SingleItem"
import { useGlobalContext } from "../Context"

const Home = () => {
  const { loading, currentPage, data, page, changePage, nextPage, prevPage } =
    useGlobalContext()
  return (
    <section className='container'>
      <header>
        <h1>
          Crypto <span>Gallery</span>{" "}
        </h1>
        <hr />
      </header>
      {currentPage && (
        <main>
          {currentPage.map((item, index) => (
            <SingleItem key={index} {...item} />
          ))}
        </main>
      )}
      <footer>
        <button className='prev' onClick={prevPage}>
          prev
        </button>
        {data.map((_, index) => (
          <button
            onClick={() => changePage(index)}
            className={`${page === index ? "active" : "page-btn"}`}
            key={index}
          >
            {index + 1}
          </button>
        ))}
        <button className='next' onClick={nextPage}>
          next
        </button>
      </footer>
    </section>
  )
}

export default Home
