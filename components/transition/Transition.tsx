import styles from "./Transition.module.css";

interface ITransition {
  color: string
  backgroundColor: string
  flipped?: boolean
}

export function Transition({ color, backgroundColor, flipped }: ITransition) {
  return (
    <section className={styles.container} style={{backgroundColor: backgroundColor}}>
      <div className={styles.divider} style={{fill:color, transform: flipped ? 'rotate(180deg)': '', top: flipped ? 0 : "auto", bottom: flipped ? "auto" : 0}}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            style={{fill:color}}
          ></path>
        </svg>
      </div>
    </section>
  );
}
