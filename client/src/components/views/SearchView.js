import { Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import GridLayout from "../GridLayout";
import Navbar from "../Navbar";
import PostBrowser from "../PostBrowser";
import Sidebar from "../Sidebar";

const SearchView = () => {
  let params = new URLSearchParams(window.location.search);
  const searchValue = params.get("search");

  const [search, setSearch] = useState(searchValue);

  useEffect(() => {
    setSearch(searchValue);
  }, []);

  return (
    <Container>
      <Navbar />
      <GridLayout
        left={
          <Stack spacing={2}>
            <Typography variant="h4">
              {console.log(search)}
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
