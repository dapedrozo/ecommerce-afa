import { prisma } from "../../database.js";

export const realizarCompra = async (req, res) => {
    try {
        const userEmail = req.user.email; 
        await prisma.$queryRaw`CALL realizar_compra(${userEmail})`    
        res.status(200).json({message: 'Transacción completada con éxito.'});
      } catch (error) {
        console.error('Error durante la transacción:', error);
        (error.code==="P2010") ? res.status(500).json({message: 'no hay suficiente stock.'}) : 
        res.status(500).json({message: 'Ocurrio un error durante la compra.'});
      }
};