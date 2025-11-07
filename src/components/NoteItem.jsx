import React, { useContext, useMemo, useState } from "react";
import NoteContext from "../context/notes/NoteContext";
import { DarkContext } from "../context/Theme/DarkTheme";
import { Link } from "react-router-dom";
//eslint-disable-next-line
import { motion, AnimatePresence } from "framer-motion"; // 👈 Animation

const previewWords = (str = "", maxWords = 40) => {
  const words = (str || "").trim().split(/\s+/);
  if (words.length <= maxWords) return str;
  return words.slice(0, maxWords).join(" ") + "…";
};

function NoteItem({ note, updateNote, showAlert }) {
  const { theme } = useContext(DarkContext);
  const { deleteNote } = useContext(NoteContext);
  const [showConfirm, setShowConfirm] = useState(false);

  const indTime = (time) =>
    new Date(time).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  const handleDelete = () => {
    deleteNote(note._id);
    showAlert("Note Deleted Successfully", "success");
    setShowConfirm(false);
  };

  const handleEdit = () => {
    updateNote(note);
    document.body.classList.add("lock-scroll");
  };

  const descPreview = useMemo(
    () => previewWords(note?.description, 40),
    [note?.description]
  );

  return (
    <>
      <div className="col-md-4 d-flex my-3">
        <div
          className={`card note-card h-100 w-100 d-flex flex-column border-0 ${
            theme === "dark" ? "note-dark" : "note-light"
          }`}
        >
          <div className="card-header d-flex align-items-start justify-content-between">
            <span className="note-tag">{note?.tag || "note"}</span>
            <div className="d-flex gap-2">
              <button
                type="button"
                className="icon-btn"
                onClick={handleEdit}
                aria-label="Edit note"
                title="Edit"
              >
                <i className="fa-solid fa-pen-to-square" />
              </button>
              <button
                type="button"
                className="icon-btn"
                onClick={() => setShowConfirm(true)}
                aria-label="Delete note"
                title="Delete"
              >
                <i className="fa-solid fa-trash" />
              </button>
            </div>
          </div>

          <div className="card-body flex-grow-1 d-flex flex-column">
            <h5 className="note-title">{note?.title}</h5>
            <p className="note-desc">{descPreview}</p>
          </div>

          <div className="d-flex align-items-center justify-content-between px-3 pb-3">
            <Link
              type="button"
              className={`btn-view`}
              to={`/viewnote/${note._id}`}
              style={{ textDecoration: "none" }}
            >
              View Note
            </Link>
            <span className="note-date">🕒 {indTime(note?.date)}</span>
          </div>
        </div>
      </div>

      {/* Premium Confirm Modal */}
      <AnimatePresence>
        {showConfirm && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.55)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1050,
              backdropFilter: "blur(6px)", // 👈 smooth blur bg
            }}
          >
            <motion.div
              className="modal-content-custom"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              style={{
                borderRadius: "1rem",
                padding: "1.5rem",
                width: "400px",
                background:
                  theme === "dark"
                    ? "rgba(30, 41, 59, 0.65)"
                    : "rgba(255, 255, 255, 0.55)",
                color: theme === "dark" ? "#f8fafc" : "#0f172a",
                backdropFilter: "blur(20px) saturate(180%)", // 👈 Glass effect
                border: "1px solid rgba(255,255,255,0.25)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
              }}
            >
              <h5 className="mb-3 text-center">⚠️ Confirm Delete</h5>
              <p className="text-center mb-4">
                Are you sure you want to delete{" "}
                <strong>{note?.title || "this note"}</strong>?
              </p>

              <div className="d-flex justify-content-between">
                <button
                  onClick={() => setShowConfirm(false)}
                  style={{
                    flex: 1,
                    marginRight: "0.5rem",
                    borderRadius: "0.75rem",
                    padding: "0.6rem 1rem",
                    border: "none",
                    background:
                      theme === "dark"
                        ? "rgba(148,163,184,0.2)"
                        : "rgba(226,232,240,0.7)",
                    color: theme === "dark" ? "#f8fafc" : "#0f172a",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.background =
                      theme === "dark"
                        ? "rgba(148,163,184,0.35)"
                        : "rgba(226,232,240,0.9)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.background =
                      theme === "dark"
                        ? "rgba(148,163,184,0.2)"
                        : "rgba(226,232,240,0.7)")
                  }
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  style={{
                    flex: 1,
                    marginLeft: "0.5rem",
                    borderRadius: "0.75rem",
                    padding: "0.6rem 1rem",
                    border: "none",
                    background:
                      "linear-gradient(135deg, #ff416c, #ff4b2b)", // red premium gradient
                    color: "white",
                    fontWeight: "bold",
                    backdropFilter: "blur(10px)",
                    transition: "transform 0.2s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NoteItem;
