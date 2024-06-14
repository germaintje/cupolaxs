<template>
  <Header/>

  <section>
    <div class="container m-auto">
      <h1 class="pt-4 px-4 text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">Profile</h1>

      <div class="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4">

        <div class="col-span-full xl:col-auto">
          <div class="p-4 mb-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 dark:bg-gray-800">
            <div class="sm:flex xl:block sm:space-x-4 xl:space-x-0">
              <img class="mb-2 w-20 h-20 rounded-lg" src="http://localhost:1313/images/users/jese-leos-2x.png"
                   alt="Jese portrait">
              <div>
                <h2 class="text-xl font-bold dark:text-white">Hello {{ this.userInfo.FirstName }}
                  {{ this.userInfo.LastName }}</h2>
                <ul class="mt-2 space-y-1">
                  <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                    <svg class="mr-2 w-4 h-4 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                      <path
                          d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                    </svg>
                    Front-end Developer
                  </li>
                  <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                    <svg class="mr-2 w-4 h-4 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"></path>
                    </svg>
                    San Francisco, USA
                  </li>
                </ul>
              </div>
            </div>
            <div class="sm:flex xl:block xl:space-y-4">
              <div class="sm:flex-1">
                <address class="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
                  <div class="mt-4">
                    Email address
                  </div>
                  <a class="text-sm font-medium text-gray-900 dark:text-white"
                     href="mailto:webmaster@test.com">{{ this.userInfo.Email }}</a>
                  <div class="mt-4">
                    Wallet id
                  </div>
                  <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {{ this.userId }}
                  </div>
                  <div class="mt-4">
                    Phone number
                  </div>
                  <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    +00 123 456 789 / +12 345 678
                  </div>
                </address>
              </div>
              <div class="hidden sm:flex-1">
                <h3 class="mb-2 text-base font-bold text-gray-900 dark:text-white">About</h3>
                <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Dedicated, passionate, and accomplished Full Stack Developer with 9+ years of progressive experience
                  working as an Independent Contractor for Google and developing and growing my educational social
                  network
                  that helps others learn programming, web design, game development, networking.
                </p>
              </div>
            </div>
            <button type="button" id="defaultModalButton" data-modal-target="defaultModal"
                    data-modal-toggle="defaultModal"
                    class="inline-flex focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
              Update info
              <svg class="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>

        </div>
        <div class="col-span-2">
          <div class="p-4 mb-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 dark:bg-gray-800">
            <h3 class="mb-4 text-xl font-bold dark:text-white">General information</h3>
            <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div class="sm:col-span-2">
                <dt class="text-lg font-medium text-gray-900 dark:text-white">About me</dt>
                <dd class="mt-1 space-y-3 max-w-prose text-sm text-gray-500 dark:text-gray-400">
                  <p>{{ this.userInfo.Description }}</p>
                </dd>
              </div>
              <div>
                <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Education</dt>
                <dd class="text-sm font-semibold text-gray-900 dark:text-white">Thomas Jeff High School, Stanford
                  University
                </dd>
              </div>
              <div>
                <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Currently working at</dt>
                <dd class="text-sm font-semibold text-gray-900 dark:text-white">{{ this.userInfo.Company }}</dd>
              </div>
              <div>
                <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Join Date</dt>
                <dd class="text-sm font-semibold text-gray-900 dark:text-white">12-09-2021</dd>
              </div>
              <div>
                <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Languages</dt>
                <dd class="text-sm font-semibold text-gray-900 dark:text-white">English, German, Italian, Spanish</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--  <section class="bg-white dark:bg-gray-900">-->
  <!--    <div class="py-6 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">-->
  <!--      <div class="pb-5">-->
  <!--        <h1 class="text-5xl font-medium mb-4 dark:text-white text-center">Account</h1>-->
  <!--      </div>-->
  <!--      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">-->
  <!--        <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Hello <span-->
  <!--            class="font-extrabold">{{ this.userInfo.FirstName }} {{ this.userInfo.LastName }}</span></h2>-->
  <!--        <p class="mb-4 font-medium">{{ this.userInfo.Description }}</p>-->
  <!--        <p class="mb-4 font-medium">Currently working at <span class="font-extrabold">{{ this.userInfo.Company }}</span>-->
  <!--        </p>-->
  <!--        <p class="mb-4 font-medium border-b pb-4"><span class="font-extrabold">{{ this.userInfo.Email }}</span></p>-->

  <!--        <button type="button" id="defaultModalButton" data-modal-target="defaultModal" data-modal-toggle="defaultModal"-->
  <!--                class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">-->
  <!--          Update info-->
  <!--          <svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">-->
  <!--            <path fill-rule="evenodd"-->
  <!--                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"-->
  <!--                  clip-rule="evenodd"></path>-->
  <!--          </svg>-->
  <!--        </button>-->
  <!--        <button type="button" id="defaultModalButton" data-modal-target="defaultModal" data-modal-toggle="defaultModal"-->
  <!--                class="inline-flex focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">-->
  <!--          Update info-->
  <!--          <svg class="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">-->
  <!--            <path fill-rule="evenodd"-->
  <!--                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"-->
  <!--                  clip-rule="evenodd"></path>-->
  <!--          </svg>-->
  <!--        </button>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </section>-->

  <!-- Main modal -->
  <div id="defaultModal" tabindex="-1" aria-hidden="true"
       class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
      <!-- Modal content -->
      <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
        <!-- Modal header -->
        <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Update Information
          </h3>
          <button @click="resetSuccessMessage" type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="defaultModal">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <form @submit.prevent="setUserInfo">
          <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <a href="#" class="sm:col-span-2">
              <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="../assets/cupola.png"
                   alt="Profile picture">
            </a>
            <div>
              <label for="firstname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
                name</label>
              <input type="text" name="firstname" id="firstname"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                     placeholder="John" required=""
                     v-model="userInfo.FirstName">
            </div>
            <div>
              <label for="lastname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
                name</label>
              <input type="text" name="lastname" id="lastname"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                     placeholder="Doe" required=""
                     v-model="userInfo.LastName">
            </div>
            <div>
              <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
              <input type="text" name="company" id="company"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                     placeholder="Google" required=""
                     v-model="userInfo.Company">
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input type="text" name="email" id="email"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                     placeholder="John.doe@gmail.com" required=""
                     v-model="userInfo.Email">
            </div>
            <div class="sm:col-span-2">
              <label for="description"
                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
              <textarea v-model="userInfo.Description" id="description" rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Write a fun description here"></textarea>
            </div>
            <p v-if="successMessage" class="text-green-400 font-medium text-sm mb-2">Your information is successfully
              updated!</p>
          </div>
          <button type="submit"
                  class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm pe-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clip-rule="evenodd"></path>
            </svg>
            Confirm changes
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import {AuthClient} from '@dfinity/auth-client';
import {cupolaxs_blockchain_backend as backend} from 'declarations/cupolaxs_blockchain_backend';
import {ref} from "vue";

