export default function Home() {
  return (
    <main>
      <section className="bg-[#254f1a] h-[120vh] grid grid-cols-2">
        <div className="flex justify-center ml-[3vw] flex-col gap-6">
          <p className="text-yellow-200 text-5xl font-bold">
            Everything you are. In one, simple link in bio.
          </p>
          <p className="text-yellow-200 text-xl ">
            Join 50M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="flex gap-2 my-4">
            <input
              className="bg-white p-4 rounded-md"
              type="text"
              placeholder="linktr.ee/yourname"
            />
            <button className="bg-pink-200 p-4 rounded-full">
              Claim your Linktree
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src="/home.png" alt="home page image" />
        </div>
      </section>
      <section className="h-[100vh] bg-pink-300"></section>
    </main>
  );
}
