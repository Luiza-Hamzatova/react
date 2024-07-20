import Product from "./product/product";
const Products = () => {
  const Products = [
    {
      img: "./product/tel1.jpg",
      tittle: "Apple iPhone XS Max 256 ГБ золотой",
      text: "Дисплей Super Retina 5,8 дюйма.Улучшенный Face ID. Самый мощный и умный процессор iPhone. И потрясающая двойная камера. ",
    },
    {
      img: "./product/tel2.jpg",
      tittle: "Apple iPhone X 64 ГБ Серебристый",
      text: "Совершенно новый дисплей Super Retina с диагональю 5,8 дюйма, который удобно лежит в руке и потрясающе выглядит, - это и есть iPhone X.",
    },

    {
      img: "./product/tel3.jpg",
      tittle: "Apple iPhone XR 128 ГБ желтый",
      text: "iPhone Xr c дисплеем Liquid Retina 6,1 дюйма. Самый продвинутый ЖК-дисплей iPhone. Улучшенный Face ID. Самый мощный и умный процессор iPhone.",
    },
    {
      img: "./product/tel4.jpg",
      tittle: "Apple iPhone 8 64 ГБ Серебристый",
      text: "Для iPhone 8 компания Apple разработала совершенно новый дизайн, в котором передняя и задняя панели выполнены из стекла. Самая популярная камера усовершенствована.",
    },
    {
      img: "./product/tel5.jpg",
      tittle: "Apple iPhone 7 128 ГБ Матовый",
      text: "В iPhone 7 все важнейшие аспекты iPhone значительно улучшены. Это принципиально новая система камер для фото и видеосъёмки. ",
    },
    {
      img: "./product/tel6.jpg",
      tittle: "Apple iPhone 11 128 ГБ белый",
      text: "В iPhone 11 воплощено всё,что вы любите в iPhone. На новом уровне.",
    },
  ];
  return (
    <div class="wrapper">
      <div class="products">
        {Products.map(({ img, tittle, text }) => (
          <Product img={img} tittle={tittle} text={text} />
        ))}
      </div>
    </div>
  );
};
export default Products;
