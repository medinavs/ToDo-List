import styles from './Button.module.css'

type Props = React.DetailedHTMLProps<
React.ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement
>

    function Button({children, ...rest}: Props) {
    return (
        <button className={styles.clickButton} {...rest}>
            {children}
        </button>
    )
}

export default Button;