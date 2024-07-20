const Product = ({tittle,text,img}) => {
    return (
        <div class="product">
        <img src={img} alt="tel" class="product__image" />
        <h3 class="product__title">{tittle}</h3>
        <p class="product__description">{text}
        </p>
      </div>
    );
  };
  export default Product;
