import Logo from "./Logo";

export default function Navbar() {
  return (
    <div className="mx-auto flex items-center max-w-7xl py-5">
      <Logo />
      <div className="relative flex h-3 w-3 ml-10">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-200 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-300"></span>
      </div>
      <div className="ml-2">
        On Testnet
      </div>
    </div>
      
  )
}