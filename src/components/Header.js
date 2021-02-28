const Header = () => {
  return (
    <header>
      <a href="/" className="header__brand">
        Shopping
      </a>
      <div className="header__user-box">
        <div className="header__user-box__img"></div>
        <a href="/profile">John Doe</a>
      </div>
    </header>
  );
};

export default Header;
