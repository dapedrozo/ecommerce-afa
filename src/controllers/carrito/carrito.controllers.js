import { prisma } from "../../database.js";

export const getCarrito = async (req, res) => {
  try {
    const carritoFound = await prisma.carrito.findFirst({
      where: {
        userId: req.user.email,
      },
    });
    !carritoFound
      ? res.status(404).json({ error: "carrito no encontrado" })
      : res.status(200).json(carritoFound);
  } catch (error) {
    res.status(422).json("Ocurrió un error y no se pudo consultar el carrito");
  }
};

export const createCarrito = async (req, res) => {
  try {
    const { productId, cantidad } = req.body;
    const productFound = await prisma.product.findFirst({
      where: {
        name: productId,
      },
    });
    if (!productFound)
      return res.status(404).json({ error: "producto no encontrado" });
    if (cantidad > productFound.stock)
      return res.status(500).json({ error: "no hay suficiente stock" });
    const newObjectCarrito = {
      userId: req.user.email,
      productId,
      cantidad
    }
    const newCarrito = await prisma.carrito.create({
      data: newObjectCarrito,
    });
    !newCarrito
      ? res
          .status(404)
          .json({ error: "ocurrio un error y no se pudo crear el carrito" })
      : res.status(200).json(newCarrito);
  } catch (error) {
    res.status(422).json("Ocurrió un error y no se pudo crear el carrito");
  }
};

export const eliminarElementoCarrito = async (req, res) => {
  try {
    const deletedProduct = await prisma.carrito.delete({
      where: {
        productId: req.params.id,
        userId: req.user.email,
      },
    });
    !deletedProduct
      ? res.status(404).json({ error: "producto no encontrado" })
      : res.status(200).json(deletedProduct);
  } catch (error) {
    res
      .status(422)
      .json("Ocurrió un error y no se pudo eliminar el producto del carrito");
  }
};

export const eliminarCarrito = async (req, res) => {
  try {
    const deletedCarrito = await prisma.carrito.delete({
      where: {
        userId: req.user.email,
      },
    });
    !deletedCarrito
      ? res.status(404).json({ error: "carrito no encontrado" })
      : res.status(200).json(deletedCarrito);
  } catch (error) {
    res.status(422).json("Ocurrió un error y no se pudo eliminar el carrito");
  }
};

export const updateCarrito = async (req, res) => {
  try {
    const newUpdateProduct = {
      userId: req.user.email,
      productId:req.body.productId,
      cantidad:req.body.cantidad
    }
    const updatedProduct = await prisma.carrito.update({
      where: {
        id: parseInt(req.params.id),
        productId: req.body.productId,
        userId: req.user.email,
      },
      data: {
        cantidad: req.body.cantidad
      },
    });
    console.log(updatedProduct);
    !updatedProduct
      ? res.status(404).json({ error: "producto del carrito no encontrado" })
      : res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error);
    res
      .status(422)
      .json("Ocurrió un error y no se pudo actualizar el producto del carrito");
  }
};
