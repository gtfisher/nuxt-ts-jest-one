<template>
  <div class="submenu">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class SubMenu extends Vue {}
</script>

<style lang="scss">
.submenu {
  position: absolute;
  top: calc(50% + 3.2rem);
  left: 50%;
  z-index: 10;

  padding: 1.5rem;

  background-color: white;
  border: 2px solid $blue;
  border-radius: 1rem;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.15);

  transform: translateX(-50%);

  &::after {
    content: "";

    position: absolute;
    top: -0.6em;
    right: 0;

    left: 0;

    margin: auto;
    height: 15px;
    width: 15px;

    background: #fff;
    border-top: 2px solid $blue;
    border-right: 2px solid $blue;

    vertical-align: middle;
    transform: rotate(-45deg);
  }
  &__action {
    padding-top: 1rem;

    text-align: center;
  }
}
</style>
