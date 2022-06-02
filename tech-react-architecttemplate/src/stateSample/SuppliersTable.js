import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { suppliers } from "./data/suppliers";

function SuppliersTable() {
  const [supplierList, setSupplierList] = useState(suppliers);

  const [searchByName, setSearchByName] = useState("");

  const removeAll = () => {
    setSupplierList([]);
  };

  const removeItem = (id) => {
    let newCategoryList = supplierList.filter((item) => item.id != id);
    setSupplierList(newCategoryList);
  };

  const searchSuppliers = () => {
    let searchData = searchByName.toLowerCase().trim();
    let newSuppliers = suppliers.filter((q) =>
      q.companyName.toLowerCase().includes(searchData)
    );

    setSupplierList(newSuppliers);
    setSearchByName("");
  };

  const orderBy = () => {
    let sortSuppliers = supplierList.sort((a, b) => {
      let fa = a.companyName.toLowerCase(),
        fb = b.companyName.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    setSupplierList([...sortSuppliers]);
  };

  const orderByDesc = () => {
    let sortSuppliers = supplierList.sort((a, b) => {
      let fa = a.companyName.toLowerCase(),
        fb = b.companyName.toLowerCase();

      if (fb < fa) {
        return -1;
      }
      if (fb > fa) {
        return 1;
      }
      return 0;
    });
    setSupplierList([...sortSuppliers]);
  };

  const loadData = () => {
    setSupplierList([...suppliers]);
  };
  const bodyStyle = {
    marginLeft: "auto",
    marginRight: "auto",
    padding: "40px",
  };
  const headStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const searchStyle = {
    display: "flex",
    alignItems: "center",
  };
  return (
    <>
      <div style={bodyStyle}>
        <div style={headStyle}>
          <div style={searchStyle}>
            <input
              type="text"
              placeholder="Search by name..."
              value={searchByName}
              onChange={(e) => setSearchByName(e.target.value)}
            />
            <Button
              style={{ margin: 5 }}
              variant="success"
              onClick={() => searchSuppliers()}
            >
              Search
            </Button>
          </div>
          <div>
            <Button onClick={() => loadData()}>Load</Button>
          </div>
          <div>
            <Button
              style={{ margin: 5 }}
              variant="secondary"
              onClick={() => orderBy()}
            >
              Order By
            </Button>
            <Button variant="secondary" onClick={() => orderByDesc()}>
              Order By Desc
            </Button>
          </div>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>CompanyName</th>
              <th>ContactName</th>
              <th>ContactTitle</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {supplierList &&
              supplierList.map((item, key) => {
                return (
                  <tr key={key}>
                    <td>{item.id}</td>
                    <td>{item.companyName}</td>
                    <td>{item.contactName}</td>
                    <td>{item.contactTitle}</td>
                    <td>{item.address.city}</td>
                    <td style={{ display: "flex", justifyContent: "center" }}>
                      <Button
                        variant="outline-danger"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
        <div style={{ textAlign: "center" }}>
          <Button variant="danger" onClick={() => removeAll()}>
            Remove All
          </Button>
        </div>
      </div>
    </>
  );
}

export default SuppliersTable;
