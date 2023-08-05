BEGIN;

ALTER TABLE "Product" ADD CONSTRAINT "check_description_extras"
  CHECK (
    CASE WHEN "categoryId" = 'libros' THEN  
    "descripcionExtras"->>'autor' IS NOT NULL AND 
    "descripcionExtras"->>'editorial' IS NOT NULL
    ELSE true END
  );

COMMIT;