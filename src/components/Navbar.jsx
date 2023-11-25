import { NavLink } from "react-router-dom";
import { useProductSelector } from "./hooks/useProductSelector";
import { Badge, Button } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

function Navbar() {
  const { cart } = useProductSelector();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand" to="#">
            SHOP
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
            </ul>

            <Button
              component={NavLink}
              to={`/cart`}
              size="small"
              color="inherit"
            >
              <Badge
                badgeContent={cart.length > 0 ? <h6>{cart.length}</h6> : ""}
                invisible={cart.length === 0 ? true : false}
                color="error"
              >
                <ShoppingCart sx={{ color: "black" }} />
              </Badge>
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
