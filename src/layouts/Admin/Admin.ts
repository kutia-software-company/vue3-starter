import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Options, Vue } from 'vue-class-component';
import SidebarComponent from '@/components/Sidebar/index.vue';
import NavbarComponent from '@/components/Navbar/index.vue';

@Options({
    components: {
        SidebarComponent,
        NavbarComponent,
    },
})
export default class Admin extends Vue {}
