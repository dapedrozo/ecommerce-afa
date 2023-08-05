/*
  Warnings:

  - You are about to drop the column `stock` on the `Carrito` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Carrito" DROP COLUMN "stock",
ADD COLUMN     "cantidad" INTEGER NOT NULL DEFAULT 1;
