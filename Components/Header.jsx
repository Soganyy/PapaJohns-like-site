import "bootstrap/dist/css/bootstrap.min.css";

const Header = async () => {
  const req = await fetch(`https://api.mirafgan.me/papajohns/menu`, {
    cache: "no-store",
  });
  const res = await req.json();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
      <a className="navbar-brand" href="/">
        Papa John's
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {res.menu.map((item) => {
            return (
              <li className="nav-item">
                <a className="nav-link" href={`/${item.slug}`}>{`${item.name}`}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
