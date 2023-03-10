import React, { useState, useEffect, useContext } from "react";
import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  MenuItem,
  TextField,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Checkbox,
} from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserContext } from "../App";
import "../App.css";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [deleteIndex, setDeleteIndex] = useState(0);

  // Retrieves tasks from user's localStorage and sets stage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
    const storedCompletedTasks = JSON.parse(
      localStorage.getItem("completedTasks")
    );
    if (storedCompletedTasks) {
      setCompletedTasks(storedCompletedTasks);
    }
  }, []);

  // Handler for when user clicks checkbox
  const handleCheckboxChange = (index) => {
    const newCompletedTasks = [...completedTasks];
    if (newCompletedTasks.includes(index)) {
      newCompletedTasks.splice(newCompletedTasks.indexOf(index), 1);
    } else {
      newCompletedTasks.push(index);
    }
    setCompletedTasks(newCompletedTasks);
    localStorage.setItem("completedTasks", JSON.stringify(newCompletedTasks));
  };

  // Delete task handler. Takes index and splices new tasks, sets updated state.
  const handleDelete = (index) => {
    let newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  // Add task handler. Creates copy, pushes input, sets updated state.
  const handleAdd = () => {
    let newTasks = [...tasks];
    newTasks.push(newTask);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setNewTask("");
  };

  return (
    <>
      <Card
        sx={{
          pb: 2,
          mt: 2,
          minHeight: "350px",
          maxHeight: "350px",
          overflowY: "auto",
          borderRadius: "20px",
        }}
      >
        <CardContent>
          <Grid container>
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
                  sx={{ m: "auto" }}
                >
                  <Button
                    sx={{ height: 20, p: 2 }}
                    size="small"
                    color="primary"
                    variant="contained"
                    fullWidth
                    onClick={() => setOpen(true)}
                  >
                    <CreateIcon />
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={5}
                  sx={{ m: "auto" }}
                >
                  <Button
                    sx={{ height: 20, p: 2 }}
                    size="small"
                    color="primary"
                    variant="contained"
                    fullWidth
                    onClick={() => setDeleteOpen(true)}
                    disabled={tasks.length === 0}
                  >
                    <DeleteIcon />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            {tasks.map((task, index) => {
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
                        checked={completedTasks.includes(index)}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={10}
                    >
                      {completedTasks.includes(index) ? (
                        <Typography
                          variant="subtitle2"
                          color="inherit"
                          sx={{ textDecoration: "line-through" }}
                          fontFamily={"Nunito"}
                        >
                          {task}
                        </Typography>
                      ) : (
                        <Typography
                          variant="subtitle2"
                          color="inherit"
                          fontFamily={"Nunito"}
                        >
                          {task}
                        </Typography>
                      )}
                    </Grid>
                  </Grid>
                  <Divider />
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
        >
          <DialogTitle fontFamily={"Nunito"}>Add New Task</DialogTitle>
          <DialogContent>
            <DialogContentText fontFamily={"Nunito"}>
              Add the task you would like to finish during your focus session.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="Task"
              fullWidth
              onChange={(e) => setNewTask(e.target.value)}
              value={newTask}
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button
              variant="contained"
              onClick={() => handleAdd()}
              disabled={newTask === ""}
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={deleteOpen}
          onClose={() => setDeleteOpen(false)}
        >
          <DialogTitle fontFamily={"Nunito"}>Delete</DialogTitle>
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
            <Button
              variant="contained"
              onClick={() => handleDelete(deleteIndex)}
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Card>
    </>
  );
}
