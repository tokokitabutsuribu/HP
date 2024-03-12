import styles from './Counter.module.css'

export default function () {
	return (
		<ul className={styles.accessCount} style={{ fontSize: "0px" }}>
			<li style={{ marginRight: "5px" }} className={styles.count1}>
				あなたは
			</li>
			{["l", "o", "a", "d", "i", "n", "g", "."].map((item) => {
				return <li className={styles.loading}>{item}</li>;
			})}
			<li style={{ marginLeft: "5px" }} className={styles.count2}>
				人目の来訪者です
			</li>
		</ul>
	);
}
