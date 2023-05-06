const getExperince = () => {
    const fromDate = new Date("2020-06")
    const toDate = new Date()
    const totalMonth =
        toDate.getMonth() - fromDate.getMonth() + 12 * (toDate.getFullYear() - fromDate.getFullYear())

    return `${Math.floor(totalMonth / 12)}.${Math.floor(totalMonth % 12)}`
}

export default getExperince
