import styles from './EmptyList.module.css'
import { ClipboardText } from "@phosphor-icons/react" 


export function EmptyList() {
    return(
            <div className={styles.list}>
                <ClipboardText size={56} />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>   
            )
}
