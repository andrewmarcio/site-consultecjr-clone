
import styles from "../styles/components/Marker.module.css" 

export default function Marker (props) {
    const { color, text, id } = props;
    return (
      <>
        <div className={styles.title +" "+ "has-text-centered"}>
            <p className="is-size-6">{props.text}</p>
        </div>
        <div className={styles.pin}
            style={{ backgroundColor: color, cursor: 'pointer'}}
            title={text}
        ></div>
        <div className={styles.pulse}/>
      </>
    );
  };