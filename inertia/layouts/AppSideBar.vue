<script setup lang="ts">
import { defineComponent, computed } from 'vue'
import { usePage } from '@inertiajs/vue3'
import Menu from 'primevue/menu'

// defineOptions({
//   components: {
//     Menu
//   },
//   setup() {
//     const page = usePage()
    
//     const user = computed(() => page.props.value.auth?.user)
//     const isAdmin = computed(() => user.value?.role === 'admin')
    
//     const menuItems = computed(() => {
//       const items = [
//         {
//           label: 'Dashboard',
//           icon: 'pi pi-home',
//           to: route('domains.index')
//         },
//         {
//           label: 'Domains',
//           icon: 'pi pi-globe',
//           items: [
//             {
//               label: 'All Domains',
//               icon: 'pi pi-list',
//               to: route('domains.index')
//             },
//             {
//               label: 'Add Domain',
//               icon: 'pi pi-plus',
//               to: route('domains.create')
//             },
//             {
//               label: 'Active Domains',
//               icon: 'pi pi-check-circle',
//               to: route('domains.index', { filter: 'active' })
//             },
//             {
//               label: 'Expiring (7 days)',
//               icon: 'pi pi-clock',
//               to: route('domains.index', { filter: 'expiry7' })
//             },
//             {
//               label: 'Expiring (30 days)',
//               icon: 'pi pi-calendar',
//               to: route('domains.index', { filter: 'expiry30' })
//             },
//             {
//               label: 'Expired',
//               icon: 'pi pi-times-circle',
//               to: route('domains.index', { filter: 'expired' })
//             },
//             {
//               label: 'In Redemption',
//               icon: 'pi pi-exclamation-circle',
//               to: route('domains.index', { filter: 'redemption' })
//             }
//           ]
//         }
//       ]
      
//       if (isAdmin.value) {
//         items.push({
//           label: 'User Management',
//           icon: 'pi pi-users',
//           items: [
//             {
//               label: 'View Users',
//               icon: 'pi pi-list',
//               to: route('users.index')
//             },
//             {
//               label: 'Add User',
//               icon: 'pi pi-user-plus',
//               to: route('users.create')
//             }
//           ]
//         })
//       }
      
//       return items
//     })
    
//     return {
//       menuItems
//     }
//   }
// })
</script>
<template>
  <div class="surface-card shadow-2 h-screen md:w-18rem md:h-auto">
    <div class="flex align-items-center justify-content-center p-4 border-bottom-1 surface-border">
      <span class="text-xl font-medium">Domain Manager</span>
    </div>
    <div class="p-3">
      <!-- <Menu :model="menuItems" class="w-full border-none" /> -->
    </div>
  </div>
</template>

