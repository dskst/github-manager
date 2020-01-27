import path from 'path'

module.exports = {
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src'),
        ],
    },
}
