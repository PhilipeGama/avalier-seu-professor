import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About/About";
import { Index } from "./pages/Index/Index";
import { RegisterTeacher } from "./pages/RegisterTeacher/RegisterTeacher";
import { Teacher } from "./pages/Teacher/Teacher";

export function Router() {
    return (
  
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/teacher" element={<Teacher />} />
                <Route path="/register-teacher" element={<RegisterTeacher />} />
                <Route path="/about" element={<About />} />
            </Routes>
    )
}