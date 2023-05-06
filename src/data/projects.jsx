import bookshelf365 from "assets/projects/bookshelf-365.png"
import beximcoPortal from "assets/projects/beximco-portal.png"
import beximcoDashboard from "assets/projects/beximco-dashboard.png"
import beximcoAndroidBoard from "assets/projects/android-beximco-board.png"
import beximcoAndroidNow from "assets/projects/android-beximco-now.png"
import beximcoAndroidVms from "assets/projects/android-beximco-vms.png"
import easyShopsBd from "assets/projects/easy-shop-bd.png"
import millionHoldings from "assets/projects/million-holdings.png"
import pashaTourism from "assets/projects/pasha-tourism.png"

const technologies = {
    reactJS: "ReactJS",
    expressJS: "ExpressJS",
    nodeJS: "NodeJS",
    sequelize: "SequelizeJS",
    materialUI: "Material-UI",
    tailwindcss: "Tailwindcss",
    mssql: "MSSQL",
    mysql: "MySql",
    iis: "IIS",
    java: "Java",
    android: "Android",
    cSharp: "C#",
}

export const projectList = [
    {
        id: 1,
        type: "web",
        technologies: [
            technologies.reactJS,
            technologies.nodeJS,
            technologies.expressJS,
            technologies.materialUI,
            technologies.sequelize,
            technologies.mysql,
        ],
        title: "Bookshelf365",
        shortDescription: "Online Education Platform",
        path: bookshelf365,
    },
    {
        id: 2,
        type: "web",
        technologies: [
            technologies.reactJS,
            technologies.nodeJS,
            technologies.expressJS,
            technologies.materialUI,
            technologies.sequelize,
            technologies.mssql,
            technologies.iis,
        ],
        title: "Dashboard",
        shortDescription: "Real-time Business Operation",
        path: beximcoDashboard,
    },
    {
        id: 3,
        type: "web",
        technologies: [technologies.reactJS, technologies.materialUI, technologies.iis],
        title: "Organization Portal",
        shortDescription: "Organization Service Gateway",
        path: beximcoPortal,
    },
    {
        id: 4,
        type: "web",
        technologies: [
            technologies.reactJS,
            technologies.nodeJS,
            technologies.expressJS,
            technologies.tailwindcss,
            technologies.mysql,
        ],
        title: "Million Holdings",
        shortDescription: "Real Estate Website",
        path: millionHoldings,
    },
    {
        id: 5,
        type: "web",
        technologies: [
            technologies.reactJS,
            technologies.nodeJS,
            technologies.expressJS,
            technologies.tailwindcss,
            technologies.mysql,
        ],
        title: "Easy Shops BD",
        shortDescription: "Online Product Sell",
        path: easyShopsBd,
    },
    {
        id: 6,
        type: "web",
        technologies: [
            technologies.reactJS,
            technologies.nodeJS,
            technologies.expressJS,
            technologies.tailwindcss,
            technologies.mysql,
        ],
        title: "Pasha Tourism",
        shortDescription: "Tourism Management Based On Spain",
        path: pashaTourism,
    },
    {
        id: 7,
        type: "android",
        technologies: [technologies.java, technologies.android, technologies.cSharp, technologies.mssql],
        title: "Visitor Management",
        shortDescription: "Visitor And Car Management Application",
        path: beximcoAndroidVms,
    },
    {
        id: 8,
        type: "android",
        technologies: [technologies.java, technologies.android, technologies.cSharp, technologies.mssql],
        title: "Business Intelligent",
        shortDescription: "BI Tool Reports On Android",
        path: beximcoAndroidBoard,
    },
    {
        id: 9,
        type: "android",
        title: "Production Moitor",
        technologies: [technologies.java, technologies.android, technologies.cSharp, technologies.mssql],
        shortDescription: "Live Production Monitor From Android",
        path: beximcoAndroidNow,
    },
]
