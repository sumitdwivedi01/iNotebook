import React, { useContext, useMemo } from "react";
import { DarkContext } from "../context/Theme/DarkTheme";

const About = () => {
  const { theme } = useContext(DarkContext);
  const isDark = theme === "dark";

  // dark-mode inline styles (no external css needed)
  const styles = useMemo(
    () => ({
      page: {
        minHeight: "100vh",
        background: isDark ? "#0B1220" : "#F8FAFF",
        color: isDark ? "#FFFFFF" : "#0B1220",
      },
      card: {
        background: isDark ? "linear-gradient(180deg,#0f172a,#111827)" : "#FFFFFF",
        color: isDark ? "#E5E7EB" : "#111827",
        border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)",
      },
      accBtn: {
        background: isDark ? "#0F172A" : "#FFFFFF",
        color: isDark ? "#FFFFFF" : "#111827",
      },
      accBody: {
        background: isDark ? "#0B1220" : "#FFFFFF",
        color: isDark ? "#E5E7EB" : "#111827",
      },
    }),
    [isDark]
  );

  return (
    <div className="container py-5" style={styles.page}>
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="display-6 fw-bold">About iNotebook</h1>
        <p className="lead opacity-75">
          Secure, fast & modern notes app built with <b>React</b>, <b>Express</b>,{" "}
          <b>Node.js</b> & <b>MongoDB</b>. Create, edit, and delete notes with full
          authentication and data protection.
        </p>
      </div>

      {/* Feature cards */}
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm rounded-4" style={styles.card}>
            <div className="card-body">
              <h5 className="card-title">🔐 Secure Authentication</h5>
              <p className="card-text mb-0">
                Passwords are <b>hashed + salted</b> (bcrypt). Auth tokens saved in{" "}
                <b>localStorage</b> for seamless sessions (never store raw passwords).
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm rounded-4" style={styles.card}>
            <div className="card-body">
              <h5 className="card-title">📝 Notes CRUD</h5>
              <p className="card-text mb-0">
                Create, read, <b>edit</b> and <b>delete</b> notes via REST APIs. Real-time
                UI updates with Context state.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm rounded-4" style={styles.card}>
            <div className="card-body">
              <h5 className="card-title">🌗 Themes + Context</h5>
              <p className="card-text mb-0">
                <b>Dark/Light</b> theme with Context API. Preference persisted to{" "}
                <b>localStorage</b>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Accordion (dropdown + animation by Bootstrap collapse) */}
      <div className="accordion mt-5" id="aboutAccordion">
        {/* Key Features */}
        <div className="accordion-item" style={styles.card}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className={`accordion-button ${isDark ? "collapsed" : ""}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={styles.accBtn}
            >
              🔑 Key Features
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body" style={styles.accBody}>
              <ul className="mb-0">
                <li>Secure login & signup (bcrypt hashing + salt)</li>
                <li>JWT-based auth & protected routes</li>
                <li>Store auth token & theme safely in localStorage</li>
                <li>Full notes CRUD with optimistic UI</li>
                <li>Robust <code>try/catch</code> + toast alerts for API errors</li>
                <li>Context API for Notes, Theme & Auth state</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="accordion-item mt-3" style={styles.card}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className={`accordion-button collapsed ${isDark ? "" : ""}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={styles.accBtn}
            >
              ⚙️ Tech Stack
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body" style={styles.accBody}>
              <ul className="mb-0">
                <li>Frontend: React, React Router, Bootstrap</li>
                <li>State: Context API</li>
                <li>Backend: Node.js, Express.js</li>
                <li>DB: MongoDB with Mongoose</li>
                <li>Security: bcrypt (hash + salt), JWT</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How it Works */}
        <div className="accordion-item mt-3" style={styles.card}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={styles.accBtn}
            >
              🧭 How iNotebook Works
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body" style={styles.accBody}>
              <ol className="mb-0">
                <li>Sign up / Log in → server returns JWT.</li>
                <li>JWT stored in <code>localStorage</code> for subsequent requests.</li>
                <li>Notes CRUD hits Express routes; MongoDB persists data.</li>
                <li>Errors handled via <code>try/catch</code> and shown as alerts.</li>
                <li>Theme stored & restored on reload; Context updates UI instantly.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Footer line */}
      <div className="text-center mt-5 opacity-75">
        🚀 Built for speed, security & simplicity.
      </div>
    </div>
  );
};

export default About;
