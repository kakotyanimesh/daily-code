-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "accountHolder" TEXT NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransactionData" (
    "id" SERIAL NOT NULL,
    "senderName" TEXT NOT NULL,
    "receiverName" TEXT NOT NULL,

    CONSTRAINT "TransactionData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Account_accountHolder_key" ON "Account"("accountHolder");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_accountHolder_fkey" FOREIGN KEY ("accountHolder") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransactionData" ADD CONSTRAINT "TransactionData_senderName_fkey" FOREIGN KEY ("senderName") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransactionData" ADD CONSTRAINT "TransactionData_receiverName_fkey" FOREIGN KEY ("receiverName") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
