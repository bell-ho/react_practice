import { useEffect, useState } from "react";

// react-router components
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

// Material Dashboard 2 React themes
import theme from "assets/theme";

// Material Dashboard 2 React Dark Mode themes
import themeDark from "assets/theme-dark";

// Material Dashboard 2 React routes
import routes from "routes";

// Material Dashboard 2 React contexts
import { setMiniSidenav, setOpenConfigurator, useMaterialUIController } from "context";

// Images
import brandWhite from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";

export default function App() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

<<<<<<< HEAD
  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
=======
  const queryClient = useQueryClient();
  const saveTodo = useMutation((newTodo) => call('/todo', 'POST', newTodo), {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });
>>>>>>> parent of 8d7fb45 (리액트 쿼리 수정)

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

<<<<<<< HEAD
  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  const configsButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="small" color="inherit">
        settings
      </Icon>
    </MDBox>
  );

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
            brandName="Material Dashboard 2"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
          {configsButton}
        </>
      )}
      {layout === "vr" && <Configurator />}
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </ThemeProvider>
=======
  const onRemove = useCallback(
    (id) => {
      setItems(items.filter((item) => item.id !== id));
    },
    [items],
  );

  const onToggle = useCallback(
    (id) => {
      setItems(items.map((item) => (item.id === id ? { ...item, done: !item.done } : item)));
    },
    [items],
  );

  const onUpdate = useCallback(
    (newItem) => {
      const { id, title } = newItem;
      setItems(
        items.map((item) =>
          item.id === id
            ? {
                ...item,
                readOnly: !item.readOnly,
                title: title,
              }
            : item,
        ),
      );
    },
    [items],
  );

  return (
    <div className="App">
      <Container maxWidth="md">
        <AddTodo add={add} />
        <Paper style={{ margin: 16 }}>
          <List>
            {!query.isLoading &&
              items.map((item, idx) => (
                <Todos
                  item={item}
                  key={idx}
                  onRemove={onRemove}
                  onToggle={onToggle}
                  onUpdate={onUpdate}
                />
              ))}
          </List>
        </Paper>
      </Container>
    </div>
>>>>>>> parent of 8d7fb45 (리액트 쿼리 수정)
  );
}
