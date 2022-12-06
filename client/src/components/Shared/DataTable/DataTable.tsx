import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

type DataTableProps = {
  rows: any;
  columns: any;
  rowCount: number;
  loading: boolean;
  gridToolbar?: React.JSXElementConstructor<JSX.Element>;
};

const DataTable = (props: DataTableProps) => {
  return (
    <div style={{ height: 800 }}>
      <DataGrid
        rows={props.rows}
        columns={props.columns}
        components={{
          Toolbar: props.gridToolbar ? props.gridToolbar : GridToolbar,
        }}
        rowCount={props.rowCount}
        loading={props.loading}
      />
    </div>
  );
};

export default DataTable;
