import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
            />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/glaubermatos.png" alt="Glauber Matos" />

                <strong>Glauber Matos</strong>
                <span>Frontend developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar deu perfil
                </a>
            </footer>
        </aside>
    )
}