import {prisma} from '../../database.js'
import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import jwt from "jsonwebtoken";
import config from "../../config.js";
import crypto from 'crypto';

const secretKey = config.JWTSECRET;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secretKey,
};

passport.use(
    new JwtStrategy(jwtOptions, async (payload, done) => {
      try {
        const validToken = await prisma.TokenWhitelist.findFirst({
            where: {
                jti: payload.jti
            },
          });
        if(!validToken) {
          done(null, false)
          return
        }
        const currentTime = new Date();
        const difference = currentTime - validToken.lastActivity;
        const fiveteenMin = 15 * 60 * 1000;
        if (difference >= fiveteenMin) {
          await TokensWhitelist.findOneAndDelete({ jtiToken: payload.jti });
          await prisma.TokenWhitelist.delete({
            where:{
                jti: payload.jti
            }
        })
          done(null, false);
          return;
        }
        await prisma.TokensWhitelist.update({
            where:{
                jti: payload.jti
            },
            data: { lastActivity: currentTime }
        })
        const userFound = await prisma.user.findFirst({
            where: {
                email: payload.email
            },
          });
        if (userFound) {
          done(null, userFound);
          return
        } else {
          done(null, false);
          return
        }
      } catch (error) {
        done(error, false);
      }
    })
  );

export const generateToken=(user)=> {
  const currentDate = new Date().toISOString();
  const randomString = crypto.randomBytes(16).toString('hex');
  const jti = crypto.createHash('sha256').update(currentDate + randomString).digest('hex');
  const payload = { email:user.email, nombres: user.nombres, imagenPerfil: user.imagenPerfil };
  return jwt.sign(payload, secretKey, { jwtid: jti });
}

export const decodeToken=(token)=>{
  const decodedToken = jwt.decode(token);
  const jti = decodedToken.jti;
  if (decodedToken) {
    return jti
  } else {
    return false
  }
}

export const ensureAuthenticated = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user) => {
    if (user) {
      res.status(403).json({ message: "Ya iniciaste sesion" });
    } else {
      next();
    }
  })(req, res, next);
};

export const authenticateJwt = passport.authenticate("jwt", { session: false });

export { passport };
