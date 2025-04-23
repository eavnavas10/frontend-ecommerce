import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToHashElement = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Scroll suave
      }
    }
  }, [hash]);

  return null;
}
