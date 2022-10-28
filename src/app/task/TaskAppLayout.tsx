'use client'

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { alpha, Theme } from '@mui/material/styles'

const SECONDARY_MENU_WIDTH = 220

const TaskAppLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Box
      display="flex"
      sx={(theme: Theme) => ({
        bgcolor: alpha(theme.palette.grey[500], 0.05),
        borderRight: `1px solid ${theme.palette.divider}`,
        borderTopRightRadius: theme.spacing(1.5),
        borderBottomRightRadius: theme.spacing(1.5),
      })}
    >
      <Divider flexItem orientation="vertical" variant="middle" />
      <Box
        component="aside"
        display="flex"
        flexDirection="column"
        sx={{ minWidth: SECONDARY_MENU_WIDTH, maxWidth: SECONDARY_MENU_WIDTH }}
      >
        <Box display="flex" flexDirection="column" sx={{ overflowY: 'auto' }}>
          <List dense>
            <ListItem sx={{ py: 0 }}>
              <ListItemText
                primary="Task"
                primaryTypographyProps={{
                  variant: 'h6', fontWeight: 'bold', align: 'center', noWrap: true,
                }}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton selected>
                <ListItemText primary="Task A" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Task B" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Task C" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Task D" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Task E" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Task F" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Task G" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        <Box flexGrow={1} />
        <Divider variant="middle" />
        <Box display="flex" flexDirection="column" sx={{ px: 2, py: 1 }}>
          <Typography variant="body2" align="center">Copyright Company 2022</Typography>
          <Typography variant="body2" color="textSecondary" align="center">Version: 1.0.0 Build: 221028</Typography>
        </Box>
      </Box>
    </Box>
    <Box display="flex" flexGrow={1} sx={{ '& > div[data-nextjs-scroll-focus-boundary]': { flexDirection: 'column', flexGrow: 1 } }}>
      {children}
    </Box>
  </>
)

export default TaskAppLayout
