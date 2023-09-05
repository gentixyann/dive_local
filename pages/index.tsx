import Layout from '@/components/layout';
import Map from '@/components/Map';

export default function Home() {
  return (
    <>
      <Layout>
        <Map />
        <div className="w-full h-20 flex items-center justify-center font-bold">
          <h1>ダイブローカル</h1>
        </div>
      </Layout>
    </>
  );
}
