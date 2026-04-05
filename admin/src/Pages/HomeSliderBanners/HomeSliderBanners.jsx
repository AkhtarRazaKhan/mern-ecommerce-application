import React, { useState } from 'react';

import {
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Checkbox, TableSortLabel, Toolbar, Typography, IconButton, TablePagination,
  Button
} from '@mui/material';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../../App';

// Sample data
const rows = [
  { id: 1, imageUrl: '/slideBanner2.jpg', name: 'Big Sale Banner' },
  { id: 2, imageUrl: '/slideBanner2.jpg', name: 'New Season Banner' },
  { id: 3, imageUrl: '/slideBanner2.jpg', name: 'Grocery Banner' },
  { id: 4, imageUrl: '/slideBanner2.jpg', name: 'Fashion Sale Banner' },
];

function HomeSliderBanners() {

  const Context = useContext(MyContext)


  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');
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

  const paginatedRows = getSortedRows().slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper className="w-full mx-auto shadow-md px-1">
      {/* Top Toolbar */}
      <Toolbar className="flex justify-between items-center px-4 py-2 bg-gray-100">
        <Typography className="font-semibold text-lg">
          {selected.length > 0 ? `${selected.length} selected` : 'Home Slider Banners'}
        </Typography>
        <div className="flex gap-3 items-center">
          {selected.length > 0 && (
            <IconButton onClick={handleDeleteSelected} title="Delete Selected">
              <FaTrash className="text-red-500" />
            </IconButton>
          )}
          <Button className="!bg-blue-500 !text-white !py-2 !px-4 !rounded-md !hover:bg-blue-600 !transition-all">

          <span onClick={()=> Context.
              setIsOpenFullScreenPanel({
                open: true,
                model: 'Add Home Slide'

              })}>  ADD HOME SLIDE  </span>
          </Button>
        </div>
      </Toolbar>

      {/* Table */}
      <TableContainer component="div" className="overflow-x-auto">
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selected.length === rows.length}
                  indeterminate={selected.length > 0 && selected.length < rows.length}
                  onChange={handleSelectAll}
                  size="small"
                />
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'image'}
                  direction={orderBy === 'image' ? order : 'asc'}
                  onClick={() => handleSort('image')}
                >
                  IMAGE
                </TableSortLabel>
              </TableCell>
              <TableCell>ACTION</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedRows.map((row) => (
              <TableRow
                key={row.id}
                hover
                selected={isSelected(row.id)}
                onClick={() => handleSelect(row.id)}
                className="cursor-pointer hover:bg-gray-100 transition"
              >
                <TableCell padding="checkbox">
                  <Checkbox size="small" checked={isSelected(row.id)} />
                </TableCell>
                

                {/* Image Column */}
                
                <TableCell>
                <Link> 
                  <img
                    src={row.imageUrl}
                    alt={row.name}
                    className="w-[300px] h-[90px] object-cover rounded-md shadow-sm"
                  />
                </Link>

                </TableCell>

                {/* Action Buttons */}
                <TableCell>
                  <div className="flex gap-4">

                    <button
                      onClick={(e) => { e.stopPropagation(); handleEdit(row); }}
                      title="Edit"
                    >
                      <FaEdit className="text-[16px]" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleDelete(row.id); }}
                      title="Delete"
                    >
                      <FaTrash className="text-[16px] text-red-500" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <div className="w-full flex justify-end p-2">
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
  );
}

export default HomeSliderBanners;

