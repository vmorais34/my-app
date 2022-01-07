import React from 'react'
import "./Hero.css"

function Hero() {
    return (
        <>
            <div className="slick">
                <picture>
                    <source media="(max-width: 768px)" srcSet="./images/Banner-mobile.png"/>
                    <source media="(min-width: 800px)" srcSet="./images/Banner.png"/>
                    <img src="./images/Banner.png" alt="banner desktop"/>
                </picture>
                <picture>
                    <source media="(max-width: 768px)" srcSet="./images/Banner-mobile.png"/>
                    <source media="(min-width: 800px)" srcSet="./images/Banner.png"/>
                    <img src="./images/Banner.png" alt="banner desktop"/>
                </picture>
                <picture>
                    <source media="(max-width: 768px)" srcSet="./images/Banner-mobile.png"/>
                    <source media="(min-width: 800px)" srcSet="./images/Banner.png"/>
                    <img src="./images/Banner.png" alt="banner desktop"/>
                </picture>
                <picture>
                    <source media="(max-width: 768px)" srcSet="./images/Banner-mobile.png"/>
                    <source media="(min-width: 800px)" srcSet="./images/Banner.png"/>
                    <img src="./images/Banner.png" alt="banner desktop"/>
                </picture>
            </div>

            <section className="container">
                <article>
                    <h2 className="title-shelf">
                        Mais Vendidos
                    </h2>
                </article>
                <ShelfProducts />
            </section>


        </>
    )
}
class ShelfProducts extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://corebiz-test.herokuapp.com/api/v1/products")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Carregando Produtos...</div>;
      } else {
        return (
          <ul className="shelf">
            {items.map(item => (
              <li key={item.productId}>
                  <img className="product-image" src={item.imageUrl} alt={item.productName} />
                  <h3>{item.productName}</h3>
                  <img className="stars" src={"./images/stars-" + item.stars + ".png"} />   
                  <div className="priceInfo">
                    <span>de R$ {item.listPrice}</span>
                    <span>por R$ {item.price}</span>
                  </div>
                  <div className="installments">
                    ou em {item.installments.map(installments => installments.quantity)}x de {item.installments.map(installments => installments.value)}
                  </div>
                  <button>comprar</button>
              </li>
            ))}
          </ul>
        );
      }
    }
}


export default Hero
