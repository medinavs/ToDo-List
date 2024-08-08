import { Check, Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'
import { ITaskProps } from '../App'

interface Props {
    value: ITaskProps
    removeTask: (id: string) => void
    checkTask: ({id, value}: {id: string; value: boolean}) => void
}

export function Tasks({value, removeTask, checkTask}: Props) {

    function handleRemove() {
        removeTask(value.id)
    }

    function handleCheck() {
        checkTask({id: value.id, value: !value.isComplete})
    }


    const checkBoxChecked = value.isComplete ? styles['checkbox-checked'] : styles['checkbox-unchecked']

    const taskText = value.isComplete ? styles['paragraph-checked'] : styles['paragraph-unchecked']


    return(
    <div className={styles.container}>
        <div>
            <label htmlFor="checkbox" onClick={handleCheck}>
            <input readOnly type="checkbox" checked={value.isComplete} />
            <span className={`${styles.checkbox} ${checkBoxChecked}`}>
                {value.isComplete && <Check size={12} />}
            </span>

            <p className={`${styles.paragraph} ${taskText}`}>
                {value.text}
            </p>
            </label>
        </div>

        <button onClick={handleRemove}>
            <Trash size={16} color="#808080" />
        </button>
        </div>
    )
    }