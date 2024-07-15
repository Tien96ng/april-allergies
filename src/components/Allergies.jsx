import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function Allergies({ data }) {

  const env = data.environmental;
  const food = data.food;

  const displayLevels = (x) => {
    switch (x) {
      case "level_1":
        return ["Level 1", env[x].description.toString(), env[x].items];
      case "level_2":
        return ["Level 2", env[x].description.toString(), env[x].items];
      case "level_3":
        return ["Level 3", env[x].description.toString(), env[x].items];
      default:
        return ["Normal", env[x].description.toString(), env[x].items];
    }
  };

  return (
    <>
      <div>
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Text only
              </Typography>
              <Demo>
                <List dense={true}>
                  {generate(
                    <ListItem>
                      <ListItemText
                        className="blk-txt"
                        primary="Single-line item"
                        secondary="Secondary text"
                      />
                    </ListItem>
                  )}
                </List>
              </Demo>
            </Grid>
          </Grid>
        </Box>
      </div>
      <h1>Environmental Allergies</h1>
      {Object.keys(env).map((a) => {
        let num = a.slice(-1);
        num = num === "l" ? 0 : parseInt(num);
        return (
          <div key={num}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${num.toString()}-content`}
                id={`panel${num.toString()}-header`}
              >
                {displayLevels(a)[0]}
              </AccordionSummary>
              <AccordionDetails>
                {displayLevels(a)[1]}
                <ul>
                  {displayLevels(a)[2].map((b) => {
                    return <li key={b}>{b}</li>;
                  })}
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}

      <h1>Food Allergies</h1>
      {Object.keys(food).map((a) => {
        // return <p key={a}>{displayLevels(a)}</p>
        return (
          <div key={a}>
            <h2>{displayLevels(a)[0]}</h2>
            <p>{displayLevels(a)[1]}</p>
            <ul>
              {displayLevels(a)[2].map((b) => {
                return <li key={b}>{b}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
}
