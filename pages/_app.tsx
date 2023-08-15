import '@/styles/globals.css';
import type { AppProps } from 'next/app';

// Reactコンポーネントは、トップレベルでアプリケーションのすべてのページを包みます。状態はページを遷移しても保たれ、グローバルスタイルもこのコンポーネントに加えるのです。
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
