import styles from "./Sidebar.module.css"

export const Sidebar=() => {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"  />
            <div className={styles.profile}>
                <strong>Lara Alves</strong>
                <span>Web Developer</span>
            </div>
            <footer><a href="#">Editar seu perfil</a></footer>
        </aside>
    )
}