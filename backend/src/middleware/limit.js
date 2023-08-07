import { rateLimit } from "express-rate-limit";

let configGet = () => {
    return rateLimit({
        windowMs: 2 * 1000,
        max: 5,
        stadarHeaders: true,
        legacyHeaders: false,
        skip: (req, res) => {
            if (req.headers['content-length'] > 91) {
                res.status(413).send({
                    status: 413,
                    message: "El tamaño es incorrecto"
                });
                return true;
            }
        },
        message: (req, res) => {
            res.status(429).send({
                status: 429,
                message: "Ya se acabo tu tiempo :c"
            });

        }
    })
}

export {
    configGet
}

// X-RateLimit
