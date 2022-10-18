<template>
  <div class="filter w-[300px]">
    <slot />
    <div class="mt-[15px] flex justify-between">
      <button
        class="px-[12px] py-[6px] block w-max text-white no-underline text-[14px] bg-corious-blue"
      >
        Применить
      </button>
      <button
        class="px-[12px] py-[6px] block w-max text-white no-underline text-[14px] bg-corious-blue"
      >
        Очистить
      </button>
    </div>
  </div>
</template>
