import { Button, Badge, Input, Icon } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { FaCartPlus, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";
import AuthContextProvider from "../Context/AuthContext/AuthContextProvider";
import { CartContext } from "../Context/CartContext/CartContext";
import { BsClipboardData } from "react-icons/bs";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
function Navbar() {
  const { state, dispatch } = useContext(AuthContext);
  const { cartData } = useContext(CartContext);
  const [isHamburger, setIsHamburger] = useState(false);
  return (
    <>
      <nav>
        <img
          width="100%"
          src="https://adn-static1.nykaa.com/media/wysiwyg/2021/common-strip.jpg"
        />
        <div
          className={isHamburger ? "hamburger" : "container"}
          onClick={() => {
            setIsHamburger(false);
          }}
        >
          <ul className="menu-main">
            <li>
              <div className="logoDiv">
                <Link to="/">
                  <img
                    className="mainLogo"
                    src="https://logos-download.com/wp-content/uploads/2021/01/Nykaa_Logo-700x229.png"
                  />
                </Link>
              </div>
            </li>
            {/* FIRST STARTS HERE */}
            <li>
              <a href="">Categories</a>

              {/* menu-sub STARTS HERE */}
              <div className="menu-sub">
                {/* menu-col-1 STARTS HERE */}
                <div className="menu-col-1">
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                  <h4 className="menu-category">Woman</h4>
                  <ul>
                    <li>
                      <a href="">Punjabi</a>
                    </li>
                    <li>
                      <a href="">Indian Wear</a>
                    </li>
                    <li>
                      <a href="">Wester Wear</a>
                    </li>
                    <li>
                      <a href="">Fancy</a>
                    </li>
                    <li>
                      <a href="">Traditonal Wear</a>
                    </li>
                  </ul>
                </div>
                {/* menu-col-1 ENDS HERE */}
                {/* menu-col-1 STARTS HERE */}
                <div className="menu-col-1">
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                </div>
                {/* menu-col-1 ENDS HERE */}
                <div className="menu-col-1">
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                </div>
                {/* menu-col-1 ENDS HERE */}
                <div className="menu-col-1">
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                </div>
                {/* menu-col-1 ENDS HERE */}
              </div>
              {/* menu-sub ENDS HERE */}
            </li>
            {/* FIRST ONE ENDS HERE */}
            {/* FIRST ONE ENDS HERE */}
            {/* FIRST ONE ENDS HERE */}
            {/* FIRST ONE ENDS HERE */}
            <li>
              <a href="">Brands</a>
              {/* menu-sub STARTS HERE */}
              <div className="menu-sub">
                {/* menu-col-1 STARTS HERE */}
                <div className="menu-col-2">
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                </div>
                {/* menu-col-1 ENDS HERE */}
                {/* menu-col-1 STARTS HERE */}
                <div className="menu-col-2">
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                </div>
                {/* menu-col-1 ENDS HERE */}
                <div className="menu-col-2">
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                </div>
                {/* menu-col-1 ENDS HERE */}
                <div className="menu-col-2">
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                </div>
                {/* menu-col-1 ENDS HERE */}
              </div>
              {/* menu-sub ENDS HERE */}
            </li>
            <li>
              <a href="">Luxe</a>
              {/* menu-sub STARTS HERE */}
              <div className="menu-sub">
                {/* menu-col-1 STARTS HERE */}
                <div className="menu-col-2">
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                </div>
                {/* menu-col-1 ENDS HERE */}
                {/* menu-col-1 STARTS HERE */}
                <div className="menu-col-2">
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                </div>
                {/* menu-col-1 ENDS HERE */}
                <div className="menu-col-2">
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                </div>
                {/* menu-col-1 ENDS HERE */}
                <div className="menu-col-2">
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                </div>
                {/* menu-col-1 ENDS HERE */}
              </div>
              {/* menu-sub ENDS HERE */}
            </li>
            {/* THIRD ONE ENDS HERE */}
            {/* THIRD ONE ENDS HERE */}
            {/* THIRD ONE ENDS HERE */}
            {/*THIRD ONE ENDS HERE */}
            <li>
              <a href="">Nykaa Fashion</a>
              {/* menu-sub STARTS HERE */}
              <div className="menu-sub">
                {/* menu-col-1 STARTS HERE */}
                <div className="menu-col-2">
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                </div>
                {/* menu-col-1 ENDS HERE */}
                {/* menu-col-1 STARTS HERE */}
                <div className="menu-col-2">
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                </div>
                {/* menu-col-1 ENDS HERE */}
                <div className="menu-col-2">
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                </div>
                {/* menu-col-1 ENDS HERE */}
                <div className="menu-col-2">
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                </div>
                {/* menu-col-1 ENDS HERE */}
              </div>
              {/* menu-sub ENDS HERE */}
            </li>
            <li>
              <a href="">Beauty Advice</a>
              {/* menu-sub STARTS HERE */}
              <div className="menu-sub">
                {/* menu-col-1 STARTS HERE */}
                <div className="menu-col-2">
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                </div>
                {/* menu-col-1 ENDS HERE */}
                {/* menu-col-1 STARTS HERE */}
                <div className="menu-col-2">
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                </div>
                {/* menu-col-1 ENDS HERE */}
                <div className="menu-col-2">
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                </div>
                {/* menu-col-1 ENDS HERE */}
                <div className="menu-col-2">
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                  <h4 className="menu-category">Face</h4>
                  <ul>
                    <li>
                      <a href="">Face Primer</a>
                    </li>
                    <li>
                      <a href="">Concealer</a>
                    </li>
                    <li>
                      <a href="">Compact</a>
                    </li>
                    <li>
                      <a href="">Contour</a>
                    </li>
                    <li>
                      <a href="">Blush</a>
                    </li>
                  </ul>
                </div>
                {/* menu-col-1 ENDS HERE */}
              </div>
              {/* menu-sub ENDS HERE */}
            </li>
            {/* <li><a href="">Beauty Advice</a></li> */}
            <li>
              <Input
                bg="#f4f4f4"
                ml="80px"
                w="200px"
                placeholder="Search On Nykaa"
              />
            </li>
            {!state.isAuth && (
              <li>
                <Button ml="20px" mt="-4px" w="80px" bg="#fc2779">
                  <NavLink to="/login">Sign in</NavLink>
                </Button>
              </li>
            )}
            {state.isAuth && (
              <li>
                {" "}
                <Icon w="40px" as={FaUserAlt} />
                {state.userName}
              </li>
            )}
            <li>
              <Link to="/cart">
                <Icon w="40px" as={FaCartPlus} />
              </Link>{" "}
            </li>
            {cartData.length > 0 && (
              <li>
                <Badge
                  ml="-35px"
                  mt="-25px"
                  borderRadius="100%"
                  variant="solid"
                  colorScheme="green"
                >
                  {cartData.length}
                </Badge>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
