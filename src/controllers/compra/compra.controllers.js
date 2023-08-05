import { prisma } from "../../database.js";

export const realizarCompra = async (req, res) => {
    try {
        await prisma.$queryRaw('BEGIN;');
        await prisma.$queryRaw('DO $$ DECLARE check_stock BOOLEAN;');
        await prisma.$queryRaw('BEGIN');
        await prisma.$queryRaw('SELECT (correct_count-count)::BOOLEAN into check_stock from (SELECT SUM((pr.stock-ca.cantidad)>=0) AS correct_count,COUNT(ca.*) as count FROM "Carrito" ca JOIN "Product" pr ON pr.name=ca."productId" WHERE ca."userId"=$1) t;',[req.user.email]);
        await prisma.$queryRaw('IF check_stock THEN WITH cte AS (SELECT pr.name AS name,pr.stock-ca.cantidad AS new_stock FROM "Carrito" ca JOIN "Product" pr ON pr.name=ca."productId" WHERE ca."userId"=$1) UPDATE "Product" SET stock=cte.new_stock FROM cte WHERE "Product".name=cte.name; DELETE FROM "Carrito" WHERE "userId"=$1;',[req.user.email]);
        await prisma.$queryRaw("ELSE RAISE EXCEPTION 'No hay suficiente stock' END IF; END; $$;")
        await prisma.$queryRaw('COMMIT;');     
        console.log('Transacción completada con éxito.');
      } catch (error) {
        console.error('Error durante la transacción:', error);
        await prisma.$queryRaw('ROLLBACK');
      }
};