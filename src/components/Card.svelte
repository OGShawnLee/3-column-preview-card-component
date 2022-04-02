<script>
  export let icon;
  export let color;
</script>

<section class="p-12 | flex flex-col gap-9 bg-{color} rounded-first-last">
  <header class="contents">
    <img class="max-w-min" src={icon} alt="" />
    <h2 class="text-4xl font-bold font-shoulders text-white/95 uppercase">
      <slot name="title" />
    </h2>
  </header>
  <p class="leading-relaxed">
    <slot name="paragraph" />
  </p>
  <button
    class="w-fit px-8 py-3 lg:mt-auto | flex items-center justify-center | bg-white/75 button-animation rounded-full text-{color}">
    Learn More
  </button>
</section>

<style>
  .w-fit {
    @apply w-[fit-content];
  }

  .button-animation {
    @apply hover:(bg-transparent ring-[3px] ring-white/75 text-white/75) rounded-full;
  }

  .rounded-first-last {
    @apply first:rounded-t-lg last:rounded-b-lg lg:(first:rounded-t-none last:rounded-b-none first:rounded-l-lg last:rounded-r-lg);
  }
</style>
