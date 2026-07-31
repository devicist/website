import React, { useRef, useEffect } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ScrollToTop from "./utils/ScrollToTop";
import ReactGA from "react-ga";

// Layouts
import HomeLayout from "./layouts/HomeLayout";
import CaseStudyLayout from "./layouts/CaseStudyLayout";
import PageLayout from "./layouts/PageLayout";

// Views
import Home from "./views/Home";
import CaseStudyBraking from "./views/CaseStudyBraking";
import Flux from "./views/Flux";
import Pet from "./views/Pet";
import Blanket from "./views/Blanket";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add("is-loaded");
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollToTop>
      <ScrollReveal
        ref={childRef}
        children={() => (
          <Switch>
            <AppRoute exact path="/" component={Home} layout={HomeLayout} />
            <AppRoute
              exact
              path="/regen"
              component={CaseStudyBraking}
              layout={CaseStudyLayout}
            />
            <AppRoute
              exact
              path="/flux"
              component={Flux}
              layout={PageLayout}
            />
            <AppRoute
              exact
              path="/pet"
              component={Pet}
              layout={PageLayout}
            />
            <AppRoute
              exact
              path="/blanket"
              component={Blanket}
              layout={PageLayout}
            />
            <AppRoute path="*" component={Flux} layout={PageLayout} />
          </Switch>
        )}
      />
    </ScrollToTop>
  );
};

export default App;
