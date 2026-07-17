export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>VCE CRM</h1>
      <p>Internal CRM for Visa Consultancy Experts - Mardan Branch</p>

      <h2>Dashboard</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", marginTop: "20px" }}>
        <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
          <h3>Today's Leads</h3>
          <p>0</p>
        </div>
        <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
          <h3>Follow-ups</h3>
          <p>0</p>
        </div>
        <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
          <h3>Applications</h3>
          <p>0</p>
        </div>
        <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
          <h3>Admissions</h3>
          <p>0</p>
        </div>
      </div>
    </main>
  );
}
