import { Request, Response } from "express";
import Folder from "../models/folder.model";
import File from "../models/files.model";
import { newErrorResponse, newSuccessResponse } from "../utils/response";

export class FilesController {
  constructor() {
    this.GetFiles = this.GetFiles.bind(this);
  }

  async GetFiles(req: Request, res: Response) {
    try {
      const { folder_id } = req.query;

      const whereClause = folder_id ? { folder_id: Number(folder_id) } : {};

      const files = await File.findAll({
        where: whereClause,
      });

      if (!files || files.length === 0) {
        res.status(200).json({
          status: 404,
          message: "No files found",
          data: []
        });
        return;
      }

      res
        .status(200)
        .json(newSuccessResponse(200, "Files retrieved successfully ", files));
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json(newErrorResponse(500, "Error fetching files"));
    }
  }
}
