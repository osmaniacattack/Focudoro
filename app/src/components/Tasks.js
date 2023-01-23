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
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [deleteIndex, setDeleteIndex] = useState(0);
  const [user] = useContext(UserContext);

  const localTasks = JSON.parse(localStorage.getItem("tasks"));
  const localCompleted = JSON.parse(localStorage.getItem("completed"));

  useEffect(() => {
    if (localTasks) {
      setTasks(localTasks);
    }
    if (completedTasks) {
      setCompletedTasks(localCompleted);
    }
  }, []);

  useEffect(() => {
    if (localTasks) {
      localStorage.removeItem("tasks");
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    if (localCompleted) {
      localStorage.removeItem("completed");
    }
    localStorage.setItem("completed", JSON.stringify(completedTasks));
  }, [completedTasks]);

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
                    disabled={tasks.length === 0}
                  >
                    <DeleteIcon />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            {tasks.map((task, index) => {
              let isCompleted = completedTasks.includes(index);
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
                          {/* {`${index + 1}. `} */}
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
