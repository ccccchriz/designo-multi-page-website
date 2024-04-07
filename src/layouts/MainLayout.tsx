import Footer from "../components/Footer";
import Header from "../components/Header";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col content-center min-h-svh font-primary">
      <Header></Header>
      <main className="grow grid justify-items-center">
        <div className="w-full max-w-site ">
          <h1 className="sr-only">Designo</h1>
          {children}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
