import express from "express";

const middlewareContentLength = express();
middlewareContentLength.use((req, res, next) => {
    if (req.headers['content-length'] > 91) {
        res.status(413).send({
            status: 413,
            message: "El tamaño de la informacion enviada es incorrecta"
        });
    } else {
        next()
    }
})
export { middlewareContentLength }