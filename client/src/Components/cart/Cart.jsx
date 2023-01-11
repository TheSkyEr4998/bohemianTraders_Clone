import React, { useEffect, useRef, useState } from "react";
//import {ChangeSizeModal} from "./changeSizeModal/ChangeSizeModal.js" 
import { Link } from "react-router-dom";

// Styles
import styles from "./Cart.module.css";

// Assets
import downArrow from "../../assets/down-chevron-svgrepo-com.svg"
import upArrow from "../../assets/chevron-up.svg";
import cross from "../../assets/x.svg";
import zip from "../../assets/zip-button-wht.svg";
import paypal from "../../assets/paypal.svg";
import gPay from "../../assets/dark_gpay.svg";
import {accountsUrl,productsUrl} from "../../Deployed-server-url/deployed-server-url"
import {Box } from "@chakra-ui/react"
// Modals
import { useToast } from "@chakra-ui/react";
import axios from "axios"
import { useMemo } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useDisclosure
} from '@chakra-ui/react'


const Cart = () => {
  // Get data from redux store
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  const toast = useToast()
//  const [totalPrice, setTotalPrice]=useState(0);
 const [cart, setCart]=useState([]);
 const [count, setCount]=useState(0);
 const total = ''
 const getUserId =  () => localStorage.getItem('userId') 

 const fetchCart = async () => {
  
  const userId = localStorage.getItem('userId');
  if(!userId) return alert('User not found')
  try {
    const {data} = await axios.get("https://bohemian-backend.vercel.app/user/cart", {
      params: {
        userId
      }
    })
    setCart(data);
    console.log(cart)
  } catch (error) {
    alert('error in fetching cart item')
  }

 }

 const handleQuantityChange = async (id, quantity) => {
  if(quantity === 0) {
    return onOpen()
  }else {

    try {
      const {data} = await axios.post('https://bohemian-backend.vercel.app/user/cart/quantity', {id: id, quantity: quantity})
    } catch (error) {
      alert(error.message)
    }
  }
  await fetchCart()
}

 const handleDelete = async (id) => {
 
  try {
    const {data} = axios.delete('https://bohemian-backend.vercel.app/user/cart/' + id)
    console.log("removed")
  } catch (error) {
    alert(error.message)
  }
  onClose();
  await fetchCart()
 } 

   const totalPrice = useMemo(() => {
    let total = 0;
    cart.forEach(el => total = (el.product.price * el.quantity) + total)
    return total;
  },[cart])


  const taxPrice = useMemo(() => {
    console.log(totalPrice);
return    (totalPrice * 0.091).toFixed(2);
  }, [totalPrice])  ;


  // set state from showing Change Size Modal
  const [showChange, setShowChange] = useState(false);

  // set new size in Change Size Modal
  const [selectedSizeForChange, setSelectedSizeForChange] = useState();

  // Set page Title
  useEffect(() => {
    document.title = "Bohemian Traders - Shopping Cart";
    fetchCart()
  }, []);

 
  return (
    <div className={styles.container}>
      {/* use location in site */}
      <p className={styles.location}>
        <Link to="/">HOME</Link> / YOUR CART
      </p>
      {/* number of items in cart */}
      <h1 className={styles.header}>YOUR CART ({cart.length} ITEMS)</h1>

      {/* product info */}
      {cart.map(({_id, product, quantity}) => (
        
        <div
          className={styles.productContainer}
          key={`${product.id}${product.id}`}
        >
          <div className={styles.firstSection}>
            <p className={styles.title}>Item</p>
            <div className={styles.innerFirstSection}>
              <div className={styles.photoContainer}>
                <img src={product.img.item1} alt="product" />
              </div>
              <div className={styles.titleContainer}>
                <p className={styles.brandName}>Boheamian Traders</p>
                <Link
                  
                  onClick={() => {
                    
                  }}
                >
                  {product.name}
                </Link>
                <p className={styles.size}>
                  Quantity: <span>{quantity}</span>
                </p>
                <button
                  className={styles.change}
                  onClick={() => {
                    
                  }}
                >
                  CHANGE
                </button>
                
              </div>
            </div>
          </div>
          <div className={styles.innerSection}>
            {/* product price */}
            <div className={styles.secondSection}>
              <p className={styles.title}>Price</p>
              <p className={styles.price}>
                $<span className={styles.us}>US</span> {product.price}
              </p>
            </div>
            {/* product quantity */}
            <div className={styles.thirdSection}>
              <p className={styles.title} id={styles.quantityTitle}>
                Quantity<span className={styles.quantitySemiColon}>:</span>
              </p>
              <div className={styles.quantityContainer}>
                <div className={styles.quantityInnerContainer}>
                  <button
                    className={styles.quantityBtn}
                    // decrease or remove product
                    onClick={() => {
                      handleQuantityChange(_id, quantity - 1);
                    }}
                  >
                    <img src={downArrow} alt="decrease" />
                  </button>
                  <p className={styles.quantitySmall}>{/* {quantity} */} {quantity}</p>
                  <button
                    className={styles.quantityBtn}
                    onClick={() => {
                      handleQuantityChange(_id, quantity + 1)
                     
                    }}
                  >
                    <img src={upArrow} alt="increase" />
                  </button>
                </div>
                <p className={styles.quantityMedium}>{product.id -product.id +1 } </p>
              </div>
            </div>
            <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick= {()=>handleDelete(_id)} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

            <div className={styles.forthSection}>
              <p className={styles.title}>Total</p>
              <div>
                <p className={styles.totalPrice}>
                  $<span className={styles.us}>US</span>{" "}
                  {product.price * quantity}
                </p>
                <img
                  className={styles.cross}
                  src={cross}
                  alt="delete"
                  onClick={() => {
                    handleDelete(product.id)
                    
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      {
         

      }

      <div className={styles.checkoutContainer}>
        <div className={styles.innerContainer}>
          <p className={styles.checkoutTitle}>SUBTOTAL:</p>
          <p className={styles.price}>
            $<span className={styles.us}>US</span> {totalPrice}
          </p>
        </div>
        <div className={styles.innerContainer}>
          <p className={styles.checkoutTitle}>SHIPPING:</p>
          <div>
            <button className={styles.change}>ADD INFO</button>
          </div>
        </div>
        <div className={styles.innerContainer}>
          <p className={styles.checkoutTitle}>TAX:</p>
          <p className={styles.price}>
            $<span className={styles.us}>US</span> {taxPrice}
          </p>
        </div>
        <div className={styles.innerContainer}>
          <p className={styles.checkoutTitle}>COUPON CODE:</p>
          <div>
            <button className={styles.change}>ADD COUPON</button>
          </div>
        </div>
        <div className={styles.innerContainer}>
          <p className={styles.checkoutTitle}>GRAND TOTAL:</p>
          <p className={styles.grandTotal}>
            $<span className={styles.us}>US</span>{" "}
            {totalPrice + parseFloat(taxPrice)}
          </p>
        </div>
        {/* payment optndleions */}
        <div className={styles.zip}>
          <p>ZIP IT NOW, PAY LATER</p>
          <img src={zip} alt="zip" />
          <p>&#9432;</p>
        </div>
        <Link to="/checkout">
        <button className={styles.checkoutBtn}>
          
          CHECK OUT
          
          </button>
          </Link>
        <p className={styles.use}>-- or use --</p>
        <div className={styles.paypal}>
          <img src={paypal} alt="paypal" />
        </div>
        <div className={styles.gPay}>
          <img src={gPay} alt="g-pay" />
        </div>
      </div>
      
    </div>
  );
};

export default Cart;
