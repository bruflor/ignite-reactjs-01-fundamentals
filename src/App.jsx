import './global.css'
import styles from "./App.module.css"
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

export const App = () => {

  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>

        </main>
      </div>
    </div>
  )
}

