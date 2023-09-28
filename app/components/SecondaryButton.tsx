import Link from "next/link";

interface SecondaryButtonProps {
  text: string,
  link?: string | null,
  handleClick?: React.MouseEventHandler<HTMLButtonElement> | null,
  condensed?: boolean
}

export default function SecondaryButton({ text, link=null, handleClick=null, condensed=false }: SecondaryButtonProps) {
  return (
    <>
    { link != null 
      ? <BaseButton>
          <LinkButton text={text} link={link} condensed={condensed} />
        </BaseButton>
      : handleClick != null 
        ? <BaseButton>
            <ClickHandlerButton text={text} handleClick={handleClick} condensed={condensed} />
          </BaseButton>
        : <BaseButton>{text}</BaseButton>
    }
    </>
  )
}

function BaseButton({ children }: { children: React.ReactNode }) {
  return (
    <div className={`border border-[var(--on-secondary)] overflow-hidden relative inline-flex group items-center justify-center rounded-lg shadow-sm bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-[var(--on-primary)]`}>
      <span className="rounded-full absolute w-0 h-0 transition-all duration-300 ease-out bg-white group-hover:w-32 group-hover:h-32 opacity-10"></span>
      {children}
    </div>
  )
}

function LinkButton({ text, link, condensed }: { text: string, link: string, condensed:boolean }) {
  return (
    <Link href={link} className={`relative w-full h-full ${condensed ? "text-sm py-0.5 px-2" : "py-1 px-3"}`}>{text}</Link>
  )
}

function ClickHandlerButton({ text, handleClick, condensed}: { text: string, handleClick: React.MouseEventHandler<HTMLButtonElement>, condensed:boolean}) {
  return (
    <button
      className={`relative w-full h-full ${condensed ? "text-sm py-0.5 px-2" : "py-1 px-3"}`}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}