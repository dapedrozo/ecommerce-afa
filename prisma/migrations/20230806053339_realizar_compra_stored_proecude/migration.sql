CREATE OR REPLACE PROCEDURE realizar_compra(email VARCHAR)
LANGUAGE plpgsql 
AS $$ 
DECLARE 
check_stock BOOLEAN:=false;
BEGIN
WITH cte (producto,new_stock,cantidad) AS 
(SELECT pr.stock AS new_stock, ca.cantidad AS cantidad
FROM "Carrito" ca JOIN "Product" pr ON pr.name=ca."productId"
WHERE ca."userId"=email)

SELECT ((SUM(((new_stock-cantidad)>=0)::INT)-COUNT(producto))=0) INTO check_stock FROM cte;

IF check_stock THEN 
    WITH cte (producto,new_stock,cantidad) AS 
    (SELECT pr.name AS producto,pr.stock AS new_stock, ca.cantidad AS cantidad
    FROM "Carrito" ca JOIN "Product" pr ON pr.name=ca."productId"
    WHERE ca."userId"=email)

    UPDATE "Product" SET stock=(cte.new_stock-cte.cantidad) FROM cte WHERE "Product".name=cte.producto;
    DELETE FROM "Carrito" WHERE "userId"=email;
ELSE RAISE EXCEPTION 'No hay suficiente stock';
END IF;
END;
$$;
