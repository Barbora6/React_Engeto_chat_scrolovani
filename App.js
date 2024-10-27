//  TVORBA CHATU

import { useState, useEffect, useRef} from 'react'

const App = () => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const messageEndRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (newMessage.trim() !== ''){
      setMessages([...messages, newMessage])
      setNewMessage('')
    }
  }

  // metoda trim() se stará o odstranění tzv.bílých znaků (mezera, enter nebo tabulátor), trim mezeru odstraní na začátku a na konci textu
  // podmínka říká, že po odstranění mezer nesmí být zpráva prázdná

  useEffect(() => {
    messageEndRef.current.scrollIntoView({ behavior: 'smooth'})
  }, [messages])

  /*
  Hned nad return si přidej useEffect. Ty už víš, že useEffect se použije až na konci po načtení celé komponenty. A to je moment, kdy chceš vždy doscrollovat k prázdnému divu. Nastav, že useEffect se má spustit pouze ve chvíli, kdy dojde ke změně proměnné messages.*/


  return <section className='chat'>
      <div className='chat-box'>

      {/* vypisování zpráv do stránky */}
      {messages.map((oneMessage, index) => (<p key={index}>{oneMessage}</p>))}

      {/* vytvoření reference pomocí useRef */}
      <div ref={messageEndRef}></div>

      <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder='Zadejte zprávu'
        value={newMessage}
        onChange={ (event) => setNewMessage(event.target.value)}/>
        <button>Odeslat</button>
      </form>
      </div>
  </section>
  
  

}

export default App