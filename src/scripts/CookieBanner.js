import React, { useState, useEffect, useRef } from "react"

const STORAGE_KEY = "lp_cookie_consent"
export const CONSENT_EVENT = "lp:cookie-consent"
const OPEN_EVENT = "lp:cookie-settings"

// Reopen the modal so visitors can change their choice (used by the footer link)
export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT))
}

export function readConsent() {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch (e) {
    return null
  }
}

function saveConsent(value) {
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch (e) {}
}

// Notify Google Tag Manager / Consent Mode of the visitor's choice
function pushConsent(value) {
  const granted = value === "accepted" ? "granted" : "denied"
  window.dataLayer = window.dataLayer || []
  function gtag() { window.dataLayer.push(arguments) }
  gtag("consent", "update", {
    analytics_storage:  granted,
    ad_storage:         granted,
    ad_user_data:       granted,
    ad_personalization: granted,
  })
  window.dataLayer.push({ event: "cookie_consent_" + value })
}

// True when the element isn't actually on screen, e.g. hidden by an ad/cookie blocker extension
function isHidden(el) {
  if (!el || !el.isConnected || el.getClientRects().length === 0) return true
  const cs = getComputedStyle(el)
  return cs.display === "none" || cs.visibility === "hidden" || Number(cs.opacity) < 0.1
}

function CookieBanner() {
  // `open` mounts the modal; `visible` drives the fade so it can animate out before unmounting
  const [open,    setOpen]    = useState(() => !readConsent())
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = readConsent()
    if (stored) {
      pushConsent(stored)
      return
    }
    const timer = setTimeout(() => setVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onOpen = () => {
      setOpen(true)
      setTimeout(() => setVisible(true), 50)
    }
    window.addEventListener(OPEN_EVENT, onOpen)
    return () => window.removeEventListener(OPEN_EVENT, onOpen)
  }, [])

  const overlayRef = useRef(null)
  const dialogRef  = useRef(null)

  // Lock page scroll while the modal is open. If something hides the modal (blocker
  // extensions target cookie notices), close it so the page is never left unscrollable.
  useEffect(() => {
    if (!visible) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const check = setInterval(() => {
      if (isHidden(overlayRef.current) || isHidden(dialogRef.current)) {
        setVisible(false)
        setOpen(false)
        window.dispatchEvent(new Event(CONSENT_EVENT))
      }
    }, 1000)
    return () => {
      clearInterval(check)
      document.body.style.overflow = prev
    }
  }, [visible])

  const choose = (value) => {
    saveConsent(value)
    pushConsent(value)
    setVisible(false)
    setTimeout(() => setOpen(false), 500)
    window.dispatchEvent(new Event(CONSENT_EVENT))
  }

  if (!open) return null

  // Fade styles are inline so LiteSpeed's optimized CSS can't drop them
  return (
    <div
      ref={overlayRef}
      style={{
        zIndex:        1300,
        opacity:       visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition:    "opacity 500ms ease",
      }}
      className="fixed inset-0 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lp-notice-title"
        style={{
          transform:  visible ? "none" : "scale(0.95) translateY(1rem)",
          transition: "transform 500ms ease",
        }}
        className="w-full max-w-md bg-[#0f0f0f] rounded-2xl border border-white/10 shadow-2xl p-6 sm:p-8 text-white text-center"
      >
        <div className="text-4xl mb-3" aria-hidden="true">🍪</div>
        <h2 id="lp-notice-title" className="text-xl font-black mb-3">We use cookies</h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          We use cookies to improve your experience and analyze site traffic. You can accept or decline
          non-essential cookies. Learn more in our{" "}
          <a href="/privacy-policy" className="text-[#c0392b] font-bold hover:text-white transition-colors">
            Privacy Policy
          </a>.
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => choose("declined")}
            className="flex-1 px-4 py-3 rounded-xl text-sm font-bold border border-white/20 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={() => choose("accepted")}
            className="flex-1 px-4 py-3 rounded-xl text-sm font-bold bg-gradient-to-br from-[#c0392b] to-[#922b21] hover:brightness-110 transition-all"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner
