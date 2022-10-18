<template>
  <div class="w-full overflow-hidden">
    <table class="border">
      <thead>
        <tr>
          <slot name="thead" />
        </tr>
      </thead>
      <tbody>
        <slot name="tbody" />
      </tbody>
    </table>
  </div>
</template>
