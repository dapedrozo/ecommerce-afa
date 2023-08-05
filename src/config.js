import dotenv from 'dotenv';
dotenv.config();

export default {
    PORTAPP: process.env.PORT_APP || 5000,
    JWTSECRET: process.env.JWT_SECRET || "secretToken"
} 