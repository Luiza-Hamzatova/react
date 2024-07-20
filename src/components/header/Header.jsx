import MenuItem from "./menuItem/MenuItem";

const Header = () => {
  const menuItems = [
    {
      text: "Главная",
      link: "#",
    },
    {
      text: "Катагории",
      link: "categories",
    },
    {
      text: "Магазины",
      link: "stories",
    },
  ];
  return (
    <header>
      <div className="wrapper header">
        <div className="logo">Iphone</div>
        <div className="menu">
          {menuItems.map(({ text, link }) => (
            <MenuItem text={text} link={link} />
          ))}
        </div>
      </div>
    </header>
  );
};
export default Header;
