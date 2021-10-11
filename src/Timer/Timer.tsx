import "./Timer.css";
import { getFormattedTime } from "../getFormattedTime";

export const Timer: React.FC<{ time: number }> = ({ time }) => (
  <span className="timer">{getFormattedTime(time)}</span>
);
