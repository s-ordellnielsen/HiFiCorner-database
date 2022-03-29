import gulp from "gulp"
import connect from "gulp-connect"

function startConnection(cb) {
    connect.server({
        root: 'build',
        livereload: true,
        port: 3001
    });
}


export default startConnection