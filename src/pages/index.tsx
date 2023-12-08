import type { ServerSideProps } from '@/pages/index.props';
import { h } from 'preact';
import { Document } from '@/components/Document';
import { Body, Head } from 'squid-ssr/components';
import { useState } from 'preact/hooks';
import style from '@/style/counter.module.css';

export default function App({ name }: ServerSideProps) {
  const [count, setCount] = useState<number>(0);

  console.log(1);

  return <Document>
    <Head>
      <title>My first Squid!</title>
    </Head>
    <Body>
      <div className={style.wrapper}>
        <div>Hello {name} {count}</div>
        <button onClick={() => setCount(count + 1)}>Count</button>
      </div>
    </Body>
  </Document>;

}