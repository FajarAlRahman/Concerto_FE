import { Routes, Route } from "react-router-dom";
import AppLayout from "../layout/app-layout";
import AuthLayout from "../layout/auth-layout"; 
import { Landing } from "../pages/landing/landing";
import { Login } from "../pages/login/login";
import Home  from "../pages/home/home";
import { Jelajah } from "../pages/jelajah/jelajah";
import { Daftar } from "../pages/daftar/daftar";
import CariTeman from "../pages/cariTeman/cariTeman";
import { Minati } from "../pages/minati/minati";
import HalamanKonser from "../pages/halamanKonser/halamanKonser";
import Pembayaran from "../pages/pembayaran/pembayaran";
import { HomePenjual } from "../pages/homePenjual/homePenjual";
import { Profile } from "../pages/profile/profile";
import Keranjang from "../pages/keranjang/keranjang";
import { Teman } from "../pages/teman/teman";
import Chat from "../pages/chat/chat";

const AppRouter = () => {
  return (
    <Routes>
      {/* Routes with AuthLayout */}
      <Route path="/" element={<AuthLayout><Landing /></AuthLayout>} />
      <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
      <Route path="/daftar" element={<AuthLayout><Daftar /></AuthLayout>} />
      <Route path="/minati" element={<AuthLayout><Minati /></AuthLayout>} />
      <Route path="/chat/:friendId" element={<AuthLayout><Chat /></AuthLayout>} />

      {/* Routes with AppLayout */}
      <Route path="/home" element={<AppLayout><Home /></AppLayout>} />
      <Route path="/jelajah" element={<AppLayout><Jelajah /></AppLayout>} />
      <Route path="/cariTeman" element={<AppLayout><CariTeman /></AppLayout>} />
      <Route path="/halamanKonser/:id" element={<AppLayout><HalamanKonser /></AppLayout>} />
      <Route path="/pembayaran" element={<AppLayout><Pembayaran /></AppLayout>} />
      <Route path="/homePenjual" element={<AppLayout><HomePenjual /></AppLayout>} />
      <Route path="/profile" element={<AppLayout><Profile /></AppLayout>} />
      <Route path="/keranjang" element={<AppLayout><Keranjang /></AppLayout>} />
      <Route path="/teman" element={<AppLayout><Teman /></AppLayout>} />
    </Routes>
  );
};

export default AppRouter;
