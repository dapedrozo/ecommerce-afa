-- CreateTable
CREATE TABLE "Carrito" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Carrito_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Carrito" ADD CONSTRAINT "Carrito_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carrito" ADD CONSTRAINT "Carrito_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
