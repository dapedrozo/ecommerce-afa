import { prisma } from "../../database.js";

export const getPerfil = async (req, res) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: req.params.email,
      },
    });
    !user
      ? res.status(404).json({ msg: "no se encontro el usuario" })
      : res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el usuario" });
  }
};

export const updatePerfil = async (req, res) => {
  try {
    const updatedPerfil = await prisma.user.update({
      where: {
        email: req.params.email,
      },
      data: req.body,
    });
    !updatedPerfil
      ? res.status(404).json({ error: "usuario no encontrado" })
      : res.status(200).json(updatedPerfil);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el perfil de usuario" });
  }
};
