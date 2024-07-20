import shopImg from "./../../../assets/img/free-icon-shop-2981314.png"
const MenuItem = ({link,text}) => {
  return (
    <div className="menu__item">
      <a href={link} className="aLink"></a>
      {text} <img src={shopImg} alt="shop" className="shopImg" />
    </div>
  );
};
export default MenuItem;
