import { Router, Request, Response } from "express";
import { FilesController } from "../controllers/files.controller";
import { FoldersController } from "../controllers/folder.controller";

const router = Router();

const fileController = new FilesController();
const folderController = new FoldersController();

router.get("/", async (req: Request, res: Response) => {
  res.status(200).json({
    status: 200,
    message: "Service is running!",
  });
});

router.get("/files", fileController.GetFiles);
router.get("/folders", folderController.GetFolders);

export default router;
