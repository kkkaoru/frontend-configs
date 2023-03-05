import { ExampleText } from '@kkkaoru/example-react-components';
import { concatText } from '@kkkaoru/example-utils';
import styles from '@/styles/Home.module.css';
import { useMemo } from 'react';

export default function Home() {
  const text = useMemo(() => concatText('BAR', 'BAZ'), []);
  return (
    <>
      <main className={styles.main}>
        <div>HELLO WORLD</div>
        <ExampleText text={text} />
      </main>
    </>
  );
}
