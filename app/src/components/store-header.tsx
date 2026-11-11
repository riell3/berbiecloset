import { Link, useLocation, useNavigate } from "@tanstack/react-router";
export function StoreHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const showBack = location.pathname !== "/";
  function goBack() {
    const referrer = document.referrer;
    const cameFromThisSite = !!referrer && (() => { try { return new URL(referrer).origin === window.location.origin; } catch { return false; } })();
    if (cameFromThisSite && window.history.length > 1) window.history.back();
    else void navigate({ to: "/" });
  }
  return <><div className="bc-announcement">A considered wardrobe · Made to make a statement</div><header className="bc-header"><Link className="bc-logo-link" to="/" aria-label="BERBIECLOSET home"><img className="bc-logo" src="/berbiecloset-logo.png" alt="BERBIECLOSET crowned monogram" /></Link><nav className="bc-nav"><Link to="/shop">Shop</Link><Link to="/about">Our story</Link><Link to="/contact">Contact</Link></nav><div className="bc-header-actions"><a className="bc-social-link" href="https://www.instagram.com/berbiecloset?dlrf=ODZiajFpN3gyOGZr" target="_blank" rel="noreferrer" aria-label="Visit BERBIECLOSET on Instagram"><strong>@berbiecloset</strong> · IG ↗</a><a className="bc-social-link" href="https://www.tiktok.com/@berbiecloset?_r=1&_t=ZS-9BEc3LLAMEb" target="_blank" rel="noreferrer" aria-label="Visit BERBIECLOSET on TikTok"><strong>@berbiecloset</strong> · TikTok ↗</a><a className="bc-social-link bc-whatsapp-link" href="https://wa.me/2347030107401?text=Hello%20BERBIECLOSET%2C%20I%20have%20a%20general%20enquiry." target="_blank" rel="noreferrer">WhatsApp ↗</a><Link className="bc-bag" to="/bag">Bag <span>↗</span></Link></div></header>{showBack && <div className="bc-back-row"><button type="button" className="bc-back-button" onClick={goBack}>← Back</button></div>}</>;
}
export function StoreFooter() { return <footer className="bc-footer"><Link className="bc-logo-link bc-footer-logo" to="/"><img className="bc-logo" src="/berbiecloset-logo.png" alt="BERBIECLOSET" /></Link><p>Style is personal. Make it yours.</p><Link className="bc-footer-contact" to="/contact">CONTACT US ↗</Link><div className="bc-footer-socials"><a href="https://www.instagram.com/berbiecloset?dlrf=ODZiajFpN3gyOGZr" target="_blank" rel="noreferrer"><strong>@BERBIECLOSET</strong> · INSTAGRAM ↗</a><a href="https://www.tiktok.com/@berbiecloset?_r=1&_t=ZS-9BEc3LLAMEb" target="_blank" rel="noreferrer"><strong>@BERBIECLOSET</strong> · TIKTOK ↗</a></div><span>© {new Date().getFullYear()} BERBIECLOSET</span></footer>; }
export function PageShell({ children }: { children: React.ReactNode }) { return <main className="bc-site"><StoreHeader />{children}<StoreFooter /></main>; }
