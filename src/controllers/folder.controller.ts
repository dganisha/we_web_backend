import { Request, Response } from "express";
import Folder from "../models/folder.model";
import { newErrorResponse, newSuccessResponse } from "../utils/response";

export class FoldersController {
  constructor() {
    this.GetFolders = this.GetFolders.bind(this);
  }

  // Fetch all folders or by parent_id
  async GetFolders(req: Request, res: Response) {
    try {
      const { parent_id } = req.query;
      const whereClause = parent_id ? { parent_id: Number(parent_id) } : {};

      const folders = await Folder.findAll({
        where: whereClause,
      });

      if (!folders || folders.length === 0) {
        res.status(404).json({
          status: 404,
          message: "No folders found",
        });
        return;
      }

      res
        .status(200)
        .json(
          newSuccessResponse(200, "Folders retrieved successfully", folders)
        );
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json(newErrorResponse(500, "Error fetching folders"));
    }
  }
}
