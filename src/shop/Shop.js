import "../styles/Shop.css"
import React, { useState, useEffect } from "react";
import tshirtOnePiece from '../assets/productsImg/One_Piece_Shirt.webp'
import tshirtNaruto from "../assets/productsImg/Naruto_Shirt.webp"
import tableauBleach from "../assets/productsImg/Bleach_Painting.webp"

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [alert, setAlert] = useState("");
  const [cartTotal, setCartTotal] = useState(0);
  //console.log(cart);
  const items = [
    {
      id: 1, name: 'T-shirt One Piece', price: 29.90, img: `${tshirtOnePiece}`, description: "T-Shirt One Piece à l'effigie de Monkey D. Luffy : parcourez les différents Arcs de l'anime ou du Manga en compagnie d'une charmante équipe de Pirates."
    },
    {
      id: 2, name: 'T-shirt Naruto', price: 44.90, img: `${tshirtNaruto}`, description: "T-shirt Naruto de qualité supérieure, floqué des symboles très célèbres et redoutés du clan Uchiha. Vous aussi rejoignez le clan et réveillez votre fierté de ninja !"
    },
    {
      id: 3, name: 'Tableau Bleach', price: 59.90, img: `${tableauBleach}`, description: "Décorez votre chambre avec ce sublime Bleach Painting à l'effigie de Kuchiki Rukia!"
    },
  ];

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let idxCart = 0; idxCart < cart.length; idxCart++) {
      totalVal += cart[idxCart].price;
    }
    setCartTotal(totalVal);
  }

  const addToCart = (item) => {
    let canAdd = true;
    for (let idxCart = 0; idxCart < cart.length; idxCart++) {
      if (cart[idxCart].id === item.id) canAdd = false;
    };
    if (canAdd) {
      setCart([...cart, item]);
      setAlert("");
    } else setAlert(`le ${item.name} est déjà dans votre panier`);
  };

  const removeFromCart = (item) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter(cartItem => cartItem.id !== item.id);
    setCart(hardCopy);
    setAlert("");
  };

  const ListItems = items.map((item) => (
    <div key={item.id} className="product-container">
      <div className="product-card">
        <div className="product-image">
          <img src={item.img} className="product-thumb" alt=""></img>
        </div>
        <div className="product-info">
          <h2 className="product-name">{item.name}</h2>
          <p className="product-short-des">{item.description}</p>
          <span className="price">{item.price}€</span>
          <input type="submit" value="AJOUTER AU PANIER" className="card-btn" onClick={() => addToCart(item)} />
        </div>
      </div>
    </div>
  ));

  const cartItem = cart.map((item) => (
    <div key={item.id}>{`${item.name} : ${item.price} €`}
      <input type="submit" value="RETIRER DU PANIER" onClick={() => removeFromCart(item)} />
    </div>
  ));
  return (
    <div>
      <div className="catalog">{ListItems}</div>
      <div className="cart">
        PANIER
        <div>{cartItem}</div>
        <div>Total du panier : {cartTotal} €</div>
      </div>
      <div>Message d'alerte : {alert}</div>
    </div>);
}

export default Shop;