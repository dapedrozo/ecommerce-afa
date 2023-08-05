-- CreateTable
CREATE TABLE "TokenWhitelist" (
    "jti" TEXT NOT NULL,
    "lastActivity" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "TokenWhitelist_pkey" PRIMARY KEY ("jti")
);

-- AddForeignKey
ALTER TABLE "TokenWhitelist" ADD CONSTRAINT "TokenWhitelist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
