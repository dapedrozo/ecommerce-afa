BEGIN;

ALTER TABLE "Product" ADD CONSTRAINT "check_min_stock_product"
  CHECK (stock>=0);

ALTER TABLE "Carrito" ADD CONSTRAINT "check_min_stock_carrito"
  CHECK (cantidad>0);
COMMIT;