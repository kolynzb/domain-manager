<script setup lang="ts">
import AppTopBar from './AppTopBar.vue'
import AppSidebar from './AppSidebar.vue'
import Toast from 'primevue/toast'
import ConfirmDialog from 'primevue/confirmdialog'
defineOptions({
components: {
    AppTopBar,
    AppSidebar,
    Toast,
    ConfirmDialog
  }
})
</script>

<template>
  <div class="min-h-screen flex flex-column surface-ground">
    <AppTopBar />
    
    <div class="flex flex-column md:flex-row">
      <AppSidebar />
      
      <div class="flex-1 p-4">
        <Toast />
        <ConfirmDialog />
        
        <div class="surface-card p-4 border-round shadow-2 my-3">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>


