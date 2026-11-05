import { InteractiveScroll } from "@/utils/interactiveScroll";

// O template remonta a cada navegação, reiniciando as animações de entrada da nova página
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <InteractiveScroll />
      {children}
    </>
  );
}
