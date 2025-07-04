import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { SAMPLE_PROPERTY, APP_TITLE } from '../constants';

export default function Home() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <Head>
        <title>{APP_TITLE}</title>
      </Head>
      <main className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome to {APP_TITLE}</h1>
        <Card
          title={SAMPLE_PROPERTY.title}
          description={SAMPLE_PROPERTY.description}
          imageUrl={SAMPLE_PROPERTY.imageUrl}
        />
        <div className="mt-4 text-center">
          <Button label="Book Now" onClick={() => alert('Booking initiated!')} />
        </div>
      </main>
    </div>
  );
}
