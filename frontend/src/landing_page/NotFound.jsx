import { Link } from "react-router-dom";

export default function NotFound() {
  let sty = { color: "#666666" };
  return (
    <div class="container mt-5">
      <div className="row">
        <div className="col-6">
          <h3 style={sty}>404</h3>
          <h1 style={sty}>Kiaan couldn’t find that page</h1>
          <h4 style={sty}>
            We couldn’t find the page you were looking for. Visit{" "}
            <Link className="text-decoration-none" to="/">Zerodha’s home page</Link>
          </h4>
        </div>
      </div>
    </div>
  );
}
