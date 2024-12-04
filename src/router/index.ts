import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import JobListings from "@/components/JobListings.vue";
import NotFound from "@/components/NotFound.vue";
import JobView from "@/views/JobView.vue";
import AddJobView from "@/views/AddJobView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/jobs", name: "jobs", component: JobListings },
    { path: "/jobs/:id", name: "job", component: JobView },
    { path: "/jobs/add", name: "job", component: AddJobView },
    { path: "/:catchAll(.*)", name: "not-found", component: NotFound },
  ],
});

export default router;
