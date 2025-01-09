/*
  Warnings:

  - You are about to drop the column `receiverId` on the `TranscationData` table. All the data in the column will be lost.
  - You are about to drop the column `senderId` on the `TranscationData` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[senderName]` on the table `TranscationData` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[receiverName]` on the table `TranscationData` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `receiverName` to the `TranscationData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderName` to the `TranscationData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TranscationData" DROP COLUMN "receiverId",
DROP COLUMN "senderId",
ADD COLUMN     "receiverName" TEXT NOT NULL,
ADD COLUMN     "senderName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "TranscationData_senderName_key" ON "TranscationData"("senderName");

-- CreateIndex
CREATE UNIQUE INDEX "TranscationData_receiverName_key" ON "TranscationData"("receiverName");
