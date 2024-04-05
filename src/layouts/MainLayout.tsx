import Footer from "../components/Footer";
import Header from "../components/Header";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col content-center min-h-svh">
      <Header></Header>
      <main className="w-full max-w-site grow ">
        <h1 className="sr-only">Designo</h1>
        {children}
      </main>
      <Footer></Footer>
    </div>
  );
}
