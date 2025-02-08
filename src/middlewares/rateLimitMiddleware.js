import rateLimit from 'express-rate-limit';

export const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Demasiadas solicitudes desde esta IP, intenta nuevamente más tarde."
});