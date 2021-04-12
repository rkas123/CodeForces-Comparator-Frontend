import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
  Link,
} from "@material-ui/core";

const platforms = [
  { id: 1, name: "CodeForces" },
  { id: 2, name: "CodeChef" },
  { id: 3, name: "UVA" },
  { id: 12, name: "TopCoder" },
  { id: 25, name: "USACO" },
  { id: 26, name: "SPOJ" },
  { id: 29, name: "Facebook" },
  { id: 35, name: "Google" },
  { id: 63, name: "HackerRank" },
  { id: 65, name: "Project Euler" },
  { id: 67, name: "Yandex" },
  { id: 73, name: "HackerEarth" },
  { id: 90, name: "csacademy" },
  { id: 93, name: "AtCoder" },
  { id: 117, name: "Binary Search" },
  { id: 120, name: "Quora" },
];

const List = ({ Filter, data, date }) => {
  const time = date.getTime();
  const temp = data.filter((contest) => {
    const contestDate = new Date(contest.end);
    const contestTime = contestDate.getTime();
    if (contestTime > time) return false;
    for (let i = 0; i < Filter.length; i++) {
      if (Filter[i] === 1 && platforms[i].id === contest.resource.id)
        return true;
    }
    return false;
  });
  return (
    <Grid container spacing={3} justify="space-around">
      {temp.map((contest, index) => {
        return (
          <Grid key={index} item xs={12} sm={6} md={4} align="center">
            <Card variant="outlined" style={{ width: "80%" }}>
              <CardContent>
                <Typography variant="h6">{contest.event}</Typography>
                <Divider />
                <Typography variant="body1">Start: {contest.start}</Typography>
                <Typography variant="body1">End: {contest.end}</Typography>
                <Link component="a" variant="body2" href={contest.href}>
                  Link to Contest
                </Link>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default List;
