import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content grid-layout">
        <Sidebar />
        <main className="content-main">
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
}
