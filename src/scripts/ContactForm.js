import React, { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import ReCAPTCHA from "react-google-recaptcha"

// ─── CONFIGURACIÓN — reemplazar con los datos reales ─────────────────────────
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY"
const RECAPTCHA_SITE_KEY  = "YOUR_RECAPTCHA_SITE_KEY"
// ─────────────────────────────────────────────────────────────────────────────

const EVENT_TYPES = [
  "Quinceañera",
  "Wedding",
  "Birthday",
  "Corporate",
  "Festival",
  "Community",
  "Other",
]

const INITIAL_STATE = {
  fullName:       "",
  phone:          "",
  email:          "",
  eventDate:      "",
  eventLocation:  "",
  guestCount:     "",
  eventType:      "",
  message:        "",
  honeypot:       "", // spam trap — never shown to user
}

function ContactForm() {
  const [fields,     setFields]     = useState(INITIAL_STATE)
  const [errors,     setErrors]     = useState({})
  const [captcha,    setCaptcha]    = useState(null)
  const [status,     setStatus]     = useState("idle") // idle | loading | success | error
  const recaptchaRef                = useRef(null)

  // ── Handlers ───────────────────────────────────────────────────────────────
  const handleChange = (e) => {
    const { name, value } = e.target
    setFields(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }))
  }

  // ── Validation ─────────────────────────────────────────────────────────────
  const validate = () => {
    const e = {}
    if (!fields.fullName.trim())      e.fullName      = "Full name is required."
    if (!fields.phone.trim())         e.phone         = "Phone number is required."
    if (!fields.email.trim())         e.email         = "Email is required."
    else if (!/\S+@\S+\.\S+/.test(fields.email)) e.email = "Enter a valid email."
    if (!fields.eventDate)            e.eventDate     = "Event date is required."
    if (!fields.eventLocation.trim()) e.eventLocation = "Event location is required."
    if (!fields.guestCount)           e.guestCount    = "Estimated guests is required."
    if (!fields.eventType)            e.eventType     = "Please select an event type."
    if (!captcha)                     e.captcha       = "Please complete the reCAPTCHA."
    return e
  }

  // ── Submit ─────────────────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Honeypot check — if filled, silently bail
    if (fields.honeypot) return

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus("loading")

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:      fields.fullName,
          from_phone:     fields.phone,
          from_email:     fields.email,
          event_date:     fields.eventDate,
          event_location: fields.eventLocation,
          guest_count:    fields.guestCount,
          event_type:     fields.eventType,
          message:        fields.message || "No additional info provided.",
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus("success")
      setFields(INITIAL_STATE)
      setCaptcha(null)
      recaptchaRef.current?.reset()
    } catch (err) {
      console.error("EmailJS error:", err)
      setStatus("error")
    }
  }

  // ── Success screen ─────────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="text-lg font-black text-gray-900">Request Received!</h4>
        <p className="text-sm text-gray-500 max-w-xs">
          Thanks! We'll review your event details and get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-xs font-semibold text-[#c0392b] hover:underline"
        >
          Submit another request
        </button>
      </div>
    )
  }

  // ── Form ───────────────────────────────────────────────────────────────────
  return (
    <form onSubmit={handleSubmit} noValidate>

      {/* Honeypot — hidden from humans */}
      <div style={{ display: "none" }} aria-hidden="true">
        <input
          type="text"
          name="honeypot"
          value={fields.honeypot}
          onChange={handleChange}
          tabIndex="-1"
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">

        {/* Full Name */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">
            Full Name <span className="text-[#c0392b]">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={fields.fullName}
            onChange={handleChange}
            placeholder="Maria Gonzalez"
            className={`border rounded-lg px-3 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-[#c0392b] ${errors.fullName ? "border-red-400 bg-red-50" : "border-gray-300"}`}
          />
          {errors.fullName && <p className="text-xs text-red-500">{errors.fullName}</p>}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">
            Phone Number <span className="text-[#c0392b]">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={fields.phone}
            onChange={handleChange}
            placeholder="(267) 555-0100"
            className={`border rounded-lg px-3 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-[#c0392b] ${errors.phone ? "border-red-400 bg-red-50" : "border-gray-300"}`}
          />
          {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1 sm:col-span-2">
          <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">
            Email <span className="text-[#c0392b]">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
            placeholder="maria@email.com"
            className={`border rounded-lg px-3 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-[#c0392b] ${errors.email ? "border-red-400 bg-red-50" : "border-gray-300"}`}
          />
          {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
        </div>

        {/* Event Date */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">
            Event Date <span className="text-[#c0392b]">*</span>
          </label>
          <input
            type="date"
            name="eventDate"
            value={fields.eventDate}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            className={`border rounded-lg px-3 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-[#c0392b] ${errors.eventDate ? "border-red-400 bg-red-50" : "border-gray-300"}`}
          />
          {errors.eventDate && <p className="text-xs text-red-500">{errors.eventDate}</p>}
        </div>

        {/* Event Type */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">
            Event Type <span className="text-[#c0392b]">*</span>
          </label>
          <select
            name="eventType"
            value={fields.eventType}
            onChange={handleChange}
            className={`border rounded-lg px-3 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-[#c0392b] bg-white ${errors.eventType ? "border-red-400 bg-red-50" : "border-gray-300"}`}
          >
            <option value="">Select event type...</option>
            {EVENT_TYPES.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.eventType && <p className="text-xs text-red-500">{errors.eventType}</p>}
        </div>

        {/* Event Location */}
        <div className="flex flex-col gap-1 sm:col-span-2">
          <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">
            Event Location / Address <span className="text-[#c0392b]">*</span>
          </label>
          <input
            type="text"
            name="eventLocation"
            value={fields.eventLocation}
            onChange={handleChange}
            placeholder="1234 Main St, Philadelphia, PA"
            className={`border rounded-lg px-3 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-[#c0392b] ${errors.eventLocation ? "border-red-400 bg-red-50" : "border-gray-300"}`}
          />
          {errors.eventLocation && <p className="text-xs text-red-500">{errors.eventLocation}</p>}
        </div>

        {/* Guest Count */}
        <div className="flex flex-col gap-1 sm:col-span-2">
          <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">
            Estimated Number of Guests <span className="text-[#c0392b]">*</span>
          </label>
          <input
            type="number"
            name="guestCount"
            value={fields.guestCount}
            onChange={handleChange}
            placeholder="150"
            min="1"
            className={`border rounded-lg px-3 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-[#c0392b] ${errors.guestCount ? "border-red-400 bg-red-50" : "border-gray-300"}`}
          />
          {errors.guestCount && <p className="text-xs text-red-500">{errors.guestCount}</p>}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1 sm:col-span-2">
          <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">
            Tell us about your event <span className="text-gray-400 font-normal normal-case">(optional)</span>
          </label>
          <textarea
            name="message"
            value={fields.message}
            onChange={handleChange}
            rows="3"
            placeholder="Any details about your event, special requests, or questions..."
            className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-[#c0392b] resize-none"
          />
        </div>

      </div>

      {/* reCAPTCHA */}
      <div className="mb-4">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={RECAPTCHA_SITE_KEY}
          onChange={(token) => {
            setCaptcha(token)
            if (errors.captcha) setErrors(prev => ({ ...prev, captcha: "" }))
          }}
          onExpired={() => setCaptcha(null)}
        />
        {errors.captcha && <p className="text-xs text-red-500 mt-1">{errors.captcha}</p>}
      </div>

      {/* Error banner */}
      {status === "error" && (
        <div className="mb-4 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          <p className="text-xs text-red-600 font-semibold">
            Something went wrong. Please try again or contact us via WhatsApp.
          </p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#c0392b] hover:bg-[#a93226] disabled:opacity-60 disabled:cursor-not-allowed text-white font-black text-sm px-8 py-3.5 rounded-full transition-colors shadow-sm"
      >
        {status === "loading" ? "Sending..." : "REQUEST AVAILABILITY →"}
      </button>

    </form>
  )
}

export default ContactForm