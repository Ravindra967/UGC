import { ButtonHTMLAttributes, FC } from "react"

interface GhostButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const GhostButton: FC<GhostButtonProps> = ({ children, ...props }) => (
  <button
    {...props}
    className={`bg-transparent border border-white/20 text-white px-4 py-2 rounded transition hover:bg-white/10 ${props.className ?? ""}`}
  >
    {children}
  </button>
)

export default GhostButton