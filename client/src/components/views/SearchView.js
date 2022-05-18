import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import { useSearchParams } from "react-router-dom";
import GridLayout from "../GridLayout";
import Navbar from "../Navbar";
import PostBrowser from "../PostBrowser";
import Sidebar from "../Sidebar";

const SearchView = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  const search = searchParams.search;

  return (
    <Container>
      <Navbar />
      <GridLayout
        left={
          <Stack spacing={2}>
            <Typography variant="h4">
              Showing results for "{search}":
            </Typography>
            <PostBrowser createPost search={search} />
          </Stack>
        }
        right={<Sidebar />}
      />
    </Container>
  );
};

export default SearchView;
