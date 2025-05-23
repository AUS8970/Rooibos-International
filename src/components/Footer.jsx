
export default function Footer() {
  return (
    <section>
      <footer className="footer footer-center bg-rose-100 text-rose-800 p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by <a href="/" className="font-bold">Rooibos International. </a></p>
        </aside>
      </footer>
    </section>
  )
};