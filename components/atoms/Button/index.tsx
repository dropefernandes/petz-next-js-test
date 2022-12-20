import IButton from './Props'
import styles from './Button.module.css'

export default function Button (props: IButton) {

  return (
    <button onClick={() => props.onClickEvent()} className={styles.btn}>
      { props.textLabel }
    </button>
  )
}