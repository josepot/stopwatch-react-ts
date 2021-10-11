import "./LapTable.css";

export const LapTable: React.FC = ({ children }) => (
  <div className="wrapper">
    <table className="table">{children}</table>
  </div>
);
