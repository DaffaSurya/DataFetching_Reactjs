import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [article, setarticle] = useState(0);

  useEffect(() => {
   fetch(`https://dummyjson.com/posts/` + count ).then((res => res.json())).then(data => setarticle(data)) // data fetching to 
  }, [count])

  const plus = () => {
    setCount(count + 1)
  }

  const minus = () =>  {
    setCount(count - 1)
  }

  return (
    <>
      <main>
        <header>
          <p>{count}</p>
        </header>
        <h3>Daffa Surya Arrayan</h3>
        <button onClick={minus}>Kurangi</button>
        <button onClick={plus}>Tambah</button>
        <article>
           <h3>{article.title}</h3>
           <p>{article.body}</p>
        </article>
      </main>
    </>
  )
}

export default App
