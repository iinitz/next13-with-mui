'use client'

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import BeachAccessIcon from '@mui/icons-material/BeachAccess'
import CommuteIcon from '@mui/icons-material/Commute'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import GroupIcon from '@mui/icons-material/Group'
import NotificationsIcon from '@mui/icons-material/Notifications'
import PersonIcon from '@mui/icons-material/Person'
import SnippetFolderIcon from '@mui/icons-material/SnippetFolder'
import TableChartIcon from '@mui/icons-material/TableChart'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import Tooltip from '@mui/material/Tooltip'
import { alpha, Theme } from '@mui/material/styles'

const PRIMARY_MENU_WIDTH = 56

const RootAppLayout = ({ children }: { children: React.ReactNode }) => (
  <Box display="flex" sx={{ width: '100vw', height: '100vh', '& > div[data-nextjs-scroll-focus-boundary]': { flexGrow: 1 } }}>
    <Box
      display={{ xs: 'none', sm: 'flex' }}
      sx={(theme: Theme) => ({
        bgcolor: alpha(theme.palette.grey[500], 0.05),
      })}
    >
      <Box
        component="nav"
        display="flex"
        flexDirection="column"
        sx={{ width: PRIMARY_MENU_WIDTH }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton disabled sx={{ px: 1.5 }}>
              <ListItemAvatar>
                <Avatar>
                  <BeachAccessIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider variant="middle" />
        <List>
          <ListItem disablePadding>
            <Tooltip title="Notification">
              <ListItemButton>
                <ListItemIcon>
                  <NotificationsIcon />
                </ListItemIcon>
              </ListItemButton>
            </Tooltip>
          </ListItem>
          <ListItem disablePadding>
            <Tooltip title="Job">
              <ListItemButton>
                <ListItemIcon>
                  <CommuteIcon />
                </ListItemIcon>
              </ListItemButton>
            </Tooltip>
          </ListItem>
          <ListItem disablePadding>
            <Tooltip title="Task">
              <ListItemButton>
                <ListItemIcon>
                  <TableChartIcon color="primary" />
                </ListItemIcon>
              </ListItemButton>
            </Tooltip>
          </ListItem>
          <ListItem disablePadding>
            <Tooltip title="Customer">
              <ListItemButton>
                <ListItemIcon>
                  <GroupIcon />
                </ListItemIcon>
              </ListItemButton>
            </Tooltip>
          </ListItem>
          <ListItem disablePadding>
            <Tooltip title="Data">
              <ListItemButton>
                <ListItemIcon>
                  <SnippetFolderIcon />
                </ListItemIcon>
              </ListItemButton>
            </Tooltip>
          </ListItem>
          <ListItem disablePadding>
            <Tooltip title="Admin">
              <ListItemButton>
                <ListItemIcon>
                  <AdminPanelSettingsIcon />
                </ListItemIcon>
              </ListItemButton>
            </Tooltip>
          </ListItem>
        </List>
        <Box flexGrow={1} />
        <Divider variant="middle" />
        <List>
          <ListItem disablePadding>
            <Tooltip title="Switch theme">
              <ListItemButton>
                <ListItemIcon>
                  <DarkModeIcon />
                </ListItemIcon>
              </ListItemButton>
            </Tooltip>
          </ListItem>
          <ListItem disablePadding>
            <Tooltip title="Language">
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar sx={{ width: 24, height: 24, fontSize: '0.8rem' }}>
                    TH
                  </Avatar>
                </ListItemAvatar>
              </ListItemButton>
            </Tooltip>
          </ListItem>
          <ListItem disablePadding>
            <Tooltip title="Username">
              <ListItemButton sx={{ px: 1.5 }}>
                <ListItemAvatar>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
              </ListItemButton>
            </Tooltip>
          </ListItem>
        </List>
      </Box>
    </Box>
    {children}
  </Box>
)

export default RootAppLayout
