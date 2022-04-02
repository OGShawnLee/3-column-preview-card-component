<script>
  import { iconLuxury, iconSedans, iconSuvs } from './assets';
</script>

<main class="max-w-xs my-24 | flex flex-col | lg:(max-w-5xl h-128 flex-row)">
  <section
    class="p-12 | flex flex flex-col gap-9 | bg-orange rounded-t-lg lg:(rounded-t-none rounded-l-lg)">
    <header class="contents">
      <img class="max-w-min" src={iconSedans} alt="" />
      <h2 class="text-4xl font-bold font-shoulders text-white/95 uppercase">Sedans</h2>
    </header>
    <p class="leading-relaxed">
      Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising
      in the city or on your next road trip.
    </p>
    <button
      class="w-fit px-8 py-3 lg:mt-auto | flex items-center justify-center | bg-white/75 hover:(bg-transparent ring-[3px] ring-white/75 text-white/75) rounded-full text-orange">
      Learn More
    </button>
  </section>
  <section class="p-12 | flex flex flex-col gap-9 | bg-cyan-600">
    <header class="contents">
      <img class="max-w-min" src={iconSuvs} alt="" />
      <h2 class="text-4xl font-bold font-shoulders text-white/95 uppercase">SUVs</h2>
    </header>
    <p class="leading-relaxed">
      Take an SUV for its spacious interior, power, and versatility. Perfect for your next
      family vacation and off-road adventures.
    </p>
    <button
      class="w-fit px-8 py-3 lg:mt-auto | flex items-center justify-center | bg-white/75 hover:(bg-transparent ring-[3px] ring-white/75 text-white/75) rounded-full text-cyan-600">
      Learn More
    </button>
  </section>
  <section
    class="p-12 | flex flex flex-col gap-9 | bg-cyan-700 rounded-b-lg lg:(rounded-b-none rounded-r-lg)">
    <header class="contents">
      <img class="max-w-min" src={iconLuxury} alt="" />
      <h2 class="text-4xl font-bold font-shoulders text-white/95 uppercase">Luxury</h2>
    </header>
    <p>
      Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort
      of a luxury rental and arrive in style.
    </p>
    <button
      class="w-fit px-8 py-3 lg:mt-auto | flex items-center justify-center | bg-white/75 hover:(bg-transparent ring-[3px] ring-white/75 text-white/75) rounded-full text-cyan-700">
      Learn More
    </button>
  </section>
</main>

<style>
  :global(html) {
    font-size: 15px;
  }

  .w-fit {
    @apply w-[fit-content];
  }
</style>
