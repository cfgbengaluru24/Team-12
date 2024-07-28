import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  useMediaQuery,
  useTheme,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import { DownloadOutlined, Email, PersonAdd, PointOfSale, Traffic } from "@mui/icons-material";
import { tokens } from "../../theme";
import { Header, StatBox } from "../../components";

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isXlDevices = useMediaQuery("(min-width: 1260px)");
  const isMdDevices = useMediaQuery("(min-width: 724px)");
  const isXsDevices = useMediaQuery("(max-width: 436px)");

  const [rows, setRows] = useState([]);
  const [loanData, setLoanData] = useState([]);
  const [amountData, setAmountData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/state_wise_shg') // Replace with your actual backend endpoint
      .then(response => response.json())
      .then(data => {
        setRows(data.records);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    fetch('http://127.0.0.1:8000/api/baseline_loan') // Replace with your actual backend endpoint for loan data
      .then(response => response.json())
      .then(data => {
        const formattedLoanData = data.map(item => ({ name: item.Name, value: item['Loan Amount'] }));
        setLoanData(formattedLoanData);
      })
      .catch(error => {
        console.error('Error fetching loan data:', error);
      });

    fetch('http://127.0.0.1:8000/api/baseline_income') // Replace with your actual backend endpoint for amount data
      .then(response => response.json())
      .then(data => {
        const formattedAmountData = data.map(item => ({ name: item.Name, value: item['Business Income'] }));
        setAmountData(formattedAmountData);
      })
      .catch(error => {
        console.error('Error fetching amount data:', error);
      });
  }, []);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        {!isXsDevices && (
          <Box>
            <Button
              variant="contained"
              sx={{
                bgcolor: colors.blueAccent[700],
                color: "#fcfcfc",
                fontSize: isMdDevices ? "14px" : "10px",
                fontWeight: "bold",
                p: "10px 20px",
                mt: "18px",
                transition: ".3s ease",
                ":hover": {
                  bgcolor: colors.blueAccent[800],
                },
              }}
              startIcon={<DownloadOutlined />}
            >
              DOWNLOAD REPORTS
            </Button>
          </Box>
        )}
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns={
          isXlDevices
            ? "repeat(12, 1fr)"
            : isMdDevices
            ? "repeat(6, 1fr)"
            : "repeat(3, 1fr)"
        }
        gridAutoRows="140px"
        gap="20px"
      >
        {/* Statistic Items */}
        <Box
          gridColumn="span 3"
          bgcolor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="11,361"
            subtitle="Beneficiaries"
            progress="0.75"
            increase="+14%"
            icon={
              <Email sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Trainers"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSale sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="Trainees"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAdd sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            icon={
              <Traffic sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />
            }
          />
        </Box>

        {/* Pie Chart */}
        <Box
          gridColumn={isXlDevices ? "span 4" : "span 6"}
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="20px"
        >
          <ResponsiveContainer width="100%" height="100%">
            <div style={{ textAlign: "center" }}>Pie chart for Loans</div>
            <PieChart>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={loanData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Box>

        <Box
          gridColumn={isXlDevices ? "span 4" : "span 6"}
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="20px"
        >
          <ResponsiveContainer width="100%" height="100%">
            <div style={{ textAlign: "center" }}>Pie chart for Amounts</div>
            <PieChart>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={amountData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </Box>

      {/* Table Component */}
      <Box
        m="20px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <TableContainer component={Paper} sx={{ height: "100%", backgroundColor: "white" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "black", fontWeight: 'bold' }}>State/UT</TableCell>
                <TableCell align="right" sx={{ color: "black", fontWeight: 'bold' }}>SHGs Formed</TableCell>
                <TableCell align="right" sx={{ color: "black", fontWeight: 'bold' }}>Households Mobilized</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.length && rows.map((row) => (
                <TableRow
                  key={row.sl_no}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" sx={{ color: "black" }}>
                    {row.state_ut}
                  </TableCell>
                  <TableCell align="right" sx={{ color: "black" }}>{row.shgs_formed}</TableCell>
                  <TableCell align="right" sx={{ color: "black" }}>{row.households_mobilized}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default Dashboard;
