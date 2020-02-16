import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const Import = props => {
  // fill out this component

  return (
    <Container maxWidth="lg" className="car-container">
      <Button onClick={props.fetchMakes} variant="contained" color="primary">
        Import
      </Button>
      <Table>
        <TableBody>
          {props.makes.map((make, id) => (
            <TableRow key={make.id}>
              <TableCell component="th" scope="row">
                {make.MakeId}
              </TableCell>
              <TableCell>{make.MakeName}</TableCell>
              <TableCell>
                <DeleteIcon
                  onClick={() => props.deleteMake(id)}
                  className="icon text-red"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Import;
