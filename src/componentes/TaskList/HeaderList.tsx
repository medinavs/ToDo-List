import styles from './HeaderList.module.css' 

interface Props {
    tasksCount: number
    completedTasks: number
}


export function HeaderList({tasksCount, completedTasks}: Props) {
    return(
        <header className={styles.container}>
            <aside>
                <p>Tarefas criadas</p>
                <span>{tasksCount}</span>
            </aside>
                

                <aside>
                    <p>Concluídas</p>
                    <span>
                        {tasksCount === 0 ? tasksCount : `${completedTasks} de ${tasksCount}`}
                    </span>
                </aside>
        </header>
    )
}
