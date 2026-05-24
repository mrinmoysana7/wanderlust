const Banner = () => {
  return (
    <div
      className="
        bg-[url('/assets/Banner.png')]
        bg-cover
        bg-center
        text-white
        min-h-screen
        flex
        flex-col
        justify-between
      "
    >
      {/* Banner Content */}
      <div
        className="
          flex-1
          flex
          flex-col
          justify-center
          items-center
          text-center
          px-4
          sm:px-6
          lg:px-10
          gap-5
          py-16
        "
      >
        <h1
          className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-bold
            leading-tight
          "
        >
          Discover Your <br /> Next Adventure
        </h1>

        <p
          className="
            text-base
            sm:text-lg
            md:text-xl
            lg:text-2xl
            max-w-3xl
            leading-relaxed
          "
        >
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        {/* Buttons */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            gap-4
            mt-4
            w-full
            sm:w-auto
          "
        >
          <button
            className="
              uppercase
              bg-cyan-500
              px-6
              py-3
              rounded-lg
              cursor-pointer
              hover:bg-cyan-600
              transition
              w-full
              sm:w-auto
            "
          >
            Explore Now
          </button>

          <button
            className="
              uppercase
              px-6
              py-3
              bg-white/30
              backdrop-blur-md
              rounded-lg
              cursor-pointer
              hover:bg-white/40
              transition
              w-full
              sm:w-auto
            "
          >
            View Destination
          </button>
        </div>
      </div>

      {/* Search Section */}
      <div
        className="
          bg-white/20
          backdrop-blur-md
          w-full
          px-4
          py-5
        "
      >
        <div
          className="
            container
            mx-auto
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-5
            gap-5
            items-center
          "
        >
          {/* Location */}
          <div>
            <h3 className="text-sm font-semibold">Location</h3>

            <p className="text-xs text-white/80">Address, City or Zip</p>
          </div>

          {/* Date */}
          <div>
            <h3 className="text-sm font-semibold">Date/Duration</h3>

            <p className="text-xs text-white/80">Anytime / 3 Days</p>
          </div>

          {/* Budget */}
          <div>
            <h3 className="text-sm font-semibold">Budget</h3>

            <p className="text-xs text-white/80">$0 - $3000</p>
          </div>

          {/* People */}
          <div>
            <h3 className="text-sm font-semibold">People</h3>

            <p className="text-xs text-white/80">5 - 10</p>
          </div>

          {/* Search Button */}
          <button
            className="
              bg-cyan-500
              hover:bg-cyan-600
              transition
              py-3
              px-5
              rounded-lg
              font-semibold
              w-full
            "
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
