/** @type {import('next').NextConfig} */

const nextConfig = {
    // output: "export",
    basePath: process.env.NODE_ENV === 'production' ? "/household-app-temp" : "",
    // async redirects() {
    //     return [
    //         {
    //             source: '/',
    //             destination: '/', // リダイレクト先のパス
    //             permanent: true,
    //         }
    //     ]
    // }
    trailingSlash: true,
    output: 'standalone',
}

export default nextConfig;