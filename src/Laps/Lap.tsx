import "./Lap.css";
import { memo } from "react";
import { getFormattedTime } from "../getFormattedTime";

export enum LapType {
  Normal,
  Min,
  Max,
}

const typeToClassname: Record<LapType, string> = {
  [LapType.Normal]: "",
  [LapType.Min]: "min",
  [LapType.Max]: "max",
};

export const Lap: React.FC<{
  number: number;
  diffTime: number;
  type?: LapType;
}> = memo(({ number, diffTime, type }) => (
  <tr className={`lap ${typeToClassname[type ?? LapType.Normal]}`}>
    <td>Lap {number}</td>
    <td>{getFormattedTime(diffTime)}</td>
  </tr>
));
