import React, { useState, useEffect } from "react"

const POS_URL = "https://los-potrillos-food-truck.cloveronline.com/"

function FloatingCTA() {
  const [visible,   setVisible]   = useState(false)
  const [dismissed, setDismissed] = useState(false)

  // Show after 3 seconds, hide if user dismissed this session
  useEffect(() => {
    if (dismissed) return
    const timer = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [dismissed])

  // Also hide when user scrolls back to top (near hero)
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY < 100) setVisible(false)
      else if (!dismissed)      setVisible(true)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [dismissed])

  if (dismissed) return null

  return (
    <div
      style={{ zIndex: 1200 }}
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-3 bg-[#1a1a1a] text-white rounded-full shadow-2xl pl-2 pr-2 py-2">

        {/* Logo */}
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 overflow-hidden">
          <img
            src="/wp-content/uploads/2026/05/Horses-_WB-Photoroom.png"
            alt="Los Potrillos"
            className="w-7 h-7 object-contain"
          />
        </div>

        {/* Text */}
        <div className="pr-1">
          <p className="text-xs font-black leading-tight whitespace-nowrap">Los Potrillos Food Truck</p>
          <p className="text-xs text-gray-400 leading-tight whitespace-nowrap">Order online. Pick up in minutes.</p>
        </div>

        {/* CTA Button */}
        <a
          href={POS_URL}
          className="bg-[#c0392b] hover:bg-[#a93226] text-white font-black text-xs px-4 py-2.5 rounded-full transition-colors whitespace-nowrap shrink-0"
        >
          Order Now
        </a>

        {/* Dismiss */}
        <button
          onClick={() => { setDismissed(true); setVisible(false) }}
          aria-label="Dismiss"
          className="w-6 h-6 flex items-center justify-center rounded-full text-gray-500 hover:text-white hover:bg-gray-700 transition-colors shrink-0 mr-1"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

      </div>
    </div>
  )
}

export default FloatingCTA