import React, { useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>REACT-REDUX CART</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" className="text-light text-decoration-none">
              Home
            </NavLink>
          </Nav>
          <Badge
            badgeContent={4}
            color="secondary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <ShoppingCart className="text-light fs-2" />
          </Badge>
        </Container>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <div className="card p-3 border-0">
            <div className="d-flex gap-3">
              <p>Your cart is emppty</p>
              <CloseIcon onClick={handleClose} />
            </div>
          </div>
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
