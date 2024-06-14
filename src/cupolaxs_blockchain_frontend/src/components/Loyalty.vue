<template>
  <Header/>


  <section class="bg-white dark:bg-gray-900">
    <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
      <img class="w-full dark:hidden" src="../assets/Present-box-BC.png" alt="dashboard image">
      <img class="w-full hidden dark:block"
           src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
           alt="dashboard image">
      <div class="mt-4 md:mt-0">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Welcome to the loyalty
          page!</h2>
        <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Below we will explain how our loyalty
          program works and how you accumulate rewards as time goes on!</p>
      </div>
    </div>
  </section>


  <div class="mx-auto max-w-3xl px-4 pb-16 2xl:px-0 mt-5">
    <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-2">Your saved loyalty:</h2>
    <div
        class="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800 mb-6 md:mb-8">
      <dl class="sm:flex items-center justify-between gap-4">
        <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Your points</dt>
        <dd class="font-medium text-gray-900 dark:text-white sm:text-end">{{ availableLoyaltyPoints }}</dd>
      </dl>

    </div>
  </div>

  <div class="text-3xl font-medium mb-10 text-white container m-auto">Timeline of your loyalty bonus:
    <ol class="relative border-s border-gray-200 dark:border-gray-700 m-5">
      <li class="mb-10 ms-6">
        <span
            class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img src="../assets/coffeeCorrect-bc.png" alt="Coffee" class="w-5 h-5 rounded-full">
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">10 points per week</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">1 year</time>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">When you stay with us for 1 year you will
          accumulate 10 points every week! This is enough to get you a free coffee every day.</p>
      </li>
      <li class="mb-10 ms-6">
        <span
            class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img src="../assets/sandwich-bc.png" alt="Coffee" class="w-5 h-5 rounded-full">
        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">15 points per week</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2 years</time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">When you stay with us for 2 years you will
          accumulate 15 points every week! This is enough to get you a sandwhich and 2 coffee's a week!</p>
      </li>
      <li class="mb-10 ms-6">
        <span
            class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img src="../assets/Cake-bc.jpeg" alt="Coffee" class="w-5 h-5 rounded-full">
        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">22 points per week</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">3 years</time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">When you stay with us for 3 years you will
          accumulate 22 points every week! This is enough to get you a sandwhich, piece of cake and a coffee every
          week!</p>
      </li>
      <li class="mb-10 ms-6">
        <span
            class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img src="../assets/sandwiches-bc.png" alt="Coffee" class="w-5 h-5 rounded-full">
        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">31 points per week</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">4 years</time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">When you stay with us for 4 years you will
          accumulate 31 points every week! This is enough to get you 3 sandwhiches every week!</p>
      </li>
      <li class="mb-10 ms-6">
        <span
            class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img src="../assets/Sandwich-coffee-bc.jpg" alt="Coffee" class="w-5 h-5 rounded-full">
        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">43 points per week</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">5 years</time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">When you stay with us for 5 years you will
          accumulate 43 points every week! This is enough to get you a 3 sandwhiches and 5 coffee's every week!</p>
      </li>
      <li class="ms-6">
        <span
            class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img src="../assets/movie-bc.jpeg" alt="Coffee" class="w-5 h-5 rounded-full">
        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">70 points per week</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">7 years</time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">When you stay with us for 7 years you will
          accumulate 70 points every week! This means that in 4 weeks time you can go to the movie for free!</p>
      </li>
    </ol>
  </div>

</template>

<script>
import {AuthClient} from '@dfinity/auth-client';
import {cupolaxs_blockchain_backend as backend} from 'declarations/cupolaxs_blockchain_backend';
import Header from "@/components/Header.vue";

