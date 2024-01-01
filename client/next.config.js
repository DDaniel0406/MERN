/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['res.cloudinary.com','randomuser.me'],
    },
    eslint: { ignoreDuringBuilds: true } 
}

module.exports = nextConfig
