import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

// Interface untuk tipe data Folder
export interface IFolder {
  id: number;
  name: string;
  parent_id: number | null;
  created_at: Date;
  updated_at: Date;
}

type FolderCreationAttributes = Optional<
  IFolder,
  "id" | "created_at" | "updated_at"
>;

// Model Sequelize untuk table Folder
class Folder
  extends Model<IFolder, FolderCreationAttributes>
  implements IFolder
{
  public id!: number;
  public name!: string;
  public parent_id!: number | null;
  public created_at!: Date;
  public updated_at!: Date;
}

Folder.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Folder,
        key: "id",
      },
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "folders",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default Folder;
