import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Container from '../common/Container'
import { cn } from '../../utils/cn'
import { latestLinks, navbarLinks } from '../../utils/siteData'
import './navbar.css'

const Navbar = () => {
  const location = useLocation()
  const dropdownRef = useRef(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLatestOpen, setIsLatestOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const hasTransparentHeroRoute =
    location.pathname === '/' ||
    location.pathname === '/about' ||
    location.pathname === '/contact' ||
    location.pathname === '/collections' ||
    location.pathname === '/latest/avante' ||
    location.pathname === '/latest/iconic-8'

  const isLatestActive = location.pathname.startsWith('/latest')
  const isSolidNavbar = !hasTransparentHeroRoute || isScrolled || isMobileOpen

  const closeMenus = () => {
    setIsLatestOpen(false)
    setIsMobileOpen(false)
  }

  /* scroll + outside-click */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    const handlePointerDown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsLatestOpen(false)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousedown', handlePointerDown)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousedown', handlePointerDown)
    }
  }, [])

  /* body scroll-lock */
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  /* close on route change */
  useEffect(() => {
    closeMenus()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  return (
    <>
      {/* ── Navbar bar (always fixed, 86/78 px tall) ──────── */}
      <header className={cn('yara-navbar', isSolidNavbar && 'navbar-scrolled')}>
        <Container className="yara-navbar__inner">
          <div className="yara-navbar__row">
            {/* Logo */}
            <Link className="yara-navbar__logo" onClick={closeMenus} to="/">
              YARA
            </Link>

            {/* Desktop links */}
            <nav className="yara-navbar__links">
              <NavLink
                className={({ isActive }) => cn('yara-navbar__link', isActive && 'is-active')}
                onClick={closeMenus}
                to="/"
              >
                Home
              </NavLink>

              <div
                className="yara-navbar__item-dropdown"
                onMouseEnter={() => setIsLatestOpen(true)}
                onMouseLeave={() => setIsLatestOpen(false)}
                ref={dropdownRef}
              >
                <button
                  aria-expanded={isLatestOpen}
                  aria-haspopup="true"
                  className={cn(
                    'yara-navbar__trigger',
                    (isLatestActive || isLatestOpen) && 'is-active',
                  )}
                  onClick={() => setIsLatestOpen((c) => !c)}
                  type="button"
                >
                  Latest
                  <ChevronDown size={16} />
                </button>

                <AnimatePresence>
                  {isLatestOpen && (
                    <motion.div
                      animate={{ opacity: 1, y: 0 }}
                      className="yara-navbar__dropdown"
                      exit={{ opacity: 0, y: 10 }}
                      initial={{ opacity: 0, y: 12 }}
                      transition={{ duration: 0.28 }}
                    >
                      {latestLinks.map((item) => (
                        <NavLink
                          key={item.to}
                          className={({ isActive }) =>
                            cn('yara-navbar__dropdown-link', isActive && 'is-active')
                          }
                          onClick={closeMenus}
                          to={item.to}
                        >
                          <span className="yara-navbar__dot" />
                          {item.label}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navbarLinks.slice(1).map((link) => (
                <NavLink
                  key={link.to}
                  className={({ isActive }) => cn('yara-navbar__link', isActive && 'is-active')}
                  onClick={closeMenus}
                  to={link.to}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="yara-navbar__actions">
              <Link className="yara-navbar__access" onClick={closeMenus} to="/contact">
                PRIVATE ACCESS
              </Link>
            </div>

            {/* Hamburger */}
            <button
              aria-label={isMobileOpen ? 'Close navigation' : 'Open navigation'}
              className="yara-navbar__mobile-toggle"
              onClick={() => {
                setIsMobileOpen((c) => !c)
                setIsLatestOpen(false)
              }}
              type="button"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileOpen ? (
                  <motion.span
                    key="close"
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -45 }}
                    initial={{ opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={22} strokeWidth={1.8} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 45 }}
                    initial={{ opacity: 0, rotate: -45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={22} strokeWidth={1.8} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </Container>
      </header>

      {/* ── Mobile panel — OUTSIDE <header> so backdrop-filter
           on the navbar cannot trap it in a new containing block ── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="yara-navbar__mobile-panel"
            exit={{ opacity: 0, y: -8 }}
            initial={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main nav links */}
            <nav className="yara-navbar__mobile-nav">
              {navbarLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 14 }}
                  transition={{
                    duration: 0.38,
                    delay: 0.06 + i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <NavLink
                    className={({ isActive }) =>
                      cn('yara-navbar__mobile-link', isActive && 'is-active')
                    }
                    onClick={closeMenus}
                    to={link.to}
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            {/* Latest sub-section */}
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="yara-navbar__mobile-section"
              initial={{ opacity: 0, y: 14 }}
              transition={{ duration: 0.38, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="yara-navbar__mobile-label">LATEST</p>
              <div className="yara-navbar__mobile-sub">
                {latestLinks.map((item) => (
                  <NavLink
                    key={item.to}
                    className={({ isActive }) =>
                      cn('yara-navbar__mobile-sub-link', isActive && 'is-active')
                    }
                    onClick={closeMenus}
                    to={item.to}
                  >
                    <span aria-hidden="true" className="yara-navbar__mobile-dot" />
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="yara-navbar__mobile-cta"
              initial={{ opacity: 0, y: 14 }}
              transition={{ duration: 0.38, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                className="yara-navbar__mobile-access"
                onClick={closeMenus}
                to="/contact"
              >
                PRIVATE ACCESS
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
