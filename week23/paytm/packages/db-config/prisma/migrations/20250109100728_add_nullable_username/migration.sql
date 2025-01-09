-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "username" TEXT,
ADD CONSTRAINT "Account_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "TranscationData" ADD CONSTRAINT "TranscationData_senderName_fkey" FOREIGN KEY ("senderName") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TranscationData" ADD CONSTRAINT "TranscationData_receiverName_fkey" FOREIGN KEY ("receiverName") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
