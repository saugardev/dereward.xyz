import RoadmapSwiper from "./RoadmapSwiper";

export default function Roadmap() {
  return (
    <div className="w-full overflow-hidden">
      <div className="mx-auto items-center max-w-7xl pb-24 sm:pb-32 py-32">
        <h2 className="mt-4 text-4xl text-stone-700 sm:text-5xl opacity-80">Roadmap</h2>
        <p className="mt-10 text-2xl max-w-5xl leading-8 text-stone-500 opacity-80">Explore our strategic blueprint, from key milestones to upcoming initiatives. Witness our past, present, and future in one glance. Join us as we chart our path ahead.</p>
        <RoadmapSwiper />
      </div>
    </div>
  )
}