/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
            }
        ]
    },
    compiler: {
        styledComponents: true,
    }
}

module.exports = nextConfig
