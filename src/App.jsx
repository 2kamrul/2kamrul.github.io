import Layout from "core/Layout"
import Home from "pages/Home"
import About from "pages/About"
import Portfolio from "pages/Portfolio"
import Contact from "pages/Contact"
import { Routes, Route } from "react-router-loading"
import Loading from "utilities/Loading"
import LoadingInterceptor from "services/LoadingInterceptor"

function App() {
    return (
        // <Routes maxLoadingTime={500} loadingScreen={Loading}>
        <Routes loadingScreen={Loading}>
            <Route element={<LoadingInterceptor />}>
                <Route element={<Layout />}>
                    <Route index element={<Home />} loading />
                    <Route path="/contact" element={<Contact />} loading />
                    <Route path="/about" element={<About />} loading />
                    <Route path="/portfolio" element={<Portfolio />} loading />
                </Route>
            </Route>
        </Routes>
    )
}

export default App
