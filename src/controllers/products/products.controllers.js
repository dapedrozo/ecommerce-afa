import { prisma } from "../../database.js";

export const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    !products
      ? res.status(404).json({ msg: "no se encontraron productos" })
      : res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los productos" });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await prisma.product.findFirst({
      where: {
        name: req.params.id,
      },
    });
    !product
      ? res.status(404).json({ error: "producto no encontrado" })
      : res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el producto" });
  }
};
