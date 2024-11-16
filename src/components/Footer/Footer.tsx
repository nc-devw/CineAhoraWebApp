import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-800 text-gray-200 text-sm py-4 text-center border-t border-zinc-700 mt-6">
      © {currentYear} CineAhora. Todos los derechos reservados.
    </footer>
  );
};

export { Footer };
