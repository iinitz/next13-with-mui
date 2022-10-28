'use client'

import {
  Box, Table, TableBody, TableCell, TableHead, TableRow,
} from '@mui/material'

import { Category } from '../../types'

const TabData = ({ categories }: { categories: Category[] }) => (
  <Box display="flex">
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>#</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {categories.map((category) => (
          <TableRow key={category.id}>
            <TableCell>{category.id}</TableCell>
            <TableCell>{category.title}</TableCell>
            <TableCell>{category.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Box>
)

export default TabData
