import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button, Row, Col } from "react-bootstrap";
import "./gridStyle.css"
import "../../index.css"

export default function ControlledSelectionGrid() {
  const [rows, setRows] = useState<{ id: number, Name: string, Description: string, Web_Reference: string }[]>([])
  const columns: GridColDef[] = [
    { field: "id", headerName: "id", width: 0 },
    { field: "Name", headerName: "Name", width: 150 },
    { field: "Description", headerName: "Description", width: 150 },
    { field: "Web_Reference", headerName: "Web Reference", width: 150 },
  ];
  const [selectedRows, setSelectedRows] = useState([{}])

  useEffect(() => {
    /*Make the app fetch the items assynchronously*/
    const getBudgets = async () => {
      await fetchBudgets()
    }
    getBudgets();
  }, [])



  const handleDelete = async (id: any) => {
    let delFetch = selectedRows.map((id: any) => {
      return fetch(`http://localhost:5000/budgets/${id}`,
        {
          method: 'DELETE',
        });
    });

    Promise.allSettled(delFetch)
      .then((results) => results.forEach(() => fetchBudgets()));
  }

  const fetchBudgets = async () => {
    const res = await fetch('http://localhost:5000/budgets')
    const data = await res.json()
    return setRows(data)
  }
  return (
    <>
      <Row>
        <Col md sm={"3"}>
          <Button
            className="btnStyle float-end mt-5"
            onClick={(selectedRows) => handleDelete(selectedRows)}
            variant="contained"
            color="primary"
            type="submit"
          >
            Delete
          </Button>
        </Col>

      </Row>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        onSelectionModelChange={(newSelection: any) => {
          setSelectedRows(newSelection);
        }}
        hideFooter={true}
        hideFooterPagination={true}
      />
      <pre style={{ fontSize: 10 }}>
        {JSON.stringify(selectedRows, null, 4)}
      </pre>
    </>

  );
}


