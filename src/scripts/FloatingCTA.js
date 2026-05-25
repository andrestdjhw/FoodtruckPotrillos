import React, { useState, useEffect } from "react"

const POS_URL = "https://los-potrillos-food-truck.cloveronline.com/"

const DELIVERY_APPS = [
  {
    label: "Order Pickup",
    href: POS_URL,
    gradient: "from-[#c0392b] to-[#922b21]",
    border: "border-[#c0392b]/50",
    icon: (
      // Fork and knife icon
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
        <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
      </svg>
    ),
  },
  {
    label: "Uber Eats",
    href: "https://www.ubereats.com/store/los-potrillos-food-truck/fB6ez1DxQW6AytoOpy1fKg?diningMode=PICKUP&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjQlMjBWZW50dXJlJTIyJTJDJTIycmVmZXJlbmNlJTIyJTNBJTIyYWQ1MDJkMmQtMzdmMC0xYzlkLWJhODgtY2UxMzY5ZmI5MzM3JTIyJTJDJTIycmVmZXJlbmNlVHlwZSUyMiUzQSUyMnViZXJfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0EzMy42NTkwODIlMkMlMjJsb25naXR1ZGUlMjIlM0EtMTE3Ljc1MjQyNiU3RA%3D%3D&rwg_token=AFd1xnFfG_3axEf4FxmOgsDRDyDS_i7oXyfc_dkZ90M2bHzovEv9Tp1gk6vZqE9rQghtZ-D5E5LC6Ls4uDEVYB7vzlycEU46Ew%3D%3D&utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas",
    gradient: "from-[#06C167] to-[#038a47]",
    border: "border-[#06C167]/50",
    icon: <img src="https://cdn.simpleicons.org/ubereats/white" alt="Uber Eats" className="w-8 h-8 object-contain" />,
  },
  {
    label: "DoorDash",
    href: "https://www.doordash.com/store/los-potrillos-restaurant-food-truck-philadelphia-842516/1198297/?pickup=true&rwg_token=AFd1xnGuYRY_WjUsJ07zPTnXscCUAo2l-cSGhnRjDckfvWBvDiYrl-I3uTuXFn_Eky7PmjKMLQ7BLEYv8ZfrwsVfgCUGS5FnZw==&utm_campaign=gpa",
    gradient: "from-[#FF3008] to-[#cc2606]",
    border: "border-[#FF3008]/50",
    icon: <img src="https://cdn.simpleicons.org/doordash/white" alt="DoorDash" className="w-8 h-8 object-contain" />,
  },
  {
    label: "Grubhub",
    href: "https://www.grubhub.com/restaurant/los-potrillos-food-truck-4200-g-st-philadelphia/4890216?utm_source=grubhub_web&utm_medium=content_owned&utm_campaign=menushare&utm_content=share-link",
    gradient: "from-[#F63440] to-[#c4101b]",
    border: "border-[#F63440]/50",
    icon: (
      // Grubhub "G" wordmark-style icon
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7 3.134-7 7-7zm1 3.5h-2.5A3.5 3.5 0 007 12a3.5 3.5 0 003.5 3.5H13a.5.5 0 00.5-.5v-3H11v1.5h1v.5h-.5A2 2 0 019 12a2 2 0 012-2h2V8.5z"/>
      </svg>
    ),
  },
]

function FloatingCTA() {
  const [visible,   setVisible]   = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) return
    const timer = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [dismissed])

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
    <>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5" />
          </clipPath>
        </defs>
      </svg>

      <div
        style={{ zIndex: 1200 }}
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl" />

          <div className="relative flex items-end gap-x-2 p-2">

            {/* Logo */}
            <div
              style={{ clipPath: "url(#squircleClip)" }}
              className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg shrink-0"
            >
              <img
                src="/wp-content/uploads/2026/05/Horses-_WB-Photoroom.png"
                alt="Los Potrillos"
                className="w-9 h-9 object-contain"
              />
            </div>

            {/* App buttons */}
            {DELIVERY_APPS.map(({ label, href, gradient, border, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
              >
                <div
                  style={{ clipPath: "url(#squircleClip)" }}
                  className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center shadow-lg border ${border} cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl`}
                >
                  {icon}
                </div>
              </a>
            ))}

            {/* Dismiss */}
            <button
              onClick={() => { setDismissed(true); setVisible(false) }}
              aria-label="Dismiss"
              className="w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors shrink-0 ml-1"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default FloatingCTA