import React, { useState, useEffect, useContext } from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  Menu,
  MenuItem,
  TextField,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Checkbox,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserContext } from "../App";

export default function Tasks() {
  const LOCAL_STORAGE_KEY = "tasks";
  const LOCAL_STORAGE_KEY_C = "completedTasks";

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [deleteIndex, setDeleteIndex] = useState(0);
  const [user] = useContext(UserContext);


  const handleCheckboxChange = (index) => {
    const newCompletedTasks = [...completedTasks];
    if (newCompletedTasks.includes(index)) {
      newCompletedTasks.splice(newCompletedTasks.indexOf(index), 1);
    } else {
      newCompletedTasks.push(index);
    }
    setCompletedTasks(newCompletedTasks);
  };

  const handleDelete = (index) => {
    let newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  useEffect(() => {
    const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
    }
    const storedCompletedTasks = localStorage.getItem(LOCAL_STORAGE_KEY_C);
    if (storedCompletedTasks) {
        setCompletedTasks(JSON.parse(storedCompletedTasks));
    }
}, []);

useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
    localStorage.setItem(LOCAL_STORAGE_KEY_C, JSON.stringify(completedTasks));
}, [tasks, completedTasks]);

  return (
    <>
      <Card
        sx={{
          pb: 2,
          mt: 2,
          minHeight: "470px",
          maxHeight: "470px",
          overflowY: "scroll",
        }}
      >
        <CardContent>
          <Grid
            container
            spacing={0}
          >
            <Grid
              item
              xs={12}
            >
              <Grid
                container
                alignContent="center"
                justifyContent="space-between"
                sx={{ m: 1 }}
              >
                <Grid
                  item
                  xs={6}
                >
                  <Typography
                    variant="h6"
                    color="primary"
                  >
                    {`${user.given_name}'s `} Tasks
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={3}
                >
                  <Button
                    sx={{ height: 20, p: 2 }}
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={() => setOpen(true)}
                  >
                    <AddIcon />
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={3}
                >
                  <Button
                    sx={{ height: 20, p: 2 }}
                    size="small"
                    variant="outlined"
                    color="primary"
                    onClick={() => setDeleteOpen(true)}
                    disabled = {tasks.length === 0}
                  >
                    <DeleteIcon />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            {tasks.map((task, index) => {
              const isCompleted = completedTasks.includes(index);

              return (
                <Grid
                  item
                  xs={12}
                  key={index}
                >
                  <Grid
                    container
                    alignItems="center"
                  >
                    <Grid
                      item
                      xs={2}
                    >
                      <Checkbox
                        color="primary"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                        onChange={() => handleCheckboxChange(index)}
                        checked={isCompleted}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={10}
                    >
                      {isCompleted ? (
                        <Typography
                          variant="subtitle2"
                          color="inherit"
                          sx={{ textDecoration: "line-through" }}
                        >
                          {task}
                        </Typography>
                      ) : (
                        <Typography
                          variant="subtitle2"
                          color="inherit"
                        >
                          {task}
                        </Typography>
                      )}
                    </Grid>
                  </Grid>
                  <Divider sx={{ my: 1.5 }} />
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
        >
          <DialogTitle>Add New Task</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Add the task you would like to finish during your focus session.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="Task"
              fullWidth
              onChange={(e) => setNewTask(e.target.value)}
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setTasks([...tasks, newTask])}>Add</Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={deleteOpen}
          onClose={() => setDeleteOpen(false)}
        >
          <DialogTitle>Delete</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Select the task you would like to delete.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              select
              fullWidth
              onChange={(e) => setDeleteIndex(e.target.value)}
              variant="standard"
            >
              {tasks.map((task, index) => {
                return <MenuItem value={index}>{task}</MenuItem>;
              })}
            </TextField>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDeleteOpen(false)}>Cancel</Button>
            <Button onClick={() => handleDelete(deleteIndex)}>Delete</Button>
          </DialogActions>
        </Dialog>
      </Card>
    </>
  );
}
