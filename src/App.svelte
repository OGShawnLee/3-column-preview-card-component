<script>
  import { iconLuxury, iconSedans, iconSuvs } from './assets';
  import { Card } from './components';
</script>

<main class="max-w-xs my-24 | flex flex-col | lg:(max-w-5xl h-120 flex-row)">
  <Card icon={iconSedans} color="orange">
    <svelte:fragment slot="title">Sedans</svelte:fragment>
    <svelte:fragment slot="paragraph">
      Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising
      in the city or on your next road trip.
    </svelte:fragment>
  </Card>
  <Card icon={iconSuvs} color="cyan-600">
    <svelte:fragment slot="title">Suvs</svelte:fragment>
    <svelte:fragment slot="paragraph">
      Take an SUV for its spacious interior, power, and versatility. Perfect for your next
      family vacation and off-road adventures.
    </svelte:fragment>
  </Card>
  <Card icon={iconLuxury} color="cyan-700">
    <svelte:fragment slot="title">Luxury</svelte:fragment>
    <svelte:fragment slot="paragraph">
      Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort
      of a luxury rental and arrive in style.
    </svelte:fragment>
  </Card>
</main>

<style>
  :global(html) {
    font-size: 15px;
  }
</style>
