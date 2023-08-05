BEGIN;

ALTER TABLE "Product" ADD CONSTRAINT "check_description_extras"
  CHECK (
    CASE WHEN "categoryId" = 'libros' THEN  
    "descripcionExtras"->>'autor' IS NOT NULL AND 
    "descripcionExtras"->>'editorial' IS NOT NULL
    ELSE true END
  );

COMMIT;

BEGIN;

ALTER TABLE "Product" ADD CONSTRAINT "check_min_stock_product"
  CHECK (stock>=0);

ALTER TABLE "Carrito" ADD CONSTRAINT "check_min_stock_carrito"
  CHECK (cantidad>0);
COMMIT;