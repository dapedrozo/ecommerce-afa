-- CreateTable
CREATE TABLE "User" (
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Product" (
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 100,
    "codigo" TEXT NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 1,
    "descripcionExtras" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "categoryId" TEXT NOT NULL,
    "distribuidorId" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Distribuidor" (
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Distribuidor_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Category" (
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("name")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_distribuidorId_fkey" FOREIGN KEY ("distribuidorId") REFERENCES "Distribuidor"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
