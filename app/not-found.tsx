import { Footer } from '~/components/footer';
import { Header } from '~/components/header';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-1 justify-center items-center">
        <h1 className="mr-5 pr-6 text-2xl font-bold leading-12 border-r border-gray-300">
          404
        </h1>
        <h2 className="text-sm">页面找不到啦~</h2>
      </main>
      <Footer />
    </div>
  );
}
