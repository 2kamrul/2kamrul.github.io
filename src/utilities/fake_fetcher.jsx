import { LOADING_SCREEN_DURATION } from "config/duration"

const fakeLoadingTime = async () => {
    const result = await new Promise((resolve) => {
        setTimeout(resolve, LOADING_SCREEN_DURATION)
    })
    return result
}

export default fakeLoadingTime
