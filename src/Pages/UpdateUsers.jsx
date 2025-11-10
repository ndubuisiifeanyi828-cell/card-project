import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://students-learning-api.onrender.com/api/auth/${id}`)
      .then((res) => {
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmail(res.data.email);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const payload = { firstName, lastName, email };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      await axios.put(
        `https://students-learning-api.onrender.com/api/auth/update/${id}`,
        payload
      );
      alert("User updated successfully!");
      navigate("/UsersList");
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        p: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 400,
          borderRadius: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" gutterBottom fontWeight="bold">
          Update User
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            Failed to update user. Please try again.
          </Alert>
        )}

        <form onSubmit={handleUpdate}>
          <TextField
            label="First Name"
            fullWidth
            margin="normal"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            label="Last Name"
            fullWidth
            margin="normal"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Update"}
          </Button>

          <Button
            variant="outlined"
            fullWidth
            sx={{ mt: 1 }}
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default UpdateUser;
