export default function Profile(props) {
  return (
    <div style={{ padding: "2rem", margin: "1rem", border: "2px solid #000" }}>
      <p style={{ fontSize: "1.5rem" }}>{props.user.name}</p>
      <p>{props.user.email}</p>
    </div>
  );
}
