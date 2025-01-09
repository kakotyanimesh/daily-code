/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `Account` will be added. If there are existing duplicate values, this will fail.
  - Made the column `username` on table `Account` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Account_userID_key";

-- AlterTable
ALTER TABLE "Account" ALTER COLUMN "username" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Account_username_key" ON "Account"("username");