export default {
  components: {Header},
  data() {
    return {
      cells: [],
      principal: null,
      myReservations: [],
      availableLoyaltyPoints: 0,
      allAcounts: [],
      currentAccount: null,
      identity: null
    }
  },

  async mounted() {
    await this.fetchPrincipal();
    await this.fetchRooms();
    await this.fetchAccount();
    await this.recalculateLoyaltyPoints();
    this.getLoyaltyPoints;
    console.log("Mounted is klaar")
  },

  methods: {
    async fetchPrincipal() {
      try {
        const authClient = await AuthClient.create();
        const identity = authClient.getIdentity().getPrincipal();
        this.identity = identity;
        this.principal = identity.toUint8Array().toString();
        console.log("Fetch principle gaat goed")
      } catch (error) {
        console.error('Error fetching principal:', error);
      }
    },

    async fetchRooms() {
      try {
        const allCells = await backend.listCells();
        this.myReservations = allCells.filter(cell => {
          return cell.bookedBy && cell.bookedBy[0] && cell.bookedBy[0]._arr.toString() === this.principal;
        });

        this.cells = allCells;  // Keep the full list of cells if needed for other purposes
        console.log("Fetch rooms gaat goed")
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    },

    async fetchAccount() {
      try {
        // this.allAcounts = await backend.getUserData(); //calls function to retrieve all accounts
        // this.currentAccount = this.allAcounts.filter((account) => account.userPrincipal && account.userPrincipal[0] &&account.userPrincipal[0]._arr.toString() === this.principal);
        const accountData = await backend.getUserData(this.identity);

        this.currentAccount = {
          firstName: accountData[0].firstName,
          lastName: accountData[0].lastName,
          company: accountData[0].company,
          email: accountData[0].email,
          description: accountData[0].description,
          availableLoyaltyPoints: accountData[0].availableLoyaltyPoints,
          lastUpdateDate: accountData[0].lastUpdateDate,
          startLoyaltyDate: accountData[0].startLoyaltyDate
        }
        console.log("Fetch account gaat goed " + this.currentAccount.LastUpdateDate);
      } catch (error) {
        console.error('Error fetching accounts:', error);
        this.$router.push({path: '/account'});
      }
    },

    async recalculateLoyaltyPoints() {
      let today = new Date().toISOString();

      // Calculate how many weeks have passed since points have been updated
      const differenceInWeeks = this.calculateDifferenceInWeeks(new Date(this.currentAccount.lastUpdateDate));
      console.log("differenceInWeeks: " + differenceInWeeks);

      // Check if new loyalty points should be awarded
      if (differenceInWeeks === 0) {
        // update the currentAccount.lastUpdateDate to today
        await backend.setUserData(this.identity, this.currentAccount.firstName, this.currentAccount.lastName,
            this.currentAccount.company, this.currentAccount.email, this.currentAccount.description, this.currentAccount.availableLoyaltyPoints,
            today, this.currentAccount.startLoyaltyDate);

        //Update this.currentAccount.lastUpdateDate to today
        this.currentAccount.lastUpdateDate = today;
        return
      }

      // Check how many years loyal
      const amountOfYearsLoyal = this.calculateDifferenceInYears(new Date(this.currentAccount.startLoyaltyDate));
      console.log("amountOfYearsLoyal: " + amountOfYearsLoyal);

      // Give loyalty points according to years of loyalty
      switch (amountOfYearsLoyal) {
        case 0:
          // 0 points shall be given
          break;
        case 1:
          // 1 year loyal = 10 points a week
          await this.addCorrectAmountOfLoyaltyPoints(10, differenceInWeeks);
          break;
        case 2:
          // 2 years loyal = 15 points a week
          await this.addCorrectAmountOfLoyaltyPoints(15, differenceInWeeks);
          break;
        case 3:
          // 3 years loyal = 22 points a week
          await this.addCorrectAmountOfLoyaltyPoints(22, differenceInWeeks);
          break;
        case 4:
          // 4 years loyal = 31 points a week
          await this.addCorrectAmountOfLoyaltyPoints(31, differenceInWeeks);
          break;
        case 5:
          // 5 years loyal = 43 points a week
          await this.addCorrectAmountOfLoyaltyPoints(43, differenceInWeeks);
          break;
        case 6:
          // 6 years loyal = 43 points a week
          await this.addCorrectAmountOfLoyaltyPoints(43, differenceInWeeks);
          break;
        case 7:
          // 7 years loyal = 70 points a week
          await this.addCorrectAmountOfLoyaltyPoints(70, differenceInWeeks);
          break;
        default:
          // Every year above 7 years is 70 points a week
          await this.addCorrectAmountOfLoyaltyPoints(70, differenceInWeeks);
          break;
      }

      // update the currentAccount.lastUpdateDate to today
      await backend.setUserData(this.identity, this.currentAccount.firstName, this.currentAccount.lastName,
          this.currentAccount.company, this.currentAccount.email, this.currentAccount.description, this.currentAccount.availableLoyaltyPoints,
          today, this.currentAccount.startLoyaltyDate);

      this.currentAccount.lastUpdateDate = today;
      console.log("recalculate gaat goed")
    },

    calculateDifferenceInWeeks(lastDate) {
      // Get the current date
      const currentDate = new Date();

      // Adjust the last update date to the beginning of the week (Monday)
      const startOfWeek = new Date(lastDate);
      startOfWeek.setDate(startOfWeek.getDate() - (startOfWeek.getDay() + 6) % 7);

      // Adjust the current date to the beginning of the week (Monday)
      const currentWeek = new Date(currentDate);
      currentWeek.setDate(currentWeek.getDate() - (currentWeek.getDay() + 6) % 7);

      // Calculate the difference in weeks
      const weeksDifference = (currentWeek - startOfWeek) / (1000 * 60 * 60 * 24 * 7);

      // Round down to get the number of full weeks
      const fullWeeks = Math.floor(weeksDifference);

      return fullWeeks;
    },

    calculateDifferenceInYears(startDate) {
      // First get the time in miliseconds from each of the dates
      const startCountingLoyaltyDate = startDate.getTime();
      const currentTimeMS = new Date().getTime();

      // Calculate the difference between the two times in milliseconds
      const differenceInMilliseconds = currentTimeMS - startCountingLoyaltyDate;

      // Amount of milliseconds is a year
      const millisecondsInYear = 1000 * 60 * 60 * 8766; // One year is 8766 hours

      // Calculate amount of years from milliseconds and return
      return Math.floor(differenceInMilliseconds / millisecondsInYear);
    },

    async addCorrectAmountOfLoyaltyPoints(pointsPerWeek, differenceInWeeks) {
      // Calculate how many points should be awarded
      const amountOfPointsAdded = differenceInWeeks * pointsPerWeek;

      // Calculate new amount of points
      const newAmountAvailableLoyaltyPoints = Number(this.currentAccount.availableLoyaltyPoints) + amountOfPointsAdded;

      //update amount of available points to newAmountAvailableLoyaltyPoints
      await backend.setUserData(this.identity, this.currentAccount.firstName, this.currentAccount.lastName,
          this.currentAccount.company, this.currentAccount.email, this.currentAccount.description, newAmountAvailableLoyaltyPoints,
          this.currentAccount.lastUpdateDate, this.currentAccount.startLoyaltyDate);

      // update the this.currentAccount.availableLoyaltypoints
      this.currentAccount.availableLoyaltyPoints = newAmountAvailableLoyaltyPoints;
    },

    dateMinusYearMonthString(year, month) {
      // Get the current date
      const currentDate = new Date();

      // Subtract amount of years and months from the current date
      const pastDate = new Date(currentDate);
      pastDate.setFullYear(pastDate.getFullYear() - year);
      pastDate.setMonth(pastDate.getMonth() - month);

      return pastDate.toISOString();
    }
  },
  computed: {
    getLoyaltyPoints() {
      // Set available loyalty points to correct number
      this.availableLoyaltyPoints = this.currentAccount.availableLoyaltyPoints;
      console.log("this.availableLoyaltyPoints is geupdate")
    }
  }
}
</script>