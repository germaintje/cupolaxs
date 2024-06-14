<template>
  <Header/>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed for business
          teams like yours</h2>
        <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Here at Cupolaxs we focus on bringing
          company's together in a good work environment.</p>
      </div>
      <h4 v-if="availableCells.length == 0">No cells found</h4>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Start date:
        <VueDatePicker
            v-model="startBookingDate"
            :format="formatDate"
            :enable-time-picker="false"
            :max-date="maxDate"
            :min-date="minDate"
        ></VueDatePicker>
      </p>
      <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">

        <!-- Pricing Card -->
        <div v-for="cell in availableCells"
             :key="cell.id"
             class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-green-100 shadow dark:border-green-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <h3 class="mb-4 text-2xl font-semibold">Room {{ cell.id }}</h3>
          <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for your next
            project.</p>
          <div class="flex justify-center items-baseline my-8">
            <span class="mr-2 text-5xl font-extrabold">${{ cell.price }}</span>
            <span class="text-gray-500 dark:text-gray-400">/month</span>
          </div>
          <!-- List -->
          <ul role="list" class="mb-8 space-y-4 text-left">
            <li class="flex items-center space-x-3">
              <!-- Icon -->
              <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"></path>
              </svg>
              <span>Individual configuration</span>
            </li>
            <li class="flex items-center space-x-3">
              <!-- Icon -->
              <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"></path>
              </svg>
              <span>No setup, or hidden fees</span>
            </li>
            <li class="flex items-center space-x-3">
              <!-- Icon -->
              <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"></path>
              </svg>
              <span>Team size: <span class="font-semibold">whatever fits in the room</span></span>
            </li>
          </ul>
          <button
              type="button"
              @click="bookCell(cell.id)"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Book
          </button>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import {AuthClient} from '@dfinity/auth-client';
import {cupolaxs_blockchain_backend as backend} from 'declarations/cupolaxs_blockchain_backend';
import Header from '@/components/Header.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
  components: {
    Header,
    VueDatePicker,
  },
  data() {
    return {
      availableCells: [],
      userId: null,
      startBookingDate: new Date(),
    };
  },
  computed: {
    maxDate() {
      const datePlusMonth = new Date();
      datePlusMonth.setMonth(datePlusMonth.getMonth() + 1);
      return datePlusMonth.toISOString().substr(0, 10);
    },
    minDate() {
      const currentDate = new Date();
      return currentDate.toISOString().substr(0, 10);
    },
  },
  methods: {
    async fetchRooms() {
      const allCells = await backend.listCells();
      this.availableCells = allCells.filter((cell) => !cell.isBooked);
    },
    async bookCell(cellId) {
      const authClient = await AuthClient.create();

      if (!(await authClient.isAuthenticated())) {
        this.userId = null; // Ensure userId reflects the current auth state
        alert('Please log in first.');
        return;
      }

      // Validate that correct date is chosen
      if (this.startBookingDate == null) {
        alert('Choose a correct start and end date');
        return;
      }

      const startBookingDateString = this.formatDate(this.startBookingDate); // Format date to send to backend

      try {
        const identity = authClient.getIdentity();
        const userPrincipal = identity.getPrincipal(); // Fetch the current user principal

        // Call the backend function with the principal as a string and the cell ID
        const success = await backend.bookCell(userPrincipal, cellId, startBookingDateString);

        if (success) {
          alert(`Cell ${cellId} booked successfully.`);
          await this.fetchRooms(); // Refresh the list of cells
        } else {
          alert('Failed to book cell. It might already be booked.');
        }
      } catch (error) {
        console.error('Booking error:', error);
        alert('An error occurred while trying to book the cell.');
      }
    },
    formatDate(date) {
      if (date == null) {
        return;
      }

      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return `${day}/${month}/${year}`;
    },
  },
  async mounted() {
    const authClient = await AuthClient.create();
    if (await authClient.isAuthenticated()) {
      const identity = authClient.getIdentity();
      this.userId = identity.getPrincipal(); // Capture and store the authenticated user's principal
    }
    await this.fetchRooms(); // Fetch the list of cells
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