const userId = ref(null);

export default {
  components: {
    Header,
  },
  data() {
    return {
      successMessage: false,
      userInfo: {
        FirstName: "",
        LastName: "",
        Company: "",
        Email: "",
        Description: "",
        AvailableLoyaltyPoints: 0,
        LastUpdateDate: "",
        StartLoyaltyDate: "",
        userId: "",
      },
    }
  },
  methods: {
    async getIdentity() {
      const authClient = await AuthClient.create();
      if (await authClient.isAuthenticated()) {
        return authClient.getIdentity().getPrincipal();
      }
    },
    resetSuccessMessage() {
      this.successMessage = false;
    },
    async setUserInfo() {
      try {
        console.log("start date: " + this.userInfo.StartLoyaltyDate);
        await backend.setUserData(await this.getIdentity(), this.userInfo.FirstName, this.userInfo.LastName,
            this.userInfo.Company, this.userInfo.Email, this.userInfo.Description, this.userInfo.AvailableLoyaltyPoints, this.userInfo.LastUpdateDate, this.userInfo.StartLoyaltyDate);
        this.successMessage = true;
      } catch (e) {
        console.log(e);
      }
    },
    dateMinusYearMonthString(year, month) {
      // Get the current date
      const currentDate = new Date();

      // Subtract amount of years and months from the current date
      const pastDate = new Date(currentDate);
      pastDate.setFullYear(pastDate.getFullYear() - year);
      pastDate.setMonth(pastDate.getMonth() - month);

      return pastDate.toISOString();
    },
    async getUserInfo() {
      const authClient = await AuthClient.create();
      const identity = authClient.getIdentity();
      this.userId = identity.getPrincipal().toString();

      const data = await backend.getUserData(await this.getIdentity());
      this.userInfo.FirstName = data[0].firstName;
      this.userInfo.LastName = data[0].lastName;
      this.userInfo.Company = data[0].company;
      this.userInfo.Email = data[0].email;
      this.userInfo.Description = data[0].description;

      console.log("date: " + data[0].startLoyaltyDate);
      console.log("data: " + data[0]);

      if (data[0].startLoyaltyDate !== "") {
        console.log("1");
        this.userInfo.AvailableLoyaltyPoints = data[0].availableLoyaltyPoints;
        console.log(data[0].availableLoyaltyPoints + " points");
        this.userInfo.LastUpdateDate = data[0].lastUpdateDate;
        this.userInfo.StartLoyaltyDate = data[0].startLoyaltyDate;
        console.log(data[0].startLoyaltyDate);
      } else {
        console.log("2");
        this.userInfo.AvailableLoyaltyPoints = 0;
        console.log(this.userInfo.AvailableLoyaltyPoints + " points");
        // TODO change voor presentatie
        this.userInfo.LastUpdateDate = this.dateMinusYearMonthString(1, 3);
        this.userInfo.StartLoyaltyDate = this.dateMinusYearMonthString(1, 3);
        console.log(this.userInfo.StartLoyaltyDate + " start date");
      }
    },
  },
  mounted() {
    this.getUserInfo();
  },
  beforeRouteEnter(to, from, next) {
    // Check if the page has been refreshed
    if (!to.query.refreshed) {
      // If not, refresh the page and add a query parameter
      window.location.href = `${to.fullPath}?refreshed=true`;
    } else {
      // If the page has been refreshed, proceed with the navigation
      next();
    }
  },
};

</script>