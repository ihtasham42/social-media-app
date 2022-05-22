import { Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import GoBack from "../GoBack";
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
    console.log("site changed so render");
  }, [searchValue]);

  return (
    <Container>
      <Navbar />
      <GoBack />
      <GridLayout
        left={
          <Stack spacing={2}>
            <PostBrowser createPost search={search} />
          </Stack>
        }
        right={<Sidebar />}
      />
    </Container>
  );
};

export default SearchView;
