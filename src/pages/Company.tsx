import { Link } from "react-router-dom";

const Company = () => {
  return (
    <div>
      <h1>Comapany Page</h1>
      <Link to="/" className="underline" onClick={() => localStorage.clear()}>
        Sign Out
      </Link>
    </div>
  );
};

export default Company;
