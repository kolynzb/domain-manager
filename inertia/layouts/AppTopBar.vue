<script setup lang="ts">
import {  ref } from 'vue'
import { useForm } from '@inertiajs/vue3'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Menu from 'primevue/menu'
import Badge from 'primevue/badge'

// defineOptions({
//   components: {
//     InputText,
//     Button,
//     Menu,
//     Badge
//   },
//   setup() {
//     const profileMenu = ref(null)
//     const search = ref('')
    
//     const form = useForm({})
    
//     const profileItems = [
//       {
//         label: 'Profile',
//         icon: 'pi pi-user',
//         command: () => {
//           // Navigate to profile page
//         }
//       },
//       {
//         label: 'Settings',
//         icon: 'pi pi-cog',
//         command: () => {
//           // Navigate to settings page
//         }
//       },
//       {
//         separator: true
//       },
//       {
//         label: 'Logout',
//         icon: 'pi pi-sign-out',
//         command: () => {
//           form.post(route('auth.logout'))
//         }
//       }
//     ]
    
//     const toggleProfileMenu = (event) => {
//       profileMenu.value.toggle(event)
//     }
    
//     const toggleNotificationsMenu = () => {
//       // Implementation for notifications menu
//     }
    
//     return {
//       profileMenu,
//       profileItems,
//       search,
//       toggleProfileMenu,
//       toggleNotificationsMenu
//     }
//   }
// })
</script>
<template>
  <div class="surface-0 flex justify-content-between align-items-center px-4 py-3 shadow-2 relative lg:static border-bottom-1 surface-border">
    <div class="flex">
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <!-- <InputText v-model="search" placeholder="Search" class="w-9rem sm:w-15rem" /> -->
      </span>
    </div>
    
    <div class="flex">
      <!-- <span class="p-overlay-badge mx-3">
        <i class="pi pi-bell text-2xl cursor-pointer" @click="toggleNotificationsMenu"></i>
        <Badge value="2" severity="danger"></Badge>
      </span> -->
      
      <!-- <Button
        icon="pi pi-user"
        class="p-button-rounded p-button-text p-button-plain"
        aria-haspopup="true"
        aria-controls="profile-menu"
        @click="toggleProfileMenu"
      />
      <Menu id="profile-menu" ref="profileMenu" :model="profileItems" :popup="true" /> -->
    </div>
  </div>
</template>

