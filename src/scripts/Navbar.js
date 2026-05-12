import React, { useState, useEffect } from "react"

const POS_URL = "https://los-potrillos-food-truck.cloveronline.com/"

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 200)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false) }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  const navLinks = [
    { label: "Home",      href: "/"          },
    { label: "Menu",      href: POS_URL      },
    { label: "Our Story", href: "/our-story" },
    { label: "Contact",   href: "/contact"   },
  ]

  const handleReserve = (e) => {
    e.preventDefault()
    setMenuOpen(false)
    window.location.href = "/contact"
  }

  return (
    <header style={{ zIndex: 1100 }} className={`fixed top-0 left-0 w-full transition-all duration-300 ${isScrolled ? "shadow-xl" : ""}`}>

      {/* ── TOP UTILITY BAR ── */}
      <div className={`bg-[#1a1a1a] text-gray-300 text-xs transition-all duration-300 overflow-hidden ${isScrolled ? "max-h-0 py-0" : "max-h-12 py-2"}`}>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 items-center">

          {/* LEFT — Phone + Email */}
          <div className="flex items-center gap-4">
            <a href="tel:+12675966092" className="flex items-center gap-1.5 hover:text-[#e8a020] transition-colors">
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (267) 596-6092
            </a>
            <a href="mailto:info@restaurantpotrillos.com" className="flex items-center gap-1.5 hover:text-[#e8a020] transition-colors">
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              info@restaurantpotrillos.com
            </a>
          </div>

          {/* CENTER — Address + Hours */}
          <div className="flex justify-center items-center gap-4">
            <a
              href="https://maps.google.com/?q=4200+G+St,+Philadelphia,+PA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#e8a020] transition-colors"
            >
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              4200 G St, Philadelphia, PA
            </a>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" d="M12 6v6l4 2" />
              </svg>
              Mon–Sat 10am – 9pm
            </span>
          </div>

          {/* RIGHT — Social Icons */}
          <div className="flex items-center justify-end gap-3">
            <a href="https://www.facebook.com/lospotrillosrestaurantphilly" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8a020] transition-colors" aria-label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/potrillosrestaurantphilly/" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8a020] transition-colors" aria-label="Instagram">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@lospotrillosrestaurant" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8a020] transition-colors" aria-label="TikTok">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
              </svg>
            </a>
          </div>

        </div>
      </div>

      {/* ── MAIN NAV ── */}
      <nav className={`bg-white border-b border-gray-100 transition-all duration-300 ${isScrolled ? "py-2" : "py-3"}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">

          {/* LOGO */}
          <a
            href="/"
            style={{
              flexShrink: 0,
              lineHeight: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <img
              src="/wp-content/uploads/2026/05/Horses-_WB-Photoroom.png"
              alt="Los Potrillos — horses"
              style={{
                height: isScrolled ? "24px" : "32px",
                width: "auto",
                transition: "height 0.35s ease",
                display: "block",
              }}
            />
            <img
              src="/wp-content/uploads/2026/05/Los-Potrillos-_WB-scaled-1.png"
              alt="Los Potrillos"
              style={{
                height: isScrolled ? "28px" : "36px",
                width: "auto",
                transition: "height 0.35s ease",
                display: "block",
              }}
            />
          </a>

          {/* DESKTOP NAV LINKS */}
          <ul className="hidden lg:flex items-center gap-1 text-sm font-semibold text-gray-700">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="px-3 py-2 rounded hover:text-[#c0392b] hover:bg-red-50 transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* DESKTOP CTAs */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <a href={POS_URL} className="bg-[#c0392b] hover:bg-[#a93226] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors shadow-sm">
              ORDER NOW
            </a>
            <a href="/contact" onClick={handleReserve} className="border-2 border-[#c0392b] text-[#c0392b] hover:bg-[#c0392b] hover:text-white text-sm font-bold px-5 py-2 rounded-full transition-colors">
              RESERVE THE TRUCK
            </a>
          </div>

          {/* MOBILE: CTAs + Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <a href={POS_URL} className="bg-[#c0392b] hover:bg-[#a93226] text-white text-xs font-bold px-3 py-2 rounded-full transition-colors whitespace-nowrap">
              ORDER NOW
            </a>
            <a href="/contact" onClick={handleReserve} className="border-2 border-[#c0392b] text-[#c0392b] text-xs font-bold px-3 py-2 rounded-full transition-colors whitespace-nowrap hidden sm:inline-flex">
              RESERVE
            </a>
            <button
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="ml-1 p-2 rounded text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>

        </div>

        {/* MOBILE DROPDOWN */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 border-t border-gray-100" : "max-h-0"}`}>
          <ul className="flex flex-col px-4 py-3 gap-1 text-sm font-semibold text-gray-700 bg-white">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} onClick={() => setMenuOpen(false)} className="block px-3 py-2.5 rounded hover:text-[#c0392b] hover:bg-red-50 transition-colors">
                  {label}
                </a>
              </li>
            ))}
            <li className="sm:hidden pt-1">
              <a href="/contact" onClick={handleReserve} className="flex justify-center border-2 border-[#c0392b] text-[#c0392b] font-bold px-4 py-2 rounded-full transition-colors">
                RESERVE THE TRUCK
              </a>
            </li>
          </ul>
        </div>

      </nav>
    </header>
  )
}

export default Navbar