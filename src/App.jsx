import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import './global.css'

import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Glauber Matos"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque nobis asperiores ipsa natus quibusdam nisi ipsam iusto facere, eius eos reiciendis, fugit ratione aspernatur? Dolorem neque nisi unde id delectus!"
          />
          
          <Post
            author="Aijalon Brito"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque nobis asperiores ipsa natus quibusdam nisi ipsam iusto facere, eius eos reiciendis, fugit ratione aspernatur? Dolorem neque nisi unde id delectus!"
          />
        </main>
      </div>

    </div>
    
  )
}
