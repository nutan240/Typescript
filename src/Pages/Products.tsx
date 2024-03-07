import * as React from "react";
import { useState, useEffect } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import {
  
  Box,
  Button,
  Divider,
  Stack,
  
  Typography,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { db } from "../Firebase/Firebase";
import {
  collection,
  deleteDoc,
  doc,
  
  onSnapshot,
} from "firebase/firestore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import EditProduct from "../component/Editproduct";
import AddProduct from "./AddProduct";

const style: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "2px solid white",
  boxShadow: '24px',
  padding: '4px',
  borderRadius: "12px",
  background:'white'
};

interface Product {
  id: string;
  name: string;
  price: number;
  date: string;
  category: string;
}

const Products: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState<Product[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [editopen, setEditopen] = useState(false);
  
  const [formid, setFormid] = useState<Product>({ id: '', name: '', price: 0, date: '', category: '' });

console.log(formid)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEditOpen = () => setEditopen(true);
  const handleEditClose = () => setEditopen(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
      setRows(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          price: doc.data().price,
          date: doc.data().date,
          category: doc.data().category,
        }))
      );
    });
    return () => unsubscribe();
  }, []);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    console.log(event)
  };

  const deleteUser = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteApi(id);
      }
    });
  };

  const deleteApi = async (id: string) => {
    const userDoc = doc(db, "products", id);
    await deleteDoc(userDoc);
    Swal.fire("Deleted!", "Your file has been deleted.", "success");
  };

  const editData = (id: string, name: string, price: number, category: string, date: string) => {
    const data: Product = {
      id: id,
      name: name,
      price: price,
      category: category,
      date: date,
    };
    setFormid(data);
    handleEditOpen();
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Box>
        <Box sx={{ fontSize: "20px", textDecoration: "none" }}>
          <NavLink style={{ textDecoration: "none" }} to={"/"}>
            Go back
          </NavLink>
        </Box>
        <div>
          <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <AddProduct closeEvent={handleClose} />
            </Box>
          </Modal>

          <Modal
            open={editopen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <EditProduct closeEvent={handleEditClose} fid={formid} />
            </Box>
          </Modal>
        </div>

        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            padding: "20px",
            fontSize: "40px",
            textAlign: "center",
            fontStyle: "italic",
            color: "darkblue",
            fontWeight: "bold",
          }}
        >
          Products List
        </Typography>
        <Divider />
        <Box height={10} />
        <Stack sx={{ width: "90%", margin: "auto" }} direction="row" spacing={2} className="my-2 mb-2">
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Button
            sx={{
              background: "white",
              borderRadius: "20px",
              height: "55px",
              width: "47px",
            }}
            onClick={handleOpen}
            variant="contained"
          >
            <AddCircleIcon
              sx={{ height: "50px", width: "40px", color: "green" }}
            />
          </Button>
        </Stack>
        {rows.length > 0 && (
          <Paper sx={{ width: "89%", overflow: "hidden", padding: "12px", margin: "auto", boxShadow: 10 }}>
            <Divider />
            <Box height={10} />
            <Stack direction="row" spacing={2} className="my-2 mb-2">
            </Stack>
            <Box height={10} />
            <TableContainer>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left" style={{ minWidth: "100px", color: 'darkgreen', fontWeight: 'bold', fontSize: '18px', fontStyle: 'italic', textDecoration: 'underline' }}>
                      NAME
                    </TableCell>
                    <TableCell align="left" style={{ minWidth: "100px", color: 'darkgreen', fontWeight: 'bold', fontSize: '18px', fontStyle: 'italic', textDecoration: 'underline' }}>
                      PRICE
                    </TableCell>
                    <TableCell align="left" style={{ minWidth: "100px", color: 'darkgreen', fontWeight: 'bold', fontSize: '18px', fontStyle: 'italic', textDecoration: 'underline' }}>
                      CATEGORY
                    </TableCell>
                    <TableCell align="left" style={{ minWidth: "100px", color: 'darkgreen', fontWeight: 'bold', fontSize: '18px', fontStyle: 'italic', textDecoration: 'underline' }}>
                      DATE
                    </TableCell>
                    <TableCell align="left" style={{ minWidth: "100px", color: 'darkgreen', fontWeight: 'bold', fontSize: '18px', fontStyle: 'italic', textDecoration: 'underline' }}>
                      ACTION
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.id}
                        >
                          <TableCell align="left">{row.name}</TableCell>
                          <TableCell align="left">
                            <CurrencyRupeeIcon sx={{ fontSize: '13px' }} />
                            {row.price}
                          </TableCell>
                          <TableCell align="left">{row.category}</TableCell>
                          <TableCell align="left">{row.date}</TableCell>
                          <TableCell align="left">
                            <Stack spacing={2} direction="row">
                              <EditIcon
                                style={{
                                  fontSize: "20px",
                                  color: "blue",
                                  cursor: "pointer",
                                }}
                                className="cursor-pointer"
                                onClick={() =>
                                  editData(
                                    row.id,
                                    row.name,
                                    row.price,
                                    row.category,
                                    row.date
                                  )
                                }
                              />
                              <DeleteIcon
                                style={{
                                  fontSize: "20px",
                                  color: "red",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  deleteUser(row.id);
                                }}
                              />
                            </Stack>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        )}
      </Box>
    </>
  );
}

export default Products;
