import { ExampleText  } from '@kkkaoru/example-react-components'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div>HELLO WORLD</div>
        <ExampleText text="FOO" />
      </main>
    </>
  )
}
