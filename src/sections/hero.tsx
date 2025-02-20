export default function Hero() {
  return (
    <section className="relative w-dvw min-h-dvh flex items-center justify-center bg-gray-800">
        {/* <img src="/images/sanskriti-logo.png" alt="" className="z-0 w-full h-full absolute object-contain grayscale" /> */}
        <div className="bg-transparent flex flex-col items-center gap-5">
          <h1 className=" text-5xl sm:text-7xl md:text-8xl text-primary font-extrabold font-barlow">SANSKRITI-&apos;25</h1>
          <h4 className=" px-8 py-2 text-base sm:text-xl md:text-2xl font-normal font-barlow text-secondary bg-black">🦋ഇത് കലൈ സൊല്ലും കഥൈ🦋</h4>
          <p className=" font-courier font-normal text-xs sm:text-sm md:text-base text-secondary">March 6, 7, 8 2025 | MACE, Kothamangalam</p>
          {/* <button className=" font-courier text-sm md:text-base font-semibold text-black px-5 py-3 bg-primary hover:bg-primary_hover">Get Tickets</button> */}
        </div>
    </section>
  )
}
