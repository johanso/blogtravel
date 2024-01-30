import Image from 'next/image'
import styles from './button.module.scss'

interface ButtonProps {
  color: 'primary' | 'secondary' | 'dark' | 'light'
  text: string
  size?: "small" | "large" | "medium"
  icon?: string  
}

const Button: React.FC<ButtonProps> = ({color, text, icon, size}) => {
  return (
    <button className={`${styles.btn} ${styles[`btn--${color}`]}`} data-size={size}>
      {text}
      {icon && <Image src={icon} alt="icon" height={18} width={18} />}
    </button>
  )
}

export default Button