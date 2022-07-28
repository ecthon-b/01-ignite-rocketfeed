import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1618209076877-3b577b275eef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhhcmR3YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
            />
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/ecthon.png" />
                <strong>Ecthon Almeida</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}