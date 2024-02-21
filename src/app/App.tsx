import { Suspense, useEffect } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { NavBar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";
import { getUserMounted, userActions } from "entities/User";
import { useDispatch, useSelector } from "react-redux";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/ThemeProvider";

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const mounted = useSelector(getUserMounted);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <NavBar />
        <div className="content-page">
          <SideBar />
          {mounted && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
