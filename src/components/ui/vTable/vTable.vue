<template>
  <div class="table-wrapper">
    <table>
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

<style lang="scss" scoped>
.table-wrapper {
  width: 100%;
  overflow-x: auto;
}

table {
  border: 1px solid #f4f4f4;
}
</style>
