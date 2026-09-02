import { type FormEvent, type FocusEvent, useId, useState } from "react";
import { SERVICES } from "../data/content";
import { FG, GRAD, LINE, MUTED, sans, serif } from "../theme";
import { GradText } from "./GradText";

const FIELD = {
  background: "#0E0E14",
  border: `1px solid ${LINE}`,
  color: FG,
  padding: "14px 16px",
  fontFamily: sans,
  fontWeight: 300,
  fontSize: 14,
  outline: "none",
  transition: "border-color 0.2s",
  width: "100%",
} as const;

const LABEL = {
  fontFamily: sans,
  fontWeight: 500,
  fontSize: 10,
  letterSpacing: "0.18em",
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
  e.currentTarget.style.borderColor = "#E0401C";
}

function onFieldBlur(e: FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
  e.currentTarget.style.borderColor = LINE;
}

export function Contact() {
  const formId = useId();
  const [values, setValues] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
    }
  }

  return (
    <section
      id="contact"
      className="page-pad"
      style={{ padding: "140px 40px", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          bottom: -100,
          right: -100,
          width: 500,
          height: 500,
          background: "radial-gradient(ellipse, rgba(224,64,28,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="section-inner" style={{ padding: 0, position: "relative", zIndex: 2 }}>
        <div className="contact-grid">
          <div>
            <div
              style={{
                fontFamily: sans,
                fontWeight: 300,
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: MUTED,
                marginBottom: 32,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span style={{ display: "inline-block", width: 24, height: 1, background: GRAD }} />
              Contact
            </div>
            <h2
              style={{
                fontFamily: serif,
                fontSize: "clamp(40px, 6vw, 88px)",
                lineHeight: 0.92,
                color: FG,
                letterSpacing: "-0.03em",
                margin: "0 0 40px",
              }}
            >
              Let&apos;s build
              <br />
              something
              <br />
              <GradText>remarkable.</GradText>
            </h2>
            <p
              style={{
                fontFamily: sans,
                fontWeight: 300,
                fontSize: 15,
                color: MUTED,
                lineHeight: 1.8,
                marginBottom: 48,
              }}
            >
              Tell us about your project. We&apos;ll get back to you within 24 hours.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a
                href="mailto:hello@kodi.studio"
                style={{
                  fontFamily: sans,
                  fontWeight: 300,
                  fontSize: 14,
                  color: MUTED,
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = FG)}
                onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
              >
                hello@kodi.studio
              </a>
              <a
                href="tel:+15550000000"
                style={{
                  fontFamily: sans,
                  fontWeight: 300,
                  fontSize: 14,
                  color: MUTED,
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = FG)}
                onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
              >
                +1 (555) 000-0000
              </a>
            </div>
          </div>

          {submitted ? (
            <div
              role="status"
              style={{
                background: "#0E0E14",
                border: `1px solid ${LINE}`,
                padding: "48px 40px",
                minHeight: 280,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontFamily: sans,
                  fontWeight: 500,
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#FF6B3D",
                  marginBottom: 16,
                }}
              >
                Brief received
              </div>
              <h3
                style={{
                  fontFamily: serif,
                  fontSize: 36,
                  color: FG,
                  margin: "0 0 16px",
                  letterSpacing: "-0.02em",
                }}
              >
                Thank you, {values.name.trim()}.
              </h3>
              <p style={{ fontFamily: sans, fontWeight: 300, fontSize: 15, color: MUTED, lineHeight: 1.7, margin: 0 }}>
                We&apos;ll review your {values.department.toLowerCase()} brief and get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div className="contact-name-row">
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
                  value={values.department}
                  aria-invalid={Boolean(errors.department)}
                  aria-describedby={errors.department ? `${formId}-department-error` : undefined}
                  onChange={(e) => setValues((v) => ({ ...v, department: e.target.value }))}
                  style={{ ...FIELD, appearance: "none", cursor: "pointer" }}
                  onFocus={onFieldFocus}
                  onBlur={onFieldBlur}
                >
                  <option value="" style={{ background: "#0E0E14" }}>
                    Select a department
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s.name} value={s.name} style={{ background: "#0E0E14" }}>
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

              <label style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                <span style={LABEL}>Project Brief</span>
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

              <button
                type="submit"
                style={{
                  fontFamily: sans,
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: "0.08em",
                  background: GRAD,
                  color: "#fff",
                  padding: "18px",
                  border: "none",
                  cursor: "pointer",
                  marginTop: 6,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.82")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Send Brief →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
