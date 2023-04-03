/*
  Warnings:

  - The primary key for the `GridStation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `GridStation` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `userId` to the `GridStation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GridStation" DROP CONSTRAINT "GridStation_pkey",
ADD COLUMN     "userId" UUID NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "GridStation_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "GridStation" ADD CONSTRAINT "GridStation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
