import React, { useContext, useState } from 'react';
import {
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Toolbar, Typography, IconButton, TablePagination, Button
} from '@mui/material';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { MyContext } from '../../App';

// Dummy category data
const categories = [
  { id: 1, imageUrl: '/fash.png', name: 'Fashion' },
  { id: 2, imageUrl: '/fash.png', name: 'Electronics' },
  { id: 3, imageUrl: '/fash.png', name: 'Bags' },
  { id: 4, imageUrl: '/fash.png', name: 'Footwear' },
  { id: 5, imageUrl: '/fash.png', name: 'Groceries' },
  { id: 6, imageUrl: '/fash.png', name: 'Beauty' },
];

function CategoryList() {
  

const Context = useContext(MyContext)


  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleEdit = (category) => {
    alert(`Edit category: ${category.name}`);
  };

  const handleDelete = (id) => {
    alert(`Delete category ID: ${id}`);
  };

  const paginatedRows = categories.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper className="w-full p-4 shadow-md">
      {/* Toolbar */}
      <Toolbar className="flex justify-between items-center mb-4">
        <Typography variant="h6">Category List</Typography>

         <Button className="!bg-blue-500 !text-white !py-2 !px-4 !rounded-md !hover:bg-blue-600 !transition-all">
        
                  <span onClick={()=> Context.
                      setIsOpenFullScreenPanel({
                        open: true,
                        model: 'Add Category'
                      })}>  Add Category  </span>
            </Button>
      </Toolbar>

      {/* Table */}
      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell><strong>IMAGE</strong></TableCell>
              <TableCell><strong>CATEGORY NAME</strong></TableCell>
              <TableCell><strong>Action</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRows.map((cat) => (
              <TableRow key={cat.id} hover>
                {/* Image */}
                <TableCell>
                  <img
                    src={cat.imageUrl}
                    alt={cat.name}
                    className="w-[50px] h-[50px] object-contain"
                  />
                </TableCell>

                {/* Category Name */}
                <TableCell>{cat.name}</TableCell>

                {/* Action Buttons */}
                <TableCell>
                  <div className="flex gap-3">
                    <IconButton onClick={() => handleEdit(cat)} title="Edit">
                      <FaEdit className='text-[16px]' />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(cat.id)} title="Delete">
                      <FaTrash  className="text-red-500 text-[16px]" />
                    </IconButton>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <div className="flex justify-end mt-4">
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          count={categories.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={(e, newPage) => setPage(newPage)}
          onRowsPerPageChange={(e) => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0);
          }}
        />
      </div>
    </Paper>
  );
}

export default CategoryList;
