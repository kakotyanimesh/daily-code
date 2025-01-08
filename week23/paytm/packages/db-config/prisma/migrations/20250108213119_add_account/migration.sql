-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "balance" INTEGER NOT NULL DEFAULT 1000,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
