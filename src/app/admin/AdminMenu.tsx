'use client'

import { Link, Typography } from '@mui/material'
import NextLink from 'next/link'

const AdminMenu = () => (
  <>
    <Typography variant="h1">Admin</Typography>
    <Link component={NextLink} href="/">Home</Link>
  </>
)

export default AdminMenu
