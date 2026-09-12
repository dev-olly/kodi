import { type FocusEvent, type FormEvent, useId, useState } from "react";
import { PHOTOS, SERVICES } from "../data/content";
import { useInView } from "../hooks/useInView";
import { FG, GRAD, GRAD_TEXT, LINE, MUTED, R, sans } from "../theme";
import { KodiLogo } from "./KodiLogo";

const FIELD = {
  background: "#141414",
  border: `1px solid ${LINE}`,
  color: FG,
  padding: "13px 16px",
  fontFamily: sans,
  fontWeight: 300,
  fontSize: 14,
  outline: "none",
  transition: "border-color .2s",
  width: "100%",
} as const;

const LABEL = {
  fontFamily: sans,
  fontWeight: 600,
  fontSize: 10,
  letterSpacing: ".2em",
  textTransform: "uppercase" as const,
  color: MUTED,
};

type FormState = {
  name: string;
  email: string;
  department: string;
  brief: string;
};

const empty: FormState = { name: "", email: "", department: "", brief: "" };

const FORMSPREE_ID = import.meta.env.Formspree_form_id || "xvkojplz";
const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`;

function validate(values: FormState) {
  const errors: Partial<FormState> = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email.";
  }
  if (!values.department) errors.department = "Please select a department.";
  if (!values.brief.trim()) errors.brief = "Please describe your project.";
  return errors;
}

function onFieldFocus(e: FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
  e.currentTarget.style.borderColor = R;
}

function onFieldBlur(e: FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
  e.currentTarget.style.borderColor = LINE;
}

export function Contact() {
  const formId = useId();
  const [ref, inView] = useInView(0.1);
  const [values, setValues] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [gotcha, setGotcha] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    setSubmitError("");
    if (Object.keys(next).length > 0) return;
    if (gotcha) return;

    setSending(true);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          department: values.department,
          brief: values.brief.trim(),
          _subject: `Kodi brief — ${values.department}`,
          _gotcha: gotcha,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        return;
      }

      const data = (await res.json().catch(() => null)) as { errors?: { message?: string }[] } | null;
      setSubmitError(
        data?.errors?.map((err) => err.message).filter(Boolean).join(" ") ||
          "Something went wrong. Please try again or email kodilonltd@gmail.com.",
      );
    } catch {
      setSubmitError("Could not send. Check your connection and try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" style={{ borderTop: `1px solid ${LINE}` }}>
      <div ref={ref} className="rh" style={{ maxWidth: 1380, margin: "0 auto" }}>
        <div className="ph" style={{ position: "relative", overflow: "hidden" }}>
          <img
            loading="lazy"
            src={PHOTOS.contact}
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.28) saturate(0.55)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, rgba(9,9,9,.1), rgba(9,9,9,.65))",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              padding: "64px 56px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              zIndex: 2,
            }}
          >
            <KodiLogo size={22} />
            <div>
              <h2
                style={{
                  fontFamily: sans,
                  fontWeight: 900,
                  fontSize: "clamp(44px,6.5vw,96px)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.045em",
                  color: FG,
                  margin: "0 0 28px",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "none" : "translateY(24px)",
                  transition: "all .9s cubic-bezier(.16,1,.3,1) .1s",
                }}
              >
                Let&apos;s
                <br />
                build
                <br />
                <span
                  style={{
                    background: GRAD_TEXT,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  something.
                </span>
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  opacity: inView ? 1 : 0,
                  transition: "opacity .7s ease .4s",
                }}
              >
                <a
                  href="mailto:kodilonltd@gmail.com"
                  data-h="1"
                  style={{
                    fontFamily: sans,
                    fontWeight: 300,
                    fontSize: 14,
                    color: MUTED,
                    textDecoration: "none",
                    transition: "color .2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = FG)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
                >
                  kodilonltd@gmail.com
                </a>
                <a
                  href="tel:+2347042033531"
                  data-h="1"
                  style={{
                    fontFamily: sans,
                    fontWeight: 300,
                    fontSize: 14,
                    color: MUTED,
                    textDecoration: "none",
                    transition: "color .2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = FG)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
                >
                  +234 704 203 3531
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="p48"
          style={{
            background: "#0C0C0C",
            padding: "80px 56px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontFamily: sans,
              fontWeight: 300,
              fontSize: 14,
              color: MUTED,
              lineHeight: 1.75,
              marginBottom: 40,
              opacity: inView ? 1 : 0,
              transition: "opacity .7s ease .2s",
            }}
          >
            Tell us about your project. We&apos;ll respond within 24 hours.
          </p>

          {submitted ? (
            <div
              role="status"
              style={{
                background: "#141414",
                border: `1px solid ${LINE}`,
                padding: "40px 32px",
              }}
            >
              <div
                style={{
                  fontFamily: sans,
                  fontWeight: 600,
                  fontSize: 10,
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: R,
                  marginBottom: 14,
                }}
              >
                Brief received
              </div>
              <h3
                style={{
                  fontFamily: sans,
                  fontWeight: 900,
                  fontSize: 32,
                  color: FG,
                  margin: "0 0 12px",
                  letterSpacing: "-0.03em",
                }}
              >
                Thank you, {values.name.trim()}.
              </h3>
              <p style={{ fontFamily: sans, fontWeight: 300, fontSize: 15, color: MUTED, lineHeight: 1.7, margin: 0 }}>
                We&apos;ll review your {values.department.toLowerCase()} brief and get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 18,
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(20px)",
                transition: "all .8s cubic-bezier(.16,1,.3,1) .28s",
              }}
            >
              <div className="r2" style={{ gap: 14 }}>
                {(
                  [
                    { key: "name", label: "Name", type: "text", placeholder: "Jane Okonkwo" },
                    { key: "email", label: "Email", type: "email", placeholder: "jane@company.com" },
                  ] as const
                ).map((field) => (
                  <label key={field.key} style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                    <span style={LABEL}>{field.label}</span>
                    <input
                      id={`${formId}-${field.key}`}
                      name={field.key}
                      type={field.type}
                      placeholder={field.placeholder}
                      autoComplete={field.key === "name" ? "name" : "email"}
                      value={values[field.key]}
                      aria-invalid={Boolean(errors[field.key])}
                      aria-describedby={errors[field.key] ? `${formId}-${field.key}-error` : undefined}
                      onChange={(e) => setValues((v) => ({ ...v, [field.key]: e.target.value }))}
                      style={FIELD}
                      onFocus={onFieldFocus}
                      onBlur={onFieldBlur}
                    />
                    {errors[field.key] && (
                      <span id={`${formId}-${field.key}-error`} className="field-error" role="alert">
                        {errors[field.key]}
                      </span>
                    )}
                  </label>
                ))}
              </div>

              <label style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                <span style={LABEL}>Department</span>
                <select
                  id={`${formId}-department`}
                  name="department"
                  data-h="1"
                  value={values.department}
                  aria-invalid={Boolean(errors.department)}
                  aria-describedby={errors.department ? `${formId}-department-error` : undefined}
                  onChange={(e) => setValues((v) => ({ ...v, department: e.target.value }))}
                  style={{ ...FIELD, appearance: "none" }}
                  onFocus={onFieldFocus}
                  onBlur={onFieldBlur}
                >
                  <option value="" style={{ background: "#141414" }}>
                    Select a department
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s.name} value={s.name} style={{ background: "#141414" }}>
                      {s.num} — {s.name}
                    </option>
                  ))}
                </select>
                {errors.department && (
                  <span id={`${formId}-department-error`} className="field-error" role="alert">
                    {errors.department}
                  </span>
                )}
              </label>

              <label
                aria-hidden="true"
                style={{ position: "absolute", left: "-9999px", height: 0, overflow: "hidden" }}
              >
                Website
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  value={gotcha}
                  onChange={(e) => setGotcha(e.target.value)}
                />
              </label>

              <label style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                <span style={LABEL}>Brief</span>
                <textarea
                  id={`${formId}-brief`}
                  name="brief"
                  rows={5}
                  placeholder="Tell us what you're building, your timeline, and budget..."
                  value={values.brief}
                  aria-invalid={Boolean(errors.brief)}
                  aria-describedby={errors.brief ? `${formId}-brief-error` : undefined}
                  onChange={(e) => setValues((v) => ({ ...v, brief: e.target.value }))}
                  style={{ ...FIELD, resize: "none" }}
                  onFocus={onFieldFocus}
                  onBlur={onFieldBlur}
                />
                {errors.brief && (
                  <span id={`${formId}-brief-error`} className="field-error" role="alert">
                    {errors.brief}
                  </span>
                )}
              </label>

              {submitError && (
                <span className="field-error" role="alert">
                  {submitError}
                </span>
              )}

              <button
                type="submit"
                data-h="1"
                disabled={sending}
                style={{
                  fontFamily: sans,
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  background: GRAD,
                  color: "#fff",
                  padding: "18px",
                  border: "none",
                  marginTop: 4,
                  transition: "opacity .2s",
                  opacity: sending ? 0.7 : 1,
                  cursor: sending ? "wait" : "pointer",
                }}
                onMouseEnter={(e) => {
                  if (!sending) e.currentTarget.style.opacity = ".8";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = sending ? "0.7" : "1";
                }}
              >
                {sending ? "Sending…" : "Send Brief →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
