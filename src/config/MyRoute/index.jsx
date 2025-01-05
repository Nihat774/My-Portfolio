import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../../Loading";
const HomePage = lazy(() => import("../../pages/Home"));
const AboutPage = lazy(() => import("../../pages/About"));
const SkillsPage = lazy(() => import("../../pages/Skills"));
const ProjectsPage = lazy(() => import("../../pages/Projects"));
const NotFoundPage = lazy(()=>import("../../pages/NotFound"))
const ContactPage = lazy(()=>import("../../pages/Contact"))
function MyRoute() {
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default MyRoute;
