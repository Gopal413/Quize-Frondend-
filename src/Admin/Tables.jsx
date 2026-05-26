import React, { useMemo, useState } from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditTwoToneIcon from "@mui/icons-material/ModeEditTwoTone";
//import EditIcon from '@mui/icons-material/Edit';
import { LinkButton } from "../Components/Styled/PrimaryButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Tables({ Datas,HandleUpdate,handleDelete }) {
  const data = Datas;
  const [namemenu, setNameMenu] = useState(null);
  const [emailmenu, setEmailMenu] = useState(null);
  const [verifiedmenu, setVerifiedMenu] = useState(null);
  const [nameSearch, setNameSearch] = useState("");
  const [nameSort, setNameSort] = useState("");
  const [emailSearch, setEmailSearch] = useState("");
  const [emailSort, setEmailSort] = useState("");
  const [verifiedFilter, setVerifiedFilter] = useState("all");

  const filterData = useMemo(() => {
    let datafes = [...data];
    // console.log("dta :",datafes)

    if (nameSearch) {
      datafes = datafes.filter((item) => {
        console.log(
          "name ",
          item.name.toLowerCase().includes(nameSearch.toLowerCase()),
        );
        return item.name.toLowerCase().includes(nameSearch.toLowerCase());
      });
    }
    if (emailSearch) {
      datafes = datafes.filter((item) =>
        item.email.toLowerCase().includes(emailSearch.toLowerCase()),
      );
    }
    if (verifiedFilter === "verified") {
      datafes = datafes.filter((item) => item.isVerified);
    }
    if (verifiedFilter === "Not Verified") {
      datafes = datafes.filter((item) => !item.isVerified);
    }
    if (nameSort) {
      datafes.sort((a, b) =>
        nameSort === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name),
      );
    }
    if (emailSort) {
      datafes.sort((a, b) =>
        emailSort === "asc"
          ? a.email.localeCompare(b.email)
          : b.email.localeCompare(a.email),
      );
    }
    return datafes;
  }, [data, nameSearch, emailSearch, nameSort, emailSort, verifiedFilter]);

  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: 4,
        //overflow:"hidden",
        boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
        border: "5px solid #222",
        width: { xs: "400px", sm: "600px", md: "850px" },
        mt:2,
        mx: 2,
        overflowX: "auto",
        //width:{xs:"250px",sm:"300px",md:"400px"}
      }}
    >
      <Table stickyHeader sx={{ minWidth: 700 }}>
        <TableHead>
          <TableRow sx={{ 
  display: { xs: 'flex', md: 'table-row' }, 
  //flexDirection: 'column' 
}}>
            <TableCell
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                fontWeight: "bold",
                //textAlign: "center",
                fontSize: { xs: "10px", sm: "12px", md: "16px" },
                width: {xs:"10%",sm:'10%',md:'10%'},
              }}
            >
              Sr No
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                fontWeight: "bold",
                fontSize: { xs: "10px", sm: "12px", md: "16px" },
               // textAlign: "center",
                width: {xs:"25%",sm:'25%',md:'25%'},
              }}
            >
              Name
              <IconButton
                sx={{ color: "white" }}
                size="small"
                onClick={(e) => setNameMenu(namemenu ? null : e.currentTarget)}
              >
                <KeyboardArrowDownIcon />
              </IconButton>
              <Menu
                anchorEl={namemenu}
                open={Boolean(namemenu)}
                onClose={() => setNameMenu(null)}
              >
                <MenuItem>
                  <TextField
                    size="small"
                    placeholder="Search Name"
                    value={nameSearch}
                    onChange={(e) => setNameSearch(e.target.value)}
                  />
                </MenuItem>
                <MenuItem onClick={() => setNameSort("asc")}>Sort A-Z</MenuItem>
                <MenuItem onClick={() => setNameSort("dec")}>Sort Z-A</MenuItem>
              </Menu>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                fontWeight: "bold",
                fontSize: { xs: "10px", sm: "12px", md: "16px" },
                //textAlign: "center",
                 width: {xs:"25%",sm:'25%',md:'25%'},
              }}
            >
              Email
              <IconButton
                sx={{ color: "white" }}
                size="small"
                onClick={(e) =>
                  setEmailMenu(emailmenu ? null : e.currentTarget)
                }
              >
                <KeyboardArrowDownIcon />
              </IconButton>
              <Menu
                anchorEl={emailmenu}
                open={Boolean(emailmenu)}
                onClose={() => setEmailMenu(null)}
              >
                <MenuItem>
                  <TextField
                    size="small"
                    placeholder="Search Email"
                    value={emailSearch}
                    onChange={(e) => setEmailSearch(e.target.value)}
                  />
                </MenuItem>
                <MenuItem onClick={() => setEmailSort("asc")}>
                  Sort A-Z
                </MenuItem>
                <MenuItem onClick={() => setEmailSort("dec")}>
                  Sort Z-A
                </MenuItem>
              </Menu>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                fontWeight: "bold",
                fontSize: { xs: "10px", sm: "12px", md: "16px" },
                //textAlign: "center",
                 width: {xs:"20%",sm:'20%',md:'20%'},
              }}
            >
              IsVerified
              <IconButton
                sx={{ color: "white" }}
                size="small"
                onClick={(e) =>
                  setVerifiedMenu(verifiedmenu ? null : e.currentTarget)
                }
              >
                <KeyboardArrowDownIcon />
              </IconButton>
              <Menu
                anchorEl={verifiedmenu}
                open={Boolean(verifiedmenu)}
                onClose={() => setVerifiedMenu(null)}
              >
                <MenuItem onClick={() => setVerifiedFilter("verified")}>
                  Verified
                </MenuItem>
                <MenuItem onClick={() => setVerifiedFilter("Not Verified")}>
                  Not Verified
                </MenuItem>
              </Menu>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#000",
                color: "#fff",
               
                fontWeight: "bold",
                fontSize: { xs: "10px", sm: "12px", md: "16px" },
                //textAlign: "center",
               // width: {xs:"20%",sm:'20%',md:'20%'},
              }}
            >
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filterData.map((item, index) => (
            <TableRow
              key={item._id}
              sx={{
                 display: { xs: 'flex', md: 'table-row' }, 
  //flexDirection: 'column' ,
                backgroundColor: index % 2 === 0 ? "#ffffff" : "#f5f5f5",
                // backgroundColor:"#ffffff",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "#4be4e1",
                  transform: "scale(1.01)",
                },
              }}
            >
              <TableCell sx={{
                 fontSize: {xs:'10px',sm:'12px',md:'16px'},
              }}>
                {index + 1}
                </TableCell>
              <TableCell sx={{
                 fontSize: {xs:'10px',sm:'12px',md:'16px'},
              }}>
                {item.name}
                </TableCell>
              <TableCell sx={{
                 fontSize: {xs:'10px',sm:'12px',md:'16px'},
              }}>
                {item.email}
                </TableCell>
              <TableCell sx={{
                 fontSize: {xs:'10px',sm:'12px',md:'16px'},
              }}>
                <Box
                  sx={{
                   // p: 1,
                    backgroundColor: item.isVerified ? "green" : "#95888849",
                    textAlign: "center",
                    borderRadius: item.isVerified ? "20px" : "20px",
                  }}
                >
                  {item.isVerified
                    ? "Verified".toUpperCase()
                    : "Not Verified".toUpperCase()}
                </Box>
              </TableCell>
              <TableCell
                sx={{display: "flex",gap:2,justifyContent: "center", }}
              >
                <LinkButton
                  onClick={() => HandleUpdate(item)}
                  sx={{ backgroundColor: "#733de8" }}
                >
                  <ModeEditTwoToneIcon />
                </LinkButton>
                <LinkButton
                  onClick={() => handleDelete(item._id)}
                  sx={{ backgroundColor: "#ea9999" }}
                >
                  <DeleteIcon />
                </LinkButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Tables;
