import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
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
const List = ({ Filter, list, date }) => {
  const time = date.getTime();
  const temp = list.filter((contest) => {
    const contestTime = new Date(contest.end);
    const ctime = contestTime.getTime();
    if (ctime > time) return false;
    for (let i = 0; i < platforms.length; i++) {
      if (contest.resource.id === platforms[i].id && Filter[i] === 1)
        return true;
    }
    return false;
  });
  console.log(temp);
  return (
    <Grid container spacing={4} justify="space-around" align="center">
      {temp.map((contest, index) => {
        const startArray = contest.start.split("T");
        const endArray = contest.end.split("T");
        return (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card style={{ width: "80%" }}>
              <CardContent>
                <Typography variant="h6">{contest.event}</Typography>
                <Divider />
                <div style={{ marginTop: "10px" }}>
                  <Typography>
                    Start Time: {`${startArray[0]} ${startArray[1]}`}
                  </Typography>
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Typography>
                    End Time: {`${endArray[0]} ${endArray[1]}`}
                  </Typography>
                </div>
                <Link href={contest.href}>Contest Link</Link>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default List;
