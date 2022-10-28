'use client'

/* eslint-disable @next/next/no-img-element */
import CloseIcon from '@mui/icons-material/Close'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ForumIcon from '@mui/icons-material/Forum'
import InfoIcon from '@mui/icons-material/Info'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Collapse from '@mui/material/Collapse'
import Dialog from '@mui/material/Dialog'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Slide from '@mui/material/Slide'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Theme } from '@mui/material/styles'
import { TransitionProps } from '@mui/material/transitions'
import { forwardRef, useState } from 'react'

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
]

const Transition = forwardRef((
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>,
) => <Slide direction="up" ref={ref} {...props} />)

const TaskContent = () => {
  const [openJobDetail, setOpenJobDetail] = useState(false)
  const [openAlert, setOpenAlert] = useState(true)
  const [openChat, setOpenChat] = useState(false)
  return (
    <>
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar>
          <Typography variant="h6" fontWeight="bold" sx={{ mr: 1 }}><Typography component="span" variant="inherit" noWrap display={{ xs: 'none', sm: 'initial' }}><Link href="/">Task A</Link>&nbsp;|&nbsp;</Typography>TID000101</Typography>
          <Chip label="Completed" size="small" color="success" sx={{ display: { xs: 'none', sm: 'inline-flex' }, mr: 1 }} />
          <Box flexGrow={1} />
          <IconButton onClick={() => setOpenChat((prev) => !prev)} sx={{ mr: 1 }}>
            <ForumIcon />
          </IconButton>
          <IconButton onClick={() => setOpenJobDetail((prev) => !prev)} sx={{ mr: 1 }}>
            {openJobDetail ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          <IconButton edge="end">
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Divider />
      <Box component="main" display="flex" flexDirection="column" flexGrow={1} sx={{ p: { xs: 2, sm: 3 }, overflowY: 'auto' }}>
        <Box display="flex" sx={{ mb: { xs: 2, sm: 3 } }}>
          <Grid container spacing={{ xs: 1, sm: 3 }}>
            <Grid item xs={12} sm>
              <Stack
                spacing={{ xs: 0, sm: 2 }}
                direction={{ xs: 'column', sm: openJobDetail ? 'column' : 'row' }}
                justifyContent={openJobDetail ? undefined : 'space-between'}
                divider={openJobDetail ? undefined : <Divider orientation="vertical" flexItem />}
              >
                <Typography>Job No.: <Typography component="span" fontWeight="bold"><Link href="/">22100010001</Link></Typography></Typography>
                <Typography>Feight: <Typography component="span" fontWeight="bold">Air Express (Non-document) DDP</Typography></Typography>
                <Typography>Export: <Typography component="span" fontWeight="bold">THAILAND to CHAINA</Typography></Typography>
                <Typography>Sales: <Typography component="span" fontWeight="bold">SALES NAME</Typography></Typography>
                <Typography>Customer: <Typography component="span" fontWeight="bold">CUSTOMER NAME</Typography></Typography>
              </Stack>
            </Grid>
            {openJobDetail ? (
              <>
                <Grid item xs={12} sm={4}>
                  <Stack spacing={{ xs: 0, sm: 2 }} direction="column">
                    <Typography>Sender: <Typography component="span" fontWeight="bold">SENDER NAME</Typography></Typography>
                    <Typography>Address: <Typography component="span" fontWeight="bold">SENDER ADDRESS</Typography></Typography>
                    <Typography>Receiver: <Typography component="span" fontWeight="bold">RECEIVER NAME</Typography></Typography>
                    <Typography>Address: <Typography component="span" fontWeight="bold">RECEIVER ADDRESS</Typography></Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Stack spacing={{ xs: 0, sm: 2 }} direction="column">
                    <Typography>Parent task: <Typography component="span" fontWeight="bold">-</Typography></Typography>
                    <Typography>Child task:</Typography>
                    <Typography sx={(theme: Theme) => ({ textIndent: theme.spacing(2) })}>Task B: <Typography component="span" fontWeight="bold"><Link href="/">TID000102</Link></Typography></Typography>
                    <Typography sx={(theme: Theme) => ({ textIndent: theme.spacing(2) })}>Task C: <Typography component="span" fontWeight="bold"><Link href="/">TID000103</Link></Typography></Typography>
                    <Typography sx={(theme: Theme) => ({ textIndent: theme.spacing(2) })}>Task D: <Typography component="span" fontWeight="bold"><Link href="/">TID000104</Link></Typography></Typography>
                  </Stack>
                </Grid>
              </>
            ) : null}
          </Grid>
        </Box>
        <Box display="flex">
          <Collapse in={openAlert} sx={{ display: 'flex', flexGrow: 1, '& .MuiCollapse-wrapperInner': { display: 'flex', flexGrow: 1 } }}>
            <Alert
              severity="error"
              action={(
                <IconButton color="inherit" size="small" onClick={() => setOpenAlert(false)}>
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              )}
              sx={{ flexGrow: 1, mb: { xs: 2, sm: 3 } }}
            >
              <AlertTitle>Issue</AlertTitle>
              This is an issue note.
            </Alert>
          </Collapse>
        </Box>
        <Box display="flex" flexGrow={1}>
          <Paper elevation={4} sx={{ flexGrow: 1, p: 2 }}>
            <Stack
              direction="row"
              spacing={2}
              divider={<Divider flexItem orientation="vertical" />}
            >
              <Box display="flex" flexDirection="column" flexGrow={1}>
                <Typography variant="h6" gutterBottom>Title</Typography>
                <TextField label="Input" fullWidth />
              </Box>
              <Box display="flex" flexDirection="column" flexGrow={1}>
                <Typography variant="h6" gutterBottom>&nbsp;</Typography>
                <TextField label="Input" />
              </Box>
            </Stack>
          </Paper>
          <Collapse in={openChat} orientation="horizontal" sx={{ display: { xs: 'none', sm: 'flex' }, '& .MuiCollapse-wrapperInner': { display: 'flex' } }}>
            <Box display="flex" sx={{ width: 320, ml: 3 }}>
              Chat box
            </Box>
          </Collapse>
          <Dialog
            open={openChat}
            fullScreen
            onClose={() => setOpenChat(false)}
            TransitionComponent={Transition}
            PaperProps={{ elevation: 4 }}
            sx={{ display: { sm: 'none' } }}
          >
            <AppBar color="inherit" elevation={0} sx={{ position: 'relative' }}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  disabled
                  sx={{ mr: 1 }}
                >
                  <ForumIcon />
                </IconButton>
                <Typography variant="h6" fontWeight="bold" sx={{ mr: 1 }}>
                  Chat: TID000101
                </Typography>
                <Box flexGrow={1} />
                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={() => setOpenChat(false)}
                >
                  <CloseIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            <Divider />
          </Dialog>
        </Box>
        <Grid container spacing={2} display="none">
          <Grid item xs={12} sm={6}>
            <TextField label="Note" multiline rows={5} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>Upload</Typography>
            <Paper variant="outlined">
              <ImageList cols={3} sx={{ height: 300, m: 0 }}>
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      title={item.title}
                      subtitle={item.author}
                      actionIcon={(
                        <IconButton
                          sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                          aria-label={`info about ${item.title}`}
                        >
                          <InfoIcon />
                        </IconButton>
                      )}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box display="flex" sx={{ px: { xs: 2, sm: 3 }, py: 1 }}>
        <Box display={{ xs: 'none', sm: 'flex' }} alignItems="center">
          <Typography component="span" variant="body2" color="textSecondary" sx={{ mr: 1 }}>
            Created by: SALES NAME (2022-10-28 15:00:00)
          </Typography>
          <Typography component="span" variant="body2" color="textSecondary">
            Updated by: SALES NAME (2022-10-28 15:00:00)
          </Typography>
        </Box>
        <Box display={{ xs: 'flex', sm: 'none' }} alignItems="center">
          <Chip label="Completed" size="small" color="success" />
        </Box>
        <Box flexGrow={1} />
        <Button variant="outlined" disabled sx={{ mr: 1 }}>Save</Button>
        <Button variant="contained" disabled>Complete</Button>
      </Box>
    </>
  )
}

export default TaskContent
