<<<<<<< HEAD
/** @type {import('next').NextConfig} */

const nextConfig = {
    // output: "export",
    // basePath: process.env.NODE_ENV === 'production' ? "/household-app-temp" : "",
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

=======
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

>>>>>>> efca81d441df5ac008df521069edf8fd64f395d6
export default nextConfig;