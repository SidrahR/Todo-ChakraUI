"use client";
import React, { useState } from "react";
import {
  Button,
  Flex,
  ListItem,
  UnorderedList,
  Text,
  Input,
  Box,
} from "@chakra-ui/react";

export default function Todo() {
  const [tasks, setTasks] = useState([
    "Learn Chakra UI",
    "Study HTML",
    "Call friend",
  ]);
  const [item, setItem] = useState("");

  function removeItem(taskName: any) {
    setTasks(
      tasks.filter((task) => {
        return task != taskName;
      })
    );
  }

  function AddItem() {
    if (item != "" && !tasks.includes(item)) {
      let temp = tasks;
      temp.push(item);
      setTasks(temp);
      setItem("");
    }
  }

  return (
    <Flex
      bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="100vh"
      flexDirection="column"
      pb="25px"
    >
      <Text as="h1" fontSize="5xl" p="20px" fontWeight="extrabold">
        {" "}
        TODO LIST
      </Text>
      <UnorderedList fontSize="20px" spacing="25px" pb="50px" width="auto">
        {tasks.map((task) => {
          return (
            <ListItem key={task}>
              {task}
              <Button
                style={{ float: "right" }}
                ml="10"
                colorScheme="teal"
                onClick={() => removeItem(task)}
              >
                Remove Item
              </Button>
            </ListItem>
          );
        })}
      </UnorderedList>
      <Input
        variant="filled"
        width="300px"
        size="md"
        mb="10px"
        placeholder="Enter Task"
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      ></Input>
      <Button colorScheme="green" onClick={AddItem}>
        Add Item
      </Button>
    </Flex>
  );
}
