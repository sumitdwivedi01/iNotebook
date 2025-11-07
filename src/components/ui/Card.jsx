// Card.jsx
export function Card({ children }) {
  return (
    <div style={{
      backgroundColor: "#fff",
      borderRadius: "12px",
      padding: "16px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div style={{ marginTop: "8px" }}>{children}</div>;
}
