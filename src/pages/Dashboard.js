import React from "react";
import { Box, Flex, Heading, Spinner } from "@chakra-ui/react";
import FlexContainer from "../components/FlexContainer";
import { useGetTest } from "../services/query/test";

const Dashboard = () => {
  const { data, isLoading } = useGetTest();

  const newData = data?.data?.map((employee) => {
    const [firstName, lastName] = employee.employee_name.split(" ");
    return { ...employee, firstName, lastName };
  });

  return (
    <Box>
      {isLoading ? (
        <Spinner />
      ) : (
        newData?.map((item, i) => (
          <Box boxShadow="lg" key={i} bg="#fff" mb={5} p={5} borderRadius="5px">
            <Heading color="blue" fontSize="30px">
              {item?.employee_name}
            </Heading>
            <Heading fontSize="20px">Employee Details</Heading>

            <Flex
              mt={5}
              gap={{ base: "3rem", md: "10rem" }}
              flexDir={["column", "row", "row", "row"]}
            >
              <Box>
                <FlexContainer label="Employee ID" data="EE0282" />
                <FlexContainer label="First Name" data={item?.firstName} />
                <FlexContainer label="Last Name" data={item?.lastName} />
              </Box>

              <Box>
                <FlexContainer
                  label="Email Address"
                  data={`${item?.employee_name
                    .replace(/\s/g, "")
                    .toLowerCase()}@gmail.com`}
                />
                <FlexContainer label="Work City" data="Austin" />
                <FlexContainer label="Work State" data="Texas" />
              </Box>
            </Flex>
          </Box>
        ))
      )}
    </Box>
  );
};

export default Dashboard;
