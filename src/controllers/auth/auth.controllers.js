import { prisma } from "../../database.js";
import bcrypt from "bcryptjs";
import { passportAuth } from "../../middlewares/index.js";

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    if (!userFound)
      return res
        .status(400)
        .json({ token: null, message: "usuario no encontrado" });
    const matchPassword = await bcrypt.compare(password, userFound.password);
    if (!matchPassword)
      return res
        .status(400)
        .json({ token: null, message: "usuario no encontrado" });
    const token = passportAuth.generateToken(userFound);
    const lastActivity = new Date();
    const jtiToken = passportAuth.decodeToken(token);
    if (!jtiToken)
      return res.status(400).json({ token: null, message: "ocurrio un error" });
    await prisma.tokenWhitelist.create({
      data: {
        jti:jtiToken,
        lastActivity,
        userId: email,
      },
    });
    res.status(200).json(token);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Ocurrió un error y no se pudo loggear el usuario" });
  }
};

export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const newUserToAdd = {
      name,
      email,
      password: await bcrypt.hash(password, salt),
    };
    const newUser = await prisma.user.create({
      data: newUserToAdd,
    });
    if (!newUser) return res.status(400).json({ message: "ocurrio un error" });
    res.status(201).json({ message: "usuario registrado con exito" });
  } catch (error) {
    res.status(422).json("Ocurrió un error y no se pudo registrar el usuario");
  }
};

export const logout = async (req, res) => {
  try {
    const authorizationHeader = req.headers["authorization"];
    if (!authorizationHeader)
      return res.status(403).json({ message: "no se recibio el token" });
    if (!authorizationHeader.startsWith("Bearer "))
      return res.status(400).send("Encabezado Authorization incorrecto");
    const token = authorizationHeader.slice(7);
    const jtiToken = passportAuth.decodeToken(token);
    if (!jtiToken)
      return res.status(400).json({ token: null, message: "ocurrio un error" });
    const deletedToken = await prisma.tokenWhitelist.delete({
      where: {
        jti: jtiToken,
      },
    });
    !deletedToken
      ? res.status(404).json({ error: "ocurrion un error" })
      : res.status(200).json({ message: "logout correcto" });
  } catch (error) {
    console.log(error);
    res.status(422).json("Ocurrió un error y no se pudo salir de la sesion");
  }
};
