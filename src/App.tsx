import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Dashboard from "./pages/dashboard/Dashboard"
import Product from "./pages/product/Product"
import EditProduct from "./pages/product/EditProduct"
import { useAppDispatch } from "./store/store"
import { useEffect } from "react"
import { fetchProduct } from "./store/features/productSlice"

function App() {
    const dispatch = useAppDispatch()
    useEffect(() => {
      dispatch(fetchProduct())
    },)
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/product" element={<Product />} />
                <Route path="/product/edit" element={<EditProduct />} />
            </Routes>
        </Router>
    )
}

export default App
