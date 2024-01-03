/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['res.cloudinary.com','randomuser.me'],
    },
    eslint: { ignoreDuringBuilds: true },
    reactStrictMode: false,
    env: {
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
        GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
        SECRET: process.env.SECRET,
        NEXT_PUBLIC_SOCKET_SERVER_URI: process.env.NEXT_PUBLIC_SOCKET_SERVER_URI,
        

    }, 
    async headers() {
        return [ 
        {

            source: "/api/v1/:path*",
            headers: [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "*" },
            { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
            { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version,Origin, X-Requested-With, Content-Type, Accept, Authorization" },
            

            ]
        },
        {

            source: "/api/v1/login",
            headers: [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "*" },
            { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
            { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ]
        },
        {

            source: "/api/cart/:path*",
            headers: [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "*" },
            { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
            { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version,Origin, X-Requested-With, Content-Type, Accept, Authorization" },

            ]
        },
        ]
    },


}


module.exports=nextConfig

// module.exports = {
//     images:{
//         domains:['res.cloudinary.com','randomuser.me'],
//     },
//     eslint: { ignoreDuringBuilds: true },
//     reactStrictMode: false,
//     async headers() {
//         return [
//         {

//             source: "/api/v1/:path*",
//             headers: [
//             { key: "Access-Control-Allow-Credentials", value: "true" },
//             { key: "Access-Control-Allow-Origin", value: "*" },
//             { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
//             { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version,Origin, X-Requested-With, Content-Type, Accept, Authorization" },
            

//             ]
//         },
//         {

//             source: "/api/v1/login",
//             headers: [
//             { key: "Access-Control-Allow-Credentials", value: "true" },
//             { key: "Access-Control-Allow-Origin", value: "*" },
//             { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
//             { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
//             ]
//         },
//         {

//             source: "/api/cart/:path*",
//             headers: [
//             { key: "Access-Control-Allow-Credentials", value: "true" },
//             { key: "Access-Control-Allow-Origin", value: "*" },
//             { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
//             { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version,Origin, X-Requested-With, Content-Type, Accept, Authorization" },

//             ]
//         },
//         ]
//     },
//     pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],

//   };