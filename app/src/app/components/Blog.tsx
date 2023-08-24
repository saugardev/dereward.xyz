import Image from "next/image"

export default function Blog() {
  return (
    <div className="mx-auto items-center max-w-7xl pb-24 sm:pb-32">
      <h2 className="mt-4 text-4xl text-stone-700 sm:text-5xl opacity-80">Blogs</h2>
      <p className="mt-10 text-2xl max-w-5xl leading-8 text-stone-500 opacity-80">Some text to say that this is the blog :D</p>
      <div>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  )
}

function BlogCard() {
  return (
    <div className="flex items-center border-b-2 transition-all opacity-80 hover:opacity-100">
      <Image 
        src='/logo.png'
        alt="blog image"
        width={200}
        height={200}
        className=""
      />
      <div className="">
        <div>14-12-2001</div>
        <h3 className="mt-4 text-3xl text-stone-700 sm:text-4xl opacity-80">Titulo del articulo</h3>
      </div>
    </div>
  )
}