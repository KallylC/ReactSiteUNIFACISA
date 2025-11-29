export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-grid">
        <div>
          <strong>Refúgio App</strong>
          <p>Integrando vidas, construindo futuros.</p>
        </div>

        <div>
          <h4>Institucional</h4>
          <ul>
            <li><a href="#direitos">Seus direitos</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#parceiros">Parceiros</a></li>
          </ul>
        </div>

        <div>
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Termos de uso</a></li>
            <li><a href="#">Política de privacidade</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Refúgio App — Todos os direitos reservados.
      </div>
    </footer>
  );
}