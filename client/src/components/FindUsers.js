import { Avatar, Card, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import UserAvatar from "./UserAvatar";
import HorizontalStack from "./util/HorizontalStack";

const FindUsers = () => {
  return (
    <Card>
      <Stack spacing={2}>
        <HorizontalStack>
          <AiOutlineUser />
          <Typography>Find Others</Typography>
        </HorizontalStack>
        <HorizontalStack justifyContent="space-between">
          <HorizontalStack>
            <UserAvatar width={30} height={30} />
            <Typography>Ihtasham_42</Typography>
          </HorizontalStack>
          <Link>View</Link>
        </HorizontalStack>
        <HorizontalStack justifyContent="space-between">
          <HorizontalStack>
            <UserAvatar width={30} height={30} />
            <Typography>Ihtasham_42</Typography>
          </HorizontalStack>
          <Link>View</Link>
        </HorizontalStack>
        <HorizontalStack justifyContent="space-between">
          <HorizontalStack>
            <UserAvatar width={30} height={30} />
            <Typography>Ihtasham_42</Typography>
          </HorizontalStack>
          <Link>View</Link>
        </HorizontalStack>
      </Stack>
    </Card>
  );
};

export default FindUsers;
