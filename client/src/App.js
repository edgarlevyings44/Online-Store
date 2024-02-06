import './App.css';
import { Navbar } from './Components/Homepage/Navbar';
import Footer from './Components/Homepage/Footer';
import AppRoutes from './AppRoutes';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


function App() {

  const [customer, setCustomer] = useState("")

  const navigate = useNavigate()

  const excludePaths = ['/login', '/register', '/admin', '/admin/team', '/admin/products', '/admin/report']

  const shouldDisplayNavbarFooter = !excludePaths.includes(window.location.pathname)

  const [cart, setCart] = useState([])

  const [showNotification, setNotification] = useState(false)

  const handleAddToCart = (newproduct) => {
    const existingProduct = cart.find((item) => item.product.id == newproduct.id)

    if (existingProduct){
      const latestProduct = cart.map((item) => 
      item.product.id === newproduct.id ? {
        ...item, quantity: item.quantity + 1} : item
        )
        setCart(latestProduct)
    }
    else{
      setCart([...cart, {product: newproduct, quantity: 1}])
    }

    setNotification(true)
    setTimeout(() => {
      setNotification(false)
    }, 500)
  }

  const removeFromCart = (cartproduct) => {
    const updatedCart = cart.filter((item) => item.product.id !== cartproduct.id)
    setCart(updatedCart)
  }

  const totalAmount = () => {
    let total = 0

    for (const item of cart){
      total += item.product.price * item.quantity
    }
    return total
  }

  useEffect(() => {
    fetch('/user')
    .then((response) => {
      if (response.ok){
        response.json()
        .then((data) => {
          setCustomer(data)
        })
      
      }
    })
  }, [])

  return (
    <div className="App">
      {shouldDisplayNavbarFooter && (
        <div>
          <Navbar cart={cart} setCart={setCart} customer={customer} setCustomer={setCustomer} handleAddToCart={handleAddToCart}/>
        </div>
      )}
      <div className='main-content'>
        <AppRoutes customer={customer} setCustomer={setCustomer} showNotification={showNotification} handleAddToCart={handleAddToCart} totalAmount={totalAmount} removeFromCart={removeFromCart} cart={cart} setCart={setCart}/>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
