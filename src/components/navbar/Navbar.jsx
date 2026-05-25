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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    const handlePointerDown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLatestOpen(false)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousedown', handlePointerDown)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousedown', handlePointerDown)
    }
  }, [])

  return (
    <header className={cn('yara-navbar', isSolidNavbar && 'navbar-scrolled')}>
      <Container className="yara-navbar__inner">
        <div className="yara-navbar__row">
          <Link className="yara-navbar__logo" onClick={closeMenus} to="/">
            YARA
          </Link>

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
                className={cn('yara-navbar__trigger', (isLatestActive || isLatestOpen) && 'is-active')}
                onClick={() => setIsLatestOpen((current) => !current)}
                type="button"
              >
                Latest
                <ChevronDown size={16} />
              </button>

              <AnimatePresence>
                {isLatestOpen ? (
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
                ) : null}
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

          <div className="yara-navbar__actions">
            <Link className="yara-navbar__access" onClick={closeMenus} to="/contact">
              PRIVATE ACCESS
            </Link>
          </div>

          <button
            aria-label="Toggle navigation"
            className="yara-navbar__mobile-toggle"
            onClick={() => {
              setIsMobileOpen((current) => !current)
              setIsLatestOpen(false)
            }}
            type="button"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileOpen ? (
            <motion.div
              animate={{ height: 'auto', opacity: 1 }}
              className="yara-navbar__mobile-panel overflow-hidden xl:hidden"
              exit={{ height: 0, opacity: 0 }}
              initial={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28 }}
            >
              <div className="space-y-1">
                {navbarLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    className={({ isActive }) =>
                      cn('yara-navbar__mobile-link', isActive && 'is-active')
                    }
                    onClick={closeMenus}
                    to={link.to}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>

              <p className="yara-navbar__mobile-title">Latest</p>
              <div className="space-y-1 border-t border-brand-border pt-3">
                {latestLinks.map((item) => (
                  <NavLink
                    key={item.to}
                    className={({ isActive }) =>
                      cn('yara-navbar__mobile-link', isActive && 'is-active')
                    }
                    onClick={closeMenus}
                    to={item.to}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              <div className="pt-4">
                <Link className="yara-navbar__access" onClick={closeMenus} to="/contact">
                  PRIVATE ACCESS
                </Link>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Container>
    </header>
  )
}

export default Navbar
