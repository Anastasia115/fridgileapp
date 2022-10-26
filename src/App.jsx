import { ObjectDetector } from "./components/objectDetector/ObjectDetector";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageTemplate from "./templates/PageTemplate";
import SaveingProvider from "./components/contexts/savingContextx";
import { Myfridge } from "./pages/MyFridge/MyFridge";
import { CardContent } from "./components/cardContent/CardContent";
import { ShoppingList } from "./pages/shoppingList/ShoppingList";
import { ProfilePage1 } from "./pages/profile/logged/ProfilePage1";
import {ProfilePage2} from "./pages/profile/notlogged/ProfilePage2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageTemplate>
          <SaveingProvider>
            <Routes>
              <Route path="/my-fridgile/" element={<Myfridge />} />
              <Route path="/my-fridgile/add" element={<ObjectDetector />} />
              <Route
                path="/my-fridgile/shoppingList"
                element={<ShoppingList />}
              />
              <Route
                path="/my-fridgile/cardContent"
                element={<CardContent />}
              />
              <Route
                path="/my-fridgile/myProfile"
                element={<ProfilePage1 />}
              />
              <Route
                path="/my-fridgile/logIn"
                element={<ProfilePage2 />}
              />
            </Routes>
          </SaveingProvider>
        </PageTemplate>
      </BrowserRouter>
    </div>
  );
}

export default App;
