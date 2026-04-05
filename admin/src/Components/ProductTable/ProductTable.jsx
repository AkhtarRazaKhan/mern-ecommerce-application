

import React, { useState } from 'react';
import {
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Checkbox, TableSortLabel, Toolbar, Typography, IconButton, TablePagination
} from '@mui/material';
import { FaTrash, FaEye, FaEdit } from 'react-icons/fa';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

// Sample data with added "name" field (used in Product column)
const rows = [
  { id: 1, name: 'iPhone 13', category: 'Electronics', subCategory: 'Phones', price: 699.99, sales: 120, stock: 15, rating: 4.5 },
  { id: 2, name: 'MacBook Pro', category: 'Electronics', subCategory: 'Laptops', price: 999.99, sales: 80, stock: 10, rating: 4.7 },
  { id: 3, name: 'Sofa Set', category: 'Home', subCategory: 'Furniture', price: 199.99, sales: 60, stock: 5, rating: 4.1 },
  { id: 4, name: 'Blender', category: 'Home', subCategory: 'Kitchen', price: 49.99, sales: 150, stock: 25, rating: 4.8 },
  { id: 5, name: 'T-Shirt', category: 'Clothing', subCategory: 'Men', price: 29.99, sales: 90, stock: 30, rating: 4.2 },
  { id: 6, name: 'Dress', category: 'Clothing', subCategory: 'Women', price: 39.99, sales: 100, stock: 20, rating: 4.6 },
];

// Columns (Added 'product' at the top)
const columns = [
  { id: 'product', label: 'PRODUCT' }, // New column for product name/image
  { id: 'category', label: 'CATEGORY' },
  { id: 'subCategory', label: 'SUB CATEGORY' },
  { id: 'price', label: 'PRICE ($)' },
  { id: 'sales', label: 'SALES' },
  { id: 'stock', label: 'STOCK' },
  { id: 'rating', label: 'RATING' },
];

export default function ProductTable() {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('category');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const isSelected = (id) => selected.includes(id);

  const handleSort = (columnId) => {
    const isAsc = orderBy === columnId && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(columnId);
  };

  const handleSelectAll = (e) => {
    setSelected(e.target.checked ? rows.map(row => row.id) : []);
  };

  const handleSelect = (id) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleDeleteSelected = () => {
    alert(`Deleting selected: ${selected.join(', ')}`);
    setSelected([]);
  };

  const handleView = (row) => alert(`Viewing: ${row.name}`);
  const handleEdit = (row) => alert(`Editing: ${row.name}`);
  const handleDelete = (id) => alert(`Deleting ID: ${id}`);

  const getSortedRows = () => {
    return [...rows].sort((a, b) => {
      const valA = a[orderBy];
      const valB = b[orderBy];

      if (typeof valA === 'number') {
        return order === 'asc' ? valA - valB : valB - valA;
      }
      return order === 'asc'
        ? String(valA).localeCompare(String(valB))
        : String(valB).localeCompare(String(valA));
    });
  };



  return (
    <>
   
    <Paper className="w-full mx-auto shadow-md px-1" >
      {/* Toolbar */}
      <Toolbar className="flex justify-between items-center px-4 py-2 bg-gray-100">
        <Typography className="font-semibold">
          {selected.length > 0 ? `${selected.length} selected` : 'Products'}
        </Typography>
        {selected.length > 0 && (
          <IconButton onClick={handleDeleteSelected} title="Delete Selected">
            <FaTrash className="text-red-500" />
          </IconButton>
        )}
      </Toolbar>

    

      {/* Pagination */}
      <div className="flex justify-end p-2">
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          count={rows.length}
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
  </>
  );
}

