import "@picocss/pico";

import { ThemeProvider, UserProvider } from "./contexts/DataContext";

import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <>
      <ThemeProvider>
        <UserProvider>
          <IndexPage />
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
