import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import "index.css"
import { HashRouter } from "react-router-dom"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </StrictMode>,
)
