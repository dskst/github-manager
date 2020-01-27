import path from 'path'

module.exports = {
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src'),
        ],
    },
}

// const config: Configuration = {
//     resolve: {
//         modules: [
//             path.resolve('./src'),
//             path.resolve('./node_module'),
//         ],
//         // alias: {
//         //     src: path.resolve(__dirname, 'src'),
//         //     // usecase: path.resolve(__dirname, 'src/usecase'),
//         // },
//     },
// }

// export default config
