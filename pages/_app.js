import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SiteWrapper from "../components/layout/SiteWrapper";
import CartContextProvider from "../store/cartContext";
// import "../styles/globals.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3c3c3c",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CartContextProvider>
        <UserProvider>
          <SiteWrapper>
            <Component {...pageProps} />
          </SiteWrapper>
        </UserProvider>
      </CartContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
