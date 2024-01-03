import Container from "components/Container";
import Footer from "components/Footer";
import Header from "components/Header";
import FavoritosProvider from "contextos/Favoritos";
import Favoritos from "pages/favoritos";
import Inicio from "pages/inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/favoritos" element={<Favoritos />} />
                    </Routes>
                </FavoritosProvider>
            </Container>
            <Footer />
        </BrowserRouter >
    )
}

export default AppRoutes;