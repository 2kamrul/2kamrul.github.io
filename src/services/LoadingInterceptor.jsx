import { useContext, useEffect } from "react"
import { Outlet } from "react-router-dom"
import { LoadingContext, topbar } from "react-router-loading"
import fakeLoadingTime from "utilities/fake_fetcher"

function LoadingInterceptor() {
    const { done } = useContext(LoadingContext)

    const loading = async () => {
        await fakeLoadingTime()
        done()
    }

    useEffect(() => {
        loading()
    })

    topbar.config({
        autoRun: false,
        barThickness: 4,
        barColors: {
            0: "#ffffff",
            0.5: "#bdbdbd",
            1.0: "#26a69a",
        },
        shadowBlur: 0,
        // shadowColor: 'red',
        className: "topbar",
    })

    return <Outlet />
}

export default LoadingInterceptor
