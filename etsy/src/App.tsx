import data from './data/etsy.json'
import { Listing } from './components/index'
import { ItemData } from './components/types'
import './App.css'

function App () {
  const items: ItemData[] = data;

  return (
    <Listing items={items}/>
  )
}

export default App
