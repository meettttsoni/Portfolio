export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {year} Meet Soni. All rights reserved.</p>
    </footer>
  );
}
