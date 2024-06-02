import {
  AppShell,
  Burger,
  Button,
  Flex,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { Outlet } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
// import FilterAndSort from "../components/FilterAndSort";
const AppLayout = () => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 50 }}
      navbar={{
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header p="sm">
        <Flex h="100%" align="center" gap={10}>
          <Flex flex={1}>
            <Text fz={20} fw={600}>
              AirtribeBuy
            </Text>
          </Flex>
          <TextInput visibleFrom="sm" placeholder="Search product" flex={1} />
          <Flex visibleFrom="sm" gap={10} ml="auto">
            {/* <Button>Login</Button> */}
            <Button variant="outline" visibleFrom="sm">
              Cart
            </Button>
          </Flex>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar hiddenFrom="sm" p="md">
        Navbar
      </AppShell.Navbar>

      <AppShell.Main>
        {/* <FilterAndSort /> */}
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default AppLayout;
